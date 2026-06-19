import { useEffect } from "react";
import { useProductStore } from "../stores/useProductStore";
import FeaturedProducts from "../components/FeaturedProducts";
import { Link } from "react-router-dom";

const categories = [
	{ href: "/jeans", name: "Jeans", imageUrl: "/jeans.jpg" },
	{ href: "/t-shirts", name: "T-shirts", imageUrl: "/tshirts.jpg" },
	{ href: "/shoes", name: "Shoes", imageUrl: "/shoes.jpg" },
	{ href: "/glasses", name: "Glasses", imageUrl: "/glasses.png" },
	{ href: "/jackets", name: "Jackets", imageUrl: "/jackets.jpg" },
	{ href: "/suits", name: "Suits", imageUrl: "/suits.jpg" },
	{ href: "/bags", name: "Bags", imageUrl: "/bags.jpg" },
];

/* Reusable image tile with hover overlay */
const CategoryTile = ({ category, className = "" }) => (
	<Link
		to={`/category${category.href}`}
		className={`group relative overflow-hidden rounded-xl block ${className}`}
	>
		<img
			src={category.imageUrl}
			alt={category.name}
			className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
		/>
		{/* Dark gradient scrim */}
		<div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl" />
		{/* Hover label */}
		<div className="absolute bottom-0 left-0 right-0 p-3 translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 ease-out">
			<div className="flex items-center justify-between">
				<span className="text-white font-medium text-sm tracking-widest uppercase drop-shadow-lg"
					style={{ fontFamily: "'DM Sans', sans-serif", letterSpacing: "0.12em", fontSize: "11px" }}>
					{category.name}
				</span>
				<span style={{
					color: "rgba(255,255,255,0.7)",
					fontSize: "10px",
					border: "1px solid rgba(255,255,255,0.25)",
					borderRadius: "999px",
					padding: "2px 10px",
					backdropFilter: "blur(6px)",
					fontFamily: "'DM Sans', sans-serif",
					letterSpacing: "0.08em",
				}}>
					Shop →
				</span>
			</div>
		</div>
	</Link>
);

const HomePage = () => {
	const { fetchFeaturedProducts, products, isLoading } = useProductStore();

	useEffect(() => {
		fetchFeaturedProducts();
	}, [fetchFeaturedProducts]);

	return (
		<>
			<link rel="preconnect" href="https://fonts.googleapis.com" />
			<link
				href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;1,300;1,400&family=DM+Sans:wght@300;400;500&display=swap"
				rel="stylesheet"
			/>

			<div className="flex flex-col mt-3 shadow-md rounded-2xl h-screen bg-white w-full items-center justify-center">
				<div className="w-full" />

				<div
					className="grid h-full w-full gap-3 pb-3 bg-white p-0 pt-3 px-3
					           grid-cols-1 md:grid-cols-4 md:grid-rows-3
					           rounded-lg shadow-md overflow-auto"
				>
					{/* Cell 1 — Jeans */}
					<CategoryTile
						category={categories[0]}
						className="col-span-1 md:col-span-1 row-span-1 md:row-span-1"
					/>

					{/* Cell 2 — Hero text cell */}
					<div
						className="col-span-1 md:col-span-2 row-span-1 md:row-span-1 rounded-xl overflow-hidden relative flex items-center justify-center"
						style={{
							background: "linear-gradient(160deg, #1a1a1a 0%, #111111 60%, #0e0e0e 100%)",
						}}
					>
						{/* Warm parchment glow — bottom center */}
						<div style={{
							position: "absolute",
							inset: 0,
							background: "radial-gradient(ellipse 90% 55% at 50% 120%, rgba(212,196,168,0.14) 0%, transparent 70%)",
							pointerEvents: "none",
						}} />
						{/* Fine linen grid */}
						<div style={{
							position: "absolute",
							inset: 0,
							backgroundImage: "radial-gradient(rgba(255,255,255,0.045) 1px, transparent 1px)",
							backgroundSize: "18px 18px",
							pointerEvents: "none",
						}} />
						{/* Hairline top border accent */}
						<div style={{
							position: "absolute",
							top: 0, left: "20%", right: "20%",
							height: "1px",
							background: "linear-gradient(90deg, transparent, rgba(200,185,160,0.35), transparent)",
							pointerEvents: "none",
						}} />

						{/* Text */}
						<div className="relative z-10 text-center px-6 py-5 select-none">
							<p style={{
								fontFamily: "'DM Sans', sans-serif",
								fontSize: "9px",
								fontWeight: 400,
								letterSpacing: "0.22em",
								textTransform: "uppercase",
								color: "rgba(195,180,155,0.65)",
								marginBottom: "12px",
							}}>
								New Season · 2025
							</p>

							<h2 style={{
								fontFamily: "'Cormorant Garamond', Georgia, serif",
								fontSize: "clamp(1.7rem, 3.5vw, 2.8rem)",
								fontWeight: 300,
								fontStyle: "italic",
								lineHeight: 1.1,
								color: "#f0ece4",
								margin: 0,
								letterSpacing: "0.01em",
							}}>
								Explore our<br />
								<span style={{
									fontStyle: "normal",
									fontWeight: 400,
									color: "#c8b99a",
									letterSpacing: "0.04em",
								}}>
									latest
								</span>{" "}collections
							</h2>

							<div style={{
								width: "32px",
								height: "1px",
								background: "rgba(200,185,154,0.4)",
								margin: "14px auto",
							}} />

							<p style={{
								fontFamily: "'DM Sans', sans-serif",
								fontSize: "11px",
								fontWeight: 300,
								color: "rgba(255,255,255,0.3)",
								letterSpacing: "0.06em",
							}}>
								Curated. Sustainable. Yours.
							</p>
						</div>
					</div>

					{/* Cell 3 — Jackets (tall) */}
					<CategoryTile
						category={categories[4]}
						className="col-span-1 md:col-span-1 row-span-2 md:row-span-2"
					/>

					{/* Cell 4 — Glasses */}
					<CategoryTile
						category={categories[3]}
						className="col-span-1 md:col-span-1 row-span-1 md:row-span-1"
					/>

					{/* Cell 5 — Suits (tall) */}
					<CategoryTile
						category={categories[5]}
						className="col-span-1 md:col-span-1 row-span-2 md:row-span-2"
					/>

					{/* Cell 6 — Shoes */}
					<CategoryTile
						category={categories[2]}
						className="col-span-1 md:col-span-1 row-span-1 md:row-span-1"
					/>

					{/* Cell 7 — T-shirts */}
					<CategoryTile
						category={categories[1]}
						className="col-span-1 md:col-span-1 row-span-1 md:row-span-1"
					/>

					{/* Cell 8 — Bags (wide) */}
					<CategoryTile
						category={categories[6]}
						className="col-span-1 md:col-span-2 row-span-1 md:row-span-1"
					/>
				</div>
			</div>

			{!isLoading && products.length > 0 && <FeaturedProducts featuredProducts={products} />}
		</>
	);
};

export default HomePage;