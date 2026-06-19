// import { motion } from "framer-motion";
// import { Trash, Star } from "lucide-react";
// import { useProductStore } from "../stores/useProductStore";

// const ProductsList = () => {
// 	const { deleteProduct, toggleFeaturedProduct, products } = useProductStore();

// 	console.log("products", products);

// 	return (
// 		<motion.div
// 			className='bg-gray-800 shadow-lg rounded-lg overflow-hidden max-w-4xl mx-auto'
// 			initial={{ opacity: 0, y: 20 }}
// 			animate={{ opacity: 1, y: 0 }}
// 			transition={{ duration: 0.8 }}
// 		>
// 			<table className=' min-w-full divide-y divide-gray-700'>
// 				<thead className='bg-gray-700'>
// 					<tr>
// 						<th
// 							scope='col'
// 							className='px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider'
// 						>
// 							Product
// 						</th>
// 						<th
// 							scope='col'
// 							className='px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider'
// 						>
// 							Price
// 						</th>
// 						<th
// 							scope='col'
// 							className='px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider'
// 						>
// 							Category
// 						</th>

// 						<th
// 							scope='col'
// 							className='px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider'
// 						>
// 							Featured
// 						</th>
// 						<th
// 							scope='col'
// 							className='px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider'
// 						>
// 							Actions
// 						</th>
// 					</tr>
// 				</thead>

// 				<tbody className='bg-gray-800 divide-y divide-gray-700'>
// 					{products?.map((product) => (
// 						<tr key={product._id} className='hover:bg-gray-700'>
// 							<td className='px-6 py-4 whitespace-nowrap'>
// 								<div className='flex items-center'>
// 									<div className='flex-shrink-0 h-10 w-10'>
// 										<img
// 											className='h-10 w-10 rounded-full object-cover'
// 											src={product.image}
// 											alt={product.name}
// 										/>
// 									</div>
// 									<div className='ml-4'>
// 										<div className='text-sm font-medium text-white'>{product.name}</div>
// 									</div>
// 								</div>
// 							</td>
// 							<td className='px-6 py-4 whitespace-nowrap'>
// 								<div className='text-sm text-gray-300'>${product.price.toFixed(2)}</div>
// 							</td>
// 							<td className='px-6 py-4 whitespace-nowrap'>
// 								<div className='text-sm text-gray-300'>{product.category}</div>
// 							</td>
// 							<td className='px-6 py-4 whitespace-nowrap'>
// 								<button
// 									onClick={() => toggleFeaturedProduct(product._id)}
// 									className={`p-1 rounded-full ${
// 										product.isFeatured ? "bg-yellow-400 text-gray-900" : "bg-gray-600 text-gray-300"
// 									} hover:bg-yellow-500 transition-colors duration-200`}
// 								>
// 									<Star className='h-5 w-5' />
// 								</button>
// 							</td>
// 							<td className='px-6 py-4 whitespace-nowrap text-sm font-medium'>
// 								<button
// 									onClick={() => deleteProduct(product._id)}
// 									className='text-red-400 hover:text-red-300'
// 								>
// 									<Trash className='h-5 w-5' />
// 								</button>
// 							</td>
// 						</tr>
// 					))}
// 				</tbody>
// 			</table>
// 		</motion.div>
// 	);
// };
// export default ProductsList;

import { motion } from "framer-motion";
import { Trash, Star } from "lucide-react";
import { useProductStore } from "../stores/useProductStore";

const ProductsList = () => {
	const { deleteProduct, toggleFeaturedProduct, products } = useProductStore();

	console.log("products", products);

	return (
		<>
			<style>{`
				.pl-row { transition: background 0.15s; }
				.pl-row:hover { background: rgba(255,255,255,0.04) !important; }
				.pl-star:hover { background: rgba(255,255,255,0.15) !important; }
				.pl-del:hover { color: rgba(255,80,80,0.9) !important; background: rgba(255,60,60,0.1) !important; }
				.pl-star-on:hover { background: rgba(250,204,21,0.85) !important; }
			`}</style>

			<motion.div
				style={{
					borderRadius: "16px",
					overflow: "hidden",
					border: "1px solid rgba(255,255,255,0.08)",
					background: "rgba(255,255,255,0.02)",
					fontFamily: "'DM Sans', sans-serif",
				}}
				initial={{ opacity: 0, y: 16 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
			>
				<table style={{ minWidth: "100%", borderCollapse: "collapse" }}>

					{/* ── Head ── */}
					<thead>
						<tr style={{ borderBottom: "1px solid rgba(255,255,255,0.07)" }}>
							{["Product", "Price", "Category", "Featured", "Actions"].map((col) => (
								<th
									key={col}
									style={{
										padding: "12px 20px",
										textAlign: "left",
										fontSize: "9px",
										fontWeight: 400,
										letterSpacing: "0.18em",
										textTransform: "uppercase",
										color: "rgba(255,255,255,0.3)",
										background: "rgba(255,255,255,0.025)",
										whiteSpace: "nowrap",
									}}
								>
									{col}
								</th>
							))}
						</tr>
					</thead>

					{/* ── Body ── */}
					<tbody>
						{products?.map((product, i) => (
							<tr
								key={product._id}
								className="pl-row"
								style={{
									borderBottom: i < products.length - 1
										? "1px solid rgba(255,255,255,0.05)"
										: "none",
									background: "transparent",
								}}
							>
								{/* Product */}
								<td style={{ padding: "14px 20px", whiteSpace: "nowrap" }}>
									<div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
										<img
											src={product.image}
											alt={product.name}
											style={{
												width: "38px",
												height: "38px",
												borderRadius: "10px",
												objectFit: "cover",
												border: "1px solid rgba(255,255,255,0.08)",
												flexShrink: 0,
											}}
										/>
										<span style={{
											fontSize: "13.5px",
											fontWeight: 400,
											color: "rgba(255,255,255,0.85)",
											maxWidth: "180px",
											overflow: "hidden",
											textOverflow: "ellipsis",
										}}>
											{product.name}
										</span>
									</div>
								</td>

								{/* Price */}
								<td style={{ padding: "14px 20px", whiteSpace: "nowrap" }}>
									<span style={{
										fontFamily: "'Cormorant Garamond', Georgia, serif",
										fontSize: "1.1rem",
										fontStyle: "italic",
										fontWeight: 400,
										color: "rgba(255,255,255,0.75)",
									}}>
										${product.price.toFixed(2)}
									</span>
								</td>

								{/* Category */}
								<td style={{ padding: "14px 20px", whiteSpace: "nowrap" }}>
									<span style={{
										display: "inline-block",
										fontSize: "10px",
										fontWeight: 400,
										letterSpacing: "0.1em",
										textTransform: "uppercase",
										color: "rgba(255,255,255,0.4)",
										border: "1px solid rgba(255,255,255,0.1)",
										borderRadius: "999px",
										padding: "3px 10px",
									}}>
										{product.category}
									</span>
								</td>

								{/* Featured */}
								<td style={{ padding: "14px 20px", whiteSpace: "nowrap" }}>
									<button
										onClick={() => toggleFeaturedProduct(product._id)}
										className={product.isFeatured ? "pl-star pl-star-on" : "pl-star"}
										style={{
											width: "30px",
											height: "30px",
											borderRadius: "8px",
											border: "none",
											display: "flex",
											alignItems: "center",
											justifyContent: "center",
											cursor: "pointer",
											transition: "background 0.15s",
											background: product.isFeatured
												? "rgba(250,204,21,0.75)"
												: "rgba(255,255,255,0.07)",
										}}
									>
										<Star
											size={14}
											strokeWidth={product.isFeatured ? 2.5 : 1.5}
											style={{
												color: product.isFeatured ? "#1a1a1a" : "rgba(255,255,255,0.35)",
												fill: product.isFeatured ? "#1a1a1a" : "none",
											}}
										/>
									</button>
								</td>

								{/* Actions */}
								<td style={{ padding: "14px 20px", whiteSpace: "nowrap" }}>
									<button
										onClick={() => deleteProduct(product._id)}
										className="pl-del"
										style={{
											width: "30px",
											height: "30px",
											borderRadius: "8px",
											border: "none",
											display: "flex",
											alignItems: "center",
											justifyContent: "center",
											cursor: "pointer",
											transition: "background 0.15s, color 0.15s",
											background: "rgba(255,255,255,0.05)",
											color: "rgba(255,100,100,0.6)",
										}}
									>
										<Trash size={13} strokeWidth={1.5} />
									</button>
								</td>
							</tr>
						))}
					</tbody>
				</table>

				{/* Empty state */}
				{(!products || products.length === 0) && (
					<div style={{
						padding: "60px 24px",
						textAlign: "center",
					}}>
						<p style={{
							fontSize: "9px",
							letterSpacing: "0.22em",
							textTransform: "uppercase",
							color: "rgba(255,255,255,0.18)",
							fontFamily: "'DM Sans', sans-serif",
						}}>
							No products yet
						</p>
					</div>
				)}
			</motion.div>
		</>
	);
};

export default ProductsList;