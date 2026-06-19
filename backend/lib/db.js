import mongoose from "mongoose";
import Order from "../models/order.model.js";

export const connectDB = async () => {
	try {
		const conn = await mongoose.connect(process.env.MONGO_URI);
		console.log(`MongoDB connected: ${conn.connection.host}`);

		// Remove legacy Stripe unique index left over from before Razorpay migration
		try {
			await Order.collection.dropIndex("stripeSessionId_1");
			console.log("Dropped legacy stripeSessionId index from orders collection");
		} catch (indexError) {
			if (indexError.code !== 27 && indexError.codeName !== "IndexNotFound") {
				console.warn("Legacy index cleanup:", indexError.message);
			}
		}
	} catch (error) {
		console.log("Error connecting to MONGODB", error.message);
		process.exit(1);
	}
};
