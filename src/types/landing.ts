export interface BusinessInfo {
	name: string;
	tagline: string;
	yearsInBusiness: string;
	description: string;
}

export interface ContactInfo {
	phone: string;
	whatsapp: string;
	email: string;
	address: string;
	city: string;
}

export interface OperatingHours {
	weekdays: string;
	saturday: string;
	sunday: string;
}

export interface Testimonial {
	name: string;
	role: string;
	text: string;
	rating: number;
}

export interface ProductCategory {
	title: string;
	description: string;
	icon: string;
	items: string[];
}

export interface ServiceOffering {
	title: string;
	description: string;
	benefits: string[];
	icon: string;
}

export interface TrustPoint {
	title: string;
	description: string;
	icon: string;
}

export interface ProcessStep {
	title: string;
	description: string;
	icon: string;
}

export interface CustomerSegment {
	title: string;
	subtitle: string;
	benefits: string[];
	icon: string;
}
