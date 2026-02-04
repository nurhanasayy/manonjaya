import type { ReactNode } from "react";

interface SectionProps {
	children: ReactNode;
	className?: string;
	background?:
		| "white"
		| "gray"
		| "primary"
		| "secondary"
		| "gradient-mesh"
		| "dark"
		| "blueprint";
	id?: string;
	pattern?: "grid" | "dots" | "none";
	curved?: boolean;
}

export function Section({
	children,
	className = "",
	background = "white",
	id,
	pattern = "none",
	curved = false,
}: SectionProps) {
	const backgroundStyles = {
		white: "bg-white text-slate-900",
		gray: "bg-slate-50 text-slate-900",
		primary: "bg-primary text-white",
		secondary: "bg-secondary text-white",
		"gradient-mesh": "gradient-mesh-animated text-slate-100",
		dark: "bg-slate-900 text-slate-100",
		blueprint: "bg-slate-900 text-slate-100 blueprint-grid",
	};

	const patternStyles = {
		grid: "blueprint-grid",
		dots: "bg-[radial-gradient(circle,_rgba(100,116,139,0.1)_1px,_transparent_1px)] bg-[length:24px_24px]",
		none: "",
	};

	return (
		<section
			id={id}
			className={`py-12 md:py-16 lg:py-24 relative overflow-hidden ${backgroundStyles[background]} ${patternStyles[pattern]} ${className}`}
		>
			{curved && (
				<>
					{/* Top curve */}
					<div className="absolute top-0 left-0 right-0 h-12 -translate-y-1/2">
						<svg
							viewBox="0 0 1440 120"
							className="w-full h-full"
							preserveAspectRatio="none"
						>
							<path
								d="M0,0 Q720,120 1440,0 L1440,120 L0,120 Z"
								className={
									background === "dark" || background === "gradient-mesh"
										? "fill-slate-900"
										: "fill-white"
								}
							/>
						</svg>
					</div>

					{/* Bottom curve */}
					<div className="absolute bottom-0 left-0 right-0 h-12 translate-y-1/2">
						<svg
							viewBox="0 0 1440 120"
							className="w-full h-full"
							preserveAspectRatio="none"
						>
							<path
								d="M0,120 Q720,0 1440,120 L1440,0 L0,0 Z"
								className={
									background === "dark" || background === "gradient-mesh"
										? "fill-slate-900"
										: "fill-white"
								}
							/>
						</svg>
					</div>
				</>
			)}

			<div className="relative z-10">{children}</div>
		</section>
	);
}
