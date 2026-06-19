const requiredEnvVars = [
	"MONGO_URI",
	"ACCESS_TOKEN_SECRET",
	"REFRESH_TOKEN_SECRET",
	"UPSTASH_REDIS_URL",
	"RAZORPAY_KEY_ID",
	"RAZORPAY_KEY_SECRET",
	"CLOUDINARY_CLOUD_NAME",
	"CLOUDINARY_API_KEY",
	"CLOUDINARY_API_SECRET",
];

export const validateEnv = () => {
	if (process.env.NODE_ENV !== "production") {
		return;
	}

	const missing = requiredEnvVars.filter((key) => !process.env[key]);

	if (missing.length > 0) {
		console.error(`Missing required environment variables: ${missing.join(", ")}`);
		process.exit(1);
	}

	if (!process.env.CLIENT_URL) {
		console.warn("Warning: CLIENT_URL is not set. CORS will block requests from your Vercel frontend.");
	}
};
