<script lang="ts">
	import { resolve } from "$app/paths";

	const whatsappUrl =
		"https://wa.me/6281234567890?text=Halo%20TB.%20Manon%20Jaya%2C%20saya%20ingin%20cek%20stok%20dan%20harga%20bahan%20bangunan.";

	const navItems = [
		{ label: "Produk", href: "/#produk" },
		{ label: "Layanan", href: "/#layanan" },
		{ label: "Cara Pesan", href: "/#cara-pesan" },
		{ label: "Kontak", href: "/#kontak" }
	] as const;

	const heroStats = [
		"Stok harian tukang",
		"Eceran dan proyek",
		"Pengiriman lokal"
	];

	const productGroups = [
		{
			name: "Material dasar",
			summary: "Untuk pondasi, dinding, dan pekerjaan awal bangunan.",
			examples: "Semen, pasir, split, bata, batako, hebel"
		},
		{
			name: "Struktur & rangka",
			summary: "Kebutuhan rangka bangunan sampai penguat struktur.",
			examples: "Besi beton, wiremesh, baja ringan, kayu, triplek"
		},
		{
			name: "Finishing rumah",
			summary: "Barang untuk membuat bangunan siap dipakai dan terlihat rapi.",
			examples: "Cat, keramik, plafon, pintu, engsel, kunci"
		},
		{
			name: "Instalasi & perlengkapan",
			summary: "Kebutuhan air, listrik, perekat, dan pekerjaan harian.",
			examples: "Pipa, kabel, saklar, stop kontak, lem, sealant, alat tukang"
		}
	];

	const trustPoints = [
		{
			title: "Dijaga lintas generasi",
			body: "Cara memilih barang, melayani pembeli, dan menjaga kepercayaan pelanggan diteruskan dari generasi sebelumnya."
		},
		{
			title: "Standar kualitas yang konsisten",
			body: "Kami terbiasa membantu pelanggan memilih material yang sesuai kebutuhan, bukan sekadar menjual barang yang tersedia."
		},
		{
			title: "Dipercaya pelanggan tetap",
			body: "Banyak pelanggan kembali karena sudah mengenal cara kami melayani, memberi informasi, dan membantu kebutuhan proyek."
		}
	];
</script>

<svelte:head>
	<title>TB. Manon Jaya | Toko Bahan Bangunan</title>
	<meta
		name="description"
		content="TB. Manon Jaya menyediakan bahan bangunan lengkap untuk renovasi, pembangunan rumah, dan kebutuhan proyek. Cek stok dan harga lewat WhatsApp."
	/>
</svelte:head>

<header class="site-header">
	<a class="brand" href={resolve("/")} aria-label="TB. Manon Jaya">
		<span class="brand-mark">MJ</span>
		<span class="brand-copy">
			<strong>TB. Manon Jaya</strong>
			<small>Toko Bahan Bangunan</small>
		</span>
	</a>

	<nav aria-label="Navigasi utama">
		{#each navItems as item (item.href)}
			<a href={resolve(item.href)}>{item.label}</a>
		{/each}
	</nav>

	<a class="nav-cta" href={whatsappUrl}>Cek Stok</a>
</header>

<main>
	<section class="hero" aria-labelledby="hero-title">
		<div class="hero-content">
			<p class="eyebrow">Bahan bangunan untuk rumah dan proyek</p>
			<h1 id="hero-title">Material lengkap, belanja jelas, proyek jalan terus.</h1>
			<p class="hero-lead">
				TB. Manon Jaya menyediakan kebutuhan bangunan harian sampai kebutuhan
				proyek, dengan stok jelas, harga masuk akal, dan pengiriman lokal.
			</p>

			<div class="hero-actions" aria-label="Aksi utama">
				<a class="button button-primary" href={whatsappUrl}>Cek Stok via WhatsApp</a>
				<a class="button button-secondary" href="tel:+6281234567890">Hubungi Toko</a>
			</div>

			<ul class="trust-list" aria-label="Keunggulan cepat">
				{#each heroStats as stat (stat)}
					<li>{stat}</li>
				{/each}
			</ul>
		</div>

		<div class="hero-media" aria-label="Placeholder foto material bangunan">
			<div class="placeholder-image">
				<div class="placeholder-label">
					<span>Placeholder Image</span>
					<strong>Material display / store photo</strong>
				</div>
				<div class="material-stack stack-cement">Semen</div>
				<div class="material-stack stack-brick">Bata</div>
				<div class="material-stack stack-steel">Besi</div>
			</div>

			<div class="service-note">
				<span>Pesan cepat</span>
				<strong>Kirim daftar barang, kami cek stok dan harga.</strong>
			</div>
		</div>
	</section>

	<section id="produk" class="product-summary" aria-labelledby="product-title">
		<div class="product-intro">
			<p class="eyebrow">Produk yang kami sediakan</p>
			<h2 id="product-title">Hampir semua kebutuhan bangunan bisa mulai dari sini.</h2>
			<p>
				Kami tidak menampilkan semua barang satu per satu karena pilihan ukuran,
				merek, dan stok bisa berubah. Kirim daftar kebutuhan Anda, lalu kami
				bantu cek barang yang tersedia di toko.
			</p>
		</div>

		<div class="product-grid">
			{#each productGroups as group, index (group.name)}
				<article class="product-card">
					<span class="product-number">{String(index + 1).padStart(2, "0")}</span>
					<h3>{group.name}</h3>
					<p>{group.summary}</p>
					<small>{group.examples}</small>
				</article>
			{/each}
		</div>

		<div class="stock-note">
			<div class="stock-note-copy">
				<strong>Tidak lihat barang yang dicari?</strong>
				<span>
					Tanyakan langsung via WhatsApp. Banyak barang tersedia dalam variasi
					ukuran, merek, dan satuan pembelian.
				</span>
			</div>
			<a href={whatsappUrl}>Tanya Produk</a>
		</div>
	</section>

	<section id="layanan" class="why-section" aria-labelledby="why-title">
		<div class="why-heading">
			<p class="eyebrow">Mengapa TB. Manon Jaya</p>
			<h2 id="why-title">Kepercayaan yang dibangun dari generasi ke generasi.</h2>
		</div>

		<div class="why-story">
			<p>
				TB. Manon Jaya bukan toko yang baru belajar melayani kebutuhan bangunan.
				Cara kerja kami dibentuk dari pengalaman keluarga yang diteruskan, dari
				memilih barang yang layak, melayani dengan jujur, sampai menjaga hubungan
				dengan pelanggan yang kembali lagi.
			</p>
			<p>
				Bagi kami, kualitas bukan hanya soal merek. Kualitas juga berarti barang
				yang sesuai kebutuhan, informasi yang jelas, dan proses belanja yang bisa
				diandalkan.
			</p>
		</div>

		<div class="trust-grid">
			{#each trustPoints as point, index (point.title)}
				<article class="trust-card">
					<span>{String(index + 1).padStart(2, "0")}</span>
					<h3>{point.title}</h3>
					<p>{point.body}</p>
				</article>
			{/each}
		</div>
	</section>
</main>

<style>
	:global(:root) {
		--font-heading: "Archivo", ui-sans-serif, system-ui, sans-serif;
		--font-body: "Source Sans 3", ui-sans-serif, system-ui, sans-serif;
		--ink: #1d1b16;
		--muted: #6e675d;
		--paper: #f6f1e8;
		--paper-strong: #fffaf0;
		--forest: #1f3424;
		--forest-soft: #314d37;
		--clay: #a85232;
		--brick: #753721;
		--sand: #d9c5a5;
		--steel: #53616a;
		--line: rgba(29, 27, 22, 0.14);
	}

	:global(*) {
		box-sizing: border-box;
	}

	:global(html) {
		scroll-behavior: smooth;
	}

	:global(body) {
		margin: 0;
		font-family: var(--font-body);
		background:
			linear-gradient(90deg, rgba(29, 27, 22, 0.035) 1px, transparent 1px),
			linear-gradient(rgba(29, 27, 22, 0.035) 1px, transparent 1px),
			var(--paper);
		background-size: 42px 42px;
		color: var(--ink);
	}

	:global(a) {
		color: inherit;
		text-decoration: none;
	}

	.site-header {
		position: sticky;
		top: 0;
		z-index: 20;
		display: flex;
		align-items: center;
		justify-content: space-between;
		gap: 24px;
		padding: 16px clamp(18px, 4vw, 56px);
		border-bottom: 1px solid rgba(246, 241, 232, 0.14);
		background: rgba(31, 52, 36, 0.94);
		color: var(--paper);
		backdrop-filter: blur(18px);
	}

	.brand {
		display: inline-flex;
		align-items: center;
		gap: 12px;
		min-width: max-content;
	}

	.brand-mark {
		display: grid;
		width: 44px;
		height: 44px;
		place-items: center;
		border: 2px solid var(--sand);
		font-family: var(--font-heading);
		font-size: 0.95rem;
		font-weight: 800;
		color: var(--sand);
		letter-spacing: -0.03em;
	}

	.brand-copy strong {
		display: block;
		font-family: var(--font-heading);
		font-size: 1rem;
		font-weight: 800;
		line-height: 1;
	}

	.brand-copy small {
		display: block;
		margin-top: 4px;
		color: rgba(246, 241, 232, 0.66);
		font-size: 0.78rem;
		font-weight: 600;
	}

	nav {
		display: flex;
		align-items: center;
		gap: clamp(18px, 3vw, 32px);
		color: rgba(246, 241, 232, 0.72);
		font-size: 0.95rem;
		font-weight: 700;
	}

	nav a,
	.nav-cta {
		transition:
			color 160ms ease,
			border-color 160ms ease,
			background 160ms ease;
	}

	nav a:hover {
		color: var(--paper);
	}

	.nav-cta {
		display: inline-flex;
		min-height: 42px;
		align-items: center;
		justify-content: center;
		border: 1px solid rgba(217, 197, 165, 0.62);
		padding: 0 17px;
		color: var(--paper);
		font-weight: 800;
	}

	.nav-cta:hover {
		background: var(--sand);
		color: var(--forest);
	}

	.hero {
		display: grid;
		grid-template-columns: minmax(0, 1.04fr) minmax(340px, 0.8fr);
		align-items: center;
		gap: clamp(34px, 6vw, 88px);
		min-height: calc(100vh - 77px);
		padding: clamp(56px, 8vw, 112px) clamp(18px, 5vw, 72px) 72px;
	}

	.hero-content {
		max-width: 840px;
	}

	.eyebrow {
		margin: 0 0 20px;
		color: var(--clay);
		font-size: 0.78rem;
		font-weight: 800;
		letter-spacing: 0.14em;
		text-transform: uppercase;
	}

	h1 {
		max-width: 880px;
		margin: 0;
		font-family: var(--font-heading);
		font-size: clamp(3.3rem, 8vw, 8.25rem);
		font-weight: 800;
		letter-spacing: -0.06em;
		line-height: 0.87;
		text-transform: uppercase;
		text-wrap: balance;
	}

	h2,
	h3 {
		margin: 0;
		font-family: var(--font-heading);
		letter-spacing: -0.04em;
		line-height: 0.98;
	}

	.hero-lead {
		max-width: 640px;
		margin: 30px 0 0;
		color: var(--muted);
		font-size: clamp(1.08rem, 1.55vw, 1.28rem);
		font-weight: 500;
		line-height: 1.65;
	}

	.hero-actions {
		display: flex;
		flex-wrap: wrap;
		gap: 12px;
		margin-top: 34px;
	}

	.button {
		display: inline-flex;
		min-height: 54px;
		align-items: center;
		justify-content: center;
		padding: 0 22px;
		font-weight: 900;
		transition:
			transform 160ms ease,
			box-shadow 160ms ease,
			background 160ms ease;
	}

	.button:hover {
		transform: translateY(-2px);
	}

	.button-primary {
		background: var(--forest);
		color: var(--paper);
		box-shadow: 0 18px 36px rgba(31, 52, 36, 0.2);
	}

	.button-primary:hover {
		background: var(--forest-soft);
	}

	.button-secondary {
		border: 2px solid var(--ink);
		background: rgba(255, 250, 240, 0.34);
		color: var(--ink);
	}

	.trust-list {
		display: flex;
		flex-wrap: wrap;
		gap: 10px;
		margin: 32px 0 0;
		padding: 0;
		list-style: none;
	}

	.trust-list li {
		border-left: 3px solid var(--clay);
		padding: 8px 13px 8px 10px;
		background: rgba(255, 250, 240, 0.58);
		color: var(--ink);
		font-weight: 800;
	}

	.hero-media {
		position: relative;
		min-height: 610px;
	}

	.placeholder-image {
		position: relative;
		min-height: 560px;
		overflow: hidden;
		border: 1px solid rgba(29, 27, 22, 0.16);
		background:
			linear-gradient(135deg, rgba(255, 250, 240, 0.22), transparent 48%),
			linear-gradient(90deg, rgba(255, 250, 240, 0.08) 1px, transparent 1px),
			linear-gradient(rgba(255, 250, 240, 0.08) 1px, transparent 1px),
			var(--forest);
		background-size:
			auto,
			32px 32px,
			32px 32px,
			auto;
		box-shadow: 0 30px 70px rgba(31, 52, 36, 0.22);
	}

	.placeholder-image::before {
		position: absolute;
		inset: 18px;
		border: 1px solid rgba(246, 241, 232, 0.22);
		content: "";
	}

	.placeholder-label {
		position: absolute;
		top: 34px;
		left: 34px;
		z-index: 1;
		display: grid;
		gap: 6px;
		color: var(--paper);
	}

	.placeholder-label span {
		color: var(--sand);
		font-size: 0.76rem;
		font-weight: 800;
		letter-spacing: 0.12em;
		text-transform: uppercase;
	}

	.placeholder-label strong {
		max-width: 210px;
		font-family: var(--font-heading);
		font-size: 1.35rem;
		line-height: 1.05;
	}

	.material-stack {
		position: absolute;
		display: grid;
		align-items: end;
		padding: 18px;
		color: var(--paper);
		font-family: var(--font-heading);
		font-weight: 800;
		text-transform: uppercase;
		letter-spacing: -0.03em;
		box-shadow: 0 18px 40px rgba(0, 0, 0, 0.2);
	}

	.stack-cement {
		right: 44px;
		bottom: 250px;
		width: min(68%, 360px);
		height: 122px;
		background: var(--steel);
	}

	.stack-brick {
		right: 80px;
		bottom: 132px;
		width: min(58%, 300px);
		height: 134px;
		background:
			linear-gradient(90deg, transparent 48%, rgba(255, 255, 255, 0.12) 49% 51%, transparent 52%),
			linear-gradient(0deg, transparent 46%, rgba(255, 255, 255, 0.12) 47% 53%, transparent 54%),
			var(--brick);
		background-size: 76px 42px;
	}

	.stack-steel {
		left: 42px;
		bottom: 76px;
		width: min(62%, 340px);
		height: 72px;
		background: linear-gradient(90deg, #66747c, #29343a);
	}

	.service-note {
		position: absolute;
		right: -10px;
		bottom: 0;
		display: grid;
		max-width: 280px;
		gap: 8px;
		padding: 20px;
		background: var(--paper-strong);
		border: 1px solid var(--line);
		box-shadow: 0 18px 40px rgba(29, 27, 22, 0.12);
	}

	.service-note span {
		color: var(--clay);
		font-size: 0.78rem;
		font-weight: 900;
		letter-spacing: 0.12em;
		text-transform: uppercase;
	}

	.service-note strong {
		font-family: var(--font-heading);
		font-size: 1.2rem;
		line-height: 1.1;
	}

	.product-summary {
		padding: clamp(64px, 8vw, 112px) clamp(18px, 5vw, 72px);
		border-top: 1px solid var(--line);
		background:
			linear-gradient(180deg, rgba(255, 250, 240, 0.42), rgba(246, 241, 232, 0)),
			var(--paper);
	}

	.product-intro {
		display: grid;
		grid-template-columns: minmax(0, 0.92fr) minmax(300px, 0.58fr);
		align-items: end;
		gap: clamp(28px, 6vw, 84px);
		margin-bottom: clamp(30px, 5vw, 58px);
	}

	.product-intro .eyebrow {
		grid-column: 1 / -1;
		margin-bottom: -8px;
	}

	.product-intro h2 {
		max-width: 980px;
		font-size: clamp(2.4rem, 5.4vw, 6rem);
		text-transform: uppercase;
	}

	.product-intro p:not(.eyebrow) {
		margin: 0;
		color: var(--muted);
		font-size: clamp(1.05rem, 1.4vw, 1.2rem);
		font-weight: 550;
		line-height: 1.62;
	}

	.product-grid {
		display: grid;
		grid-template-columns: repeat(4, minmax(0, 1fr));
		border-top: 1px solid var(--line);
		border-left: 1px solid var(--line);
	}

	.product-card {
		display: grid;
		min-height: 320px;
		align-content: start;
		gap: 16px;
		padding: clamp(20px, 2.5vw, 30px);
		border-right: 1px solid var(--line);
		border-bottom: 1px solid var(--line);
		background: rgba(255, 250, 240, 0.46);
		transition:
			background 160ms ease,
			transform 160ms ease;
	}

	.product-card:hover {
		background: var(--paper-strong);
		transform: translateY(-3px);
	}

	.product-number {
		color: var(--clay);
		font-family: var(--font-heading);
		font-size: 0.95rem;
		font-weight: 900;
	}

	.product-card h3 {
		max-width: 260px;
		font-size: clamp(1.7rem, 2.4vw, 2.6rem);
		text-transform: uppercase;
	}

	.product-card p {
		margin: 0;
		color: var(--muted);
		font-size: 1.02rem;
		font-weight: 600;
		line-height: 1.5;
	}

	.product-card small {
		display: block;
		margin-top: auto;
		border-left: 3px solid var(--forest);
		padding-left: 12px;
		color: var(--ink);
		font-size: 0.94rem;
		font-weight: 800;
		line-height: 1.45;
	}

	.stock-note {
		display: grid;
		grid-template-columns: minmax(0, 1fr) auto;
		align-items: center;
		gap: 18px;
		margin-top: 18px;
		padding: 20px;
		background: var(--forest);
		color: var(--paper);
	}

	.stock-note-copy {
		display: grid;
		gap: 8px;
		max-width: 820px;
	}

	.stock-note strong {
		font-family: var(--font-heading);
		font-size: 1.35rem;
		line-height: 1.05;
	}

	.stock-note span {
		color: rgba(246, 241, 232, 0.76);
		font-weight: 600;
		line-height: 1.5;
	}

	.stock-note a {
		display: inline-flex;
		min-height: 46px;
		align-items: center;
		justify-content: center;
		border: 1px solid rgba(217, 197, 165, 0.7);
		padding: 0 18px;
		font-weight: 900;
		white-space: nowrap;
	}

	.stock-note a:hover {
		background: var(--sand);
		color: var(--forest);
	}

	.why-section {
		padding: clamp(64px, 8vw, 112px) clamp(18px, 5vw, 72px);
		background: var(--forest);
		color: var(--paper);
	}

	.why-heading {
		display: grid;
		grid-template-columns: minmax(0, 1fr);
		max-width: 1100px;
		margin-bottom: clamp(30px, 5vw, 64px);
	}

	.why-heading .eyebrow {
		color: var(--sand);
	}

	.why-heading h2 {
		max-width: 1040px;
		font-size: clamp(2.4rem, 5.6vw, 6.4rem);
		text-transform: uppercase;
	}

	.why-story {
		display: grid;
		grid-template-columns: repeat(2, minmax(0, 1fr));
		gap: clamp(24px, 4vw, 56px);
		margin-bottom: clamp(28px, 5vw, 58px);
		border-top: 1px solid rgba(246, 241, 232, 0.2);
		padding-top: clamp(24px, 4vw, 40px);
	}

	.why-story p {
		margin: 0;
		color: rgba(246, 241, 232, 0.76);
		font-size: clamp(1.05rem, 1.35vw, 1.18rem);
		font-weight: 550;
		line-height: 1.68;
	}

	.trust-grid {
		display: grid;
		grid-template-columns: repeat(3, minmax(0, 1fr));
		border-top: 1px solid rgba(246, 241, 232, 0.18);
		border-left: 1px solid rgba(246, 241, 232, 0.18);
	}

	.trust-card {
		display: grid;
		min-height: 280px;
		align-content: start;
		gap: 18px;
		padding: clamp(22px, 3vw, 34px);
		border-right: 1px solid rgba(246, 241, 232, 0.18);
		border-bottom: 1px solid rgba(246, 241, 232, 0.18);
		background:
			linear-gradient(135deg, rgba(246, 241, 232, 0.08), transparent 58%),
			rgba(255, 255, 255, 0.03);
	}

	.trust-card span {
		color: var(--sand);
		font-family: var(--font-heading);
		font-size: 0.95rem;
		font-weight: 900;
	}

	.trust-card h3 {
		max-width: 360px;
		font-size: clamp(1.8rem, 2.8vw, 3rem);
		text-transform: uppercase;
	}

	.trust-card p {
		margin: 0;
		color: rgba(246, 241, 232, 0.74);
		font-size: 1.02rem;
		font-weight: 600;
		line-height: 1.55;
	}

	@media (max-width: 980px) {
		.site-header {
			align-items: flex-start;
		}

		nav {
			display: none;
		}

		.hero {
			grid-template-columns: 1fr;
			min-height: auto;
		}

		.product-intro,
		.stock-note {
			grid-template-columns: 1fr;
		}

		.product-grid {
			grid-template-columns: repeat(2, minmax(0, 1fr));
		}

		.why-story,
		.trust-grid {
			grid-template-columns: 1fr;
		}

		.hero-media {
			min-height: 500px;
		}

		.placeholder-image {
			min-height: 470px;
		}
	}

	@media (max-width: 620px) {
		.site-header {
			padding: 14px 18px;
		}

		.brand-mark {
			width: 40px;
			height: 40px;
		}

		.brand-copy small,
		.nav-cta {
			display: none;
		}

		.hero {
			padding: 44px 18px 56px;
		}

		h1 {
			font-size: clamp(3.1rem, 17vw, 5rem);
		}

		.hero-actions .button {
			width: 100%;
		}

		.trust-list {
			display: grid;
		}

		.hero-media {
			min-height: 430px;
		}

		.placeholder-image {
			min-height: 400px;
		}

		.placeholder-label {
			top: 26px;
			left: 26px;
		}

		.stack-cement {
			right: 26px;
			bottom: 210px;
		}

		.stack-brick {
			right: 42px;
			bottom: 112px;
		}

		.stack-steel {
			left: 26px;
			bottom: 64px;
		}

		.service-note {
			right: 12px;
			left: 12px;
			max-width: none;
		}

		.product-summary {
			padding: 56px 18px;
		}

		.product-grid {
			grid-template-columns: 1fr;
		}

		.product-card {
			min-height: 250px;
		}

		.stock-note a {
			width: 100%;
		}

		.why-section {
			padding: 56px 18px;
		}

		.trust-card {
			min-height: auto;
		}
	}
</style>
