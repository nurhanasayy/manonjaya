interface DividerProps {
	variant?: "simple" | "dots" | "gradient";
	className?: string;
}

export function Divider({ variant = "simple", className = "" }: DividerProps) {
	if (variant === "dots") {
		return (
			<div className={`flex items-center justify-center gap-2 ${className}`}>
				<div className="w-1 h-1 rounded-full bg-copper-500" />
				<div className="flex-1 h-px bg-gradient-to-r from-transparent via-slate-600 to-transparent" />
				<div className="w-2 h-2 rounded-full bg-copper-500" />
				<div className="flex-1 h-px bg-gradient-to-r from-transparent via-slate-600 to-transparent" />
				<div className="w-1 h-1 rounded-full bg-copper-500" />
			</div>
		);
	}

	if (variant === "gradient") {
		return (
			<div
				className={`h-px bg-gradient-to-r from-transparent via-copper-500 to-transparent ${className}`}
			/>
		);
	}

	return <div className={`h-px bg-slate-600 ${className}`} />;
}
