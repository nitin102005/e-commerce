import { Navigate, Route, Routes } from "react-router-dom";

import HomePage from "./pages/HomePage";
import SignUpPage from "./pages/SignUpPage";
import LoginPage from "./pages/LoginPage";
import AdminPage from "./pages/AdminPage";
import CategoryPage from "./pages/CategoryPage";

import Navbar from "./components/Navbar";
import { Toaster } from "react-hot-toast";
import { useUserStore } from "./stores/useUserStore";
import { useEffect } from "react";
import LoadingSpinner from "./components/LoadingSpinner";
import CartPage from "./pages/CartPage";
import { useCartStore } from "./stores/useCartStore";
import PurchaseSuccessPage from "./pages/PurchaseSuccessPage";
import PurchaseCancelPage from "./pages/PurchaseCancelPage";

function App() {
	const { user, checkAuth, checkingAuth } = useUserStore();
	const { getCartItems } = useCartStore();

	useEffect(() => {
		checkAuth();
	}, [checkAuth]);

	useEffect(() => {
		if (!user) return;
		getCartItems();
	}, [getCartItems, user]);

	if (checkingAuth) return <LoadingSpinner />;

	return (
		<div className="min-h-screen text-white relative overflow-hidden" style={{ background: "#080c12" }}>

			{/* ── Designer background ── */}
			<div
				aria-hidden="true"
				style={{
					position: "fixed",
					inset: 0,
					zIndex: 0,
					pointerEvents: "none",
					overflow: "hidden",
				}}
			>
				{/* Base gradient — deep navy to near-black */}
				<div style={{
					position: "absolute",
					inset: 0,
					background: "linear-gradient(135deg, #0b1120 0%, #080c12 45%, #060a0f 100%)",
				}} />

				{/* Emerald aurora — top-left corner */}
				<div style={{
					position: "absolute",
					top: "-180px",
					left: "-140px",
					width: "700px",
					height: "700px",
					background: "radial-gradient(ellipse at center, rgba(16,185,129,0.18) 0%, rgba(5,150,105,0.08) 40%, transparent 70%)",
					borderRadius: "50%",
					filter: "blur(40px)",
				}} />

				{/* Teal mid-accent — upper center */}
				<div style={{
					position: "absolute",
					top: "-60px",
					left: "50%",
					transform: "translateX(-50%)",
					width: "900px",
					height: "380px",
					background: "radial-gradient(ellipse at center, rgba(20,184,166,0.07) 0%, transparent 65%)",
					filter: "blur(30px)",
				}} />

				{/* Indigo accent — bottom right */}
				<div style={{
					position: "absolute",
					bottom: "-200px",
					right: "-160px",
					width: "750px",
					height: "750px",
					background: "radial-gradient(ellipse at center, rgba(99,102,241,0.1) 0%, rgba(79,70,229,0.04) 45%, transparent 70%)",
					borderRadius: "50%",
					filter: "blur(50px)",
				}} />

				{/* Subtle grid overlay — gives depth without noise */}
				<div style={{
					position: "absolute",
					inset: 0,
					backgroundImage: `
						linear-gradient(rgba(255,255,255,0.022) 1px, transparent 1px),
						linear-gradient(90deg, rgba(255,255,255,0.022) 1px, transparent 1px)
					`,
					backgroundSize: "64px 64px",
					maskImage: "radial-gradient(ellipse 80% 80% at 50% 0%, black 40%, transparent 100%)",
					WebkitMaskImage: "radial-gradient(ellipse 80% 80% at 50% 0%, black 40%, transparent 100%)",
				}} />

				{/* Noise grain for texture */}
				<svg style={{ position: "absolute", inset: 0, width: "100%", height: "100%", opacity: 0.035 }}>
					<filter id="grain">
						<feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="3" stitchTiles="stitch" />
						<feColorMatrix type="saturate" values="0" />
					</filter>
					<rect width="100%" height="100%" filter="url(#grain)" />
				</svg>
			</div>

			{/* ── Page shell ── */}
			<div className="relative z-10 lg:px-10 lg:py-1">
				<Navbar />

				<Routes>
					<Route path="/" element={<HomePage />} />
					<Route path="/signup" element={!user ? <SignUpPage /> : <Navigate to="/" />} />
					<Route path="/login" element={!user ? <LoginPage /> : <Navigate to="/" />} />
					<Route
						path="/secret-dashboard"
						element={user?.role === "admin" ? <AdminPage /> : <Navigate to="/login" />}
					/>
					<Route path="/category/:category" element={<CategoryPage />} />
					<Route path="/cart" element={user ? <CartPage /> : <Navigate to="/login" />} />
					<Route
						path="/purchase-success"
						element={user ? <PurchaseSuccessPage /> : <Navigate to="/login" />}
					/>
					<Route
						path="/purchase-cancel"
						element={user ? <PurchaseCancelPage /> : <Navigate to="/login" />}
					/>
				</Routes>
			</div>

			<Toaster />
		</div>
	);
}

export default App;