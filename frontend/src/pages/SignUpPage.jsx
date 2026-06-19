import { useState } from "react";
import { Link } from "react-router-dom";
import { UserPlus, Mail, Lock, User, ArrowRight, Loader } from "lucide-react";
import { motion } from "framer-motion";
import { useUserStore } from "../stores/useUserStore";

const SignUpPage = () => {
	const [formData, setFormData] = useState({
		name: "",
		email: "",
		password: "",
		confirmPassword: "",
	});

	const { signup, loading } = useUserStore();

	const handleSubmit = (e) => {
		e.preventDefault();
		signup(formData);
	};

	const inputStyle = {
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
	};

	const labelStyle = {
		display: "block",
		fontSize: "10px",
		fontWeight: 400,
		letterSpacing: "0.14em",
		textTransform: "uppercase",
		color: "rgba(255,255,255,0.35)",
		marginBottom: "8px",
	};

	const iconStyle = {
		position: "absolute",
		left: "14px",
		top: "50%",
		transform: "translateY(-50%)",
		color: "rgba(255,255,255,0.25)",
		pointerEvents: "none",
	};

	const fields = [
		{ id: "name",            label: "Full name",       type: "text",     key: "name",            Icon: User,  placeholder: "John Doe" },
		{ id: "email",           label: "Email",           type: "email",    key: "email",           Icon: Mail,  placeholder: "you@example.com" },
		{ id: "password",        label: "Password",        type: "password", key: "password",        Icon: Lock,  placeholder: "••••••••" },
		{ id: "confirmPassword", label: "Confirm password",type: "password", key: "confirmPassword", Icon: Lock,  placeholder: "••••••••" },
	];

	return (
		<>
			<link rel="preconnect" href="https://fonts.googleapis.com" />
			<link
				href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;1,300;1,400&family=DM+Sans:wght@300;400;500&display=swap"
				rel="stylesheet"
			/>

			<style>{`
				.su-input::placeholder { color: rgba(255,255,255,0.2); }
				.su-input:focus { border-color: rgba(255,255,255,0.35) !important; }
				.su-btn:hover:not(:disabled) { background: rgba(255,255,255,0.95) !important; }
				.su-btn:active:not(:disabled) { transform: scale(0.985); }
				.su-link:hover { color: rgba(255,255,255,0.65) !important; }
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
						style={{ textAlign: "center", marginBottom: "36px" }}
						initial={{ opacity: 0, y: -18 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
					>
						{/* Logo mark */}
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
							Get started
						</p>

						<h2 style={{
							fontFamily: "'Cormorant Garamond', Georgia, serif",
							fontSize: "clamp(1.9rem, 5vw, 2.6rem)",
							fontWeight: 300,
							fontStyle: "italic",
							color: "rgba(255,255,255,0.92)",
							margin: 0,
							lineHeight: 1.1,
							letterSpacing: "0.01em",
						}}>
							Create Account
							{/* <span style={{ fontStyle: "normal", fontWeight: 400, color: "#ffffff" }}>
								
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
							padding: "30px 28px 26px",
							backdropFilter: "blur(20px)",
							WebkitBackdropFilter: "blur(20px)",
						}}>
							<form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "14px" }}>

								{fields.map(({ id, label, type, key, Icon, placeholder }) => (
									<div key={id}>
										<label htmlFor={id} style={labelStyle}>{label}</label>
										<div style={{ position: "relative" }}>
											<Icon size={14} strokeWidth={1.5} style={iconStyle} />
											<input
												id={id}
												type={type}
												required
												value={formData[key]}
												onChange={(e) => setFormData({ ...formData, [key]: e.target.value })}
												placeholder={placeholder}
												className="su-input"
												style={inputStyle}
											/>
										</div>
									</div>
								))}

								{/* Submit */}
								<button
									type="submit"
									disabled={loading}
									className="su-btn"
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
										<><Loader size={14} strokeWidth={2} className="animate-spin" /> Creating account…</>
									) : (
										<><UserPlus size={14} strokeWidth={2} /> Sign up</>
									)}
								</button>
							</form>

							{/* Divider */}
							<div style={{
								display: "flex",
								alignItems: "center",
								gap: "10px",
								margin: "20px 0 16px",
							}}>
								<div style={{ flex: 1, height: "1px", background: "rgba(255,255,255,0.07)" }} />
								<span style={{ fontSize: "9px", color: "rgba(255,255,255,0.2)", letterSpacing: "0.14em", textTransform: "uppercase" }}>
									Have an account
								</span>
								<div style={{ flex: 1, height: "1px", background: "rgba(255,255,255,0.07)" }} />
							</div>

							{/* Login link */}
							<p style={{
								textAlign: "center",
								fontSize: "13px",
								color: "rgba(255,255,255,0.28)",
								margin: 0,
								fontWeight: 300,
							}}>
								Already registered?{" "}
								<Link
									to="/login"
									className="su-link"
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
									Log in <ArrowRight size={11} strokeWidth={2} />
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

export default SignUpPage;