import { Header, Promo, TrustpilotSect, Partners, Statistics, ServicesSect, IsoCertification, PricingBanner, Advantages, TeamSect, FAQSect, Footer } from "@/components";

export default function Home() {
    return (
        <div className="root">
            <Header />
            <Promo />
            <TrustpilotSect />
            <Partners />
            <Statistics />
            <ServicesSect />
            <IsoCertification />
            <PricingBanner />
            <Advantages />
            <TeamSect />
            <FAQSect />
            <Footer />
        </div>
    );
}
