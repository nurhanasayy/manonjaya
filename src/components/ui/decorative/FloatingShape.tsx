import { motion } from "framer-motion";

interface FloatingShapeProps {
	shape?: "circle" | "square" | "triangle";
	size?: number;
	color?: string;
	className?: string;
	delay?: number;
	duration?: number;
}

export function FloatingShape({
	shape = "circle",
	size = 100,
	color = "copper-500",
	className = "",
	delay = 0,
	duration = 6,
}: FloatingShapeProps) {
	const shapeStyles = {
		circle: "rounded-full",
		square: "rounded-lg",
		triangle: "clip-triangle",
	};

	return (
		<motion.div
			className={`absolute ${shapeStyles[shape]} bg-${color} opacity-10 blur-3xl pointer-events-none ${className}`}
			style={{
				width: size,
				height: size,
			}}
			animate={{
				y: [-20, 20, -20],
				x: [-10, 10, -10],
				scale: [1, 1.1, 1],
			}}
			transition={{
				duration,
				repeat: Number.POSITIVE_INFINITY,
				ease: "easeInOut",
				delay,
			}}
		/>
	);
}
