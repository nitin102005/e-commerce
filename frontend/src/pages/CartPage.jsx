// import { Link } from "react-router-dom";
// import { useCartStore } from "../stores/useCartStore";
// import { motion } from "framer-motion";
// import { ShoppingCart } from "lucide-react";
// import CartItem from "../components/CartItem";
// import PeopleAlsoBought from "../components/PeopleAlsoBought";
// import OrderSummary from "../components/OrderSummary";
// import GiftCouponCard from "../components/GiftCouponCard";

// const CartPage = () => {
// 	const { cart } = useCartStore();

// 	return (
// 		<div className='py-8 md:py-16'>
// 			<div className='mx-auto max-w-screen-xl px-4 2xl:px-0'>
// 				<div className='mt-6 sm:mt-8 md:gap-6 lg:flex lg:items-start xl:gap-8'>
// 					<motion.div
// 						className='mx-auto w-full flex-none lg:max-w-2xl xl:max-w-4xl'
// 						initial={{ opacity: 0, x: -20 }}
// 						animate={{ opacity: 1, x: 0 }}
// 						transition={{ duration: 0.5, delay: 0.2 }}
// 					>
// 						{cart.length === 0 ? (
// 							<EmptyCartUI />
// 						) : (
// 							<div className='space-y-6'>
// 								{cart.map((item) => (
// 									<CartItem key={item._id} item={item} />
// 								))}
// 							</div>
// 						)}
// 						{cart.length > 0 && <PeopleAlsoBought />}
// 					</motion.div>

// 					{cart.length > 0 && (
// 						<motion.div
// 							className='mx-auto mt-6 max-w-4xl flex-1 space-y-6 lg:mt-0 lg:w-full'
// 							initial={{ opacity: 0, x: 20 }}
// 							animate={{ opacity: 1, x: 0 }}
// 							transition={{ duration: 0.5, delay: 0.4 }}
// 						>
// 							<OrderSummary />
// 							<GiftCouponCard />
// 						</motion.div>
// 					)}
// 				</div>
// 			</div>
// 		</div>
// 	);
// };
// export default CartPage;

// const EmptyCartUI = () => (
// 	<motion.div
// 		className='flex flex-col items-center justify-center space-y-4 py-16'
// 		initial={{ opacity: 0, y: 20 }}
// 		animate={{ opacity: 1, y: 0 }}
// 		transition={{ duration: 0.5 }}
// 	>
// 		<ShoppingCart className='h-24 w-24 text-gray-300' />
// 		<h3 className='text-2xl font-semibold '>Your cart is empty</h3>
// 		<p className='text-gray-400'>Looks like you {"haven't"} added anything to your cart yet.</p>
// 		<Link
// 			className='mt-4 rounded-md bg-emerald-500 px-6 py-2 text-white transition-colors hover:bg-emerald-600'
// 			to='/'
// 		>
// 			Start Shopping
// 		</Link>
// 	</motion.div>
// );
import { Link } from "react-router-dom";
import { useCartStore } from "../stores/useCartStore";
import { motion } from "framer-motion";
import { ShoppingCart, ArrowRight } from "lucide-react";
import CartItem from "../components/CartItem";
import PeopleAlsoBought from "../components/PeopleAlsoBought";
import OrderSummary from "../components/OrderSummary";
import GiftCouponCard from "../components/GiftCouponCard";

const CartPage = () => {
	const { cart } = useCartStore();

	return (
		<>
			<link rel="preconnect" href="https://fonts.googleapis.com" />
			<link
				href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;1,300;1,400&family=DM+Sans:wght@300;400;500&display=swap"
				rel="stylesheet"
			/>

			<div className="py-8 md:py-14" style={{ fontFamily: "'DM Sans', sans-serif" }}>
				<div className="mx-auto max-w-screen-xl px-4 2xl:px-0">

					{/* ── Page header ── */}
					<motion.div
						style={{ marginBottom: "32px" }}
						initial={{ opacity: 0, y: -14 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
					>
						<p style={{
							fontSize: "9px",
							letterSpacing: "0.24em",
							textTransform: "uppercase",
							color: "rgba(255,255,255,0.3)",
							marginBottom: "8px",
							fontWeight: 400,
						}}>
							Your bag
						</p>
						<h1 style={{
							fontFamily: "'Cormorant Garamond', Georgia, serif",
							fontSize: "clamp(1.9rem, 4vw, 2.6rem)",
							fontWeight: 300,
							fontStyle: "italic",
							color: "rgba(255,255,255,0.92)",
							margin: 0,
							lineHeight: 1.1,
						}}>
							Shopping{" "}
							<span style={{ fontStyle: "normal", fontWeight: 400, color: "#ffffff" }}>
								Cart
							</span>
							{cart.length > 0 && (
								<span style={{
									marginLeft: "12px",
									fontSize: "12px",
									fontFamily: "'DM Sans', sans-serif",
									fontStyle: "normal",
									fontWeight: 400,
									color: "rgba(255,255,255,0.3)",
									letterSpacing: "0.06em",
									verticalAlign: "middle",
								}}>
									{cart.length} item{cart.length !== 1 ? "s" : ""}
								</span>
							)}
						</h1>
					</motion.div>

					<div className="mt-4 md:gap-6 lg:flex lg:items-start xl:gap-8">

						{/* ── Left: cart items ── */}
						<motion.div
							className="mx-auto w-full flex-none lg:max-w-2xl xl:max-w-4xl"
							initial={{ opacity: 0, x: -20 }}
							animate={{ opacity: 1, x: 0 }}
							transition={{ duration: 0.5, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
						>
							{cart.length === 0 ? (
								<EmptyCartUI />
							) : (
								<div
									style={{
										background: "rgba(255,255,255,0.03)",
										border: "1px solid rgba(255,255,255,0.08)",
										borderRadius: "22px",
										padding: "8px",
										backdropFilter: "blur(20px)",
										WebkitBackdropFilter: "blur(20px)",
									}}
								>
									<div style={{ display: "flex", flexDirection: "column", gap: "2px" }}>
										{cart.map((item, i) => (
											<div
												key={item._id}
												style={{
													borderBottom: i < cart.length - 1
														? "1px solid rgba(255,255,255,0.06)"
														: "none",
													padding: "4px 0",
												}}
											>
												<CartItem item={item} />
											</div>
										))}
									</div>
								</div>
							)}

							{cart.length > 0 && (
								<div style={{ marginTop: "24px" }}>
									<PeopleAlsoBought />
								</div>
							)}
						</motion.div>

						{/* ── Right: summary + coupon ── */}
						{cart.length > 0 && (
							<motion.div
								className="mx-auto mt-6 max-w-4xl flex-1 lg:mt-0 lg:w-full"
								style={{ display: "flex", flexDirection: "column", gap: "16px" }}
								initial={{ opacity: 0, x: 20 }}
								animate={{ opacity: 1, x: 0 }}
								transition={{ duration: 0.5, delay: 0.28, ease: [0.22, 1, 0.36, 1] }}
							>
								{/* Order summary card */}
								<div style={{
									background: "rgba(255,255,255,0.03)",
									border: "1px solid rgba(255,255,255,0.08)",
									borderRadius: "22px",
									padding: "24px",
									backdropFilter: "blur(20px)",
									WebkitBackdropFilter: "blur(20px)",
								}}>
									<OrderSummary />
								</div>

								{/* Coupon card */}
								<div style={{
									background: "rgba(255,255,255,0.03)",
									border: "1px solid rgba(255,255,255,0.08)",
									borderRadius: "22px",
									padding: "24px",
									backdropFilter: "blur(20px)",
									WebkitBackdropFilter: "blur(20px)",
								}}>
									<GiftCouponCard />
								</div>
							</motion.div>
						)}
					</div>
				</div>
			</div>
		</>
	);
};

export default CartPage;

/* ── Empty state ── */
const EmptyCartUI = () => (
	<motion.div
		style={{
			display: "flex",
			flexDirection: "column",
			alignItems: "center",
			justifyContent: "center",
			padding: "80px 24px",
			background: "rgba(255,255,255,0.03)",
			border: "1px solid rgba(255,255,255,0.08)",
			borderRadius: "22px",
			backdropFilter: "blur(20px)",
			WebkitBackdropFilter: "blur(20px)",
			textAlign: "center",
		}}
		initial={{ opacity: 0, y: 20 }}
		animate={{ opacity: 1, y: 0 }}
		transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
	>
		{/* Icon */}
		<div style={{
			width: "64px",
			height: "64px",
			borderRadius: "18px",
			border: "1px solid rgba(255,255,255,0.1)",
			background: "rgba(255,255,255,0.05)",
			display: "flex",
			alignItems: "center",
			justifyContent: "center",
			marginBottom: "24px",
		}}>
			<ShoppingCart size={26} strokeWidth={1.5} style={{ color: "rgba(255,255,255,0.35)" }} />
		</div>

		<p style={{
			fontSize: "9px",
			letterSpacing: "0.22em",
			textTransform: "uppercase",
			color: "rgba(255,255,255,0.2)",
			marginBottom: "10px",
			fontWeight: 400,
			fontFamily: "'DM Sans', sans-serif",
		}}>
			Nothing here yet
		</p>

		<h3 style={{
			fontFamily: "'Cormorant Garamond', Georgia, serif",
			fontSize: "clamp(1.5rem, 3vw, 2rem)",
			fontWeight: 300,
			fontStyle: "italic",
			color: "rgba(255,255,255,0.6)",
			margin: "0 0 8px",
		}}>
			Your cart is empty
		</h3>

		<p style={{
			fontSize: "13px",
			fontWeight: 300,
			color: "rgba(255,255,255,0.28)",
			margin: "0 0 28px",
			fontFamily: "'DM Sans', sans-serif",
		}}>
			Looks like you haven't added anything yet.
		</p>

		<Link
			to="/"
			style={{
				display: "inline-flex",
				alignItems: "center",
				gap: "6px",
				padding: "10px 22px",
				background: "#ffffff",
				borderRadius: "999px",
				color: "#0d0d0d",
				fontSize: "11px",
				fontFamily: "'DM Sans', sans-serif",
				fontWeight: 500,
				letterSpacing: "0.1em",
				textTransform: "uppercase",
				textDecoration: "none",
				transition: "opacity 0.18s",
			}}
			onMouseEnter={e => e.currentTarget.style.opacity = "0.88"}
			onMouseLeave={e => e.currentTarget.style.opacity = "1"}
		>
			Start Shopping <ArrowRight size={12} strokeWidth={2} />
		</Link>
	</motion.div>
);