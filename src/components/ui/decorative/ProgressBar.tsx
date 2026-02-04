import { motion } from "framer-motion";

interface ProgressBarProps {
	progress: number;
	max?: number;
	showMarker?: boolean;
	className?: string;
}

export function ProgressBar({
	progress,
	max = 100,
	showMarker = true,
	className = "",
}: ProgressBarProps) {
	const percentage = (progress / max) * 100;

	return (
		<div className={`relative w-full ${className}`}>
			<div className="h-2 bg-slate-800 rounded-full overflow-hidden">
				<motion.div
					className="h-full bg-gradient-to-r from-copper-600 to-copper-400 rounded-full"
					initial={{ width: 0 }}
					animate={{ width: `${percentage}%` }}
					transition={{ duration: 1, ease: "easeOut" }}
				/>
			</div>

			{showMarker && (
				<motion.div
					className="absolute top-1/2 -translate-y-1/2 w-4 h-4 bg-copper-500 rounded-full border-2 border-slate-950 shadow-glow-copper"
					initial={{ left: 0 }}
					animate={{ left: `${percentage}%` }}
					transition={{ duration: 1, ease: "easeOut" }}
					style={{ marginLeft: "-8px" }}
				/>
			)}
		</div>
	);
}
