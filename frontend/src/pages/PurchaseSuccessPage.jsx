// import { ArrowRight, CheckCircle, HandHeart } from "lucide-react";
// import { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
// import { useCartStore } from "../stores/useCartStore";
// import axios from "../lib/axios";
// import Confetti from "react-confetti";

// const PurchaseSuccessPage = () => {
// 	const [isProcessing, setIsProcessing] = useState(true);
// 	const { clearCart } = useCartStore();

// 	useEffect(() => {
// 		const finalizePurchase = async () => {
// 			try {
// 				await axios.delete("/cart");
// 				clearCart();
// 			} catch (error) {
// 				console.error("Error clearing cart:", error);
// 				clearCart();
// 			} finally {
// 				setIsProcessing(false);
// 			}
// 		};

// 		finalizePurchase();
// 	}, [clearCart]);

// 	if (isProcessing) return "Processing...";

// 	return (
// 		<div className='h-screen flex items-center justify-center px-4'>
// 			<Confetti
// 				width={window.innerWidth}
// 				height={window.innerHeight}
// 				gravity={0.1}
// 				style={{ zIndex: 99 }}
// 				numberOfPieces={700}
// 				recycle={false}
// 			/>

// 			<div className='max-w-md w-full bg-gray-800 rounded-lg shadow-xl overflow-hidden relative z-10'>
// 				<div className='p-6 sm:p-8'>
// 					<div className='flex justify-center'>
// 						<CheckCircle className='text-emerald-400 w-16 h-16 mb-4' />
// 					</div>
// 					<h1 className='text-2xl sm:text-3xl font-bold text-center text-emerald-400 mb-2'>
// 						Purchase Successful!
// 					</h1>

// 					<p className='text-gray-300 text-center mb-2'>
// 						Thank you for your order. {"We're"} processing it now.
// 					</p>
// 					<p className='text-emerald-400 text-center text-sm mb-6'>
// 						Check your email for order details and updates.
// 					</p>
// 					<div className='bg-gray-700 rounded-lg p-4 mb-6'>
// 						<div className='flex items-center justify-between mb-2'>
// 							<span className='text-sm text-gray-400'>Order number</span>
// 							<span className='text-sm font-semibold text-emerald-400'>#12345</span>
// 						</div>
// 						<div className='flex items-center justify-between'>
// 							<span className='text-sm text-gray-400'>Estimated delivery</span>
// 							<span className='text-sm font-semibold text-emerald-400'>3-5 business days</span>
// 						</div>
// 					</div>

// 					<div className='space-y-4'>
// 						<button
// 							className='w-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-2 px-4
//              rounded-lg transition duration-300 flex items-center justify-center'
// 						>
// 							<HandHeart className='mr-2' size={18} />
// 							Thanks for trusting us!
// 						</button>
// 						<Link
// 							to={"/"}
// 							className='w-full bg-gray-700 hover:bg-gray-600 text-emerald-400 font-bold py-2 px-4 
//             rounded-lg transition duration-300 flex items-center justify-center'
// 						>
// 							Continue Shopping
// 							<ArrowRight className='ml-2' size={18} />
// 						</Link>
// 					</div>
// 				</div>
// 			</div>
// 		</div>
// 	);
// };
// export default PurchaseSuccessPage;


import { ArrowRight, CheckCircle, HandHeart } from "lucide-react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useCartStore } from "../stores/useCartStore";
import axios from "../lib/axios";
import Confetti from "react-confetti";

const PurchaseSuccessPage = () => {
	const [isProcessing, setIsProcessing] = useState(true);
	const { clearCart } = useCartStore();

	useEffect(() => {
		const finalizePurchase = async () => {
			try {
				await axios.delete("/cart");
				clearCart();
			} catch (error) {
				console.error("Error clearing cart:", error);
				clearCart();
			} finally {
				setIsProcessing(false);
			}
		};

		finalizePurchase();
	}, [clearCart]);

	if (isProcessing) {
		return (
			<div
				className="h-screen flex items-center justify-center"
				style={{ fontFamily: "'DM Sans', sans-serif" }}
			>
				<p style={{
					fontSize: "11px",
					letterSpacing: "0.24em",
					textTransform: "uppercase",
					color: "rgba(255,255,255,0.3)",
					fontWeight: 400,
				}}>
					Processing…
				</p>
			</div>
		);
	}

	return (
		<>
			<link rel="preconnect" href="https://fonts.googleapis.com" />
			<link
				href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;1,300;1,400&family=DM+Sans:wght@300;400;500&display=swap"
				rel="stylesheet"
			/>

			<style>{`
				.psp-btn { transition: background 0.18s, color 0.18s, border-color 0.18s, transform 0.18s; }
				.psp-btn:hover { background: rgba(255,255,255,0.12) !important; border-color: rgba(255,255,255,0.3) !important; }
				.psp-btn:active { transform: scale(0.98); }
			`}</style>

			<div
				className="h-screen flex items-center justify-center px-4 relative overflow-hidden"
				style={{ fontFamily: "'DM Sans', sans-serif" }}
			>
				<Confetti
					width={window.innerWidth}
					height={window.innerHeight}
					gravity={0.1}
					style={{ zIndex: 99 }}
					numberOfPieces={700}
					recycle={false}
					colors={["#ffffff", "#e5e5e5", "#cccccc", "#999999"]}
				/>

				<motion.div
					initial={{ opacity: 0, y: 16 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
					className="max-w-md w-full relative z-10"
					style={{
						background: "rgba(255,255,255,0.03)",
						border: "1px solid rgba(255,255,255,0.08)",
						borderRadius: "22px",
						backdropFilter: "blur(20px)",
						WebkitBackdropFilter: "blur(20px)",
						overflow: "hidden",
					}}
				>
					<div className="p-6 sm:p-8">
						<motion.div
							initial={{ opacity: 0, scale: 0.8 }}
							animate={{ opacity: 1, scale: 1 }}
							transition={{ duration: 0.5, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
							className="flex justify-center"
							style={{ marginBottom: "18px" }}
						>
							<CheckCircle
								strokeWidth={1.5}
								style={{ color: "rgba(255,255,255,0.85)", width: "56px", height: "56px" }}
							/>
						</motion.div>

						<p style={{
							fontSize: "9px",
							letterSpacing: "0.24em",
							textTransform: "uppercase",
							color: "rgba(255,255,255,0.3)",
							marginBottom: "10px",
							fontWeight: 400,
							textAlign: "center",
						}}>
							Order confirmed
						</p>

						<h1 style={{
							fontFamily: "'Cormorant Garamond', Georgia, serif",
							fontSize: "clamp(1.7rem, 5vw, 2.3rem)",
							fontWeight: 300,
							fontStyle: "italic",
							color: "rgba(255,255,255,0.92)",
							margin: 0,
							marginBottom: "16px",
							lineHeight: 1.1,
							letterSpacing: "0.01em",
							textAlign: "center",
						}}>
							Purchase{" "}
							<span style={{ fontStyle: "normal", fontWeight: 400, color: "#ffffff" }}>
								Successful
							</span>
						</h1>

						<p style={{
							color: "rgba(255,255,255,0.5)",
							textAlign: "center",
							fontSize: "13px",
							marginBottom: "6px",
						}}>
							Thank you for your order. {"We're"} processing it now.
						</p>
						<p style={{
							color: "rgba(255,255,255,0.4)",
							textAlign: "center",
							fontSize: "12px",
							marginBottom: "28px",
						}}>
							Check your email for order details and updates.
						</p>

						<div style={{
							background: "rgba(255,255,255,0.04)",
							border: "1px solid rgba(255,255,255,0.07)",
							borderRadius: "14px",
							padding: "16px",
							marginBottom: "26px",
						}}>
							<div className="flex items-center justify-between" style={{ marginBottom: "10px" }}>
								<span style={{ fontSize: "11px", letterSpacing: "0.04em", color: "rgba(255,255,255,0.35)" }}>
									Order number
								</span>
								<span style={{ fontSize: "12px", fontWeight: 500, color: "rgba(255,255,255,0.85)" }}>
									#12345
								</span>
							</div>
							<div className="flex items-center justify-between">
								<span style={{ fontSize: "11px", letterSpacing: "0.04em", color: "rgba(255,255,255,0.35)" }}>
									Estimated delivery
								</span>
								<span style={{ fontSize: "12px", fontWeight: 500, color: "rgba(255,255,255,0.85)" }}>
									3-5 business days
								</span>
							</div>
						</div>

						<div className="space-y-3">
							<button
								className="psp-btn w-full flex items-center justify-center"
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
							>
								<HandHeart size={15} strokeWidth={1.5} style={{ marginRight: "8px" }} />
								Thanks for trusting us!
							</button>

							<Link
								to={"/"}
								className="psp-btn w-full flex items-center justify-center"
								style={{
									padding: "11px 18px",
									borderRadius: "999px",
									border: "1px solid rgba(255,255,255,0.09)",
									background: "rgba(255,255,255,0.02)",
									color: "rgba(255,255,255,0.6)",
									fontSize: "12px",
									fontFamily: "'DM Sans', sans-serif",
									fontWeight: 400,
									letterSpacing: "0.06em",
									textTransform: "uppercase",
									textDecoration: "none",
								}}
							>
								Continue Shopping
								<ArrowRight size={15} strokeWidth={1.5} style={{ marginLeft: "8px" }} />
							</Link>
						</div>
					</div>
				</motion.div>
			</div>
		</>
	);
};

export default PurchaseSuccessPage;

