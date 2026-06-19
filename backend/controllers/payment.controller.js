import crypto from "crypto";
import Coupon from "../models/coupon.model.js";
import Order from "../models/order.model.js";
import { razorpay } from "../lib/razorpay.js";

export const createCheckoutSession = async (req, res) => {
	try {
		const { products, couponCode } = req.body;

		if (!Array.isArray(products) || products.length === 0) {
			return res.status(400).json({
				error: "Invalid or empty products array",
			});
		}

		let totalAmount = 0;

		products.forEach((product) => {
			totalAmount += product.price * (product.quantity || 1);
		});

		let coupon = null;

		if (couponCode) {
			coupon = await Coupon.findOne({
				code: couponCode,
				userId: req.user._id,
				isActive: true,
			});

			if (coupon) {
				totalAmount -= Math.round(
					(totalAmount * coupon.discountPercentage) / 100
				);
			}
		}

		const razorpayOrder = await razorpay.orders.create({
			amount: Math.round(totalAmount * 100), // INR → paise (must be integer)
			currency: "INR",
			receipt: `receipt_${Date.now()}`,
			notes: {
				userId: req.user._id.toString(),
				couponCode: couponCode || "",
				products: JSON.stringify(
					products.map((p) => ({
						id: p._id,
						quantity: p.quantity,
						price: p.price,
					}))
				),
			},
		});

		if (totalAmount >= 20000) {
			await createNewCoupon(req.user._id);
		}

		res.status(200).json({
			success: true,
			orderId: razorpayOrder.id,
			amount: razorpayOrder.amount,
			currency: razorpayOrder.currency,
			key: process.env.RAZORPAY_KEY_ID,
		});
	} catch (error) {
		console.error("Error creating Razorpay order:", error);

		res.status(500).json({
			message: "Error creating Razorpay order",
			error: error.message,
		});
	}
};

export const checkoutSuccess = async (req, res) => {
	try {
		const {
			razorpay_order_id,
			razorpay_payment_id,
			razorpay_signature,
			products,
			couponCode,
		} = req.body;

		const generatedSignature = crypto
			.createHmac("sha256", process.env.RAZORPAY_KEY_SECRET)
			.update(`${razorpay_order_id}|${razorpay_payment_id}`)
			.digest("hex");

		if (generatedSignature !== razorpay_signature) {
			return res.status(400).json({
				success: false,
				message: "Invalid payment signature",
			});
		}

		let payment = await razorpay.payments.fetch(razorpay_payment_id);

		if (payment.status === "authorized") {
			payment = await razorpay.payments.capture(
				razorpay_payment_id,
				payment.amount,
				payment.currency
			);
		}

		if (payment.status !== "captured") {
			return res.status(400).json({
				success: false,
				message: "Payment not captured",
			});
		}

		if (couponCode) {
			await Coupon.findOneAndUpdate(
				{
					code: couponCode,
					userId: req.user._id,
				},
				{
					isActive: false,
				}
			);
		}

		const newOrder = new Order({
			user: req.user._id,
			products: products.map((product) => ({
				product: product._id || product.id,
				quantity: product.quantity,
				price: product.price,
			})),
			totalAmount: payment.amount / 100,
			razorpayOrderId: razorpay_order_id,
			razorpayPaymentId: razorpay_payment_id,
		});

		await newOrder.save();

		res.status(200).json({
			success: true,
			message: "Payment successful and order created",
			orderId: newOrder._id,
		});
	} catch (error) {
		console.error("Error processing successful checkout:", error);

		res.status(500).json({
			message: "Error processing successful checkout",
			error: error.message,
		});
	}
};

async function createNewCoupon(userId) {
	await Coupon.findOneAndDelete({ userId });

	const newCoupon = new Coupon({
		code:
			"GIFT" +
			Math.random().toString(36).substring(2, 8).toUpperCase(),
		discountPercentage: 10,
		expirationDate: new Date(
			Date.now() + 30 * 24 * 60 * 60 * 1000
		),
		userId,
	});

	await newCoupon.save();

	return newCoupon;
}