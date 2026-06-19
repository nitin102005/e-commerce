import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";

import authRoutes from "./routes/auth.route.js";
import productRoutes from "./routes/product.route.js";
import cartRoutes from "./routes/cart.route.js";
import couponRoutes from "./routes/coupon.route.js";
import paymentRoutes from "./routes/payment.route.js";
import analyticsRoutes from "./routes/analytics.route.js";

import { connectDB } from "./lib/db.js";
import { validateEnv } from "./lib/env.js";

dotenv.config();

validateEnv();

const app = express();
const PORT = process.env.PORT || 5000;

if (process.env.NODE_ENV === "production") {
	app.set("trust proxy", 1);
}

const getAllowedOrigins = () => {
	if (process.env.CLIENT_URL) {
		return process.env.CLIENT_URL.split(",").map((url) => url.trim());
	}

	return ["http://localhost:5173"];
};

const allowedOrigins = getAllowedOrigins();

app.use((req, res, next) => {
	const origin = req.headers.origin;

	if (origin && allowedOrigins.includes(origin)) {
		res.header("Access-Control-Allow-Origin", origin);
	} else if (!origin && process.env.NODE_ENV !== "production") {
		res.header("Access-Control-Allow-Origin", allowedOrigins[0]);
	}

	res.header("Access-Control-Allow-Credentials", "true");
	res.header("Access-Control-Allow-Methods", "GET,POST,PUT,DELETE,OPTIONS");
	res.header("Access-Control-Allow-Headers", "Content-Type");

	if (req.method === "OPTIONS") {
		return res.sendStatus(200);
	}

	next();
});

app.use(express.json({ limit: "10mb" }));
app.use(cookieParser());

app.get("/api/health", (req, res) => {
	res.status(200).json({ status: "ok" });
});

app.use("/api/auth", authRoutes);
app.use("/api/products", productRoutes);
app.use("/api/cart", cartRoutes);
app.use("/api/coupons", couponRoutes);
app.use("/api/payments", paymentRoutes);
app.use("/api/analytics", analyticsRoutes);

const startServer = async () => {
	try {
		await connectDB();

		app.listen(PORT, () => {
			console.log(`Server is running on port ${PORT}`);
		});
	} catch (error) {
		console.error("Failed to start server:", error.message);
		process.exit(1);
	}
};

startServer();
