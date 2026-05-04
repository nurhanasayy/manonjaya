import { mkdir } from "node:fs/promises";
import { join } from "node:path";
import sharp from "sharp";

const OUTPUT_DIR = "static/og";
const WIDTH = 1200;
const HEIGHT = 630;

const colors = {
	ink: "#1d1b16",
	paper: "#f6f1e8",
	paperStrong: "#fffaf0",
	forest: "#1f3424",
	forestSoft: "#314d37",
	clay: "#a85232",
	sand: "#d9c5a5",
	steel: "#53616a",
	muted: "#6e675d"
};

function escapeXml(value) {
	return value
		.replace(/&/g, "&amp;")
		.replace(/</g, "&lt;")
		.replace(/>/g, "&gt;")
		.replace(/"/g, "&quot;");
}

function buildGrid() {
	const lines = [];
	const spacing = 42;

	for (let x = 0; x <= WIDTH; x += spacing) {
		lines.push(`<line x1="${x}" y1="0" x2="${x}" y2="${HEIGHT}" />`);
	}

	for (let y = 0; y <= HEIGHT; y += spacing) {
		lines.push(`<line x1="0" y1="${y}" x2="${WIDTH}" y2="${y}" />`);
	}

	return lines.join("\n");
}

function buildSvg() {
	const subtitle = "Toko bahan bangunan di Cisaat, Sukabumi";
	const title = ["Material lengkap,", "belanja jelas,", "proyek jalan terus."];

	return `<svg width="${WIDTH}" height="${HEIGHT}" viewBox="0 0 ${WIDTH} ${HEIGHT}" xmlns="http://www.w3.org/2000/svg">
		<defs>
			<linearGradient id="paperGlow" x1="0%" y1="0%" x2="100%" y2="100%">
				<stop offset="0%" stop-color="${colors.paperStrong}" />
				<stop offset="72%" stop-color="${colors.paper}" />
				<stop offset="100%" stop-color="${colors.sand}" />
			</linearGradient>
			<filter id="softShadow" x="-20%" y="-20%" width="140%" height="140%">
				<feDropShadow dx="0" dy="24" stdDeviation="24" flood-color="${colors.ink}" flood-opacity="0.14" />
			</filter>
		</defs>

		<rect width="${WIDTH}" height="${HEIGHT}" fill="url(#paperGlow)" />
		<g stroke="${colors.ink}" stroke-width="1" opacity="0.032">
			${buildGrid()}
		</g>
		<rect x="0" y="0" width="18" height="${HEIGHT}" fill="${colors.forest}" />
		<rect x="72" y="492" width="492" height="3" fill="${colors.clay}" />
		<rect x="790" y="0" width="410" height="${HEIGHT}" fill="${colors.forest}" opacity="0.045" />
		<rect x="880" y="0" width="320" height="${HEIGHT}" fill="${colors.sand}" opacity="0.08" />

		<g transform="translate(72 76)">
			<rect x="0" y="0" width="62" height="62" fill="${colors.forest}" />
			<text x="31" y="40" text-anchor="middle" fill="${colors.sand}" font-family="Arial, sans-serif" font-size="20" font-weight="800">MJP</text>
			<text x="86" y="27" fill="${colors.ink}" font-family="Arial, sans-serif" font-size="28" font-weight="800" letter-spacing="-0.4">TB. Manon Jaya Putra</text>
			<text x="86" y="55" fill="${colors.muted}" font-family="Arial, sans-serif" font-size="17" font-weight="700">${escapeXml(subtitle)}</text>
		</g>

		<g transform="translate(72 218)">
			${title.map((line, index) => `<text x="0" y="${index * 66}" fill="${colors.ink}" font-family="Arial Black, Arial, sans-serif" font-size="58" font-weight="900" letter-spacing="-2.4">${escapeXml(line)}</text>`).join("")}
		</g>

		<g transform="translate(72 540)">
			<text x="0" y="0" fill="${colors.ink}" font-family="Arial, sans-serif" font-size="18" font-weight="800" opacity="0.8">
				Cek stok dan harga lewat WhatsApp
			</text>
			<text x="0" y="31" fill="${colors.muted}" font-family="Arial, sans-serif" font-size="16" font-weight="700">
				Jl. Raya Cisaat No.274 • Sukabumi
			</text>
		</g>
	</svg>`;
}

async function main() {
	await mkdir(OUTPUT_DIR, { recursive: true });

	await sharp(Buffer.from(buildSvg()))
		.png()
		.toFile(join(OUTPUT_DIR, "home.png"));

	console.log("Generated static/og/home.png");
}

main().catch((error) => {
	console.error("Failed to generate OG image:", error);
	process.exit(1);
});
