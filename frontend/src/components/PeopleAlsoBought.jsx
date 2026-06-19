// import { useEffect, useState } from "react";
// import ProductCard from "./ProductCard";
// import axios from "../lib/axios";
// import toast from "react-hot-toast";
// import LoadingSpinner from "./LoadingSpinner";

// const PeopleAlsoBought = () => {
// 	const [recommendations, setRecommendations] = useState([]);
// 	const [isLoading, setIsLoading] = useState(true);

// 	useEffect(() => {
// 		const fetchRecommendations = async () => {
// 			try {
// 				const res = await axios.get("/products/recommendations");
// 				setRecommendations(res.data);
// 			} catch (error) {
// 				toast.error(error.response.data.message || "An error occurred while fetching recommendations");
// 			} finally {
// 				setIsLoading(false);
// 			}
// 		};

// 		fetchRecommendations();
// 	}, []);

// 	if (isLoading) return <LoadingSpinner />;

// 	return (
// 		<div className='mt-8'>
// 			<h3 className='text-2xl font-semibold text-emerald-400'>People also bought</h3>
// 			<div className='mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg: grid-col-3'>
// 				{recommendations.map((product) => (
// 					<ProductCard key={product._id} product={product} />
// 				))}
// 			</div>
// 		</div>
// 	);
// };
// export default PeopleAlsoBought;



import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import ProductCard from "./ProductCard";
import axios from "../lib/axios";
import toast from "react-hot-toast";
import LoadingSpinner from "./LoadingSpinner";

const PeopleAlsoBought = () => {
	const [recommendations, setRecommendations] = useState([]);
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		const fetchRecommendations = async () => {
			try {
				const res = await axios.get("/products/recommendations");
				setRecommendations(res.data);
			} catch (error) {
				toast.error(error.response.data.message || "An error occurred while fetching recommendations");
			} finally {
				setIsLoading(false);
			}
		};

		fetchRecommendations();
	}, []);

	if (isLoading) return <LoadingSpinner />;

	return (
		<>
			<link rel="preconnect" href="https://fonts.googleapis.com" />
			<link
				href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;1,300;1,400&family=DM+Sans:wght@300;400;500&display=swap"
				rel="stylesheet"
			/>

			<motion.div
				className="mt-8"
				style={{ fontFamily: "'DM Sans', sans-serif" }}
				initial={{ opacity: 0, y: 14 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
			>
				<p style={{
					fontSize: "9px",
					letterSpacing: "0.24em",
					textTransform: "uppercase",
					color: "rgba(255,255,255,0.3)",
					marginBottom: "8px",
					fontWeight: 400,
				}}>
					You might also like
				</p>
				<h3 style={{
					fontFamily: "'Cormorant Garamond', Georgia, serif",
					fontSize: "clamp(1.5rem, 3vw, 1.9rem)",
					fontWeight: 300,
					fontStyle: "italic",
					color: "rgba(255,255,255,0.92)",
					margin: 0,
					lineHeight: 1.1,
				}}>
					People also{" "}
					<span style={{ fontStyle: "normal", fontWeight: 400, color: "#ffffff" }}>
						bought
					</span>
				</h3>

				<div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
					{recommendations.map((product) => (
						<ProductCard key={product._id} product={product} />
					))}
				</div>
			</motion.div>
		</>
	);
};
export default PeopleAlsoBought;
