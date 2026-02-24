import { Metadata } from "next";

import DestenationsGrid from "@/components/pages/components/destenations";
import Hero from "@/components/ui/hero";
import PromoBanner from "@/components/ui/promo-banner";
import TravelEssentialsSection from "@/components/ui/travel-essentials-section";

export const metadata: Metadata = {
    title: "Destenations",
    description: "Discover the country's hidden gems and breathtaking landscapes",
};

export default function Destenations() {
    return (
        <div className="bg-black text-white pb-4">
            <Hero
                image="/destenations.png"
                title="Destenations"
                description="Saudi Arabia is rich in heritage and history. The country is home to hundreds of historically important sites."
            />
            <DestenationsGrid />
            <TravelEssentialsSection />
            <PromoBanner
                href="/gallery"
                image="/neom.jpg"
                alt="Made to change NEOM"
                lineOne="Made To Change"
                lineTwo="NEOM"
            />
        </div>
    );
}
