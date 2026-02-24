interface SectionHeaderProps {
    title: string;
    description: string;
}

export default function SectionHeader({ title, description }: SectionHeaderProps) {
    return (
        <div className="mx-auto max-w-[640px] px-2 text-center">
            <h2 className="text-2xl md:text-[40px] font-bold text-white">{title}</h2>
            <p className="mt-2 text-sm md:text-base text-white/85 md:text-[20px] md:leading-7">{description}</p>
        </div>
    )
}
