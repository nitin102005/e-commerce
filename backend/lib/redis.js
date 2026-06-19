import Redis from "ioredis";
import dotenv from "dotenv";

dotenv.config();

export const redis = new Redis(process.env.UPSTASH_REDIS_URL, {
	maxRetriesPerRequest: 3,
	retryStrategy(times) {
		if (times > 5) return null;
		return Math.min(times * 200, 2000);
	},
});

redis.on("error", (error) => {
	console.error("Redis connection error:", error.message);
});
