import { createFileRoute } from "@tanstack/react-router";
// import { CustomerTypes } from "../components/landing/CustomerTypes";
// import { CustomServices } from "../components/landing/CustomServices";
// import { FinalCTA } from "../components/landing/FinalCTA";
// import { Footer } from "../components/landing/Footer";
import { HeroSection } from "../components/landing/HeroSection";
// import { HowItWorks } from "../components/landing/HowItWorks";
// import { LocationContact } from "../components/landing/LocationContact";
import { ProductCategories } from "../components/landing/ProductCategories";
// import { TrustIndicators } from "../components/landing/TrustIndicators";
// import { WhyChooseUs } from "../components/landing/WhyChooseUs";
import { Navbar } from "../components/layout/Navbar";

export const Route = createFileRoute("/")({ component: App });

function App() {
	return (
		<main>
			<Navbar />
			<HeroSection />
			<ProductCategories />
			{/* <CustomServices /> */}
			{/* <WhyChooseUs /> */}
			{/* <HowItWorks /> */}
			{/* <CustomerTypes /> */}
			{/* <TrustIndicators /> */}
			{/* <LocationContact /> */}
			{/* <FinalCTA /> */}
			{/* <Footer /> */}
		</main>
	);
}
