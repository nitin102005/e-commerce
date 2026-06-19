import { ShoppingCart, UserPlus, LogIn, LogOut, Lock } from "lucide-react";
import { Link } from "react-router-dom";
import { useUserStore } from "../stores/useUserStore";
import { useCartStore } from "../stores/useCartStore";

const Navbar = () => {
	const { user, logout } = useUserStore();
	const isAdmin = user?.role === "admin";
	const { cart } = useCartStore();

	return (
		<>
			<header
				style={{
					position: "relative",
					top: "8px",
					left: "50%",
					transform: "translateX(-50%)",
					width: "100%",
					maxWidth: "100%",
					zIndex: 50,
					borderRadius: "999px",
					background: "rgba(255, 255, 255, 0.9)",
					backdropFilter: "blur(18px) saturate(160%)",
					WebkitBackdropFilter: "blur(18px) saturate(160%)",
					border: "1px solid rgba(255, 255, 255, 0.55)",
					boxShadow: "0 2px 24px rgba(0,0,0,0.07), 0 1px 2px rgba(0,0,0,0.04)",
				}}
			>
				<div
					style={{
						display: "flex",
						alignItems: "center",
						justifyContent: "space-between",
						paddingLeft: "20px",
						paddingRight: "12px",
						height: "48px",
					}}
				>
					{/* Wordmark */}
					<Link
						to="/"
						style={{
							fontFamily: "'DM Sans', 'Inter', sans-serif",
							fontWeight: 600,
							fontSize: "15px",
							letterSpacing: "-0.01em",
							color: "#111",
							textDecoration: "none",
							display: "flex",
							alignItems: "center",
							gap: "6px",
							whiteSpace: "nowrap",
						}}
					>
						<span
							style={{
								display: "inline-block",
								width: "20px",
								height: "20px",
								borderRadius: "6px",
								background: "linear-gradient(135deg, #000000, #000000)",
								flexShrink: 0,
							}}
						/>
						E-Commerce
					</Link>

					{/* Nav items */}
					<nav
						style={{
							display: "flex",
							alignItems: "center",
							gap: "4px",
						}}
					>
						{/* Home */}
						<Link
							to="/"
							style={{
								fontFamily: "'DM Sans', 'Inter', sans-serif",
								fontSize: "13.5px",
								fontWeight: 500,
								color: "#444",
								textDecoration: "none",
								padding: "6px 12px",
								borderRadius: "999px",
								transition: "background 0.15s, color 0.15s",
							}}
							onMouseEnter={e => {
								e.currentTarget.style.background = "rgba(0,0,0,0.05)";
								e.currentTarget.style.color = "#111";
							}}
							onMouseLeave={e => {
								e.currentTarget.style.background = "transparent";
								e.currentTarget.style.color = "#444";
							}}
						>
							Home
						</Link>

						{/* Cart */}
						{user && (
							<Link
								to="/cart"
								style={{
									position: "relative",
									display: "flex",
									alignItems: "center",
									gap: "5px",
									fontFamily: "'DM Sans', 'Inter', sans-serif",
									fontSize: "13.5px",
									fontWeight: 500,
									color: "#444",
									textDecoration: "none",
									padding: "6px 12px",
									borderRadius: "999px",
									transition: "background 0.15s, color 0.15s",
								}}
								onMouseEnter={e => {
									e.currentTarget.style.background = "rgba(0,0,0,0.05)";
									e.currentTarget.style.color = "#111";
								}}
								onMouseLeave={e => {
									e.currentTarget.style.background = "transparent";
									e.currentTarget.style.color = "#444";
								}}
							>
								<span style={{ position: "relative", display: "flex", alignItems: "center" }}>
									<ShoppingCart size={16} strokeWidth={2} />
									{cart.length > 0 && (
										<span
											style={{
												position: "absolute",
												top: "-7px",
												right: "-8px",
												background: "#059669",
												color: "#fff",
												fontSize: "10px",
												fontWeight: 700,
												lineHeight: 1,
												borderRadius: "999px",
												padding: "2px 5px",
												minWidth: "16px",
												textAlign: "center",
											}}
										>
											{cart.length}
										</span>
									)}
								</span>
								<span className="hidden sm:inline">Cart</span>
							</Link>
						)}

						{/* Dashboard */}
						{isAdmin && (
							<Link
								to="/secret-dashboard"
								style={{
									display: "flex",
									alignItems: "center",
									gap: "5px",
									fontFamily: "'DM Sans', 'Inter', sans-serif",
									fontSize: "13px",
									fontWeight: 600,
									color: "#065f46",
									textDecoration: "none",
									padding: "6px 12px",
									borderRadius: "999px",
									background: "rgba(5, 150, 105, 0.1)",
									border: "1px solid rgba(5, 150, 105, 0.2)",
									transition: "background 0.15s, border-color 0.15s",
								}}
								onMouseEnter={e => {
									e.currentTarget.style.background = "rgba(5, 150, 105, 0.18)";
									e.currentTarget.style.borderColor = "rgba(5, 150, 105, 0.35)";
								}}
								onMouseLeave={e => {
									e.currentTarget.style.background = "rgba(5, 150, 105, 0.1)";
									e.currentTarget.style.borderColor = "rgba(5, 150, 105, 0.2)";
								}}
							>
								<Lock size={13} strokeWidth={2.5} />
								<span className="hidden sm:inline">Dashboard</span>
							</Link>
						)}

						{/* Divider */}
						<span
							style={{
								width: "1px",
								height: "18px",
								background: "rgba(0,0,0,0.12)",
								margin: "0 4px",
							}}
						/>

						{/* Auth buttons */}
						{user ? (
							<button
								onClick={logout}
								style={{
									display: "flex",
									alignItems: "center",
									gap: "5px",
									fontFamily: "'DM Sans', 'Inter', sans-serif",
									fontSize: "13px",
									fontWeight: 500,
									color: "#555",
									background: "transparent",
									border: "1px solid rgba(0,0,0,0.12)",
									padding: "6px 12px",
									borderRadius: "999px",
									cursor: "pointer",
									transition: "background 0.15s, color 0.15s",
								}}
								onMouseEnter={e => {
									e.currentTarget.style.background = "rgba(0,0,0,0.05)";
									e.currentTarget.style.color = "#111";
								}}
								onMouseLeave={e => {
									e.currentTarget.style.background = "transparent";
									e.currentTarget.style.color = "#555";
								}}
							>
								<LogOut size={14} strokeWidth={2} />
								<span className="hidden sm:inline">Log out</span>
							</button>
						) : (
							<>
								<Link
									to="/signup"
									style={{
										display: "flex",
										alignItems: "center",
										gap: "5px",
										fontFamily: "'DM Sans', 'Inter', sans-serif",
										fontSize: "13px",
										fontWeight: 500,
										color: "#555",
										textDecoration: "none",
										padding: "6px 12px",
										borderRadius: "999px",
										border: "1px solid rgba(0,0,0,0.12)",
										background: "transparent",
										transition: "background 0.15s, color 0.15s",
									}}
									onMouseEnter={e => {
										e.currentTarget.style.background = "rgba(0,0,0,0.05)";
										e.currentTarget.style.color = "#111";
									}}
									onMouseLeave={e => {
										e.currentTarget.style.background = "transparent";
										e.currentTarget.style.color = "#555";
									}}
								>
									<UserPlus size={14} strokeWidth={2} />
									<span className="hidden sm:inline">Sign up</span>
								</Link>

								<Link
									to="/login"
									style={{
										display: "flex",
										alignItems: "center",
										gap: "5px",
										fontFamily: "'DM Sans', 'Inter', sans-serif",
										fontSize: "13px",
										fontWeight: 600,
										color: "#fff",
										textDecoration: "none",
										padding: "6px 14px",
										borderRadius: "999px",
										background: "#111",
										border: "1px solid transparent",
										transition: "background 0.15s",
									}}
									onMouseEnter={e => {
										e.currentTarget.style.background = "#333";
									}}
									onMouseLeave={e => {
										e.currentTarget.style.background = "#111";
									}}
								>
									<LogIn size={14} strokeWidth={2} />
									<span className="hidden sm:inline">Log in</span>
								</Link>
							</>
						)}
					</nav>
				</div>
			</header>

			
		</>
	);
};

export default Navbar;