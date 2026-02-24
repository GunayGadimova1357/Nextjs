import MembersPage from "@/components/pages/members/components/members";
import Hero from "@/components/ui/hero";
import PromoBanner from "@/components/ui/promo-banner";

export default function Members() {
    return (
        <div>
            <Hero
                image="/about-us.jpg"
                title="About Us"
                description="Discover the country's hidden gems and breathtaking landscapes"
            />
            <MembersPage />
            <PromoBanner
                href="/gallery"
                image="/ksa.jpg"
                alt="Rules of Behaviour KSA"
                lineOne="Rules of Behaviour"
                lineTwo="KSA"
            />
        </div>
    )
}
