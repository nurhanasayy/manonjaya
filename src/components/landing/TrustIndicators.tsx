import { motion } from "framer-motion";
import { Award, Quote, Star, TrendingUp } from "lucide-react";
import { businessInfo, testimonials, trustStats } from "../../data/content";
import { Card } from "../ui/Card";
import { Container } from "../ui/Container";
import { Section } from "../ui/Section";
import { CountUp } from "../ui/animated/CountUp";
import { FadeInView } from "../ui/animated/FadeInView";
import { Divider } from "../ui/decorative/Divider";

export function TrustIndicators() {
	const [featuredTestimonial, ...otherTestimonials] = testimonials;

	return (
		<Section background="white" id="testimoni">
			<Container>
				<FadeInView className="text-center mb-16">
					<h2 className="font-display text-4xl md:text-5xl font-bold text-slate-900 mb-4">
						Dipercaya oleh Ratusan Pelanggan
					</h2>
					<p className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto">
						Kepuasan pelanggan adalah prioritas utama kami
					</p>
				</FadeInView>

				{/* Magazine-style asymmetric layout */}
				<div className="grid lg:grid-cols-[60%_40%] gap-8 mb-12">
					{/* Featured testimonial (large, left) */}
					<motion.div
						initial={{ opacity: 0, x: -30 }}
						whileInView={{ opacity: 1, x: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.6 }}
					>
						<Card
							variant="elevated"
							className="h-full bg-gradient-to-br from-slate-900 to-slate-800 text-white p-8 md:p-12 relative overflow-hidden"
						>
							{/* Large decorative quote mark */}
							<Quote className="absolute top-8 right-8 w-32 h-32 text-copper-500/10" />

							<div className="relative z-10">
								{/* Star ratings with pop animation */}
								<div className="flex gap-1 mb-6">
									{[...Array(featuredTestimonial.rating)].map((_, i) => (
										<motion.div
											key={i}
											initial={{ scale: 0 }}
											whileInView={{ scale: 1 }}
											viewport={{ once: true }}
											transition={{ delay: i * 0.1, type: "spring" }}
										>
											<Star className="w-6 h-6 fill-yellow-400 text-yellow-400" />
										</motion.div>
									))}
								</div>

								<p className="text-xl md:text-2xl font-medium mb-8 italic leading-relaxed">
									"{featuredTestimonial.text}"
								</p>

								<Divider variant="gradient" className="mb-6" />

								<div className="flex items-center gap-4">
									<div className="w-16 h-16 bg-gradient-to-br from-copper-500 to-copper-600 rounded-full flex items-center justify-center text-white font-display font-bold text-xl">
										{featuredTestimonial.name.charAt(0)}
									</div>
									<div>
										<p className="font-display font-bold text-lg">
											{featuredTestimonial.name}
										</p>
										<p className="text-slate-300">
											{featuredTestimonial.role}
										</p>
									</div>
								</div>
							</div>
						</Card>
					</motion.div>

					{/* Stats column (right) */}
					<div className="space-y-6">
						{[
							{
								icon: Award,
								value: 14,
								suffix: " Tahun",
								label: "Melayani dengan Pengalaman",
								color: "copper",
							},
							{
								icon: TrendingUp,
								value: 500,
								suffix: "+",
								label: "Proyek Telah Dilayani",
								color: "emerald",
							},
							{
								icon: Star,
								value: 98,
								suffix: "%",
								label: "Kepuasan Pelanggan",
								color: "yellow",
							},
						].map((stat, index) => (
							<motion.div
								key={stat.label}
								initial={{ opacity: 0, y: 20 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true }}
								transition={{ delay: index * 0.2 }}
							>
								<Card
									variant="glass-dark"
									className="bg-slate-50 border-slate-200 p-6"
								>
									<div className="flex items-center gap-4">
										<div
											className={`w-12 h-12 ${stat.color === "copper" ? "bg-gradient-to-br from-copper-500 to-copper-600" : stat.color === "emerald" ? "bg-emerald-500" : "bg-yellow-500"} rounded-xl flex items-center justify-center`}
										>
											<stat.icon className="w-6 h-6 text-white" />
										</div>
										<div className="flex-1">
											<div className="font-display text-3xl font-bold text-gradient-copper">
												<CountUp value={stat.value} suffix={stat.suffix} />
											</div>
											<p className="text-slate-600 text-sm">{stat.label}</p>
										</div>
									</div>
								</Card>
							</motion.div>
						))}
					</div>
				</div>

				{/* 2 smaller testimonials below */}
				<div className="grid md:grid-cols-2 gap-6 mb-12">
					{otherTestimonials.map((testimonial, index) => (
						<motion.div
							key={testimonial.name}
							initial={{ opacity: 0, y: 30 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ delay: index * 0.2 }}
						>
							<Card hover className="h-full bg-slate-50 border-slate-200">
								<div className="flex gap-1 mb-4">
									{[...Array(testimonial.rating)].map((_, i) => (
										<Star
											key={i}
											className="w-4 h-4 fill-yellow-400 text-yellow-400"
										/>
									))}
								</div>
								<p className="text-slate-700 mb-4 italic">
									"{testimonial.text}"
								</p>
								<Divider className="my-4" />
								<div className="flex items-center gap-3">
									<div className="w-10 h-10 bg-gradient-to-br from-copper-500 to-copper-600 rounded-full flex items-center justify-center text-white font-display font-bold text-sm">
										{testimonial.name.charAt(0)}
									</div>
									<div>
										<p className="font-semibold text-slate-900">
											{testimonial.name}
										</p>
										<p className="text-sm text-slate-600">{testimonial.role}</p>
									</div>
								</div>
							</Card>
						</motion.div>
					))}
				</div>

				{/* Premium dealer badge section */}
				<FadeInView delay={0.4}>
					<div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-slate-900 to-slate-800 p-8 text-center">
						{/* Decorative corner accents */}
						<div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-copper-500" />
						<div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-copper-500" />

						<p className="text-sm font-semibold text-copper-400 mb-3 tracking-wider uppercase">
							Dealer Resmi
						</p>
						<div className="flex flex-wrap justify-center gap-4 md:gap-8">
							{["Semen Gresik", "Rucika", "Pipa Wavin", "Cat Dulux"].map(
								(brand) => (
									<motion.div
										key={brand}
										className="font-display text-lg md:text-xl text-slate-100 font-semibold"
										whileHover={{ scale: 1.05, color: "#f97316" }}
									>
										{brand}
									</motion.div>
								)
							)}
						</div>
					</div>
				</FadeInView>
			</Container>
		</Section>
	);
}
