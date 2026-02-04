import { motion } from "framer-motion";
import { Calculator, Phone, ShoppingCart, Truck } from "lucide-react";
import { useState } from "react";
import { processSteps } from "../../data/content";
import { Container } from "../ui/Container";
import { Section } from "../ui/Section";
import { FadeInView } from "../ui/animated/FadeInView";
import { ProgressBar } from "../ui/decorative/ProgressBar";

const iconMap = {
	Phone,
	Calculator,
	ShoppingCart,
	Truck,
};

export function HowItWorks() {
	const [activeStep, setActiveStep] = useState(0);

	return (
		<Section background="gray" id="cara-kerja" className="overflow-hidden">
			<Container>
				<FadeInView className="text-center mb-16">
					<h2 className="font-display text-4xl md:text-5xl font-bold text-slate-900 mb-4">
						Proses Sederhana, Hasil Berkualitas
					</h2>
					<p className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto">
						Empat langkah mudah untuk mendapatkan material berkualitas untuk
						proyek Anda
					</p>
				</FadeInView>

				{/* Progress bar showing position */}
				<div className="mb-12">
					<ProgressBar
						progress={((activeStep + 1) / processSteps.length) * 100}
						max={100}
						showMarker={true}
					/>
				</div>

				{/* Desktop: Horizontal timeline */}
				<div className="hidden md:grid md:grid-cols-4 gap-6 relative">
					{/* Connecting line */}
					<div className="absolute top-20 left-0 right-0 h-1 bg-gradient-to-r from-copper-600 via-copper-500 to-copper-400 -z-0" />

					{processSteps.map((step, index) => {
						const Icon = iconMap[step.icon as keyof typeof iconMap];
						const isActive = activeStep === index;

						return (
							<motion.div
								key={step.title}
								className="relative"
								initial={{ opacity: 0, y: 30 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true }}
								transition={{ delay: index * 0.2 }}
								onMouseEnter={() => setActiveStep(index)}
							>
								{/* Large background number */}
								<div className="absolute -top-8 left-1/2 -translate-x-1/2 font-display text-8xl font-bold text-slate-200 -z-10">
									{String(index + 1).padStart(2, "0")}
								</div>

								<motion.div
									className={`relative bg-white rounded-2xl p-6 shadow-md cursor-pointer transition-all ${isActive ? "shadow-glow-copper border-2 border-copper-500" : "border-2 border-transparent"}`}
									whileHover={{ y: -8, scale: 1.02 }}
								>
									{/* Icon circle with number badge */}
									<div className="flex justify-center mb-6 relative">
										<div className="w-20 h-20 bg-gradient-to-br from-copper-500 to-copper-600 rounded-full flex items-center justify-center shadow-lg">
											<Icon className="w-10 h-10 text-white" />
										</div>
										<div className="absolute -top-2 -right-2 w-8 h-8 bg-slate-900 rounded-full flex items-center justify-center text-white font-bold text-sm border-2 border-white">
											{index + 1}
										</div>
									</div>

									<h3 className="font-display text-xl font-bold text-slate-900 mb-3 text-center">
										{step.title}
									</h3>
									<p className="text-slate-600 text-sm text-center leading-relaxed">
										{step.description}
									</p>
								</motion.div>
							</motion.div>
						);
					})}
				</div>

				{/* Mobile: Vertical timeline */}
				<div className="md:hidden space-y-8">
					{processSteps.map((step, index) => {
						const Icon = iconMap[step.icon as keyof typeof iconMap];

						return (
							<motion.div
								key={step.title}
								className="flex gap-6"
								initial={{ opacity: 0, x: -30 }}
								whileInView={{ opacity: 1, x: 0 }}
								viewport={{ once: true }}
								transition={{ delay: index * 0.15 }}
							>
								{/* Timeline track */}
								<div className="flex flex-col items-center">
									<div className="w-16 h-16 bg-gradient-to-br from-copper-500 to-copper-600 rounded-full flex items-center justify-center shadow-lg flex-shrink-0 relative">
										<Icon className="w-8 h-8 text-white" />
										<div className="absolute -top-1 -right-1 w-6 h-6 bg-slate-900 rounded-full flex items-center justify-center text-white font-bold text-xs border-2 border-white">
											{index + 1}
										</div>
									</div>
									{index < processSteps.length - 1 && (
										<div className="w-1 flex-1 bg-gradient-to-b from-copper-500 to-copper-400 mt-2" />
									)}
								</div>

								{/* Content */}
								<div className="flex-1 bg-white rounded-xl p-6 shadow-md">
									<h3 className="font-display text-xl font-bold text-slate-900 mb-2">
										{step.title}
									</h3>
									<p className="text-slate-600 text-sm">{step.description}</p>
								</div>
							</motion.div>
						);
					})}
				</div>
			</Container>
		</Section>
	);
}
