import { useEffect } from "react";
import { useProductStore } from "../stores/useProductStore";
import { useParams } from "react-router-dom";
import { motion } from "framer-motion";
import ProductCard from "../components/ProductCard";

const CategoryPage = () => {
	const { fetchProductsByCategory, products } = useProductStore();
	const { category } = useParams();

	useEffect(() => {
		fetchProductsByCategory(category);
	}, [fetchProductsByCategory, category]);

	console.log("products:", products);

	const displayName = category.charAt(0).toUpperCase() + category.slice(1);

	return (
		<>
			<link rel="preconnect" href="https://fonts.googleapis.com" />
			<link
				href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;1,300;1,400&family=DM+Sans:wght@300;400;500&display=swap"
				rel="stylesheet"
			/>

			<div className="min-h-screen" style={{ fontFamily: "'DM Sans', sans-serif" }}>
				<div className="relative z-10 max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 py-14">

					{/* ── Header ── */}
					<motion.div
						style={{ textAlign: "center", marginBottom: "48px" }}
						initial={{ opacity: 0, y: -16 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
					>
						<p style={{
							fontSize: "9px",
							letterSpacing: "0.24em",
							textTransform: "uppercase",
							color: "rgba(255,255,255,0.3)",
							marginBottom: "10px",
							fontWeight: 400,
						}}>
							Collection
						</p>

						<h1 style={{
							fontFamily: "'Cormorant Garamond', Georgia, serif",
							fontSize: "clamp(2.4rem, 6vw, 3.6rem)",
							fontWeight: 300,
							fontStyle: "italic",
							color: "rgba(255,255,255,0.92)",
							margin: 0,
							lineHeight: 1.05,
							letterSpacing: "0.01em",
						}}>
							{displayName}
						</h1>

						{/* Hairline divider */}
						<div style={{
							width: "40px",
							height: "1px",
							background: "rgba(255,255,255,0.2)",
							margin: "16px auto 0",
						}} />
					</motion.div>

					{/* ── Product grid ── */}
					<motion.div
						className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 justify-items-center"
						initial={{ opacity: 0, y: 16 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.55, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
					>
						{products?.length === 0 && (
							<div
								className="col-span-full"
								style={{
									textAlign: "center",
									padding: "80px 24px",
									background: "rgba(255,255,255,0.03)",
									border: "1px solid rgba(255,255,255,0.08)",
									borderRadius: "22px",
									backdropFilter: "blur(20px)",
									WebkitBackdropFilter: "blur(20px)",
									width: "100%",
								}}
							>
								<p style={{
									fontSize: "9px",
									letterSpacing: "0.22em",
									textTransform: "uppercase",
									color: "rgba(255,255,255,0.2)",
									marginBottom: "12px",
									fontWeight: 400,
								}}>
									Empty
								</p>
								<h2 style={{
									fontFamily: "'Cormorant Garamond', Georgia, serif",
									fontSize: "clamp(1.6rem, 4vw, 2.2rem)",
									fontWeight: 300,
									fontStyle: "italic",
									color: "rgba(255,255,255,0.45)",
									margin: 0,
								}}>
									No products found
								</h2>
							</div>
						)}

						{products?.map((product) => (
							<ProductCard key={product._id} product={product} />
						))}
					</motion.div>

					{/* Product count hint */}
					{products?.length > 0 && (
						<motion.p
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							transition={{ duration: 0.5, delay: 0.4 }}
							style={{
								textAlign: "center",
								fontSize: "10px",
								color: "rgba(255,255,255,0.15)",
								marginTop: "40px",
								letterSpacing: "0.08em",
								textTransform: "uppercase",
							}}
						>
							{products.length} item{products.length !== 1 ? "s" : ""} in {displayName}
						</motion.p>
					)}
				</div>
			</div>
		</>
	);
};

export default CategoryPage;