// import { BarChart, PlusCircle, ShoppingBasket } from "lucide-react";
// import { useEffect, useState } from "react";
// import { motion } from "framer-motion";

// import AnalyticsTab from "../components/AnalyticsTab";
// import CreateProductForm from "../components/CreateProductForm";
// import ProductsList from "../components/ProductsList";
// import { useProductStore } from "../stores/useProductStore";

// const tabs = [
// 	{ id: "create", label: "Create Product", icon: PlusCircle },
// 	{ id: "products", label: "Products", icon: ShoppingBasket },
// 	{ id: "analytics", label: "Analytics", icon: BarChart },
// ];

// const AdminPage = () => {
// 	const [activeTab, setActiveTab] = useState("create");
// 	const { fetchAllProducts } = useProductStore();

// 	useEffect(() => {
// 		fetchAllProducts();
// 	}, [fetchAllProducts]);

// 	return (
// 		<div className='min-h-screen relative overflow-hidden'>
// 			<div className='relative z-10 container mx-auto px-4 py-16'>
// 				<motion.h1
// 					className='text-4xl font-bold mb-8 text-emerald-400 text-center'
// 					initial={{ opacity: 0, y: -20 }}
// 					animate={{ opacity: 1, y: 0 }}
// 					transition={{ duration: 0.8 }}
// 				>
// 					Admin Dashboard
// 				</motion.h1>

// 				<div className='flex justify-center mb-8'>
// 					{tabs.map((tab) => (
// 						<button
// 							key={tab.id}
// 							onClick={() => setActiveTab(tab.id)}
// 							className={`flex items-center px-4 py-2 mx-2 rounded-md transition-colors duration-200 ${
// 								activeTab === tab.id
// 									? "bg-emerald-600 text-white"
// 									: "bg-gray-700 text-gray-300 hover:bg-gray-600"
// 							}`}
// 						>
// 							<tab.icon className='mr-2 h-5 w-5' />
// 							{tab.label}
// 						</button>
// 					))}
// 				</div>
// 				{activeTab === "create" && <CreateProductForm />}
// 				{activeTab === "products" && <ProductsList />}
// 				{activeTab === "analytics" && <AnalyticsTab />}
// 			</div>
// 		</div>
// 	);
// };
// export default AdminPage;



import { BarChart, PlusCircle, ShoppingBasket } from "lucide-react";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

import AnalyticsTab from "../components/AnalyticsTab";
import CreateProductForm from "../components/CreateProductForm";
import ProductsList from "../components/ProductsList";
import { useProductStore } from "../stores/useProductStore";

const tabs = [
	{ id: "create", label: "Create Product", icon: PlusCircle },
	{ id: "products", label: "Products", icon: ShoppingBasket },
	{ id: "analytics", label: "Analytics", icon: BarChart },
];

const AdminPage = () => {
	const [activeTab, setActiveTab] = useState("create");
	const { fetchAllProducts } = useProductStore();

	useEffect(() => {
		fetchAllProducts();
	}, [fetchAllProducts]);

	return (
		<>
			<link rel="preconnect" href="https://fonts.googleapis.com" />
			<link
				href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;1,300;1,400&family=DM+Sans:wght@300;400;500&display=swap"
				rel="stylesheet"
			/>

			<style>{`
				.admin-tab { transition: background 0.18s, color 0.18s, border-color 0.18s; }
				.admin-tab:hover:not(.active) {
					background: rgba(255,255,255,0.07) !important;
					border-color: rgba(255,255,255,0.15) !important;
					color: rgba(255,255,255,0.75) !important;
				}
			`}</style>

			<div
				className="min-h-screen relative overflow-hidden"
				style={{ fontFamily: "'DM Sans', sans-serif" }}
			>
				<div className="relative z-10 container mx-auto px-4 py-14 max-w-5xl">

					{/* ── Header ── */}
					<motion.div
						style={{ textAlign: "center", marginBottom: "40px" }}
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
							Control panel
						</p>
						<h1 style={{
							fontFamily: "'Cormorant Garamond', Georgia, serif",
							fontSize: "clamp(2rem, 5vw, 2.8rem)",
							fontWeight: 300,
							fontStyle: "italic",
							color: "rgba(255,255,255,0.92)",
							margin: 0,
							lineHeight: 1.1,
							letterSpacing: "0.01em",
						}}>
							Admin{" "}
							<span style={{ fontStyle: "normal", fontWeight: 400, color: "#ffffff" }}>
								Dashboard
							</span>
						</h1>
					</motion.div>

					{/* ── Tab bar ── */}
					<motion.div
						style={{
							display: "flex",
							justifyContent: "center",
							gap: "8px",
							marginBottom: "32px",
							flexWrap: "wrap",
						}}
						initial={{ opacity: 0, y: 10 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.55, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
					>
						{tabs.map((tab) => {
							const isActive = activeTab === tab.id;
							return (
								<button
									key={tab.id}
									onClick={() => setActiveTab(tab.id)}
									className={`admin-tab${isActive ? " active" : ""}`}
									style={{
										display: "flex",
										alignItems: "center",
										gap: "7px",
										padding: "9px 18px",
										borderRadius: "999px",
										border: `1px solid ${isActive ? "rgba(255,255,255,0.3)" : "rgba(255,255,255,0.09)"}`,
										background: isActive ? "rgba(255,255,255,0.12)" : "rgba(255,255,255,0.04)",
										color: isActive ? "#ffffff" : "rgba(255,255,255,0.4)",
										fontSize: "12px",
										fontFamily: "'DM Sans', sans-serif",
										fontWeight: isActive ? 500 : 400,
										letterSpacing: "0.06em",
										textTransform: "uppercase",
										cursor: "pointer",
										backdropFilter: "blur(10px)",
										WebkitBackdropFilter: "blur(10px)",
									}}
								>
									<tab.icon size={14} strokeWidth={isActive ? 2 : 1.5} />
									{tab.label}
								</button>
							);
						})}
					</motion.div>

					{/* ── Tab content ── */}
					<motion.div
						key={activeTab}
						initial={{ opacity: 0, y: 12 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
						style={{
							background: "rgba(255,255,255,0.03)",
							border: "1px solid rgba(255,255,255,0.08)",
							borderRadius: "22px",
							padding: "32px 28px",
							backdropFilter: "blur(20px)",
							WebkitBackdropFilter: "blur(20px)",
						}}
					>
						{activeTab === "create"   && <CreateProductForm />}
						{activeTab === "products" && <ProductsList />}
						{activeTab === "analytics" && <AnalyticsTab />}
					</motion.div>

					{/* Footer hint */}
					<motion.p
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						transition={{ duration: 0.5, delay: 0.35 }}
						style={{
							textAlign: "center",
							fontSize: "10px",
							color: "rgba(255,255,255,0.12)",
							marginTop: "28px",
							letterSpacing: "0.06em",
						}}
					>
						Admin access only · Changes are live immediately
					</motion.p>
				</div>
			</div>
		</>
	);
};

export default AdminPage;