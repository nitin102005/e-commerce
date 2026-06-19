// import toast from "react-hot-toast";
// import { ShoppingCart } from "lucide-react";
// import { useUserStore } from "../stores/useUserStore";
// import { useCartStore } from "../stores/useCartStore";

// const ProductCard = ({ product }) => {
// 	const { user } = useUserStore();
// 	const { addToCart } = useCartStore();
// 	const handleAddToCart = () => {
// 		if (!user) {
// 			toast.error("Please login to add products to cart", { id: "login" });
// 			return;
// 		} else {
// 			// add to cart
// 			addToCart(product);
// 		}
// 	};

// 	return (
// 		<div className='flex w-full relative flex-col overflow-hidden rounded-lg border border-gray-700 shadow-lg'>
// 			<div className='relative mx-3 mt-3 flex h-60 overflow-hidden rounded-xl'>
// 				<img className='object-cover w-full' src={product.image} alt='product image' />
// 				<div className='absolute inset-0 bg-black bg-opacity-20' />
// 			</div>

// 			<div className='mt-4 px-5 pb-5'>
// 				<h5 className='text-xl font-semibold tracking-tight text-white'>{product.name}</h5>
// 				<div className='mt-2 mb-5 flex items-center justify-between'>
// 					<p>
// 						<span className='text-3xl font-bold text-emerald-400'>${product.price}</span>
// 					</p>
// 				</div>
// 				<button
// 					className='flex items-center justify-center rounded-lg bg-emerald-600 px-5 py-2.5 text-center text-sm font-medium
// 					 text-white hover:bg-emerald-700 focus:outline-none focus:ring-4 focus:ring-emerald-300'
// 					onClick={handleAddToCart}
// 				>
// 					<ShoppingCart size={22} className='mr-2' />
// 					Add to cart
// 				</button>
// 			</div>
// 		</div>
// 	);
// };
// export default ProductCard;


import toast from "react-hot-toast";
import { ShoppingCart } from "lucide-react";
import { useUserStore } from "../stores/useUserStore";
import { useCartStore } from "../stores/useCartStore";

const ProductCard = ({ product }) => {
	const { user } = useUserStore();
	const { addToCart } = useCartStore();

	const handleAddToCart = () => {
		if (!user) {
			toast.error("Please login to add products to cart", { id: "login" });
			return;
		} else {
			addToCart(product);
		}
	};

	return (
		<>
			<style>{`
				.pc-btn:hover { background: rgba(255,255,255,0.95) !important; }
				.pc-btn:active { transform: scale(0.97); }
				.pc-img { transition: transform 0.5s cubic-bezier(0.22,1,0.36,1); }
				.pc-root:hover .pc-img { transform: scale(1.06); }
				.pc-overlay {
					opacity: 0;
					transition: opacity 0.3s ease;
				}
				.pc-root:hover .pc-overlay { opacity: 1; }
			`}</style>

			<div
				className="pc-root flex w-full relative flex-col overflow-hidden"
				style={{
					borderRadius: "18px",
					border: "1px solid rgba(255,255,255,0.09)",
					background: "rgba(255,255,255,0.04)",
					backdropFilter: "blur(16px)",
					WebkitBackdropFilter: "blur(16px)",
					fontFamily: "'DM Sans', sans-serif",
					transition: "border-color 0.2s, box-shadow 0.2s",
				}}
				onMouseEnter={e => {
					e.currentTarget.style.borderColor = "rgba(255,255,255,0.18)";
					e.currentTarget.style.boxShadow = "0 8px 40px rgba(0,0,0,0.3)";
				}}
				onMouseLeave={e => {
					e.currentTarget.style.borderColor = "rgba(255,255,255,0.09)";
					e.currentTarget.style.boxShadow = "none";
				}}
			>
				{/* ── Image ── */}
				<div style={{
					position: "relative",
					margin: "10px 10px 0",
					height: "220px",
					borderRadius: "12px",
					overflow: "hidden",
					background: "rgba(0,0,0,0.2)",
				}}>
					<img
						className="pc-img"
						src={product.image}
						alt={product.name}
						style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
					/>
					{/* Hover scrim */}
					<div
						className="pc-overlay"
						style={{
							position: "absolute",
							inset: 0,
							background: "linear-gradient(to top, rgba(0,0,0,0.55) 0%, transparent 55%)",
							borderRadius: "12px",
						}}
					/>
				</div>

				{/* ── Body ── */}
				<div style={{ padding: "14px 16px 16px" }}>
					{/* Name */}
					<h5 style={{
						fontSize: "14px",
						fontWeight: 500,
						color: "rgba(255,255,255,0.88)",
						margin: "0 0 6px",
						letterSpacing: "0.01em",
						whiteSpace: "nowrap",
						overflow: "hidden",
						textOverflow: "ellipsis",
					}}>
						{product.name}
					</h5>

					{/* Price + button row */}
					<div style={{
						display: "flex",
						alignItems: "center",
						justifyContent: "space-between",
						gap: "10px",
						marginTop: "10px",
					}}>
						<span style={{
							fontFamily: "'Cormorant Garamond', Georgia, serif",
							fontSize: "1.55rem",
							fontWeight: 400,
							fontStyle: "italic",
							color: "#ffffff",
							lineHeight: 1,
							letterSpacing: "-0.01em",
						}}>
							${product.price}
						</span>

						<button
							className="pc-btn"
							onClick={handleAddToCart}
							style={{
								display: "flex",
								alignItems: "center",
								gap: "6px",
								padding: "8px 14px",
								background: "#ffffff",
								border: "none",
								borderRadius: "999px",
								color: "#0d0d0d",
								fontSize: "11px",
								fontFamily: "'DM Sans', sans-serif",
								fontWeight: 500,
								letterSpacing: "0.08em",
								textTransform: "uppercase",
								cursor: "pointer",
								transition: "background 0.18s, transform 0.12s",
								whiteSpace: "nowrap",
								flexShrink: 0,
							}}
						>
							<ShoppingCart size={13} strokeWidth={2} />
							Add
						</button>
					</div>
				</div>
			</div>
		</>
	);
};

export default ProductCard;