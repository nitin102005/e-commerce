// import { useEffect, useState } from "react";
// import { ShoppingCart, ChevronLeft, ChevronRight } from "lucide-react";
// import { useCartStore } from "../stores/useCartStore";

// const FeaturedProducts = ({ featuredProducts }) => {
// 	const [currentIndex, setCurrentIndex] = useState(0);
// 	const [itemsPerPage, setItemsPerPage] = useState(4);

// 	const { addToCart } = useCartStore();

// 	useEffect(() => {
// 		const handleResize = () => {
// 			if (window.innerWidth < 640) setItemsPerPage(1);
// 			else if (window.innerWidth < 1024) setItemsPerPage(2);
// 			else if (window.innerWidth < 1280) setItemsPerPage(3);
// 			else setItemsPerPage(4);
// 		};

// 		handleResize();
// 		window.addEventListener("resize", handleResize);
// 		return () => window.removeEventListener("resize", handleResize);
// 	}, []);

// 	const nextSlide = () => {
// 		setCurrentIndex((prevIndex) => prevIndex + itemsPerPage);
// 	};

// 	const prevSlide = () => {
// 		setCurrentIndex((prevIndex) => prevIndex - itemsPerPage);
// 	};

// 	const isStartDisabled = currentIndex === 0;
// 	const isEndDisabled = currentIndex >= featuredProducts.length - itemsPerPage;

// 	return (
// 		<div className='py-12'>
// 			<div className='container mx-auto px-4'>
// 				<h2 className='text-center text-5xl sm:text-6xl font-bold text-emerald-400 mb-4'>Featured</h2>
// 				<div className='relative'>
// 					<div className='overflow-hidden'>
// 						<div
// 							className='flex transition-transform duration-300 ease-in-out'
// 							style={{ transform: `translateX(-${currentIndex * (100 / itemsPerPage)}%)` }}
// 						>
// 							{featuredProducts?.map((product) => (
// 								<div key={product._id} className='w-full sm:w-1/2 lg:w-1/3 xl:w-1/4 flex-shrink-0 px-2'>
// 									<div className='bg-white bg-opacity-10 backdrop-blur-sm rounded-lg shadow-lg overflow-hidden h-full transition-all duration-300 hover:shadow-xl border border-emerald-500/30'>
// 										<div className='overflow-hidden'>
// 											<img
// 												src={product.image}
// 												alt={product.name}
// 												className='w-full h-48 object-cover transition-transform duration-300 ease-in-out hover:scale-110'
// 											/>
// 										</div>
// 										<div className='p-4'>
// 											<h3 className='text-lg font-semibold mb-2 text-white'>{product.name}</h3>
// 											<p className='text-emerald-300 font-medium mb-4'>
// 												${product.price.toFixed(2)}
// 											</p>
// 											<button
// 												onClick={() => addToCart(product)}
// 												className='w-full bg-emerald-600 hover:bg-emerald-500 text-white font-semibold py-2 px-4 rounded transition-colors duration-300 
// 												flex items-center justify-center'
// 											>
// 												<ShoppingCart className='w-5 h-5 mr-2' />
// 												Add to Cart
// 											</button>
// 										</div>
// 									</div>
// 								</div>
// 							))}
// 						</div>
// 					</div>
// 					<button
// 						onClick={prevSlide}
// 						disabled={isStartDisabled}
// 						className={`absolute top-1/2 -left-4 transform -translate-y-1/2 p-2 rounded-full transition-colors duration-300 ${
// 							isStartDisabled ? "bg-gray-400 cursor-not-allowed" : "bg-emerald-600 hover:bg-emerald-500"
// 						}`}
// 					>
// 						<ChevronLeft className='w-6 h-6' />
// 					</button>

// 					<button
// 						onClick={nextSlide}
// 						disabled={isEndDisabled}
// 						className={`absolute top-1/2 -right-4 transform -translate-y-1/2 p-2 rounded-full transition-colors duration-300 ${
// 							isEndDisabled ? "bg-gray-400 cursor-not-allowed" : "bg-emerald-600 hover:bg-emerald-500"
// 						}`}
// 					>
// 						<ChevronRight className='w-6 h-6' />
// 					</button>
// 				</div>
// 			</div>
// 		</div>
// 	);
// };
// export default FeaturedProducts;


import { useEffect, useState } from "react";
import { ShoppingCart, ChevronLeft, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";
import { useCartStore } from "../stores/useCartStore";

const FeaturedProducts = ({ featuredProducts }) => {
	const [currentIndex, setCurrentIndex] = useState(0);
	const [itemsPerPage, setItemsPerPage] = useState(4);

	const { addToCart } = useCartStore();

	useEffect(() => {
		const handleResize = () => {
			if (window.innerWidth < 640) setItemsPerPage(1);
			else if (window.innerWidth < 1024) setItemsPerPage(2);
			else if (window.innerWidth < 1280) setItemsPerPage(3);
			else setItemsPerPage(4);
		};

		handleResize();
		window.addEventListener("resize", handleResize);
		return () => window.removeEventListener("resize", handleResize);
	}, []);

	const nextSlide = () => {
		setCurrentIndex((prevIndex) => prevIndex + itemsPerPage);
	};

	const prevSlide = () => {
		setCurrentIndex((prevIndex) => prevIndex - itemsPerPage);
	};

	const isStartDisabled = currentIndex === 0;
	const isEndDisabled = currentIndex >= featuredProducts.length - itemsPerPage;

	return (
		<>
			<link rel="preconnect" href="https://fonts.googleapis.com" />
			<link
				href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;1,300;1,400&family=DM+Sans:wght@300;400;500&display=swap"
				rel="stylesheet"
			/>

			<style>{`
				.fp-card { transition: border-color 0.25s, background 0.25s, transform 0.25s; }
				.fp-card:hover { border-color: rgba(255,255,255,0.22) !important; background: rgba(255,255,255,0.05) !important; }
				.fp-img-wrap { overflow: hidden; }
				.fp-img-wrap img { transition: transform 0.4s ease; }
				.fp-card:hover .fp-img-wrap img { transform: scale(1.06); }
				.fp-add-btn { transition: background 0.18s, border-color 0.18s; }
				.fp-add-btn:hover:not(:disabled) { background: rgba(255,255,255,0.14) !important; border-color: rgba(255,255,255,0.3) !important; }
				.fp-nav-btn { transition: background 0.18s, border-color 0.18s, opacity 0.18s; }
				.fp-nav-btn:hover:not(:disabled) { background: rgba(255,255,255,0.14) !important; border-color: rgba(255,255,255,0.3) !important; }
			`}</style>

			<div className="py-14" style={{ fontFamily: "'DM Sans', sans-serif" }}>
				<div className="container mx-auto px-4">
					<motion.div
						initial={{ opacity: 0, y: -12 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
						style={{ textAlign: "center", marginBottom: "40px" }}
					>
						<p style={{
							fontSize: "9px",
							letterSpacing: "0.24em",
							textTransform: "uppercase",
							color: "rgba(255,255,255,0.3)",
							marginBottom: "10px",
							fontWeight: 400,
						}}>
							Curated for you
						</p>
						<h2 style={{
							fontFamily: "'Cormorant Garamond', Georgia, serif",
							fontSize: "clamp(2.2rem, 6vw, 3.4rem)",
							fontWeight: 300,
							fontStyle: "italic",
							color: "rgba(255,255,255,0.92)",
							margin: 0,
							lineHeight: 1.1,
							letterSpacing: "0.01em",
						}}>
							Featured{" "}
							<span style={{ fontStyle: "normal", fontWeight: 400, color: "#ffffff" }}>
								Products
							</span>
						</h2>
					</motion.div>

					<div className="relative">
						<div className="overflow-hidden">
							<div
								className="flex transition-transform duration-300 ease-in-out"
								style={{ transform: `translateX(-${currentIndex * (100 / itemsPerPage)}%)` }}
							>
								{featuredProducts?.map((product) => (
									<div key={product._id} className="w-full sm:w-1/2 lg:w-1/3 xl:w-1/4 flex-shrink-0 px-2">
										<div
											className="fp-card h-full"
											style={{
												background: "rgba(255,255,255,0.03)",
												border: "1px solid rgba(255,255,255,0.08)",
												borderRadius: "18px",
												overflow: "hidden",
												backdropFilter: "blur(20px)",
												WebkitBackdropFilter: "blur(20px)",
											}}
										>
											<div className="fp-img-wrap">
												<img
													src={product.image}
													alt={product.name}
													className="w-full h-48 object-cover"
												/>
											</div>
											<div style={{ padding: "18px" }}>
												<h3 style={{
													fontFamily: "'Cormorant Garamond', Georgia, serif",
													fontSize: "1.25rem",
													fontWeight: 400,
													fontStyle: "italic",
													color: "rgba(255,255,255,0.92)",
													marginBottom: "8px",
												}}>
													{product.name}
												</h3>
												<p style={{
													fontSize: "13px",
													fontWeight: 500,
													color: "rgba(255,255,255,0.5)",
													marginBottom: "16px",
													letterSpacing: "0.02em",
												}}>
													${product.price.toFixed(2)}
												</p>
												<button
													onClick={() => addToCart(product)}
													className="fp-add-btn w-full flex items-center justify-center"
													style={{
														padding: "9px 16px",
														borderRadius: "999px",
														border: "1px solid rgba(255,255,255,0.18)",
														background: "rgba(255,255,255,0.07)",
														color: "#ffffff",
														fontSize: "11px",
														fontFamily: "'DM Sans', sans-serif",
														fontWeight: 500,
														letterSpacing: "0.06em",
														textTransform: "uppercase",
														cursor: "pointer",
													}}
												>
													<ShoppingCart size={14} strokeWidth={1.5} style={{ marginRight: "7px" }} />
													Add to Cart
												</button>
											</div>
										</div>
									</div>
								))}
							</div>
						</div>

						<button
							onClick={prevSlide}
							disabled={isStartDisabled}
							className="fp-nav-btn absolute top-1/2 -left-4 transform -translate-y-1/2 flex items-center justify-center"
							style={{
								width: "40px",
								height: "40px",
								borderRadius: "999px",
								border: `1px solid ${isStartDisabled ? "rgba(255,255,255,0.06)" : "rgba(255,255,255,0.18)"}`,
								background: isStartDisabled ? "rgba(255,255,255,0.02)" : "rgba(255,255,255,0.07)",
								color: isStartDisabled ? "rgba(255,255,255,0.2)" : "#ffffff",
								cursor: isStartDisabled ? "not-allowed" : "pointer",
								backdropFilter: "blur(10px)",
								WebkitBackdropFilter: "blur(10px)",
							}}
						>
							<ChevronLeft size={18} strokeWidth={1.5} />
						</button>

						<button
							onClick={nextSlide}
							disabled={isEndDisabled}
							className="fp-nav-btn absolute top-1/2 -right-4 transform -translate-y-1/2 flex items-center justify-center"
							style={{
								width: "40px",
								height: "40px",
								borderRadius: "999px",
								border: `1px solid ${isEndDisabled ? "rgba(255,255,255,0.06)" : "rgba(255,255,255,0.18)"}`,
								background: isEndDisabled ? "rgba(255,255,255,0.02)" : "rgba(255,255,255,0.07)",
								color: isEndDisabled ? "rgba(255,255,255,0.2)" : "#ffffff",
								cursor: isEndDisabled ? "not-allowed" : "pointer",
								backdropFilter: "blur(10px)",
								WebkitBackdropFilter: "blur(10px)",
							}}
						>
							<ChevronRight size={18} strokeWidth={1.5} />
						</button>
					</div>
				</div>
			</div>
		</>
	);
};
export default FeaturedProducts;