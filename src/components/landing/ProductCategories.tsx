import { Hammer, Package, Sparkles, Wrench, Zap } from "lucide-react";
import { productCategories } from "../../data/content";
import { Card } from "../ui/Card";
import { Container } from "../ui/Container";
import { Section } from "../ui/Section";
import {
	StaggerContainer,
	StaggerItem,
} from "../ui/animated/StaggerContainer";
import { FadeInView } from "../ui/animated/FadeInView";

const iconMap = {
	Package,
	Hammer,
	Sparkles,
	Zap,
	Wrench,
};

export function ProductCategories() {
	return (
		<Section background="white" id="produk">
			<Container>
				<FadeInView className="text-center mb-16">
					<h2 className="font-display text-4xl md:text-5xl font-bold text-slate-900 mb-4">
						Rangkaian Lengkap Material Bangunan
					</h2>
					<p className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto">
						Semua yang Anda butuhkan untuk proyek konstruksi, tersedia di satu
						tempat
					</p>
				</FadeInView>

				{/* Bento box grid - asymmetric layout */}
				<StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-fr">
					{productCategories.map((category, idx) => {
						const Icon = iconMap[category.icon as keyof typeof iconMap];

						// Different sizes for bento layout
						const gridClass =
							idx === 0
								? "lg:row-span-2" // Material Dasar - Large (2x height)
								: idx === 3
									? "lg:col-span-2" // Material Instalasi - Wide (2x width)
									: idx === 4
										? "lg:row-span-2" // Layanan Custom - Large vertical
										: ""; // Regular size for others

						return (
							<StaggerItem key={category.title} className={gridClass}>
								<Card
									variant="glass-dark"
									hover
									cornerAccent
									className="h-full bg-slate-50 border-slate-200 group"
								>
									{/* Icon container with gradient */}
									<div className="flex justify-center mb-6">
										<div className="relative">
											<div className="w-16 h-16 bg-gradient-to-br from-copper-500 to-copper-600 rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-glow-copper transition-all duration-300 group-hover:scale-110">
												<Icon className="w-8 h-8 text-white" />
											</div>
											{/* Decorative corner accent on icon */}
											<div className="absolute -top-1 -right-1 w-3 h-3 border-t-2 border-r-2 border-copper-400 opacity-0 group-hover:opacity-100 transition-opacity" />
										</div>
									</div>

									<h3 className="font-display text-xl md:text-2xl font-bold text-slate-900 mb-3 text-center">
										{category.title}
									</h3>

									<p className="text-slate-600 mb-6 text-center">
										{category.description}
									</p>

									{/* Items list with enhanced styling */}
									<ul className="space-y-3 text-sm text-slate-700">
										{category.items.map((item, itemIdx) => (
											<li
												key={item}
												className="flex items-center gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
												style={{
													transitionDelay: `${itemIdx * 50}ms`,
												}}
											>
												<span className="w-1.5 h-1.5 bg-copper-500 rounded-full flex-shrink-0" />
												<span>{item}</span>
											</li>
										))}
									</ul>

									{/* Gradient overlay on hover */}
									<div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-copper-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
								</Card>
							</StaggerItem>
						);
					})}
				</StaggerContainer>
			</Container>
		</Section>
	);
}
