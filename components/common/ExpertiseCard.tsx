"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

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
    <motion.div
      whileHover="hover"
      className="max-w-[392px] group overflow-hidden rounded-2xl bg-transparent transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
    >
      {/* Image */}
      <div className="relative h-48 w-full overflow-hidden">
        <motion.div
          variants={{
            hover: { scale: 1.1, scaleX: -1 }, // horizontal flip
          }}
          transition={{
            duration: 0.5,
            ease: "easeInOut",
          }}
          className="absolute inset-0"
        >
          <Image
            src={image}
            alt={title}
            fill
            className="object-contain"
          />
        </motion.div>
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-lg sm:text-xl font-semibold text-[#151D26] mb-2">
          {title}
        </h3>

        <p className="text-sm sm:text-base text-[#4B5563] mb-4 line-clamp-3">
          {description}
        </p>

        <Link
          href={href}
          className="inline-flex items-center text-blue-600 font-medium hover:underline"
        >
          Learn More →
        </Link>
      </div>
    </motion.div>
  );
};
