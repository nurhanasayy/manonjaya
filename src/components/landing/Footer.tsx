import { motion } from "framer-motion";
import {
	Facebook,
	Instagram,
	Mail,
	MapPin,
	Phone,
	Twitter,
} from "lucide-react";
import { businessInfo, contactInfo } from "../../data/content";
import { Container } from "../ui/Container";
import { Divider } from "../ui/decorative/Divider";

export function Footer() {
	const currentYear = new Date().getFullYear();

	return (
		<footer className="relative bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 text-slate-300 blueprint-grid overflow-hidden">
			{/* Copper top border gradient */}
			<div className="h-1 bg-gradient-to-r from-transparent via-copper-500 to-transparent" />

			{/* Floating geometric shapes */}
			<div className="absolute top-20 right-20 w-40 h-40 bg-copper-500 opacity-5 rounded-full blur-3xl" />
			<div className="absolute bottom-20 left-20 w-32 h-32 bg-copper-500 opacity-5 rounded-lg blur-3xl" />

			<Container>
				<div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 relative z-10">
					{/* Company Info */}
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.6 }}
					>
						<h3 className="font-display text-2xl font-bold mb-4 text-gradient-copper">
							{businessInfo.name}
						</h3>
						<p className="text-sm mb-4 text-slate-400 leading-relaxed">
							{businessInfo.description}
						</p>
						<div className="inline-flex items-center gap-2 glass-dark px-3 py-1 rounded-full text-xs text-copper-400 border border-copper-500/30">
							<span className="w-2 h-2 bg-copper-500 rounded-full animate-pulse" />
							{businessInfo.yearsInBusiness}
						</div>
					</motion.div>

					{/* Quick Links */}
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.6, delay: 0.1 }}
					>
						<h4 className="font-display text-lg font-semibold mb-6 text-slate-100">
							Tautan Cepat
						</h4>
						<ul className="space-y-3 text-sm">
							{[
								{ label: "Produk", href: "#produk" },
								{ label: "Layanan Custom", href: "#layanan-custom" },
								{ label: "Keunggulan", href: "#keunggulan" },
								{ label: "Testimoni", href: "#testimoni" },
								{ label: "Kontak", href: "#kontak" },
							].map((link) => (
								<li key={link.href}>
									<a
										href={link.href}
										className="hover:text-copper-400 transition-colors inline-flex items-center gap-2 group"
									>
										<span className="w-1 h-1 bg-copper-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
										{link.label}
									</a>
								</li>
							))}
						</ul>
					</motion.div>

					{/* Contact Summary */}
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.6, delay: 0.2 }}
					>
						<h4 className="font-display text-lg font-semibold mb-6 text-slate-100">
							Hubungi Kami
						</h4>
						<ul className="space-y-4 text-sm">
							<li className="flex items-start gap-3">
								<MapPin className="w-4 h-4 flex-shrink-0 mt-1 text-copper-400" />
								<span className="text-slate-400">
									{contactInfo.address}, {contactInfo.city}
								</span>
							</li>
							<li className="flex items-center gap-3">
								<Phone className="w-4 h-4 flex-shrink-0 text-copper-400" />
								<a
									href={`tel:${contactInfo.phone}`}
									className="hover:text-copper-400 transition-colors"
								>
									{contactInfo.phone}
								</a>
							</li>
							<li className="flex items-center gap-3">
								<Mail className="w-4 h-4 flex-shrink-0 text-copper-400" />
								<a
									href={`mailto:${contactInfo.email}`}
									className="hover:text-copper-400 transition-colors"
								>
									{contactInfo.email}
								</a>
							</li>
						</ul>
					</motion.div>

					{/* Business Hours & Social */}
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.6, delay: 0.3 }}
					>
						<h4 className="font-display text-lg font-semibold mb-6 text-slate-100">
							Jam Operasional
						</h4>
						<ul className="space-y-2 text-sm mb-8 text-slate-400">
							<li>Senin - Jumat: 08:00 - 17:00</li>
							<li>Sabtu: 08:00 - 15:00</li>
							<li>Minggu: Tutup</li>
						</ul>

						<h4 className="font-display text-lg font-semibold mb-4 text-slate-100">
							Ikuti Kami
						</h4>
						<div className="flex gap-3">
							{[
								{ icon: Facebook, label: "Facebook", href: "#" },
								{ icon: Instagram, label: "Instagram", href: "#" },
								{ icon: Twitter, label: "Twitter", href: "#" },
							].map((social) => (
								<motion.a
									key={social.label}
									href={social.href}
									className="w-10 h-10 glass-dark rounded-full flex items-center justify-center hover:bg-copper-500 hover:border-copper-500 transition-all border border-slate-700"
									aria-label={social.label}
									whileHover={{ scale: 1.1, y: -4 }}
								>
									<social.icon className="w-5 h-5" />
								</motion.a>
							))}
						</div>
					</motion.div>
				</div>

				{/* Elegant divider */}
				<Divider variant="dots" className="my-8" />

				{/* Bottom Bar */}
				<div className="py-8">
					<div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-400">
						<p>
							© {currentYear} {businessInfo.name}. Hak cipta dilindungi.
						</p>
						<div className="flex gap-6">
							<a
								href="#"
								className="hover:text-copper-400 transition-colors"
							>
								Kebijakan Privasi
							</a>
							<a
								href="#"
								className="hover:text-copper-400 transition-colors"
							>
								Syarat & Ketentuan
							</a>
						</div>
					</div>
				</div>
			</Container>
		</footer>
	);
}
