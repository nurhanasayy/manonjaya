import type {
	BusinessInfo,
	ContactInfo,
	CustomerSegment,
	OperatingHours,
	ProcessStep,
	ProductCategory,
	ServiceOffering,
	Testimonial,
	TrustPoint,
} from "../types/landing";

export const businessInfo: BusinessInfo = {
	name: "Manon Jaya",
	tagline: "Mitra Terpercaya untuk Material Bangunan Berkualitas",
	yearsInBusiness: "Sejak 2010",
	description:
		"Menyediakan material bangunan berkualitas dengan harga kompetitif untuk proyek konstruksi Anda.",
};

export const contactInfo: ContactInfo = {
	phone: "+62 812-3456-7890",
	whatsapp: "+62 812-3456-7890",
	email: "info@manonjaya.com",
	address: "Jl. Raya Industri No. 123, Kelurahan ABC",
	city: "Kota Bandung, Jawa Barat 40123",
};

export const operatingHours: OperatingHours = {
	weekdays: "08:00 - 17:00 WIB",
	saturday: "08:00 - 15:00 WIB",
	sunday: "Tutup",
};

export const testimonials: Testimonial[] = [
	{
		name: "Budi Santoso",
		role: "Pemilik Rumah",
		text: "Pelayanan ramah, harga kompetitif. Material berkualitas untuk renovasi rumah saya.",
		rating: 5,
	},
	{
		name: "PT. Maju Konstruksi",
		role: "Kontraktor",
		text: "Partner terpercaya untuk proyek-proyek kami. Pengiriman tepat waktu, harga grosir terbaik.",
		rating: 5,
	},
	{
		name: "Ibu Sri Wahyuni",
		role: "Pemilik Rumah",
		text: "Konsultasi gratis sangat membantu. Tim sangat profesional dan sabar menjelaskan.",
		rating: 5,
	},
];

export const productCategories: ProductCategory[] = [
	{
		title: "Material Dasar",
		description: "Semen, pasir, batu bata, dan material pondasi",
		icon: "Package",
		items: ["Semen & Beton", "Pasir & Kerikil", "Batu Bata & Batako"],
	},
	{
		title: "Material Struktural",
		description: "Besi, kayu, dan material rangka bangunan",
		icon: "Hammer",
		items: ["Besi & Baja", "Kayu & Triplek", "Material Atap"],
	},
	{
		title: "Material Finishing",
		description: "Keramik, cat, pintu, dan jendela",
		icon: "Sparkles",
		items: ["Keramik & Lantai", "Cat & Pelapis", "Pintu & Jendela"],
	},
	{
		title: "Material Instalasi",
		description: "Listrik, pipa, dan perlengkapan instalasi",
		icon: "Zap",
		items: ["Perlengkapan Listrik", "Material Pipa", "Perkakas & Alat"],
	},
	{
		title: "Layanan Custom",
		description: "Fabrikasi besi dan solusi khusus proyek",
		icon: "Wrench",
		items: [
			"Fabrikasi Besi Custom",
			"Pekerjaan Pondasi",
			"Solusi Proyek Khusus",
		],
	},
];

export const customServices: ServiceOffering[] = [
	{
		title: "Fabrikasi Besi Custom",
		description: "Pembuatan konstruksi besi sesuai kebutuhan proyek Anda",
		benefits: [
			"Ukuran presisi sesuai pesanan",
			"Pengelasan berkualitas tinggi",
			"Pengiriman tepat waktu",
		],
		icon: "Settings",
	},
	{
		title: "Pekerjaan Pondasi Custom",
		description:
			"Solusi pondasi dan material yang disesuaikan dengan kebutuhan",
		benefits: [
			"Konsultasi ahli gratis",
			"Pemilihan material tepat",
			"Jaminan kekuatan struktural",
		],
		icon: "Construction",
	},
	{
		title: "Konsultasi Proyek",
		description: "Estimasi gratis dan perencanaan material untuk proyek Anda",
		benefits: [
			"Optimasi biaya material",
			"Mengurangi pemborosan",
			"Bimbingan dari ahli",
		],
		icon: "MessageSquare",
	},
];

export const trustPoints: TrustPoint[] = [
	{
		title: "Kualitas Terjamin",
		description:
			"Material premium dari merek terpercaya. Produk tersertifikasi dan teruji.",
		icon: "BadgeCheck",
	},
	{
		title: "Harga Terbaik",
		description:
			"Harga grosir dan eceran yang kompetitif tanpa mengorbankan kualitas.",
		icon: "DollarSign",
	},
	{
		title: "Layanan Praktis",
		description:
			"Lokasi strategis mudah diakses. Pengiriman cepat ke lokasi proyek.",
		icon: "Truck",
	},
	{
		title: "Dukungan Ahli",
		description:
			"Konsultasi dan estimasi gratis. Staf berpengalaman siap membantu pilihan Anda.",
		icon: "Users",
	},
	{
		title: "Solusi Lengkap",
		description:
			"Semua kebutuhan dari pondasi hingga finishing. One-stop shop menghemat waktu Anda.",
		icon: "CheckCircle",
	},
];

export const processSteps: ProcessStep[] = [
	{
		title: "Konsultasi",
		description:
			"Hubungi kami dengan kebutuhan proyek Anda. Konsultasi dan saran material gratis.",
		icon: "Phone",
	},
	{
		title: "Estimasi",
		description:
			"Kami hitung jumlah dan biaya material. Harga transparan tanpa biaya tersembunyi.",
		icon: "Calculator",
	},
	{
		title: "Pemesanan",
		description:
			"Pilih material yang Anda butuhkan. Pilihan pembayaran yang fleksibel.",
		icon: "ShoppingCart",
	},
	{
		title: "Pengiriman",
		description:
			"Pengiriman cepat ke lokasi Anda. Atau ambil langsung di toko kami.",
		icon: "Truck",
	},
];

export const customerSegments: CustomerSegment[] = [
	{
		title: "Untuk Pemilik Rumah",
		subtitle: "Membangun atau merenovasi rumah impian Anda?",
		benefits: [
			"Konsultasi personal gratis",
			"Material berkualitas dengan harga wajar",
			"Pengiriman ke rumah Anda",
			"Bantuan perhitungan kebutuhan",
		],
		icon: "Home",
	},
	{
		title: "Untuk Kontraktor & Pembangun",
		subtitle: "Harga grosir untuk profesional",
		benefits: [
			"Harga khusus pembelian banyak",
			"Pesanan dalam jumlah besar",
			"Pasokan terpercaya untuk proyek berkelanjutan",
			"Fasilitas akun tersedia",
		],
		icon: "Building",
	},
];

export const trustStats = {
	projectsCompleted: "500+ proyek telah dilayani",
	customerSatisfaction: "98% kepuasan pelanggan",
	trustedBrands: "Dealer resmi: Semen Gresik, Rucika, Pipa Wavin, Cat Dulux",
};
