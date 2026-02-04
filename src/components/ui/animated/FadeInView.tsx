import { motion } from "framer-motion";
import type { ReactNode } from "react";

interface FadeInViewProps {
	children: ReactNode;
	className?: string;
	delay?: number;
	duration?: number;
	direction?: "up" | "down" | "left" | "right" | "none";
	viewport?: {
		once?: boolean;
		margin?: string;
		amount?: number | "some" | "all";
	};
}

export function FadeInView({
	children,
	className = "",
	delay = 0,
	duration = 0.6,
	direction = "up",
	viewport = { once: true, margin: "-100px" },
}: FadeInViewProps) {
	const directions = {
		up: { y: 30 },
		down: { y: -30 },
		left: { x: 30 },
		right: { x: -30 },
		none: {},
	};

	return (
		<motion.div
			className={className}
			initial={{ opacity: 0, ...directions[direction] }}
			whileInView={{ opacity: 1, x: 0, y: 0 }}
			viewport={viewport}
			transition={{
				duration,
				delay,
				ease: [0.25, 0.4, 0.25, 1],
			}}
		>
			{children}
		</motion.div>
	);
}
