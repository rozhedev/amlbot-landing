import Header from "@/components/Header";
import Promo from "@/components/Promo";
import TrustpilotSect from "@/components/TrustpilotSect";
import Partners from "@/components/Partners";
import Statistics from "@/components/Statistics";
import ServicesSect from "@/components/Services";
import IsoCertification from "@/components/IsoSertification";
import PricingBanner from "@/components/PricingBanner";
import Advantages from "@/components/Advantages";
import TeamSect from "@/components/TeamSect";

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
        </div>
    );
}
