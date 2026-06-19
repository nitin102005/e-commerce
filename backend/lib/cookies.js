export const getCookieOptions = (maxAge) => ({
	httpOnly: true,
	secure: process.env.NODE_ENV === "production",
	sameSite: process.env.COOKIE_SAME_SITE || (process.env.NODE_ENV === "production" ? "lax" : "strict"),
	maxAge,
});
