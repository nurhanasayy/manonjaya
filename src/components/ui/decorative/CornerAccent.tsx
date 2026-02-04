interface CornerAccentProps {
	position?: "top-left" | "top-right" | "bottom-left" | "bottom-right" | "all";
	size?: "sm" | "md" | "lg";
	color?: "copper" | "slate" | "steel";
	className?: string;
}

const sizeMap = {
	sm: "w-3 h-3",
	md: "w-5 h-5",
	lg: "w-8 h-8",
};

const colorMap = {
	copper: "border-copper-500",
	slate: "border-slate-400",
	steel: "border-steel-500",
};

export function CornerAccent({
	position = "all",
	size = "md",
	color = "copper",
	className = "",
}: CornerAccentProps) {
	const sizeClass = sizeMap[size];
	const colorClass = colorMap[color];
	const baseClass = `absolute ${sizeClass} border-2 ${colorClass}`;

	const positions = {
		"top-left": (
			<div
				className={`${baseClass} top-0 left-0 border-r-0 border-b-0 ${className}`}
			/>
		),
		"top-right": (
			<div
				className={`${baseClass} top-0 right-0 border-l-0 border-b-0 ${className}`}
			/>
		),
		"bottom-left": (
			<div
				className={`${baseClass} bottom-0 left-0 border-r-0 border-t-0 ${className}`}
			/>
		),
		"bottom-right": (
			<div
				className={`${baseClass} bottom-0 right-0 border-l-0 border-t-0 ${className}`}
			/>
		),
		all: (
			<>
				<div className={`${baseClass} top-0 left-0 border-r-0 border-b-0`} />
				<div className={`${baseClass} top-0 right-0 border-l-0 border-b-0`} />
				<div className={`${baseClass} bottom-0 left-0 border-r-0 border-t-0`} />
				<div className={`${baseClass} bottom-0 right-0 border-l-0 border-t-0`} />
			</>
		),
	};

	return <>{positions[position]}</>;
}
