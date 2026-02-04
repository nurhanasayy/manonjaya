import { motion } from "framer-motion";
import type { ReactNode } from "react";

interface ButtonProps {
	children: ReactNode;
	variant?:
		| "primary"
		| "secondary"
		| "outline"
		| "copper-gradient"
		| "ghost-copper"
		| "neumorphic";
	href?: string;
	onClick?: () => void;
	className?: string;
	fullWidth?: boolean;
	icon?: ReactNode;
	iconPosition?: "left" | "right";
	disabled?: boolean;
}

export function Button({
	children,
	variant = "primary",
	href,
	onClick,
	className = "",
	fullWidth = false,
	icon,
	iconPosition = "right",
	disabled = false,
}: ButtonProps) {
	const baseStyles =
		"inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg font-semibold transition-all duration-200 min-h-[44px] text-center relative overflow-hidden";

	const variantStyles = {
		primary: "bg-primary text-white hover:bg-primary-light active:scale-95",
		secondary: "bg-secondary text-white hover:bg-orange-600 active:scale-95",
		outline:
			"border-2 border-primary text-primary hover:bg-primary hover:text-white active:scale-95",
		"copper-gradient":
			"bg-gradient-to-r from-copper-600 to-copper-400 text-white hover:shadow-glow-copper hover:scale-[1.02] active:scale-95 font-bold",
		"ghost-copper":
			"border-2 border-slate-600 text-slate-100 hover:border-copper-500 hover:text-copper-500 hover:shadow-glow-copper active:scale-95",
		neumorphic:
			"bg-slate-800 text-slate-100 hover:bg-slate-700 active:scale-95",
	};

	const widthStyle = fullWidth ? "w-full" : "";
	const disabledStyle = disabled ? "opacity-50 cursor-not-allowed" : "";
	const allStyles = `${baseStyles} ${variantStyles[variant]} ${widthStyle} ${disabledStyle} ${className}`;

	const content = (
		<>
			{/* Shine effect for copper-gradient */}
			{variant === "copper-gradient" && (
				<motion.div
					className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
					initial={{ x: "-100%" }}
					whileHover={{ x: "100%" }}
					transition={{ duration: 0.6 }}
				/>
			)}

			{/* Icon left */}
			{icon && iconPosition === "left" && (
				<motion.span
					whileHover={{ x: -2 }}
					transition={{ duration: 0.2 }}
					className="relative z-10"
				>
					{icon}
				</motion.span>
			)}

			<span className="relative z-10">{children}</span>

			{/* Icon right */}
			{icon && iconPosition === "right" && (
				<motion.span
					whileHover={{ x: 2 }}
					transition={{ duration: 0.2 }}
					className="relative z-10"
				>
					{icon}
				</motion.span>
			)}
		</>
	);

	if (href) {
		return (
			<motion.a
				href={href}
				className={allStyles}
				whileHover={{ scale: variant === "copper-gradient" ? 1.02 : 1 }}
				whileTap={{ scale: 0.95 }}
			>
				{content}
			</motion.a>
		);
	}

	return (
		<motion.button
			type="button"
			onClick={onClick}
			className={allStyles}
			disabled={disabled}
			whileHover={{ scale: variant === "copper-gradient" ? 1.02 : 1 }}
			whileTap={{ scale: 0.95 }}
		>
			{content}
		</motion.button>
	);
}
