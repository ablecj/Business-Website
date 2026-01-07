import Image from "next/image";
import Link from "next/link";

export type ExpertiseCardProps = {
  title: string;
  description: string;
  image: string;
  href: string;
};

export const ExpertiseCard = ({
  title,
  description,
  image,
  href,
}: ExpertiseCardProps) => {
  return (
    <div className="group overflow-hidden rounded-2xl bg-transparent shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
      <div className="relative h-48 w-full">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>

      <div className="p-6">
        <h3 className="text-lg sm:text-xl font-semibold text-[#151D26] mb-2">
          {title}
        </h3>

        <p className="text-sm sm:text-base text-[#4B5563] mb-4 line-clamp-3">
          {description}
        </p>

        <Link href={href} className="inline-flex items-center text-blue-600 font-medium hover:underline">
          Learn More →
        </Link>
      </div>
    </div>
  );
};
