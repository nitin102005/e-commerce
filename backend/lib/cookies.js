const getSameSite = () => {
	if (process.env.COOKIE_SAME_SITE) {
		return process.env.COOKIE_SAME_SITE;
	}

	return process.env.NODE_ENV === "production" ? "none" : "strict";
};

export const getCookieOptions = (maxAge) => {
	const sameSite = getSameSite();
	const secure = sameSite === "none" || process.env.NODE_ENV === "production";

	return {
		httpOnly: true,
		secure,
		sameSite,
		maxAge,
		path: "/",
	};
};

export const getClearCookieOptions = () => {
	const { secure, sameSite, path } = getCookieOptions(0);

	return { httpOnly: true, secure, sameSite, path };
};
