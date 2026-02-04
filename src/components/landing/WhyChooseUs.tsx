import { motion } from "framer-motion";
import {
	BadgeCheck,
	CheckCircle,
	DollarSign,
	Truck,
	Users,
} from "lucide-react";
import { trustPoints } from "../../data/content";
import { Container } from "../ui/Container";
import { Section } from "../ui/Section";
import { FadeInView } from "../ui/animated/FadeInView";

const iconMap = {
	BadgeCheck,
	DollarSign,
	Truck,
	Users,
	CheckCircle,
};

export function WhyChooseUs() {
	return (
		<Section background="gradient-mesh" id="keunggulan" pattern="grid">
			<Container>
				<FadeInView className="text-center mb-16">
					<h2 className="font-display text-4xl md:text-5xl font-bold mb-4 text-slate-100">
						Mengapa Pembangun Mempercayai Manon Jaya
					</h2>
					<p className="text-lg md:text-xl text-slate-300 max-w-2xl mx-auto">
						Komitmen kami terhadap kualitas, harga, dan layanan membuat kami
						pilihan terbaik
					</p>
				</FadeInView>

				{/* Radial/circular layout */}
				<div className="relative max-w-5xl mx-auto">
					{/* Center circle */}
					<motion.div
						className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 glass-dark rounded-full flex items-center justify-center z-10 border border-copper-500/30"
						initial={{ scale: 0, opacity: 0 }}
						whileInView={{ scale: 1, opacity: 1 }}
						viewport={{ once: true }}
						transition={{ duration: 0.6, delay: 0.3 }}
					>
						<div className="text-center">
							<div className="font-display text-2xl font-bold text-gradient-copper">
								Manon
							</div>
							<div className="font-display text-2xl font-bold text-gradient-copper">
								Jaya
							</div>
						</div>
					</motion.div>

					{/* Trust points in radial pattern */}
					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pt-12 lg:pt-0">
						{trustPoints.map((point, index) => {
							const Icon = iconMap[point.icon as keyof typeof iconMap];
							const angle = (index * 360) / trustPoints.length;
							const isLargeScreen = typeof window !== "undefined" && window.innerWidth >= 1024;

							return (
								<motion.div
									key={point.title}
									className="text-center lg:absolute"
									initial={{ opacity: 0, scale: 0.8 }}
									whileInView={{ opacity: 1, scale: 1 }}
									viewport={{ once: true }}
									transition={{ duration: 0.5, delay: index * 0.1 }}
									style={
										isLargeScreen
											? {
													// Radial positioning for large screens
													top: `${50 + 40 * Math.sin((angle * Math.PI) / 180)}%`,
													left: `${50 + 40 * Math.cos((angle * Math.PI) / 180)}%`,
													transform: "translate(-50%, -50%)",
												}
											: {}
									}
								>
									<motion.div
										className="glass-dark p-6 rounded-2xl border border-slate-700/50 max-w-xs mx-auto group hover:border-copper-500/50 transition-all"
										whileHover={{ scale: 1.05, y: -4 }}
									>
										{/* Icon with glow effect */}
										<div className="flex justify-center mb-4">
											<div className="relative">
												<div className="w-16 h-16 bg-gradient-to-br from-copper-500 to-copper-600 rounded-full flex items-center justify-center shadow-lg group-hover:shadow-glow-copper transition-all">
													<Icon className="w-8 h-8 text-white" />
												</div>
												{/* Glow ring */}
												<div className="absolute inset-0 rounded-full bg-copper-500 opacity-0 group-hover:opacity-20 blur-xl transition-opacity" />
											</div>
										</div>

										<h3 className="font-display text-xl font-bold mb-2 text-slate-100">
											{point.title}
										</h3>
										<p className="text-slate-300 text-sm">{point.description}</p>

										{/* Connecting line (only visible on large screens) */}
										<svg
											className="hidden lg:block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none opacity-20 -z-10"
											width="200"
											height="200"
										>
											<line
												x1="100"
												y1="100"
												x2={100 - 40 * Math.cos((angle * Math.PI) / 180)}
												y2={100 - 40 * Math.sin((angle * Math.PI) / 180)}
												stroke="currentColor"
												strokeWidth="1"
												className="text-copper-500"
											/>
										</svg>
									</motion.div>
								</motion.div>
							);
						})}
					</div>
				</div>
			</Container>
		</Section>
	);
}
