import { motion } from "framer-motion";
import { Container } from "../ui/Container";

export function Navbar() {
	return (
		<motion.nav
			className="fixed top-0 left-0 right-0 z-50 glass-dark border-b border-white/5"
			initial={{ opacity: 0, y: -20 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.6, ease: [0.25, 0.4, 0.25, 1] }}
		>
			<Container>
				<div className="flex items-center justify-between h-18 py-5">
					{/* Logo */}
					<a href="/" className="flex items-center gap-2 group">
						<span className="font-display text-2xl font-bold tracking-tight">
							<span className="text-slate-50">Manon</span>
							<span className="text-gradient-copper">Jaya</span>
						</span>
					</a>

					{/* Future nav links placeholder */}
					<div className="hidden md:flex items-center gap-8">
						{/* Navigation links can be added here */}
					</div>
				</div>
			</Container>
		</motion.nav>
	);
}
