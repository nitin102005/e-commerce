import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { LogIn, Mail, Lock, ArrowRight, Loader } from "lucide-react";
import { useUserStore } from "../stores/useUserStore";

const LoginPage = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const { login, loading } = useUserStore();

	const handleSubmit = (e) => {
		e.preventDefault();
		console.log(email, password);
		login(email, password);
	};

	return (
		<>
			<link rel="preconnect" href="https://fonts.googleapis.com" />
			<link
				href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;1,300;1,400&family=DM+Sans:wght@300;400;500&display=swap"
				rel="stylesheet"
			/>

			<style>{`
				.login-input::placeholder { color: rgba(255,255,255,0.2); }
				.login-input:focus { border-color: rgba(255,255,255,0.35) !important; }
				.login-btn:hover { background: rgba(255,255,255,0.95) !important; }
				.login-btn:active { transform: scale(0.985); }
				.signup-link:hover { color: rgba(255,255,255,0.6) !important; }
			`}</style>

			<div style={{
				minHeight: "100vh",
				display: "flex",
				alignItems: "center",
				justifyContent: "center",
				padding: "48px 16px",
				fontFamily: "'DM Sans', sans-serif",
			}}>
				<div style={{ width: "100%", maxWidth: "400px" }}>

					{/* ── Header ── */}
					<motion.div
						style={{ textAlign: "center", marginBottom: "40px" }}
						initial={{ opacity: 0, y: -18 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
					>
						{/* Minimal monogram mark */}
						<div style={{
							width: "44px",
							height: "44px",
							borderRadius: "14px",
							border: "1px solid rgba(255,255,255,0.12)",
							margin: "0 auto 24px",
							display: "flex",
							alignItems: "center",
							justifyContent: "center",
							background: "rgba(255,255,255,0.04)",
						}}>
							<svg width="18" height="18" viewBox="0 0 18 18" fill="none">
								<rect x="1" y="1" width="7" height="7" rx="2" fill="rgba(255,255,255,0.7)" />
								<rect x="10" y="1" width="7" height="7" rx="2" fill="rgba(255,255,255,0.25)" />
								<rect x="1" y="10" width="7" height="7" rx="2" fill="rgba(255,255,255,0.25)" />
								<rect x="10" y="10" width="7" height="7" rx="2" fill="rgba(255,255,255,0.5)" />
							</svg>
						</div>

						<p style={{
							fontSize: "9px",
							letterSpacing: "0.24em",
							textTransform: "uppercase",
							color: "rgba(255,255,255,0.3)",
							marginBottom: "12px",
							fontWeight: 400,
						}}>
							Welcome back
						</p>

						<h2 style={{
							fontFamily: "'Cormorant Garamond', Georgia, serif",
							fontSize: "clamp(2rem, 5vw, 2.6rem)",
							fontWeight: 300,
							fontStyle: "italic",
							color: "rgba(255,255,255,0.92)",
							margin: 0,
							lineHeight: 1.1,
							letterSpacing: "0.01em",
						}}>
							Sign In 
							{/* <span style={{
								fontStyle: "normal",
								fontWeight: 400,
								color: "#ffffff",
							}}>
								your account
							</span> */}
						</h2>
					</motion.div>

					{/* ── Card ── */}
					<motion.div
						initial={{ opacity: 0, y: 22 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.65, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
					>
						<div style={{
							background: "rgba(255,255,255,0.04)",
							border: "1px solid rgba(255,255,255,0.09)",
							borderRadius: "22px",
							padding: "32px 28px 28px",
							backdropFilter: "blur(20px)",
							WebkitBackdropFilter: "blur(20px)",
						}}>

							<form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "16px" }}>

								{/* Email */}
								<div>
									<label htmlFor="email" style={{
										display: "block",
										fontSize: "10px",
										fontWeight: 400,
										letterSpacing: "0.14em",
										textTransform: "uppercase",
										color: "rgba(255,255,255,0.35)",
										marginBottom: "8px",
									}}>
										Email
									</label>
									<div style={{ position: "relative" }}>
										<Mail
											size={14}
											strokeWidth={1.5}
											style={{
												position: "absolute",
												left: "14px",
												top: "50%",
												transform: "translateY(-50%)",
												color: "rgba(255,255,255,0.25)",
												pointerEvents: "none",
											}}
										/>
										<input
											id="email"
											type="email"
											required
											value={email}
											onChange={(e) => setEmail(e.target.value)}
											placeholder="you@example.com"
											className="login-input"
											style={{
												width: "100%",
												padding: "11px 14px 11px 38px",
												background: "rgba(255,255,255,0.05)",
												border: "1px solid rgba(255,255,255,0.1)",
												borderRadius: "10px",
												color: "rgba(255,255,255,0.88)",
												fontSize: "13.5px",
												fontFamily: "'DM Sans', sans-serif",
												fontWeight: 300,
												outline: "none",
												transition: "border-color 0.18s",
												boxSizing: "border-box",
											}}
										/>
									</div>
								</div>

								{/* Password */}
								<div>
									<label htmlFor="password" style={{
										display: "block",
										fontSize: "10px",
										fontWeight: 400,
										letterSpacing: "0.14em",
										textTransform: "uppercase",
										color: "rgba(255,255,255,0.35)",
										marginBottom: "8px",
									}}>
										Password
									</label>
									<div style={{ position: "relative" }}>
										<Lock
											size={14}
											strokeWidth={1.5}
											style={{
												position: "absolute",
												left: "14px",
												top: "50%",
												transform: "translateY(-50%)",
												color: "rgba(255,255,255,0.25)",
												pointerEvents: "none",
											}}
										/>
										<input
											id="password"
											type="password"
											required
											value={password}
											onChange={(e) => setPassword(e.target.value)}
											placeholder="••••••••"
											className="login-input"
											style={{
												width: "100%",
												padding: "11px 14px 11px 38px",
												background: "rgba(255,255,255,0.05)",
												border: "1px solid rgba(255,255,255,0.1)",
												borderRadius: "10px",
												color: "rgba(255,255,255,0.88)",
												fontSize: "13.5px",
												fontFamily: "'DM Sans', sans-serif",
												fontWeight: 300,
												outline: "none",
												transition: "border-color 0.18s",
												boxSizing: "border-box",
											}}
										/>
									</div>
								</div>

								{/* Submit */}
								<button
									type="submit"
									disabled={loading}
									className="login-btn"
									style={{
										marginTop: "6px",
										width: "100%",
										display: "flex",
										alignItems: "center",
										justifyContent: "center",
										gap: "7px",
										padding: "12px 20px",
										background: loading ? "rgba(255,255,255,0.1)" : "#ffffff",
										border: "none",
										borderRadius: "10px",
										color: loading ? "rgba(255,255,255,0.3)" : "#0d0d0d",
										fontSize: "12px",
										fontFamily: "'DM Sans', sans-serif",
										fontWeight: 500,
										letterSpacing: "0.1em",
										textTransform: "uppercase",
										cursor: loading ? "not-allowed" : "pointer",
										transition: "background 0.18s, transform 0.12s",
										opacity: loading ? 0.5 : 1,
									}}
								>
									{loading ? (
										<><Loader size={14} strokeWidth={2} className="animate-spin" /> Signing in…</>
									) : (
										<><LogIn size={14} strokeWidth={2} /> Log in</>
									)}
								</button>
							</form>

							{/* Divider */}
							<div style={{
								display: "flex",
								alignItems: "center",
								gap: "10px",
								margin: "22px 0 18px",
							}}>
								<div style={{ flex: 1, height: "1px", background: "rgba(255,255,255,0.07)" }} />
								<span style={{ fontSize: "9px", color: "rgba(255,255,255,0.2)", letterSpacing: "0.14em", textTransform: "uppercase" }}>
									New here
								</span>
								<div style={{ flex: 1, height: "1px", background: "rgba(255,255,255,0.07)" }} />
							</div>

							{/* Sign up */}
							<p style={{
								textAlign: "center",
								fontSize: "13px",
								color: "rgba(255,255,255,0.28)",
								margin: 0,
								fontWeight: 300,
							}}>
								Don't have an account?{" "}
								<Link
									to="/signup"
									className="signup-link"
									style={{
										color: "rgba(255,255,255,0.55)",
										textDecoration: "none",
										fontWeight: 400,
										display: "inline-flex",
										alignItems: "center",
										gap: "3px",
										transition: "color 0.18s",
									}}
								>
									Sign up <ArrowRight size={11} strokeWidth={2} />
								</Link>
							</p>
						</div>
					</motion.div>

					{/* Footer hint */}
					<motion.p
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						transition={{ duration: 0.5, delay: 0.4 }}
						style={{
							textAlign: "center",
							fontSize: "10px",
							color: "rgba(255,255,255,0.15)",
							marginTop: "28px",
							letterSpacing: "0.06em",
						}}
					>
						Secure · Private · Encrypted
					</motion.p>
				</div>
			</div>
		</>
	);
};

export default LoginPage;