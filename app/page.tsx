import Header from "@/components/Header";
import Promo from "@/components/Promo";
import TrustpilotSect from "@/components/TrustpilotSect";
import Partners from "@/components/Partners";
import Statistics from "@/components/Statistics";
import ServicesSect from "@/components/Services";
import IsoCertification from "@/components/IsoSertification";

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
        </div>
    );
}
