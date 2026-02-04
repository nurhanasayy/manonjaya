import { motion, useInView, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useRef } from "react";

interface CountUpProps {
	value: number;
	duration?: number;
	suffix?: string;
	prefix?: string;
	className?: string;
}

export function CountUp({
	value,
	duration = 2,
	suffix = "",
	prefix = "",
	className = "",
}: CountUpProps) {
	const ref = useRef<HTMLSpanElement>(null);
	const motionValue = useMotionValue(0);
	const springValue = useSpring(motionValue, {
		damping: 60,
		stiffness: 100,
	});
	const isInView = useInView(ref, { once: true, margin: "-100px" });

	useEffect(() => {
		if (isInView) {
			motionValue.set(value);
		}
	}, [motionValue, isInView, value]);

	useEffect(() => {
		const unsubscribe = springValue.on("change", (latest) => {
			if (ref.current) {
				ref.current.textContent = `${prefix}${Math.floor(latest).toLocaleString()}${suffix}`;
			}
		});
		return () => unsubscribe();
	}, [springValue, prefix, suffix]);

	return <span ref={ref} className={className} />;
}
