import { createRootRoute, HeadContent, Scripts } from "@tanstack/react-router";

import appCss from "../styles.css?url";

export const Route = createRootRoute({
	head: () => ({
		meta: [
			{
				charSet: "utf-8",
			},
			{
				name: "viewport",
				content: "width=device-width, initial-scale=1",
			},
			{
				title:
					"Manon Jaya - Toko Bahan Bangunan Terpercaya | Material Berkualitas Harga Kompetitif",
			},
			{
				name: "description",
				content:
					"Manon Jaya menyediakan material bangunan berkualitas dengan harga kompetitif di Bandung. Melayani pemilik rumah dan kontraktor. Pengiriman cepat, konsultasi gratis, dealer resmi Semen Gresik, Rucika, Wavin, Dulux.",
			},
			{
				name: "keywords",
				content:
					"toko bahan bangunan, material konstruksi, semen, besi, cat, keramik, pipa, material bangunan bandung, toko bangunan bandung, fabrikasi besi custom",
			},
		],
		links: [
			{
				rel: "preconnect",
				href: "https://fonts.googleapis.com",
			},
			{
				rel: "preconnect",
				href: "https://fonts.gstatic.com",
				crossOrigin: "anonymous",
			},
			{
				rel: "stylesheet",
				href: "https://fonts.googleapis.com/css2?family=Poppins:wght@500;600;700;800&family=Inter:wght@400;500;600&family=JetBrains+Mono:wght@600&display=swap",
			},
			{
				rel: "stylesheet",
				href: appCss,
			},
		],
	}),

	shellComponent: RootDocument,
});

function RootDocument({ children }: { children: React.ReactNode }) {
	return (
		<html lang="id">
			<head>
				<HeadContent />
			</head>
			<body>
				{children}
				<Scripts />
			</body>
		</html>
	);
}
