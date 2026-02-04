import { motion } from "framer-motion";
import { Clock, Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { contactInfo, operatingHours } from "../../data/content";
import { Button } from "../ui/Button";
import { Card } from "../ui/Card";
import { Container } from "../ui/Container";
import { Section } from "../ui/Section";
import { FadeInView } from "../ui/animated/FadeInView";
import { Divider } from "../ui/decorative/Divider";

export function LocationContact() {
	const currentHour = new Date().getHours();
	const isWeekday = new Date().getDay() >= 1 && new Date().getDay() <= 5;
	const isSaturday = new Date().getDay() === 6;
	const isSunday = new Date().getDay() === 0;

	const isOpen =
		(isWeekday && currentHour >= 8 && currentHour < 17) ||
		(isSaturday && currentHour >= 8 && currentHour < 15);

	return (
		<Section background="gray" id="kontak">
			<Container>
				<FadeInView className="text-center mb-16">
					<h2 className="font-display text-4xl md:text-5xl font-bold text-slate-900 mb-4">
						Kunjungi Toko Kami atau Hubungi Kami
					</h2>
					<p className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto">
						Tim kami siap membantu Anda dengan kebutuhan material bangunan
					</p>
				</FadeInView>

				<div className="grid lg:grid-cols-[40%_60%] gap-8">
					{/* Floating contact card (left) */}
					<motion.div
						className="lg:sticky lg:top-8 h-fit"
						initial={{ opacity: 0, x: -30 }}
						whileInView={{ opacity: 1, x: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.6 }}
					>
						<Card
							variant="elevated"
							cornerAccent
							className="bg-white relative z-10"
						>
							{/* Live Open/Closed indicator */}
							<div className="mb-6">
								<div className="inline-flex items-center gap-2 glass-subtle px-4 py-2 rounded-full">
									<span
										className={`w-2 h-2 rounded-full ${isOpen ? "bg-emerald-500 animate-pulse" : "bg-red-500"}`}
									/>
									<span
										className={`text-sm font-semibold ${isOpen ? "text-emerald-600" : "text-red-600"}`}
									>
										{isOpen ? "Buka Sekarang" : "Tutup"}
									</span>
								</div>
							</div>

							<h3 className="font-display text-2xl font-bold text-slate-900 mb-6">
								Informasi Kontak
							</h3>

							{/* Contact details */}
							<div className="space-y-5">
								{[
									{
										icon: MapPin,
										label: "Alamat",
										content: (
											<>
												<p className="text-slate-600">{contactInfo.address}</p>
												<p className="text-slate-600">{contactInfo.city}</p>
											</>
										),
									},
									{
										icon: Phone,
										label: "Telepon",
										content: (
											<a
												href={`tel:${contactInfo.phone}`}
												className="text-copper-500 hover:text-copper-600 font-medium"
											>
												{contactInfo.phone}
											</a>
										),
									},
									{
										icon: MessageCircle,
										label: "WhatsApp",
										content: (
											<a
												href={`https://wa.me/${contactInfo.whatsapp.replace(/[^0-9]/g, "")}`}
												className="text-copper-500 hover:text-copper-600 font-medium"
											>
												{contactInfo.whatsapp}
											</a>
										),
									},
									{
										icon: Mail,
										label: "Email",
										content: (
											<a
												href={`mailto:${contactInfo.email}`}
												className="text-copper-500 hover:text-copper-600 font-medium"
											>
												{contactInfo.email}
											</a>
										),
									},
								].map((item, idx) => (
									<motion.div
										key={item.label}
										className="flex items-start gap-4"
										initial={{ opacity: 0, x: -10 }}
										whileInView={{ opacity: 1, x: 0 }}
										viewport={{ once: true }}
										transition={{ delay: idx * 0.1 }}
									>
										<div className="w-10 h-10 bg-gradient-to-br from-copper-500 to-copper-600 rounded-lg flex items-center justify-center flex-shrink-0">
											<item.icon className="w-5 h-5 text-white" />
										</div>
										<div className="flex-1">
											<p className="font-semibold text-slate-900 mb-1">
												{item.label}
											</p>
											{item.content}
										</div>
									</motion.div>
								))}

								{/* Operating hours */}
								<motion.div
									className="flex items-start gap-4"
									initial={{ opacity: 0, x: -10 }}
									whileInView={{ opacity: 1, x: 0 }}
									viewport={{ once: true }}
									transition={{ delay: 0.4 }}
								>
									<div className="w-10 h-10 bg-gradient-to-br from-copper-500 to-copper-600 rounded-lg flex items-center justify-center flex-shrink-0">
										<Clock className="w-5 h-5 text-white" />
									</div>
									<div className="flex-1">
										<p className="font-semibold text-slate-900 mb-2">
											Jam Operasional
										</p>
										<div className="text-slate-600 space-y-1 text-sm">
											<p>Senin - Jumat: {operatingHours.weekdays}</p>
											<p>Sabtu: {operatingHours.saturday}</p>
											<p>Minggu: {operatingHours.sunday}</p>
										</div>
									</div>
								</motion.div>
							</div>

							<Divider variant="gradient" className="my-6" />

							{/* Prominent Call/WhatsApp buttons */}
							<div className="space-y-3">
								<Button
									variant="copper-gradient"
									href={`tel:${contactInfo.phone}`}
									fullWidth
									icon={<Phone className="w-5 h-5" />}
									iconPosition="left"
								>
									Telepon Sekarang
								</Button>
								<Button
									variant="ghost-copper"
									href={`https://wa.me/${contactInfo.whatsapp.replace(/[^0-9]/g, "")}`}
									fullWidth
									icon={<MessageCircle className="w-5 h-5" />}
									iconPosition="left"
								>
									Chat WhatsApp
								</Button>
							</div>
						</Card>
					</motion.div>

					{/* Map placeholder (right) */}
					<motion.div
						initial={{ opacity: 0, x: 30 }}
						whileInView={{ opacity: 1, x: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.6 }}
					>
						<div className="relative bg-slate-200 rounded-2xl overflow-hidden h-[600px] flex items-center justify-center group">
							{/* Decorative corner accents */}
							<div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-copper-500" />
							<div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-copper-500" />

							<div className="text-center p-8 relative z-10">
								<div className="w-24 h-24 bg-gradient-to-br from-copper-500 to-copper-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-glow-copper">
									<MapPin className="w-12 h-12 text-white" />
								</div>
								<h4 className="font-display text-2xl font-bold text-slate-900 mb-4">
									Lokasi Strategis
								</h4>
								<div className="space-y-2 text-slate-600">
									<p>Akses mudah dengan parkir luas</p>
									<p>Showroom tersedia untuk melihat material</p>
									<p>Lokasi di kawasan industri</p>
								</div>
							</div>

							{/* Blueprint grid overlay */}
							<div className="absolute inset-0 blueprint-grid opacity-10" />
						</div>
					</motion.div>
				</div>
			</Container>
		</Section>
	);
}
