import { motion } from "framer-motion";
import { ArrowRight, Building, CheckCircle, Home } from "lucide-react";
import { contactInfo, customerSegments } from "../../data/content";
import { Button } from "../ui/Button";
import { Card } from "../ui/Card";
import { Container } from "../ui/Container";
import { Section } from "../ui/Section";
import { FadeInView } from "../ui/animated/FadeInView";

const iconMap = {
	Home,
	Building,
};

export function CustomerTypes() {
	return (
		<Section background="white" id="pelanggan">
			<Container>
				<FadeInView className="text-center mb-16">
					<h2 className="font-display text-4xl md:text-5xl font-bold text-slate-900 mb-4">
						Melayani Semua Kebutuhan Konstruksi
					</h2>
					<p className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto">
						Solusi tepat untuk pemilik rumah maupun kontraktor profesional
					</p>
				</FadeInView>

				{/* Split-screen cards */}
				<div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
					{customerSegments.map((segment, index) => {
						const Icon = iconMap[segment.icon as keyof typeof iconMap];
						const gradientClass =
							index === 0
								? "from-orange-500/10 to-copper-500/10"
								: "from-blue-500/10 to-steel-500/10";

						return (
							<motion.div
								key={segment.title}
								initial={{ opacity: 0, y: 30 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true }}
								transition={{ duration: 0.6, delay: index * 0.2 }}
							>
								<Card
									hover
									cornerAccent
									className={`h-full bg-gradient-to-br ${gradientClass} border-slate-200 group`}
								>
									{/* Icon */}
									<div className="mb-6">
										<div className="w-16 h-16 bg-gradient-to-br from-copper-500 to-copper-600 rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-glow-copper transition-all group-hover:scale-110">
											<Icon className="w-8 h-8 text-white" />
										</div>
									</div>

									<h3 className="font-display text-2xl md:text-3xl font-bold text-slate-900 mb-2">
										{segment.title}
									</h3>
									<p className="text-slate-600 mb-6 text-lg">
										{segment.subtitle}
									</p>

									{/* Benefits list */}
									<ul className="space-y-3 mb-8">
										{segment.benefits.map((benefit, idx) => (
											<motion.li
												key={benefit}
												className="flex items-start gap-3"
												initial={{ opacity: 0, x: -10 }}
												whileInView={{ opacity: 1, x: 0 }}
												viewport={{ once: true }}
												transition={{ delay: 0.3 + idx * 0.1 }}
											>
												<CheckCircle className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" />
												<span className="text-slate-700">{benefit}</span>
											</motion.li>
										))}
									</ul>

									<Button
										variant="copper-gradient"
										href={`https://wa.me/${contactInfo.whatsapp.replace(/[^0-9]/g, "")}`}
										fullWidth
										icon={<ArrowRight className="w-5 h-5" />}
										iconPosition="right"
									>
										Konsultasi Sekarang
									</Button>
								</Card>
							</motion.div>
						);
					})}
				</div>
			</Container>
		</Section>
	);
}
