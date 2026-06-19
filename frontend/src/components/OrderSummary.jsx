// import { motion } from "framer-motion";
// import { useCartStore } from "../stores/useCartStore";
// import { Link } from "react-router-dom";
// import { MoveRight } from "lucide-react";
// import { loadStripe } from "@stripe/stripe-js";
// import axios from "../lib/axios";

// const stripePromise = loadStripe(
// 	"pk_test_51KZYccCoOZF2UhtOwdXQl3vcizup20zqKqT9hVUIsVzsdBrhqbUI2fE0ZdEVLdZfeHjeyFXtqaNsyCJCmZWnjNZa00PzMAjlcL"
// );

// const OrderSummary = () => {
// 	const { total, subtotal, coupon, isCouponApplied, cart } = useCartStore();

// 	const savings = subtotal - total;
// 	const formattedSubtotal = subtotal.toFixed(2);
// 	const formattedTotal = total.toFixed(2);
// 	const formattedSavings = savings.toFixed(2);

// 	const handlePayment = async () => {
// 		const stripe = await stripePromise;
// 		const res = await axios.post("/payments/create-checkout-session", {
// 			products: cart,
// 			couponCode: coupon ? coupon.code : null,
// 		});

// 		const session = res.data;
// 		const result = await stripe.redirectToCheckout({
// 			sessionId: session.id,
// 		});

// 		if (result.error) {
// 			console.error("Error:", result.error);
// 		}
// 	};

// 	return (
// 		<motion.div
// 			className='space-y-4 rounded-lg border border-gray-700 bg-gray-800 p-4 shadow-sm sm:p-6'
// 			initial={{ opacity: 0, y: 20 }}
// 			animate={{ opacity: 1, y: 0 }}
// 			transition={{ duration: 0.5 }}
// 		>
// 			<p className='text-xl font-semibold text-emerald-400'>Order summary</p>

// 			<div className='space-y-4'>
// 				<div className='space-y-2'>
// 					<dl className='flex items-center justify-between gap-4'>
// 						<dt className='text-base font-normal text-gray-300'>Original price</dt>
// 						<dd className='text-base font-medium text-white'>${formattedSubtotal}</dd>
// 					</dl>

// 					{savings > 0 && (
// 						<dl className='flex items-center justify-between gap-4'>
// 							<dt className='text-base font-normal text-gray-300'>Savings</dt>
// 							<dd className='text-base font-medium text-emerald-400'>-${formattedSavings}</dd>
// 						</dl>
// 					)}

// 					{coupon && isCouponApplied && (
// 						<dl className='flex items-center justify-between gap-4'>
// 							<dt className='text-base font-normal text-gray-300'>Coupon ({coupon.code})</dt>
// 							<dd className='text-base font-medium text-emerald-400'>-{coupon.discountPercentage}%</dd>
// 						</dl>
// 					)}
// 					<dl className='flex items-center justify-between gap-4 border-t border-gray-600 pt-2'>
// 						<dt className='text-base font-bold text-white'>Total</dt>
// 						<dd className='text-base font-bold text-emerald-400'>${formattedTotal}</dd>
// 					</dl>
// 				</div>

// 				<motion.button
// 					className='flex w-full items-center justify-center rounded-lg bg-emerald-600 px-5 py-2.5 text-sm font-medium text-white hover:bg-emerald-700 focus:outline-none focus:ring-4 focus:ring-emerald-300'
// 					whileHover={{ scale: 1.05 }}
// 					whileTap={{ scale: 0.95 }}
// 					onClick={handlePayment}
// 				>
// 					Proceed to Checkout
// 				</motion.button>

// 				<div className='flex items-center justify-center gap-2'>
// 					<span className='text-sm font-normal text-gray-400'>or</span>
// 					<Link
// 						to='/'
// 						className='inline-flex items-center gap-2 text-sm font-medium text-emerald-400 underline hover:text-emerald-300 hover:no-underline'
// 					>
// 						Continue Shopping
// 						<MoveRight size={16} />
// 					</Link>
// 				</div>
// 			</div>
// 		</motion.div>
// 	);
// };
// export default OrderSummary;


// import { motion } from "framer-motion";
// import { useCartStore } from "../stores/useCartStore";
// import { Link } from "react-router-dom";
// import { MoveRight } from "lucide-react";
// import axios from "../lib/axios";

// const loadRazorpayScript = () => {
// 	return new Promise((resolve) => {
// 		const script = document.createElement("script");
// 		script.src = "https://checkout.razorpay.com/v1/checkout.js";

// 		script.onload = () => resolve(true);
// 		script.onerror = () => resolve(false);

// 		document.body.appendChild(script);
// 	});
// };

// const OrderSummary = () => {
// 	const { total, subtotal, coupon, isCouponApplied, cart } =
// 		useCartStore();

// 	const savings = subtotal - total;
// 	const formattedSubtotal = subtotal.toFixed(2);
// 	const formattedTotal = total.toFixed(2);
// 	const formattedSavings = savings.toFixed(2);

// 	const handlePayment = async () => {
// 		try {
// 			const scriptLoaded = await loadRazorpayScript();

// 			if (!scriptLoaded) {
// 				alert("Failed to load Razorpay");
// 				return;
// 			}

// 			const { data } = await axios.post(
// 				"/payments/create-checkout-session",
// 				{
// 					products: cart,
// 					couponCode: coupon ? coupon.code : null,
// 				}
// 			);

// 			const options = {
// 				key: data.key,
// 				amount: data.amount,
// 				currency: data.currency,
// 				name: "Your Store",
// 				description: "Order Payment",
// 				order_id: data.orderId,

// 				handler: async function (response) {
// 					try {
// 						const verifyRes = await axios.post(
// 							"/payments/checkout-success",
// 							{
// 								razorpay_order_id:
// 									response.razorpay_order_id,
// 								razorpay_payment_id:
// 									response.razorpay_payment_id,
// 								razorpay_signature:
// 									response.razorpay_signature,
// 								products: cart,
// 								couponCode:
// 									coupon?.code || null,
// 							}
// 						);

// 						if (verifyRes.data.success) {
// 							window.location.href =
// 								"/purchase-success";
// 						}
// 					} catch (error) {
// 						console.error(
// 							"Payment verification failed:",
// 							error
// 						);
// 						alert(
// 							"Payment verification failed"
// 						);
// 					}
// 				},

// 				prefill: {
// 					name: "",
// 					email: "",
// 					contact: "",
// 				},

// 				theme: {
// 					color: "#10B981",
// 				},
// 			};

// 			const razorpay = new window.Razorpay(options);

// 			razorpay.on("payment.failed", function (response) {
// 				console.error(response.error);
// 				alert(
// 					response.error.description ||
// 						"Payment failed"
// 				);
// 			});

// 			razorpay.open();
// 		} catch (error) {
// 			console.error("Checkout Error:", error);
// 			alert("Something went wrong");
// 		}
// 	};

// 	return (
// 		<motion.div
// 			className="space-y-4 rounded-lg border border-gray-700 bg-gray-800 p-4 shadow-sm sm:p-6"
// 			initial={{ opacity: 0, y: 20 }}
// 			animate={{ opacity: 1, y: 0 }}
// 			transition={{ duration: 0.5 }}
// 		>
// 			<p className="text-xl font-semibold text-emerald-400">
// 				Order Summary
// 			</p>

// 			<div className="space-y-4">
// 				<div className="space-y-2">
// 					<dl className="flex items-center justify-between gap-4">
// 						<dt className="text-base font-normal text-gray-300">
// 							Original Price
// 						</dt>
// 						<dd className="text-base font-medium text-white">
// 							₹{formattedSubtotal}
// 						</dd>
// 					</dl>

// 					{savings > 0 && (
// 						<dl className="flex items-center justify-between gap-4">
// 							<dt className="text-base font-normal text-gray-300">
// 								Savings
// 							</dt>
// 							<dd className="text-base font-medium text-emerald-400">
// 								-₹{formattedSavings}
// 							</dd>
// 						</dl>
// 					)}

// 					{coupon && isCouponApplied && (
// 						<dl className="flex items-center justify-between gap-4">
// 							<dt className="text-base font-normal text-gray-300">
// 								Coupon ({coupon.code})
// 							</dt>
// 							<dd className="text-base font-medium text-emerald-400">
// 								-{coupon.discountPercentage}%
// 							</dd>
// 						</dl>
// 					)}

// 					<dl className="flex items-center justify-between gap-4 border-t border-gray-600 pt-2">
// 						<dt className="text-base font-bold text-white">
// 							Total
// 						</dt>
// 						<dd className="text-base font-bold text-emerald-400">
// 							₹{formattedTotal}
// 						</dd>
// 					</dl>
// 				</div>

// 				<motion.button
// 					className="flex w-full items-center justify-center rounded-lg bg-emerald-600 px-5 py-2.5 text-sm font-medium text-white hover:bg-emerald-700 focus:outline-none focus:ring-4 focus:ring-emerald-300"
// 					whileHover={{ scale: 1.05 }}
// 					whileTap={{ scale: 0.95 }}
// 					onClick={handlePayment}
// 				>
// 					Proceed to Checkout
// 				</motion.button>

// 				<div className="flex items-center justify-center gap-2">
// 					<span className="text-sm font-normal text-gray-400">
// 						or
// 					</span>

// 					<Link
// 						to="/"
// 						className="inline-flex items-center gap-2 text-sm font-medium text-emerald-400 underline hover:text-emerald-300 hover:no-underline"
// 					>
// 						Continue Shopping
// 						<MoveRight size={16} />
// 					</Link>
// 				</div>
// 			</div>
// 		</motion.div>
// 	);
// };

// export default OrderSummary;

import { motion } from "framer-motion";
import { useCartStore } from "../stores/useCartStore";
import { Link } from "react-router-dom";
import { MoveRight } from "lucide-react";
import axios from "../lib/axios";

const loadRazorpayScript = () => {
	return new Promise((resolve) => {
		const script = document.createElement("script");
		script.src = "https://checkout.razorpay.com/v1/checkout.js";

		script.onload = () => resolve(true);
		script.onerror = () => resolve(false);

		document.body.appendChild(script);
	});
};

const OrderSummary = () => {
	const { total, subtotal, coupon, isCouponApplied, cart } =
		useCartStore();

	const savings = subtotal - total;
	const formattedSubtotal = subtotal.toFixed(2);
	const formattedTotal = total.toFixed(2);
	const formattedSavings = savings.toFixed(2);

	const handlePayment = async () => {
		try {
			const scriptLoaded = await loadRazorpayScript();

			if (!scriptLoaded) {
				alert("Failed to load Razorpay");
				return;
			}

			const { data } = await axios.post(
				"/payments/create-checkout-session",
				{
					products: cart,
					couponCode: coupon ? coupon.code : null,
				}
			);

			const options = {
				key: data.key,
				amount: data.amount,
				currency: data.currency,
				name: "Your Store",
				description: "Order Payment",
				order_id: data.orderId,

				handler: async function (response) {
					try {
						const verifyRes = await axios.post(
							"/payments/checkout-success",
							{
								razorpay_order_id:
									response.razorpay_order_id,
								razorpay_payment_id:
									response.razorpay_payment_id,
								razorpay_signature:
									response.razorpay_signature,
								products: cart,
								couponCode:
									coupon?.code || null,
							}
						);

						if (verifyRes.data.success) {
							window.location.href =
								"/purchase-success";
						}
					} catch (error) {
						console.error(
							"Payment verification failed:",
							error
						);
						alert(
							"Payment verification failed"
						);
					}
				},

				prefill: {
					name: "",
					email: "",
					contact: "",
				},

				theme: {
					color: "#10B981",
				},
			};

			const razorpay = new window.Razorpay(options);

			razorpay.on("payment.failed", function (response) {
				console.error(response.error);
				alert(
					response.error.description ||
						"Payment failed"
				);
			});

			razorpay.open();
		} catch (error) {
			console.error("Checkout Error:", error);
			alert("Something went wrong");
		}
	};

	return (
		<>
			<link rel="preconnect" href="https://fonts.googleapis.com" />
			<link
				href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;1,300;1,400&family=DM+Sans:wght@300;400;500&display=swap"
				rel="stylesheet"
			/>

			<style>{`
				.os-checkout-btn { transition: background 0.18s, border-color 0.18s; }
				.os-checkout-btn:hover { background: rgba(255,255,255,0.14) !important; border-color: rgba(255,255,255,0.3) !important; }
				.os-continue-link { transition: color 0.18s; }
				.os-continue-link:hover { color: rgba(255,255,255,0.9) !important; }
			`}</style>

			<motion.div
				style={{ fontFamily: "'DM Sans', sans-serif" }}
				initial={{ opacity: 0, y: 20 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.5 }}
			>
				<p style={{
					fontSize: "9px",
					letterSpacing: "0.24em",
					textTransform: "uppercase",
					color: "rgba(255,255,255,0.3)",
					marginBottom: "8px",
					fontWeight: 400,
				}}>
					Summary
				</p>
				<h3 style={{
					fontFamily: "'Cormorant Garamond', Georgia, serif",
					fontSize: "clamp(1.4rem, 3vw, 1.7rem)",
					fontWeight: 300,
					fontStyle: "italic",
					color: "rgba(255,255,255,0.92)",
					margin: 0,
					marginBottom: "20px",
					lineHeight: 1.1,
				}}>
					Order{" "}
					<span style={{ fontStyle: "normal", fontWeight: 400, color: "#ffffff" }}>
						Summary
					</span>
				</h3>

				<div style={{ display: "flex", flexDirection: "column", gap: "10px", marginBottom: "20px" }}>
					<dl className="flex items-center justify-between gap-4">
						<dt style={{ fontSize: "13px", fontWeight: 400, color: "rgba(255,255,255,0.45)" }}>
							Original Price
						</dt>
						<dd style={{ fontSize: "13px", fontWeight: 500, color: "rgba(255,255,255,0.85)" }}>
							₹{formattedSubtotal}
						</dd>
					</dl>

					{savings > 0 && (
						<dl className="flex items-center justify-between gap-4">
							<dt style={{ fontSize: "13px", fontWeight: 400, color: "rgba(255,255,255,0.45)" }}>
								Savings
							</dt>
							<dd style={{ fontSize: "13px", fontWeight: 500, color: "rgba(255,255,255,0.85)" }}>
								-₹{formattedSavings}
							</dd>
						</dl>
					)}

					{coupon && isCouponApplied && (
						<dl className="flex items-center justify-between gap-4">
							<dt style={{ fontSize: "13px", fontWeight: 400, color: "rgba(255,255,255,0.45)" }}>
								Coupon ({coupon.code})
							</dt>
							<dd style={{ fontSize: "13px", fontWeight: 500, color: "rgba(255,255,255,0.85)" }}>
								-{coupon.discountPercentage}%
							</dd>
						</dl>
					)}

					<dl
						className="flex items-center justify-between gap-4"
						style={{ borderTop: "1px solid rgba(255,255,255,0.1)", paddingTop: "12px", marginTop: "4px" }}
					>
						<dt style={{
							fontFamily: "'Cormorant Garamond', Georgia, serif",
							fontSize: "1.1rem",
							fontWeight: 400,
							fontStyle: "italic",
							color: "rgba(255,255,255,0.92)",
						}}>
							Total
						</dt>
						<dd style={{
							fontFamily: "'Cormorant Garamond', Georgia, serif",
							fontSize: "1.1rem",
							fontWeight: 500,
							color: "#ffffff",
						}}>
							₹{formattedTotal}
						</dd>
					</dl>
				</div>

				<motion.button
					className="os-checkout-btn w-full flex items-center justify-center"
					style={{
						padding: "11px 18px",
						borderRadius: "999px",
						border: "1px solid rgba(255,255,255,0.18)",
						background: "rgba(255,255,255,0.07)",
						color: "#ffffff",
						fontSize: "12px",
						fontFamily: "'DM Sans', sans-serif",
						fontWeight: 500,
						letterSpacing: "0.06em",
						textTransform: "uppercase",
						cursor: "pointer",
					}}
					whileHover={{ scale: 1.02 }}
					whileTap={{ scale: 0.97 }}
					onClick={handlePayment}
				>
					Proceed to Checkout
				</motion.button>

				<div className="flex items-center justify-center gap-2" style={{ marginTop: "16px" }}>
					<span style={{ fontSize: "12px", fontWeight: 400, color: "rgba(255,255,255,0.3)" }}>
						or
					</span>

					<Link
						to="/"
						className="os-continue-link inline-flex items-center gap-1.5"
						style={{
							fontSize: "12px",
							fontWeight: 500,
							color: "rgba(255,255,255,0.6)",
							letterSpacing: "0.02em",
							textDecoration: "none",
						}}
					>
						Continue Shopping
						<MoveRight size={14} strokeWidth={1.5} />
					</Link>
				</div>
			</motion.div>
		</>
	);
};

export default OrderSummary;