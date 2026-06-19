// import { Link } from "react-router-dom";

// const CategoryItem = ({ category }) => {
// 	return (
// 		<div className='relative overflow-hidden h-96 w-full rounded-lg group'>
// 			<Link to={"/category" + category.href}>
// 				<div className='w-full h-full cursor-pointer'>
// 					<div className='absolute inset-0 bg-gradient-to-b from-transparent to-gray-900 opacity-50 z-10' />
// 					<img
// 						src={category.imageUrl}
// 						alt={category.name}
// 						className='w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-110'
// 						loading='lazy'
// 					/>
// 					<div className='absolute bottom-0 left-0 right-0 p-4 z-20'>
// 						<h3 className='text-white text-2xl font-bold mb-2'>{category.name}</h3>
// 						<p className='text-gray-200 text-sm'>Explore {category.name}</p>
// 					</div>
// 				</div>
// 			</Link>
// 		</div>
// 	);
// };

// export default CategoryItem;


import { Link } from "react-router-dom";

const CategoryItem = ({ category }) => {
	return (
		<Link
			to={"/category" + category.href}
			className="group"
			style={{
				display: "block",
				position: "relative",
				overflow: "hidden",
				height: "100%",
				minHeight: "220px",
				width: "100%",
				borderRadius: "inherit",
				textDecoration: "none",
			}}
		>
			{/* Image */}
			<img
				src={category.imageUrl}
				alt={category.name}
				loading="lazy"
				style={{
					width: "100%",
					height: "100%",
					objectFit: "cover",
					display: "block",
					transition: "transform 0.55s cubic-bezier(0.22,1,0.36,1)",
				}}
				className="group-hover:scale-105"
			/>

			{/* Persistent bottom scrim */}
			<div style={{
				position: "absolute",
				inset: 0,
				background: "linear-gradient(to top, rgba(0,0,0,0.68) 0%, rgba(0,0,0,0.18) 45%, transparent 75%)",
				pointerEvents: "none",
			}} />

			{/* Hover brightness overlay */}
			<div
				style={{
					position: "absolute",
					inset: 0,
					background: "rgba(255,255,255,0)",
					transition: "background 0.3s ease",
					pointerEvents: "none",
				}}
				className="group-hover:!bg-white/5"
			/>

			{/* Label */}
			<div style={{
				position: "absolute",
				bottom: 0,
				left: 0,
				right: 0,
				padding: "16px",
				zIndex: 10,
			}}>
				{/* Eyebrow */}
				<p style={{
					fontFamily: "'DM Sans', sans-serif",
					fontSize: "9px",
					fontWeight: 400,
					letterSpacing: "0.2em",
					textTransform: "uppercase",
					color: "rgba(255,255,255,0.45)",
					margin: "0 0 4px",
					transform: "translateY(4px)",
					opacity: 0,
					transition: "opacity 0.3s ease, transform 0.3s ease",
				}}
				className="group-hover:!opacity-100 group-hover:!translate-y-0"
				>
					Explore
				</p>

				{/* Category name */}
				<div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
					<h3 style={{
						fontFamily: "'Cormorant Garamond', Georgia, serif",
						fontSize: "clamp(1.2rem, 2.2vw, 1.6rem)",
						fontWeight: 300,
						fontStyle: "italic",
						color: "#ffffff",
						margin: 0,
						lineHeight: 1.1,
						letterSpacing: "0.01em",
					}}>
						{category.name}
					</h3>

					{/* Arrow chip — appears on hover */}
					<span
						style={{
							fontFamily: "'DM Sans', sans-serif",
							fontSize: "10px",
							color: "rgba(255,255,255,0.6)",
							border: "1px solid rgba(255,255,255,0.2)",
							borderRadius: "999px",
							padding: "3px 10px",
							backdropFilter: "blur(8px)",
							WebkitBackdropFilter: "blur(8px)",
							opacity: 0,
							transform: "translateX(-6px)",
							transition: "opacity 0.3s ease, transform 0.3s ease",
							whiteSpace: "nowrap",
						}}
						className="group-hover:!opacity-100 group-hover:!translate-x-0"
					>
						Shop →
					</span>
				</div>
			</div>
		</Link>
	);
};

export default CategoryItem;