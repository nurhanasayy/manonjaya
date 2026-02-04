import { motion } from "framer-motion";
import type { ReactNode } from "react";

interface StaggerContainerProps {
	children: ReactNode;
	className?: string;
	staggerDelay?: number;
	viewport?: {
		once?: boolean;
		margin?: string;
		amount?: number | "some" | "all";
	};
}

const containerVariants = {
	hidden: { opacity: 0 },
	visible: (staggerDelay: number) => ({
		opacity: 1,
		transition: {
			staggerChildren: staggerDelay,
		},
	}),
};

export const itemVariants = {
	hidden: { opacity: 0, y: 30 },
	visible: {
		opacity: 1,
		y: 0,
		transition: {
			duration: 0.5,
			ease: [0.25, 0.4, 0.25, 1],
		},
	},
};

export function StaggerContainer({
	children,
	className = "",
	staggerDelay = 0.1,
	viewport = { once: true, margin: "-100px" },
}: StaggerContainerProps) {
	return (
		<motion.div
			className={className}
			variants={containerVariants}
			initial="hidden"
			whileInView="visible"
			viewport={viewport}
			custom={staggerDelay}
		>
			{children}
		</motion.div>
	);
}

export function StaggerItem({
	children,
	className = "",
}: {
	children: ReactNode;
	className?: string;
}) {
	return (
		<motion.div className={className} variants={itemVariants}>
			{children}
		</motion.div>
	);
}
