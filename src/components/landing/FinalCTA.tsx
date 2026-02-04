import { motion } from "framer-motion";
import {
	ArrowRight,
	Clock,
	Mail,
	MessageCircle,
	Phone,
	Truck,
} from "lucide-react";
import { contactInfo } from "../../data/content";
import { Button } from "../ui/Button";
import { Container } from "../ui/Container";
import { Section } from "../ui/Section";
import { FloatingShape } from "../ui/decorative/FloatingShape";

export function FinalCTA() {
	return (
		<Section background="gradient-mesh" className="relative overflow-hidden">
			{/* Floating shapes */}
			<FloatingShape shape="circle" size={300} className="top-10 right-10" />
			<FloatingShape shape="square" size={200} className="bottom-20 left-10" />

			<Container>
				<div className="grid lg:grid-cols-[65%_35%] gap-12 items-center">
					{/* Content - Left 65% */}
					<motion.div
						initial={{ opacity: 0, x: -30 }}
						whileInView={{ opacity: 1, x: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.6 }}
					>
						<h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-slate-100 mb-6 leading-tight">
							Siap Memulai <span className="text-gradient-copper">Proyek</span>{" "}
							Anda?
						</h2>
						<p className="text-lg md:text-xl text-slate-300 mb-8 max-w-2xl">
							Mari wujudkan proyek konstruksi Anda bersama. Hubungi kami hari
							ini untuk konsultasi gratis dan dapatkan estimasi terbaik!
						</p>

						{/* Contact buttons */}
						<div className="flex flex-col sm:flex-row gap-4 mb-8">
							<Button
								variant="copper-gradient"
								href={`https://wa.me/${contactInfo.whatsapp.replace(/[^0-9]/g, "")}`}
								icon={<MessageCircle className="w-5 h-5" />}
								iconPosition="left"
								className="text-lg px-8 py-4"
							>
								WhatsApp Kami
							</Button>
							<Button
								variant="ghost-copper"
								href={`tel:${contactInfo.phone}`}
								icon={<Phone className="w-5 h-5" />}
								iconPosition="left"
								className="text-lg px-8 py-4"
							>
								Telepon Sekarang
							</Button>
						</div>

						{/* Urgency message */}
						<motion.div
							className="glass-dark p-6 rounded-2xl border border-copper-500/30 inline-flex items-start gap-4 max-w-md"
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ delay: 0.3 }}
						>
							<div className="w-12 h-12 bg-copper-500 rounded-full flex items-center justify-center flex-shrink-0">
								<Truck className="w-6 h-6 text-white" />
							</div>
							<div>
								<p className="font-display font-bold text-slate-100 mb-1">
									Pengiriman Tersedia Hari Ini!
								</p>
								<p className="text-slate-300 text-sm">
									Pesan sekarang dan dapatkan pengiriman cepat ke lokasi proyek
									Anda
								</p>
							</div>
						</motion.div>
					</motion.div>

					{/* Visual - Right 35% */}
					<motion.div
						className="hidden lg:flex flex-col gap-6"
						initial={{ opacity: 0, x: 30 }}
						whileInView={{ opacity: 1, x: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.6, delay: 0.2 }}
					>
						{/* Clock/Delivery graphic */}
						<div className="glass-dark p-8 rounded-2xl text-center border border-copper-500/20">
							<Clock className="w-20 h-20 text-copper-500 mx-auto mb-4" />
							<p className="font-display text-2xl font-bold text-slate-100 mb-2">
								Respons Cepat
							</p>
							<p className="text-slate-300 text-sm">
								Kami siap melayani Anda dengan cepat
							</p>
						</div>

						{/* Floating contact icons */}
						<div className="flex gap-4 justify-center">
							{[
								{ icon: Phone, href: `tel:${contactInfo.phone}` },
								{
									icon: MessageCircle,
									href: `https://wa.me/${contactInfo.whatsapp.replace(/[^0-9]/g, "")}`,
								},
								{ icon: Mail, href: `mailto:${contactInfo.email}` },
							].map((item, idx) => (
								<motion.a
									key={idx}
									href={item.href}
									className="w-14 h-14 glass-dark rounded-full flex items-center justify-center hover:bg-copper-500 transition-all border border-copper-500/20"
									whileHover={{ scale: 1.1, y: -4 }}
								>
									<item.icon className="w-6 h-6 text-copper-400" />
								</motion.a>
							))}
						</div>
					</motion.div>
				</div>
			</Container>
		</Section>
	);
}
