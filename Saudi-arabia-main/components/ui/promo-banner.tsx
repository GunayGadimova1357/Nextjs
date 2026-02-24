import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { cn } from "@/lib/utils";

interface PromoBannerProps {
    href: string;
    image: string;
    alt: string;
    lineOne: string;
    lineTwo: string;
    sectionClassName?: string;
    cardClassName?: string;
    overlayClassName?: string;
    lineOneClassName?: string;
    lineTwoClassName?: string;
}

export default function PromoBanner({
    href,
    image,
    alt,
    lineOne,
    lineTwo,
    sectionClassName,
    cardClassName,
    overlayClassName,
    lineOneClassName,
    lineTwoClassName,
}: PromoBannerProps) {
    return (
        <section className={cn("container mx-auto px-4 py-12 md:py-16", sectionClassName)}>
            <Link
                href={href}
                className={cn(
                    "group relative block h-[220px] overflow-hidden rounded-sm border border-white/15 md:h-[360px]",
                    cardClassName
                )}
            >
                <Image
                    src={image}
                    alt={alt}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                />

                <div
                    className={cn(
                        "absolute inset-0 bg-black/35",
                        overlayClassName
                    )}
                />

                <div className="absolute inset-0 flex items-center justify-between gap-6 p-6 md:p-10">
                    <div>
                        <p
                            className={cn(
                                "max-w-[420px] text-4xl font-bold leading-[1.02] md:text-6xl",
                                lineOneClassName
                            )}
                        >
                            {lineOne}
                        </p>
                        <p
                            className={cn(
                                "max-w-[420px] text-4xl font-bold leading-[1.02] text-white/95 md:text-6xl",
                                lineTwoClassName
                            )}
                        >
                            {lineTwo}
                        </p>
                    </div>

                    <span className="flex h-12 w-12 items-center justify-center rounded-full border-2 border-white text-white md:h-16 md:w-16">
                        <ArrowRight className="h-6 w-6 md:h-8 md:w-8" />
                    </span>
                </div>
            </Link>
        </section>
    );
}
