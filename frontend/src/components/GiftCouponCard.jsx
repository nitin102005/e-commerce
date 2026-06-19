// import { motion } from "framer-motion";
// import { useEffect, useState } from "react";
// import { useCartStore } from "../stores/useCartStore";

// const GiftCouponCard = () => {
// 	const [userInputCode, setUserInputCode] = useState("");
// 	const { coupon, isCouponApplied, applyCoupon, getMyCoupon, removeCoupon } = useCartStore();

// 	useEffect(() => {
// 		getMyCoupon();
// 	}, [getMyCoupon]);

// 	useEffect(() => {
// 		if (coupon) setUserInputCode(coupon.code);
// 	}, [coupon]);

// 	const handleApplyCoupon = () => {
// 		if (!userInputCode) return;
// 		applyCoupon(userInputCode);
// 	};

// 	const handleRemoveCoupon = async () => {
// 		await removeCoupon();
// 		setUserInputCode("");
// 	};

// 	return (
// 		<motion.div
// 			className='space-y-4 rounded-lg border border-gray-700 bg-gray-800 p-4 shadow-sm sm:p-6'
// 			initial={{ opacity: 0, y: 20 }}
// 			animate={{ opacity: 1, y: 0 }}
// 			transition={{ duration: 0.5, delay: 0.2 }}
// 		>
// 			<div className='space-y-4'>
// 				<div>
// 					<label htmlFor='voucher' className='mb-2 block text-sm font-medium text-gray-300'>
// 						Do you have a voucher or gift card?
// 					</label>
// 					<input
// 						type='text'
// 						id='voucher'
// 						className='block w-full rounded-lg border border-gray-600 bg-gray-700 
//             p-2.5 text-sm text-white placeholder-gray-400 focus:border-emerald-500 
//             focus:ring-emerald-500'
// 						placeholder='Enter code here'
// 						value={userInputCode}
// 						onChange={(e) => setUserInputCode(e.target.value)}
// 						required
// 					/>
// 				</div>

// 				<motion.button
// 					type='button'
// 					className='flex w-full items-center justify-center rounded-lg bg-emerald-600 px-5 py-2.5 text-sm font-medium text-white hover:bg-emerald-700 focus:outline-none focus:ring-4 focus:ring-emerald-300'
// 					whileHover={{ scale: 1.05 }}
// 					whileTap={{ scale: 0.95 }}
// 					onClick={handleApplyCoupon}
// 				>
// 					Apply Code
// 				</motion.button>
// 			</div>
// 			{isCouponApplied && coupon && (
// 				<div className='mt-4'>
// 					<h3 className='text-lg font-medium text-gray-300'>Applied Coupon</h3>

// 					<p className='mt-2 text-sm text-gray-400'>
// 						{coupon.code} - {coupon.discountPercentage}% off
// 					</p>

// 					<motion.button
// 						type='button'
// 						className='mt-2 flex w-full items-center justify-center rounded-lg bg-red-600 
//             px-5 py-2.5 text-sm font-medium text-white hover:bg-red-700 focus:outline-none
//              focus:ring-4 focus:ring-red-300'
// 						whileHover={{ scale: 1.05 }}
// 						whileTap={{ scale: 0.95 }}
// 						onClick={handleRemoveCoupon}
// 					>
// 						Remove Coupon
// 					</motion.button>
// 				</div>
// 			)}

// 			{coupon && (
// 				<div className='mt-4'>
// 					<h3 className='text-lg font-medium text-gray-300'>Your Available Coupon:</h3>
// 					<p className='mt-2 text-sm text-gray-400'>
// 						{coupon.code} - {coupon.discountPercentage}% off
// 					</p>
// 				</div>
// 			)}
// 		</motion.div>
// 	);
// };
// export default GiftCouponCard;


import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useCartStore } from "../stores/useCartStore";

const GiftCouponCard = () => {
	const [userInputCode, setUserInputCode] = useState("");
	const { coupon, isCouponApplied, applyCoupon, getMyCoupon, removeCoupon } = useCartStore();

	useEffect(() => {
		getMyCoupon();
	}, [getMyCoupon]);

	useEffect(() => {
		if (coupon) setUserInputCode(coupon.code);
	}, [coupon]);

	const handleApplyCoupon = () => {
		if (!userInputCode) return;
		applyCoupon(userInputCode);
	};

	const handleRemoveCoupon = async () => {
		await removeCoupon();
		setUserInputCode("");
	};

	return (
		<>
			<link rel="preconnect" href="https://fonts.googleapis.com" />
			<link
				href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;1,300;1,400&family=DM+Sans:wght@300;400;500&display=swap"
				rel="stylesheet"
			/>

			<style>{`
				.gc-input { transition: border-color 0.18s, background 0.18s; }
				.gc-input::placeholder { color: rgba(255,255,255,0.25); }
				.gc-input:focus { outline: none; border-color: rgba(255,255,255,0.3) !important; background: rgba(255,255,255,0.06) !important; }
				.gc-apply-btn { transition: background 0.18s, border-color 0.18s; }
				.gc-apply-btn:hover { background: rgba(255,255,255,0.14) !important; border-color: rgba(255,255,255,0.3) !important; }
				.gc-remove-btn { transition: background 0.18s, border-color 0.18s, color 0.18s; }
				.gc-remove-btn:hover { background: rgba(255,80,80,0.12) !important; border-color: rgba(255,100,100,0.4) !important; color: rgba(255,140,140,0.95) !important; }
			`}</style>

			<motion.div
				style={{ fontFamily: "'DM Sans', sans-serif" }}
				initial={{ opacity: 0, y: 20 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.5, delay: 0.2 }}
			>
				<p style={{
					fontSize: "9px",
					letterSpacing: "0.24em",
					textTransform: "uppercase",
					color: "rgba(255,255,255,0.3)",
					marginBottom: "8px",
					fontWeight: 400,
				}}>
					Promotions
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
					Gift{" "}
					<span style={{ fontStyle: "normal", fontWeight: 400, color: "#ffffff" }}>
						Coupon
					</span>
				</h3>

				<div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
					<div>
						<label
							htmlFor="voucher"
							style={{
								display: "block",
								fontSize: "12px",
								fontWeight: 400,
								color: "rgba(255,255,255,0.45)",
								marginBottom: "8px",
							}}
						>
							Do you have a voucher or gift card?
						</label>
						<input
							type="text"
							id="voucher"
							className="gc-input block w-full"
							style={{
								borderRadius: "10px",
								border: "1px solid rgba(255,255,255,0.1)",
								background: "rgba(255,255,255,0.04)",
								padding: "10px 14px",
								fontSize: "13px",
								color: "rgba(255,255,255,0.9)",
								fontFamily: "'DM Sans', sans-serif",
							}}
							placeholder="Enter code here"
							value={userInputCode}
							onChange={(e) => setUserInputCode(e.target.value)}
							required
						/>
					</div>

					<motion.button
						type="button"
						className="gc-apply-btn w-full flex items-center justify-center"
						style={{
							padding: "10px 18px",
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
						onClick={handleApplyCoupon}
					>
						Apply Code
					</motion.button>
				</div>

				{isCouponApplied && coupon && (
					<div style={{ marginTop: "20px" }}>
						<p style={{
							fontSize: "9px",
							letterSpacing: "0.2em",
							textTransform: "uppercase",
							color: "rgba(255,255,255,0.3)",
							fontWeight: 400,
							marginBottom: "6px",
						}}>
							Applied Coupon
						</p>

						<p style={{ fontSize: "13px", color: "rgba(255,255,255,0.6)", marginBottom: "12px" }}>
							{coupon.code} — {coupon.discountPercentage}% off
						</p>

						<motion.button
							type="button"
							className="gc-remove-btn w-full flex items-center justify-center"
							style={{
								padding: "10px 18px",
								borderRadius: "999px",
								border: "1px solid rgba(255,255,255,0.1)",
								background: "rgba(255,255,255,0.03)",
								color: "rgba(255,255,255,0.5)",
								fontSize: "12px",
								fontFamily: "'DM Sans', sans-serif",
								fontWeight: 500,
								letterSpacing: "0.06em",
								textTransform: "uppercase",
								cursor: "pointer",
							}}
							whileHover={{ scale: 1.02 }}
							whileTap={{ scale: 0.97 }}
							onClick={handleRemoveCoupon}
						>
							Remove Coupon
						</motion.button>
					</div>
				)}

				{coupon && !isCouponApplied && (
					<div style={{ marginTop: "20px" }}>
						<p style={{
							fontSize: "9px",
							letterSpacing: "0.2em",
							textTransform: "uppercase",
							color: "rgba(255,255,255,0.3)",
							fontWeight: 400,
							marginBottom: "6px",
						}}>
							Your Available Coupon
						</p>
						<p style={{ fontSize: "13px", color: "rgba(255,255,255,0.6)" }}>
							{coupon.code} — {coupon.discountPercentage}% off
						</p>
					</div>
				)}
			</motion.div>
		</>
	);
};
export default GiftCouponCard;