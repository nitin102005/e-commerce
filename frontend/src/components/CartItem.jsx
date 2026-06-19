// import { Minus, Plus, Trash } from "lucide-react";
// import { useCartStore } from "../stores/useCartStore";

// const CartItem = ({ item }) => {
// 	const { removeFromCart, updateQuantity } = useCartStore();

// 	return (
// 		<div className='rounded-lg border p-4 shadow-sm border-gray-700 bg-gray-800 md:p-6'>
// 			<div className='space-y-4 md:flex md:items-center md:justify-between md:gap-6 md:space-y-0'>
// 				<div className='shrink-0 md:order-1'>
// 					<img className='h-20 md:h-32 rounded object-cover' src={item.image} />
// 				</div>
// 				<label className='sr-only'>Choose quantity:</label>

// 				<div className='flex items-center justify-between md:order-3 md:justify-end'>
// 					<div className='flex items-center gap-2'>
// 						<button
// 							className='inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-md border
// 							 border-gray-600 bg-gray-700 hover:bg-gray-600 focus:outline-none focus:ring-2
// 							  focus:ring-emerald-500'
// 							onClick={() => updateQuantity(item._id, item.quantity - 1)}
// 						>
// 							<Minus className='text-gray-300' />
// 						</button>
// 						<p>{item.quantity}</p>
// 						<button
// 							className='inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-md border
// 							 border-gray-600 bg-gray-700 hover:bg-gray-600 focus:outline-none 
// 						focus:ring-2 focus:ring-emerald-500'
// 							onClick={() => updateQuantity(item._id, item.quantity + 1)}
// 						>
// 							<Plus className='text-gray-300' />
// 						</button>
// 					</div>

// 					<div className='text-end md:order-4 md:w-32'>
// 						<p className='text-base font-bold text-emerald-400'>${item.price}</p>
// 					</div>
// 				</div>

// 				<div className='w-full min-w-0 flex-1 space-y-4 md:order-2 md:max-w-md'>
// 					<p className='text-base font-medium text-white hover:text-emerald-400 hover:underline'>
// 						{item.name}
// 					</p>
// 					<p className='text-sm text-gray-400'>{item.description}</p>

// 					<div className='flex items-center gap-4'>
// 						<button
// 							className='inline-flex items-center text-sm font-medium text-red-400
// 							 hover:text-red-300 hover:underline'
// 							onClick={() => removeFromCart(item._id)}
// 						>
// 							<Trash />
// 						</button>
// 					</div>
// 				</div>
// 			</div>
// 		</div>
// 	);
// };
// export default CartItem;


import { Minus, Plus, Trash } from "lucide-react";
import { useCartStore } from "../stores/useCartStore";

const CartItem = ({ item }) => {
	const { removeFromCart, updateQuantity } = useCartStore();

	return (
		<>
			<link rel="preconnect" href="https://fonts.googleapis.com" />
			<link
				href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;1,300;1,400&family=DM+Sans:wght@300;400;500&display=swap"
				rel="stylesheet"
			/>

			<style>{`
				.ci-qty-btn { transition: background 0.18s, border-color 0.18s; }
				.ci-qty-btn:hover { background: rgba(255,255,255,0.12) !important; border-color: rgba(255,255,255,0.25) !important; }
				.ci-name { transition: color 0.18s; cursor: pointer; }
				.ci-name:hover { color: rgba(255,255,255,0.65) !important; }
				.ci-remove-btn { transition: color 0.18s, background 0.18s; }
				.ci-remove-btn:hover { color: rgba(255,140,140,0.95) !important; background: rgba(255,80,80,0.1) !important; }
			`}</style>

			<div
				style={{ padding: "16px", fontFamily: "'DM Sans', sans-serif" }}
				className="md:p-5"
			>
				<div className="space-y-4 md:flex md:items-center md:justify-between md:gap-6 md:space-y-0">
					<div className="shrink-0 md:order-1">
						<img
							className="h-20 md:h-28 object-cover"
							style={{ borderRadius: "12px", border: "1px solid rgba(255,255,255,0.08)" }}
							src={item.image}
						/>
					</div>
					<label className="sr-only">Choose quantity:</label>

					<div className="flex items-center justify-between md:order-3 md:justify-end">
						<div className="flex items-center gap-3">
							<button
								className="ci-qty-btn inline-flex shrink-0 items-center justify-center"
								style={{
									height: "26px",
									width: "26px",
									borderRadius: "8px",
									border: "1px solid rgba(255,255,255,0.12)",
									background: "rgba(255,255,255,0.05)",
									cursor: "pointer",
								}}
								onClick={() => updateQuantity(item._id, item.quantity - 1)}
							>
								<Minus size={13} strokeWidth={1.5} style={{ color: "rgba(255,255,255,0.6)" }} />
							</button>
							<p style={{ fontSize: "13px", color: "rgba(255,255,255,0.85)", minWidth: "14px", textAlign: "center" }}>
								{item.quantity}
							</p>
							<button
								className="ci-qty-btn inline-flex shrink-0 items-center justify-center"
								style={{
									height: "26px",
									width: "26px",
									borderRadius: "8px",
									border: "1px solid rgba(255,255,255,0.12)",
									background: "rgba(255,255,255,0.05)",
									cursor: "pointer",
								}}
								onClick={() => updateQuantity(item._id, item.quantity + 1)}
							>
								<Plus size={13} strokeWidth={1.5} style={{ color: "rgba(255,255,255,0.6)" }} />
							</button>
						</div>

						<div className="text-end md:order-4 md:w-32">
							<p style={{
								fontFamily: "'Cormorant Garamond', Georgia, serif",
								fontSize: "1.15rem",
								fontWeight: 500,
								color: "#ffffff",
							}}>
								${item.price}
							</p>
						</div>
					</div>

					<div className="w-full min-w-0 flex-1 space-y-2 md:order-2 md:max-w-md">
						<p className="ci-name" style={{ fontSize: "14px", fontWeight: 500, color: "rgba(255,255,255,0.9)" }}>
							{item.name}
						</p>
						<p style={{ fontSize: "12px", color: "rgba(255,255,255,0.35)" }}>
							{item.description}
						</p>

						<div className="flex items-center gap-4" style={{ paddingTop: "4px" }}>
							<button
								className="ci-remove-btn inline-flex items-center justify-center"
								style={{
									color: "rgba(255,255,255,0.35)",
									padding: "6px",
									borderRadius: "8px",
									cursor: "pointer",
								}}
								onClick={() => removeFromCart(item._id)}
							>
								<Trash size={15} strokeWidth={1.5} />
							</button>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};
export default CartItem;