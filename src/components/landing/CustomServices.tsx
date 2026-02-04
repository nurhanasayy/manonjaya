import { motion } from "framer-motion";
import {
	ArrowRight,
	CheckCircle,
	Construction,
	MessageSquare,
	Settings,
} from "lucide-react";
import { contactInfo, customServices } from "../../data/content";
import { Button } from "../ui/Button";
import { Card } from "../ui/Card";
import { Container } from "../ui/Container";
import { Section } from "../ui/Section";
import { FadeInView } from "../ui/animated/FadeInView";

const iconMap = {
	Settings,
	Construction,
	MessageSquare,
};

export function CustomServices() {
	return (
		<Section background="gray" id="layanan-custom">
			<Container>
				<FadeInView className="text-center mb-16">
					<h2 className="font-display text-4xl md:text-5xl font-bold text-slate-900 mb-4">
						Solusi Custom untuk Proyek Anda
					</h2>
					<p className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto">
						Tidak hanya menjual material, kami juga menyediakan layanan khusus
						untuk kebutuhan proyek Anda
					</p>
				</FadeInView>

				{/* Staggered diagonal cards */}
				<div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
					{/* Connecting dots/lines between services */}
					<div className="hidden md:block absolute top-1/2 left-0 right-0 h-px bg-gradient-to-r from-transparent via-copper-500/30 to-transparent -translate-y-1/2" />

					{customServices.map((service, index) => {
						const Icon = iconMap[service.icon as keyof typeof iconMap];

						// Staggered vertical offsets
						const offsetClass =
							index === 0 ? "md:mt-0" : index === 1 ? "md:mt-8" : "md:mt-16";

						return (
							<motion.div
								key={service.title}
								className={offsetClass}
								initial={{ opacity: 0, y: 50 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true, margin: "-100px" }}
								transition={{ duration: 0.6, delay: index * 0.2 }}
							>
								<Card
									variant="elevated"
									hover
									cornerAccent
									className="h-full bg-white group relative"
								>
									{/* Enlarged icon with animated gradient background */}
									<div className="mb-6 relative">
										<motion.div
											className="w-20 h-20 bg-gradient-to-br from-copper-500 to-copper-600 rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-glow-copper transition-all"
											whileHover={{ rotate: 5, scale: 1.1 }}
										>
											<Icon className="w-10 h-10 text-white" />
										</motion.div>
										{/* Connecting dot */}
										<div className="hidden md:block absolute top-1/2 -right-8 w-2 h-2 bg-copper-500 rounded-full shadow-glow-copper" />
									</div>

									<h3 className="font-display text-2xl font-bold text-slate-900 mb-3">
										{service.title}
									</h3>
									<p className="text-slate-600 mb-6">{service.description}</p>

									{/* Benefits list that slides in on hover */}
									<div className="space-y-3">
										{service.benefits.map((benefit, idx) => (
											<motion.div
												key={benefit}
												className="flex items-start gap-3"
												initial={{ opacity: 0, x: -10 }}
												whileInView={{ opacity: 1, x: 0 }}
												viewport={{ once: true }}
												transition={{ delay: 0.3 + idx * 0.1 }}
											>
												<CheckCircle className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" />
												<span className="text-sm text-slate-700">{benefit}</span>
											</motion.div>
										))}
									</div>

									{/* CTA button floating outside card on hover */}
									<motion.div
										className="mt-6 opacity-0 group-hover:opacity-100 transition-opacity"
										initial={{ y: 10 }}
										whileHover={{ y: 0 }}
									>
										<Button
											variant="ghost-copper"
											href={`https://wa.me/${contactInfo.whatsapp.replace(/[^0-9]/g, "")}`}
											className="w-full"
											icon={<ArrowRight className="w-4 h-4" />}
											iconPosition="right"
										>
											Pelajari Lebih Lanjut
										</Button>
									</motion.div>
								</Card>
							</motion.div>
						);
					})}
				</div>

				<FadeInView className="text-center mt-12" delay={0.6}>
					<Button
						variant="copper-gradient"
						href={`https://wa.me/${contactInfo.whatsapp.replace(/[^0-9]/g, "")}`}
						icon={<MessageSquare className="w-5 h-5" />}
						iconPosition="left"
						className="text-lg px-8 py-4"
					>
						Diskusikan Proyek Anda
					</Button>
				</FadeInView>
			</Container>
		</Section>
	);
}
