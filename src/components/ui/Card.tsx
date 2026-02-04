import { motion } from "framer-motion";
import type { ReactNode } from "react";

interface CardProps {
	children: ReactNode;
	className?: string;
	hover?: boolean;
	variant?: "default" | "glass" | "glass-dark" | "elevated" | "neumorphic";
	cornerAccent?: boolean;
}

export function Card({
	children,
	className = "",
	hover = false,
	variant = "default",
	cornerAccent = false,
}: CardProps) {
	const variantStyles = {
		default: "bg-white rounded-xl shadow-md",
		glass:
			"glass rounded-2xl border border-white/20 shadow-lg backdrop-blur-xl",
		"glass-dark":
			"glass-dark rounded-2xl border border-white/10 shadow-xl backdrop-blur-xl",
		elevated:
			"bg-slate-800 rounded-2xl shadow-elevated border border-slate-700/50",
		neumorphic: "bg-slate-800 rounded-2xl shadow-neumorphic",
	};

	const hoverStyles = hover
		? "hover:shadow-xl hover:-translate-y-2 transition-all duration-300 cursor-pointer"
		: "transition-all duration-300";

	const CardComponent = hover ? motion.div : "div";
	const motionProps = hover
		? {
				whileHover: {
					y: -8,
					transition: { duration: 0.3 },
				},
			}
		: {};

	return (
		<CardComponent
			className={`${variantStyles[variant]} ${hoverStyles} p-6 relative ${className}`}
			{...motionProps}
		>
			{cornerAccent && (
				<>
					<div className="absolute top-0 left-0 w-5 h-5 border-t-2 border-l-2 border-copper-500" />
					<div className="absolute bottom-0 right-0 w-5 h-5 border-b-2 border-r-2 border-copper-500" />
				</>
			)}

			{/* Gradient overlay on hover */}
			{hover && variant !== "default" && (
				<motion.div
					className="absolute inset-0 rounded-2xl bg-gradient-to-br from-copper-500/10 to-transparent opacity-0 pointer-events-none"
					initial={{ opacity: 0 }}
					whileHover={{ opacity: 1 }}
					transition={{ duration: 0.3 }}
				/>
			)}

			<div className="relative z-10">{children}</div>
		</CardComponent>
	);
}
