import { motion } from "framer-motion";
import { Hammer, Package, Sparkles, Wrench, Zap } from "lucide-react";
import { productCategories } from "../../data/content";
import { Container } from "../ui/Container";

const iconMap = {
	Package,
	Hammer,
	Sparkles,
	Zap,
	Wrench,
};

interface ProductCardProps {
	title: string;
	description: string;
	icon: string;
	items: string[];
	index: number;
}

function ProductCard({
	title,
	description,
	icon,
	items,
	index,
}: ProductCardProps) {
	const Icon = iconMap[icon as keyof typeof iconMap];

	return (
		<motion.div
			className="group"
			initial={{ opacity: 0, x: -30 }}
			whileInView={{ opacity: 1, x: 0 }}
			viewport={{ once: true, margin: "-50px" }}
			transition={{
				duration: 0.5,
				delay: index * 0.1,
				ease: [0.25, 0.4, 0.25, 1],
			}}
		>
			<div className="relative flex flex-col sm:flex-row items-start gap-6 p-6 md:p-8 rounded-2xl glass-dark border border-white/10 transition-all duration-300 hover:border-copper-500/40 hover:shadow-glow-copper hover:-translate-y-1">
				{/* Background gradient on hover */}
				<div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-copper-500/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

				{/* Icon */}
				<motion.div
					className="relative flex-shrink-0 w-20 h-20 bg-gradient-to-br from-copper-500 to-copper-600 rounded-2xl flex items-center justify-center shadow-lg"
					whileHover={{ scale: 1.05, rotate: 3 }}
					transition={{ duration: 0.3 }}
				>
					<Icon className="w-10 h-10 text-white" />
				</motion.div>

				{/* Content */}
				<div className="relative flex-1 min-w-0">
					<h3 className="font-display text-xl md:text-2xl font-bold text-slate-50 mb-2">
						{title}
					</h3>

					<p className="text-slate-400 mb-4 leading-relaxed">
						{description}
					</p>

					{/* Items as inline tags */}
					<div className="flex flex-wrap gap-2">
						{items.map((item) => (
							<span
								key={item}
								className="inline-flex items-center gap-1.5 px-3 py-1.5 text-sm text-slate-300 bg-slate-800/50 border border-slate-700/50 rounded-lg transition-colors hover:border-copper-500/30 hover:text-slate-100"
							>
								<span className="w-1 h-1 bg-copper-500 rounded-full" />
								{item}
							</span>
						))}
					</div>
				</div>

				{/* Corner accents */}
				<div className="absolute top-0 right-0 w-5 h-5 border-t-2 border-r-2 border-copper-500/0 rounded-tr-lg group-hover:border-copper-500/30 transition-colors" />
				<div className="absolute bottom-0 left-0 w-5 h-5 border-b-2 border-l-2 border-copper-500/0 rounded-bl-lg group-hover:border-copper-500/30 transition-colors" />
			</div>
		</motion.div>
	);
}

export function ProductCategories() {
	return (
		<section className="relative py-20 md:py-28 bg-slate-950 overflow-hidden">
			{/* Decorative gradient orbs */}
			<div className="absolute top-20 left-10 w-72 h-72 bg-copper-500/5 rounded-full blur-3xl" />
			<div className="absolute bottom-20 right-10 w-96 h-96 bg-copper-600/5 rounded-full blur-3xl" />

			<Container>
				{/* Section Header */}
				<motion.div
					className="mb-12 md:mb-16"
					initial={{ opacity: 0, y: 30 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.6 }}
				>
					{/* Eyebrow */}
					<div className="flex items-center gap-4 mb-4">
						<span className="text-copper-400 text-sm font-semibold tracking-[0.2em] uppercase">
							Produk Kami
						</span>
						<div className="h-[1px] w-12 bg-gradient-to-r from-copper-500 to-transparent" />
					</div>

					<h2 className="font-display text-4xl md:text-5xl font-bold text-slate-50 mb-4">
						Rangkaian Lengkap
						<span className="block text-gradient-copper">Material Bangunan</span>
					</h2>

					<p className="text-lg text-slate-400 max-w-xl">
						Semua yang Anda butuhkan untuk proyek konstruksi, tersedia di satu
						tempat dengan kualitas terjamin
					</p>
				</motion.div>

				{/* Horizontal Cards Stack */}
				<div className="space-y-4 md:space-y-5">
					{productCategories.map((category, idx) => (
						<ProductCard
							key={category.title}
							title={category.title}
							description={category.description}
							icon={category.icon}
							items={category.items}
							index={idx}
						/>
					))}
				</div>
			</Container>
		</section>
	);
}
