import { motion } from "framer-motion";
import { ArrowRight, Phone } from "lucide-react";
import { contactInfo } from "../../data/content";
import { Button } from "../ui/Button";
import { Container } from "../ui/Container";

// Architectural corner bracket component
function ArchitecturalCorner({
	position,
}: { position: "top-left" | "bottom-right" }) {
	const isTopLeft = position === "top-left";

	return (
		<motion.svg
			className={`absolute w-24 h-24 ${isTopLeft ? "top-8 left-8" : "bottom-28 right-8"}`}
			viewBox="0 0 100 100"
			fill="none"
			initial={{ pathLength: 0, opacity: 0 }}
			animate={{ pathLength: 1, opacity: 1 }}
			transition={{ duration: 1.2, ease: "easeOut" }}
		>
			<motion.path
				d={
					isTopLeft
						? "M 0 40 L 0 0 L 40 0"
						: "M 100 60 L 100 100 L 60 100"
				}
				stroke="url(#cornerGradient)"
				strokeWidth="2"
				strokeLinecap="round"
				initial={{ pathLength: 0 }}
				animate={{ pathLength: 1 }}
				transition={{ duration: 1.2, ease: "easeOut", delay: 0.2 }}
			/>
			<defs>
				<linearGradient id="cornerGradient" x1="0%" y1="0%" x2="100%" y2="100%">
					<stop offset="0%" stopColor="#5a7aae" />
					<stop offset="100%" stopColor="#324a6e" />
				</linearGradient>
			</defs>
		</motion.svg>
	);
}

// Diagonal construction beam accent
function ConstructionBeam() {
	return (
		<motion.div
			className="absolute top-0 right-0 w-full h-full overflow-hidden pointer-events-none"
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			transition={{ duration: 1, delay: 0.5 }}
		>
			<div
				className="absolute -right-40 top-20 w-[800px] h-[2px] bg-gradient-to-r from-transparent via-copper-500/20 to-transparent"
				style={{ transform: "rotate(-35deg)" }}
			/>
			<div
				className="absolute -right-40 top-32 w-[600px] h-[1px] bg-gradient-to-r from-transparent via-copper-500/10 to-transparent"
				style={{ transform: "rotate(-35deg)" }}
			/>
		</motion.div>
	);
}

export function HeroSection() {
	return (
		<section className="relative gradient-mesh-animated blueprint-grid min-h-[95vh] flex items-center overflow-hidden">
			{/* Architectural corner brackets */}
			<ArchitecturalCorner position="top-left" />
			<ArchitecturalCorner position="bottom-right" />

			{/* Diagonal construction beam */}
			<ConstructionBeam />

			{/* Floating background shapes */}
			<motion.div
				className="absolute top-20 right-20 w-96 h-96 rounded-full bg-copper-500/5 blur-3xl"
				animate={{
					scale: [1, 1.1, 1],
					opacity: [0.05, 0.08, 0.05],
				}}
				transition={{
					duration: 8,
					repeat: Number.POSITIVE_INFINITY,
					ease: "easeInOut",
				}}
			/>
			<motion.div
				className="absolute bottom-40 left-10 w-64 h-64 rounded-full bg-copper-600/5 blur-3xl"
				animate={{
					scale: [1, 1.15, 1],
					opacity: [0.04, 0.07, 0.04],
				}}
				transition={{
					duration: 10,
					repeat: Number.POSITIVE_INFINITY,
					ease: "easeInOut",
					delay: 2,
				}}
			/>

			{/* Radial gradient overlay for depth */}
			<div className="absolute inset-0 bg-radial-gradient pointer-events-none"
				style={{
					background: "radial-gradient(ellipse 80% 60% at 30% 40%, transparent 0%, rgba(10, 15, 26, 0.4) 100%)"
				}}
			/>

			<Container>
				<div className="flex flex-col items-center justify-center text-center py-20 lg:py-28">
					{/* Content - Centered */}
					<motion.div
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						transition={{ duration: 0.6 }}
						className="max-w-4xl"
					>
						{/* Eyebrow badge with decorative lines */}
						<motion.div
							className="flex items-center justify-center gap-4 mb-6"
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ delay: 0.2, duration: 0.5 }}
						>
							<div className="h-[1px] w-12 bg-gradient-to-r from-transparent to-copper-500" />
							<span className="text-copper-400 text-sm font-semibold tracking-[0.2em] uppercase">
								Mitra Terpercaya
							</span>
							<div className="h-[1px] w-12 bg-gradient-to-l from-transparent to-copper-500" />
						</motion.div>

						{/* Main headline with dramatic sizing */}
						<motion.h1
							className="font-display mb-8"
							initial={{ opacity: 0, y: 30 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ delay: 0.3, duration: 0.6 }}
						>
							<span className="block text-3xl md:text-4xl font-medium text-slate-400 mb-2">
								untuk Material
							</span>
							<span className="block text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-slate-50 leading-[1] tracking-[-0.02em]">
								Bangunan
							</span>
							<span className="block text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold leading-[1] tracking-[-0.02em]">
								<span className="text-gradient-copper">Berkualitas</span>
							</span>
							{/* Copper underline accent - centered */}
							<motion.div
								className="mt-6 h-1 mx-auto bg-gradient-to-r from-transparent via-copper-500 to-transparent rounded-full"
								initial={{ width: 0 }}
								animate={{ width: "60%" }}
								transition={{ delay: 0.8, duration: 0.6, ease: "easeOut" }}
							/>
						</motion.h1>

						{/* Subtitle */}
						<motion.p
							className="text-lg md:text-xl text-slate-400 mb-10 max-w-2xl mx-auto leading-relaxed"
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ delay: 0.5, duration: 0.5 }}
						>
							Dari pondasi hingga finishing — solusi lengkap untuk proyek
							konstruksi Anda dengan kualitas terjamin dan harga kompetitif.
						</motion.p>

						{/* CTAs */}
						<motion.div
							className="flex flex-col sm:flex-row gap-4 justify-center"
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ delay: 0.6, duration: 0.5 }}
						>
							<Button
								variant="copper-gradient"
								href={`https://wa.me/${contactInfo.whatsapp.replace(/[^0-9]/g, "")}`}
								icon={<ArrowRight className="w-5 h-5" />}
								iconPosition="right"
								className="text-lg px-8 py-4"
							>
								Dapatkan Estimasi Gratis
							</Button>
							<Button
								variant="ghost-copper"
								href={`tel:${contactInfo.phone}`}
								icon={<Phone className="w-5 h-5" />}
								iconPosition="left"
								className="text-lg px-8 py-4"
							>
								Hubungi Kami
							</Button>
						</motion.div>
					</motion.div>
				</div>
			</Container>

			{/* Curved bottom transition */}
			<div className="absolute bottom-0 left-0 right-0 h-24 -mb-1">
				<svg
					viewBox="0 0 1440 120"
					className="w-full h-full"
					preserveAspectRatio="none"
				>
					<path
						d="M0,96 C240,32 480,0 720,0 C960,0 1200,32 1440,96 L1440,120 L0,120 Z"
						className="fill-slate-950"
					/>
				</svg>
			</div>
		</section>
	);
}
