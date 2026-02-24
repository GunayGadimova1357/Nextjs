import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface TravelEssentialsItem {
    title: string;
    image: string;
    href: string;
}

const travelEssentialsItems: TravelEssentialsItem[] = [
    { title: "About Saudi", image: "/about-us.jpg", href: "/gallery" },
    { title: "Safety Travel Tips", image: "/saleh.jpg", href: "/gallery" },
];

function TravelEssentialsCard({ title, image, href }: TravelEssentialsItem) {
    return (
        <Link
            href={href}
            className="group relative block h-[180px] overflow-hidden rounded-2xl border border-white/10 md:h-[220px]"
        >
            <Image
                src={image}
                alt={title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/25 to-black/10" />

            <div className="absolute inset-x-0 bottom-0 flex items-center justify-between gap-4 p-4 md:p-5">
                <span className="text-lg font-medium md:text-2xl">{title}</span>
                <span className="flex h-10 w-10 items-center justify-center rounded-full border border-white/60 bg-black/30 backdrop-blur-sm">
                    <ArrowRight className="h-5 w-5" />
                </span>
            </div>
        </Link>
    );
}

export default function TravelEssentialsSection() {
    return (
        <section className="container mx-auto px-4 pt-14 md:pt-20">
            <div className="mb-5 flex items-center justify-between gap-4">
                <h2 className="text-2xl font-semibold md:text-3xl">Travel Essentials</h2>
                <Link
                    href="/gallery"
                    className="text-xs text-white/80 underline underline-offset-4 hover:text-white md:text-sm"
                >
                    See More
                </Link>
            </div>

            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                {travelEssentialsItems.map((item) => (
                    <TravelEssentialsCard key={item.title} {...item} />
                ))}
            </div>
        </section>
    );
}
