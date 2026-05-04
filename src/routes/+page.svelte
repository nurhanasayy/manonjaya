<script lang="ts">
	import { resolve } from "$app/paths";

	const siteUrl = "https://manonjaya.com";
	const pageUrl = `${siteUrl}/`;
	const siteName = "TB. Manon Jaya Putra";
	const pageTitle = `${siteName} | Toko Bahan Bangunan Sukabumi`;
	const pageDescription =
		"TB. Manon Jaya Putra adalah toko bahan bangunan di Cisaat, Sukabumi yang menyediakan material untuk renovasi, pembangunan rumah, dan kebutuhan proyek. Cek stok dan harga lewat WhatsApp.";
	const logoUrl = `${siteUrl}/logo-mjp.svg`;
	const ogImagePath = "/og/home.png";
	const ogImageUrl = `${siteUrl}${ogImagePath}`;
	const ogImageAlt =
		"Material bangunan seperti besi, pipa, cat, plafon, pintu, dan perlengkapan bangunan untuk TB. Manon Jaya Putra di Sukabumi.";
	const seoKeywords =
		"TB Manon Jaya Putra, toko bahan bangunan Sukabumi, bahan bangunan Sukabumi, toko bangunan Sukabumi, material bangunan Sukabumi, toko material Cisaat, bahan bangunan Cisaat, besi beton Sukabumi, cat Sukabumi, pipa Sukabumi, plafon Sukabumi, perlengkapan bangunan Sukabumi, Sukabumi";
	const whatsappPhone = "+62 898-7543-512";
	const whatsappUrl =
		"https://wa.me/628987543512?text=Halo%20TB.%20Manon%20Jaya%20Putra%2C%20saya%20ingin%20bertanya%20atau%20konsultasi%20kebutuhan%20bahan%20bangunan.";
	const mapsUrl = "https://maps.app.goo.gl/CDskmfQb6kHVUcBr5";
	const mapEmbedUrl =
		"https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d247.55436751377576!2d106.8888251!3d-6.9061593!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e68365792615c27%3A0xd3e5ce6d171a9859!2sTB.%20Manon%20Jaya!5e0!3m2!1sid!2sid!4v1750857509993!5m2!1sid!2sid";
	const storeAddress =
		"Jl. Raya Cisaat No.274, Nagrak, Kec. Cisaat, Kabupaten Sukabumi, Jawa Barat 43152";

	const navItems = [
		{ label: "Produk", href: "/#produk" },
		{ label: "Keunggulan", href: "/#layanan" },
		{ label: "Cara Pesan", href: "/#cara-pesan" },
		{ label: "Lokasi", href: "/#kontak" }
	] as const;

	const productGroups = [
		{
			name: "Struktur & rangka",
			summary: "Kebutuhan rangka bangunan sampai penguat struktur.",
			examples: "Besi beton, wiremesh, baja ringan, kayu, triplek"
		},
		{
			name: "Finishing rumah",
			summary: "Barang untuk membuat bangunan siap dipakai dan terlihat rapi.",
			examples: "Cat, plafon, pintu, engsel, kunci"
		},
		{
			name: "Instalasi & perlengkapan",
			summary: "Kebutuhan air, listrik, perekat, dan pekerjaan harian.",
			examples: "Pipa, kabel, saklar, stop kontak, lem, sealant, alat kerja"
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

	const orderSteps = [
		{
			title: "Kirim pesan WhatsApp",
			body: "Hubungi nomor WhatsApp kami untuk bertanya, konsultasi, atau mulai memesan kebutuhan bahan bangunan."
		},
		{
			title: "Sampaikan kebutuhan",
			body: "Kirim daftar barang, foto contoh, ukuran, jumlah, atau kebutuhan proyek yang sedang dikerjakan."
		},
		{
			title: "Kami bantu cek",
			body: "Tim kami akan membantu cek ketersediaan barang, pilihan ukuran atau merek, dan estimasi harga."
		},
		{
			title: "Lanjutkan pesanan",
			body: "Setelah cocok, pesanan bisa dilanjutkan untuk diambil di toko atau dibantu dengan opsi pengiriman."
		}
	];

	const jsonLd = {
		"@context": "https://schema.org",
		"@graph": [
			{
				"@type": ["LocalBusiness", "HardwareStore", "Store"],
				"@id": `${pageUrl}#business`,
				name: siteName,
				url: pageUrl,
				logo: logoUrl,
				image: ogImageUrl,
				description: pageDescription,
				telephone: "+628987543512",
				priceRange: "$$",
				address: {
					"@type": "PostalAddress",
					streetAddress: "Jl. Raya Cisaat No.274",
					addressLocality: "Cisaat",
					addressRegion: "Jawa Barat",
					postalCode: "43152",
					addressCountry: "ID"
				},
				geo: {
					"@type": "GeoCoordinates",
					latitude: -6.9061593,
					longitude: 106.8888251
				},
				areaServed: [
					{
						"@type": "City",
						name: "Sukabumi"
					},
					{
						"@type": "AdministrativeArea",
						name: "Cisaat"
					}
				],
				hasMap: mapsUrl,
				sameAs: [mapsUrl],
				contactPoint: {
					"@type": "ContactPoint",
					telephone: "+628987543512",
					contactType: "customer service",
					availableLanguage: ["id"]
				},
				makesOffer: productGroups.map((group) => ({
					"@type": "Offer",
					itemOffered: {
						"@type": "Product",
						name: group.name,
						description: `${group.summary} Contoh: ${group.examples}.`
					},
					areaServed: "Sukabumi"
				}))
			},
			{
				"@type": "WebSite",
				"@id": `${pageUrl}#website`,
				name: siteName,
				url: pageUrl,
				inLanguage: "id-ID",
				description: pageDescription,
				publisher: {
					"@id": `${pageUrl}#business`
				}
			},
			{
				"@type": "WebPage",
				"@id": `${pageUrl}#webpage`,
				url: pageUrl,
				name: pageTitle,
				description: pageDescription,
				inLanguage: "id-ID",
				isPartOf: {
					"@id": `${pageUrl}#website`
				},
				about: {
					"@id": `${pageUrl}#business`
				},
				primaryImageOfPage: {
					"@type": "ImageObject",
					url: ogImageUrl,
					width: 1200,
					height: 630,
					caption: ogImageAlt
				}
			}
		]
	};

	const jsonLdString = JSON.stringify(jsonLd);
	const scriptTag = "script";
</script>

<svelte:head>
	<title>{pageTitle}</title>
	<meta name="description" content={pageDescription} />
	<meta name="keywords" content={seoKeywords} />
	<meta name="author" content={siteName} />
	<meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
	<meta name="googlebot" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
	<meta name="bingbot" content="index, follow, max-image-preview:large, max-snippet:-1" />
	<meta name="language" content="Indonesian" />
	<meta name="geo.region" content="ID-JB" />
	<meta name="geo.placename" content="Sukabumi, Jawa Barat" />
	<meta name="geo.position" content="-6.9061593;106.8888251" />
	<meta name="ICBM" content="-6.9061593, 106.8888251" />
	<link rel="canonical" href={pageUrl} />
	<link rel="alternate" hreflang="id-ID" href={pageUrl} />
	<link rel="alternate" hreflang="x-default" href={pageUrl} />
	<meta property="og:type" content="business.business" />
	<meta property="og:locale" content="id_ID" />
	<meta property="og:site_name" content={siteName} />
	<meta property="og:title" content={pageTitle} />
	<meta property="og:description" content={pageDescription} />
	<meta property="og:url" content={pageUrl} />
	<meta property="og:image" content={ogImageUrl} />
	<meta property="og:image:secure_url" content={ogImageUrl} />
	<meta property="og:image:type" content="image/png" />
	<meta property="og:image:width" content="1200" />
	<meta property="og:image:height" content="630" />
	<meta property="og:image:alt" content={ogImageAlt} />
	<meta property="business:contact_data:street_address" content="Jl. Raya Cisaat No.274" />
	<meta property="business:contact_data:locality" content="Cisaat" />
	<meta property="business:contact_data:region" content="Jawa Barat" />
	<meta property="business:contact_data:postal_code" content="43152" />
	<meta property="business:contact_data:country_name" content="Indonesia" />
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content={pageTitle} />
	<meta name="twitter:description" content={pageDescription} />
	<meta name="twitter:image" content={ogImageUrl} />
	<meta name="twitter:image:alt" content={ogImageAlt} />
	<svelte:element this={scriptTag} type="application/ld+json">{jsonLdString}</svelte:element>
</svelte:head>

<header class="site-header">
	<a class="brand" href={resolve("/")} aria-label="TB. Manon Jaya Putra">
		<span class="brand-mark">MJP</span>
		<span class="brand-copy">
			<strong>TB. Manon Jaya Putra</strong>
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
				TB. Manon Jaya Putra menyediakan kebutuhan bangunan harian sampai kebutuhan
				proyek, dengan stok jelas, harga masuk akal, dan pengiriman lokal.
			</p>

			<div class="hero-actions" aria-label="Aksi utama">
				<a class="button button-primary" href={whatsappUrl}>Cek Stok via WhatsApp</a>
				<a class="button button-secondary" href="tel:+628987543512">Hubungi Toko</a>
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
			<p class="eyebrow">Mengapa TB. Manon Jaya Putra</p>
			<h2 id="why-title">Kepercayaan yang dibangun dari generasi ke generasi.</h2>
		</div>

		<div class="why-story">
			<p>
				TB. Manon Jaya Putra bukan toko yang baru belajar melayani kebutuhan bangunan.
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

	<section id="cara-pesan" class="order-section" aria-labelledby="order-title">
		<div class="order-heading">
			<p class="eyebrow">Cara pesan dan konsultasi</p>
			<h2 id="order-title">Mulai dari satu pesan WhatsApp.</h2>
			<p>
				Untuk bertanya, cek barang, konsultasi kebutuhan, atau mulai memesan,
				cukup hubungi nomor WhatsApp TB. Manon Jaya Putra.
			</p>
		</div>

		<div class="order-panel">
			<div class="whatsapp-card">
				<span>WhatsApp aktif</span>
				<strong>{whatsappPhone}</strong>
				<a href={whatsappUrl}>Kirim Pesan WhatsApp</a>
			</div>

			<div class="order-steps">
				{#each orderSteps as step, index (step.title)}
					<article class="order-step">
						<span>{String(index + 1).padStart(2, "0")}</span>
						<div>
							<h3>{step.title}</h3>
							<p>{step.body}</p>
						</div>
					</article>
				{/each}
			</div>
		</div>
	</section>

	<section id="kontak" class="contact-section" aria-labelledby="contact-title">
		<div class="contact-heading">
			<p class="eyebrow">Lokasi dan kontak</p>
			<h2 id="contact-title">Kunjungi toko atau tanya dulu lewat WhatsApp.</h2>
			<p>
				Datang langsung ke TB. Manon Jaya Putra di Cisaat, Sukabumi, atau kirim pesan
				WhatsApp untuk cek barang sebelum berangkat.
			</p>
		</div>

		<div class="contact-layout">
			<div class="map-frame" aria-label="Peta lokasi TB. Manon Jaya Putra">
				<iframe
					src={mapEmbedUrl}
					width="100%"
					height="100%"
					style="border:0"
					allowfullscreen
					loading="lazy"
					referrerpolicy="no-referrer-when-downgrade"
					title="Peta lokasi TB. Manon Jaya Putra"
				></iframe>
			</div>

			<aside class="contact-card" aria-label="Informasi kontak TB. Manon Jaya Putra">
				<div class="contact-block">
					<span>Alamat toko</span>
					<strong>{storeAddress}</strong>
				</div>

				<div class="contact-block">
					<span>WhatsApp / Telepon</span>
					<strong>{whatsappPhone}</strong>
				</div>

				<div class="contact-actions">
					<a class="button button-primary" href={whatsappUrl}>Chat WhatsApp</a>
					<a class="button button-secondary" href={mapsUrl} target="_blank" rel="noreferrer">
						Buka Google Maps
					</a>
				</div>

				<p>
					Untuk memastikan barang tersedia, kirim daftar kebutuhan Anda sebelum
					datang ke toko.
				</p>
			</aside>
		</div>
	</section>

	<section class="final-cta" aria-labelledby="final-cta-title">
		<div class="final-cta-copy">
			<p class="eyebrow">Siap belanja material?</p>
			<h2 id="final-cta-title">Kirim daftar barang, kami bantu cek dari toko.</h2>
			<p>
				Untuk renovasi kecil, kebutuhan perbaikan harian, atau persiapan proyek,
				mulai dari WhatsApp. Kami bantu cek stok, pilihan barang, dan langkah
				pesanan berikutnya.
			</p>
		</div>

		<div class="final-cta-actions" aria-label="Aksi penutup">
			<a class="button button-primary" href={whatsappUrl}>Cek Kebutuhan via WhatsApp</a>
			<a class="button button-secondary" href={mapsUrl} target="_blank" rel="noreferrer">
				Lihat Lokasi Toko
			</a>
		</div>
	</section>
</main>

<footer class="site-footer">
	<div class="footer-brand">
		<a class="brand" href={resolve("/")} aria-label="TB. Manon Jaya Putra">
			<span class="brand-mark">MJP</span>
			<span class="brand-copy">
				<strong>TB. Manon Jaya Putra</strong>
				<small>Toko Bahan Bangunan</small>
			</span>
		</a>
		<p>
			Material bangunan untuk kebutuhan rumah, renovasi, dan proyek lokal di
			Cisaat, Sukabumi.
		</p>
	</div>

	<div class="footer-links" aria-label="Navigasi footer">
		<span>Navigasi</span>
		{#each navItems as item (item.href)}
			<a href={resolve(item.href)}>{item.label}</a>
		{/each}
	</div>

	<div class="footer-contact">
		<span>Kontak toko</span>
		<a href={whatsappUrl}>{whatsappPhone}</a>
		<address>{storeAddress}</address>
		<a href={mapsUrl} target="_blank" rel="noreferrer">Buka di Google Maps</a>
	</div>

	<div class="footer-bottom">
		<span>© 2026 TB. Manon Jaya Putra</span>
		<span>Hubungi toko untuk cek stok terbaru.</span>
	</div>
</footer>

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
		--oxide: #753721;
		--sand: #d9c5a5;
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
		font-size: 0.82rem;
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
		display: flex;
		align-items: center;
		min-height: calc(100vh - 77px);
		padding: clamp(56px, 8vw, 112px) clamp(18px, 5vw, 72px) 72px;
	}

	.hero-content {
		width: 100%;
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
		grid-template-columns: repeat(3, minmax(0, 1fr));
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

	.order-section {
		padding: clamp(64px, 8vw, 112px) clamp(18px, 5vw, 72px);
		background:
			linear-gradient(90deg, rgba(29, 27, 22, 0.035) 1px, transparent 1px),
			linear-gradient(rgba(29, 27, 22, 0.035) 1px, transparent 1px),
			var(--paper);
		background-size: 42px 42px;
	}

	.order-heading {
		display: grid;
		grid-template-columns: minmax(0, 0.95fr) minmax(300px, 0.5fr);
		align-items: end;
		gap: clamp(28px, 6vw, 80px);
		margin-bottom: clamp(32px, 5vw, 58px);
	}

	.order-heading .eyebrow {
		grid-column: 1 / -1;
		margin-bottom: -8px;
	}

	.order-heading h2 {
		max-width: 900px;
		font-size: clamp(2.5rem, 5.8vw, 6.4rem);
		text-transform: uppercase;
	}

	.order-heading p:not(.eyebrow) {
		margin: 0;
		color: var(--muted);
		font-size: clamp(1.05rem, 1.4vw, 1.2rem);
		font-weight: 550;
		line-height: 1.62;
	}

	.order-panel {
		display: grid;
		grid-template-columns: minmax(260px, 0.42fr) minmax(0, 1fr);
		gap: 18px;
		align-items: stretch;
	}

	.whatsapp-card {
		display: grid;
		align-content: space-between;
		min-height: 390px;
		padding: clamp(24px, 3vw, 36px);
		background: var(--forest);
		color: var(--paper);
		box-shadow: 0 24px 58px rgba(31, 52, 36, 0.18);
	}

	.whatsapp-card span {
		color: var(--sand);
		font-size: 0.78rem;
		font-weight: 900;
		letter-spacing: 0.14em;
		text-transform: uppercase;
	}

	.whatsapp-card strong {
		font-family: var(--font-heading);
		font-size: clamp(2rem, 3vw, 3.25rem);
		line-height: 0.95;
		letter-spacing: -0.06em;
	}

	.whatsapp-card a {
		display: inline-flex;
		min-height: 54px;
		align-items: center;
		justify-content: center;
		border: 1px solid rgba(217, 197, 165, 0.72);
		padding: 0 18px;
		font-weight: 900;
		text-align: center;
	}

	.whatsapp-card a:hover {
		background: var(--sand);
		color: var(--forest);
	}

	.order-steps {
		display: grid;
		grid-template-columns: repeat(2, minmax(0, 1fr));
		border-top: 1px solid var(--line);
		border-left: 1px solid var(--line);
	}

	.order-step {
		display: grid;
		grid-template-columns: auto minmax(0, 1fr);
		gap: 18px;
		min-height: 186px;
		padding: clamp(20px, 2.6vw, 30px);
		border-right: 1px solid var(--line);
		border-bottom: 1px solid var(--line);
		background: rgba(255, 250, 240, 0.5);
	}

	.order-step > span {
		color: var(--clay);
		font-family: var(--font-heading);
		font-size: 0.95rem;
		font-weight: 900;
	}

	.order-step h3 {
		font-size: clamp(1.45rem, 2vw, 2rem);
		text-transform: uppercase;
	}

	.order-step p {
		margin: 12px 0 0;
		color: var(--muted);
		font-size: 1rem;
		font-weight: 600;
		line-height: 1.5;
	}

	.contact-section {
		padding: clamp(64px, 8vw, 112px) clamp(18px, 5vw, 72px);
		background: var(--forest);
		color: var(--paper);
	}

	.contact-heading {
		display: grid;
		grid-template-columns: minmax(0, 0.95fr) minmax(300px, 0.5fr);
		align-items: end;
		gap: clamp(28px, 6vw, 80px);
		margin-bottom: clamp(32px, 5vw, 58px);
	}

	.contact-heading .eyebrow {
		grid-column: 1 / -1;
		margin-bottom: -8px;
		color: var(--sand);
	}

	.contact-heading h2 {
		max-width: 980px;
		font-size: clamp(2.5rem, 5.8vw, 6.4rem);
		text-transform: uppercase;
	}

	.contact-heading p:not(.eyebrow) {
		margin: 0;
		color: rgba(246, 241, 232, 0.76);
		font-size: clamp(1.05rem, 1.4vw, 1.2rem);
		font-weight: 550;
		line-height: 1.62;
	}

	.contact-layout {
		display: grid;
		grid-template-columns: minmax(0, 1fr) minmax(320px, 0.46fr);
		gap: 18px;
		align-items: stretch;
	}

	.map-frame {
		min-height: 560px;
		overflow: hidden;
		border: 1px solid rgba(246, 241, 232, 0.2);
		background: rgba(255, 255, 255, 0.04);
	}

	.map-frame iframe {
		display: block;
		width: 100%;
		height: 100%;
	}

	.contact-card {
		display: grid;
		align-content: start;
		gap: 22px;
		padding: clamp(24px, 3vw, 36px);
		background: var(--paper-strong);
		color: var(--ink);
	}

	.contact-block {
		display: grid;
		gap: 8px;
		border-bottom: 1px solid var(--line);
		padding-bottom: 20px;
	}

	.contact-block span {
		color: var(--clay);
		font-size: 0.78rem;
		font-weight: 900;
		letter-spacing: 0.14em;
		text-transform: uppercase;
	}

	.contact-block strong {
		font-family: var(--font-heading);
		font-size: clamp(1.35rem, 2vw, 2.15rem);
		line-height: 1.05;
		letter-spacing: -0.04em;
	}

	.contact-actions {
		display: grid;
		gap: 10px;
	}

	.contact-actions .button {
		width: 100%;
		text-align: center;
	}

	.contact-card p {
		margin: 0;
		color: var(--muted);
		font-weight: 650;
		line-height: 1.55;
	}

	.final-cta {
		display: grid;
		grid-template-columns: minmax(0, 1fr) auto;
		align-items: end;
		gap: clamp(28px, 6vw, 84px);
		padding: clamp(64px, 8vw, 112px) clamp(18px, 5vw, 72px);
		border-top: 1px solid rgba(246, 241, 232, 0.18);
		background:
			linear-gradient(90deg, rgba(246, 241, 232, 0.05) 1px, transparent 1px),
			linear-gradient(rgba(246, 241, 232, 0.05) 1px, transparent 1px),
			var(--oxide);
		background-size: 42px 42px;
		color: var(--paper);
	}

	.final-cta-copy {
		max-width: 980px;
	}

	.final-cta .eyebrow {
		color: var(--sand);
	}

	.final-cta h2 {
		font-size: clamp(2.5rem, 5.8vw, 6.4rem);
		text-transform: uppercase;
	}

	.final-cta-copy p:not(.eyebrow) {
		max-width: 690px;
		margin: 26px 0 0;
		color: rgba(246, 241, 232, 0.78);
		font-size: clamp(1.05rem, 1.4vw, 1.2rem);
		font-weight: 550;
		line-height: 1.62;
	}

	.final-cta-actions {
		display: grid;
		gap: 12px;
		min-width: min(100%, 310px);
	}

	.final-cta .button {
		width: 100%;
		text-align: center;
	}

	.final-cta .button-primary {
		background: var(--paper);
		color: var(--forest);
		box-shadow: 0 18px 42px rgba(29, 27, 22, 0.2);
	}

	.final-cta .button-primary:hover {
		background: var(--sand);
	}

	.final-cta .button-secondary {
		border-color: rgba(246, 241, 232, 0.7);
		background: rgba(255, 250, 240, 0.08);
		color: var(--paper);
	}

	.final-cta .button-secondary:hover {
		background: rgba(255, 250, 240, 0.16);
	}

	.site-footer {
		display: grid;
		grid-template-columns: minmax(260px, 0.9fr) minmax(170px, 0.28fr) minmax(280px, 0.48fr);
		gap: clamp(28px, 5vw, 76px);
		padding: clamp(42px, 6vw, 72px) clamp(18px, 5vw, 72px) 28px;
		background: var(--ink);
		color: var(--paper);
	}

	.footer-brand {
		display: grid;
		align-content: start;
		gap: 22px;
		max-width: 560px;
	}

	.footer-brand p {
		margin: 0;
		color: rgba(246, 241, 232, 0.68);
		font-size: 1.05rem;
		font-weight: 550;
		line-height: 1.6;
	}

	.footer-links,
	.footer-contact {
		display: grid;
		align-content: start;
		gap: 12px;
	}

	.footer-links span,
	.footer-contact span {
		margin-bottom: 6px;
		color: var(--sand);
		font-size: 0.78rem;
		font-weight: 900;
		letter-spacing: 0.14em;
		text-transform: uppercase;
	}

	.footer-links a,
	.footer-contact a {
		width: fit-content;
		color: rgba(246, 241, 232, 0.78);
		font-weight: 800;
		transition: color 160ms ease;
	}

	.footer-links a:hover,
	.footer-contact a:hover {
		color: var(--paper);
	}

	.footer-contact address {
		margin: 0;
		color: rgba(246, 241, 232, 0.66);
		font-style: normal;
		font-weight: 600;
		line-height: 1.52;
	}

	.footer-bottom {
		grid-column: 1 / -1;
		display: flex;
		flex-wrap: wrap;
		justify-content: space-between;
		gap: 12px;
		margin-top: clamp(12px, 3vw, 26px);
		border-top: 1px solid rgba(246, 241, 232, 0.14);
		padding-top: 22px;
		color: rgba(246, 241, 232, 0.52);
		font-size: 0.94rem;
		font-weight: 650;
	}

	@media (max-width: 980px) {
		.site-header {
			align-items: flex-start;
		}

		nav {
			display: none;
		}

		.hero {
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
		.trust-grid,
		.order-heading,
		.order-panel,
		.contact-heading,
		.contact-layout,
		.final-cta,
		.site-footer {
			grid-template-columns: 1fr;
		}

		.order-steps {
			grid-template-columns: 1fr;
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

		.order-section {
			padding: 56px 18px;
		}

		.whatsapp-card {
			min-height: 260px;
		}

		.order-step {
			grid-template-columns: 1fr;
			min-height: auto;
		}

		.contact-section {
			padding: 56px 18px;
		}

		.map-frame {
			min-height: 420px;
		}

		.final-cta {
			padding: 56px 18px;
		}

		.footer-bottom {
			display: grid;
		}
	}
</style>
