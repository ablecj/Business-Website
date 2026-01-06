import Image from 'next/image'
import Link from 'next/link'
import React from 'react'



interface ConsultationLinkProps {
  href?: string;
  label?: string;
  className?: string;
  icon?: boolean;
}


const GetConsultBtn = ({
  href = "/contact",
  label = "Get Consultation",
  className = "",
  icon = true,
}: ConsultationLinkProps) => {

  return (
    // mx-auto
     <Link
      href={href}
      className={`
        flex items-center justify-center gap-[6px]
        p-4 rounded-md
        bg-gradient-to-r from-[#151D26] to-[#2B3D4F]
        text-sm font-medium text-white
        transition-opacity duration-200
        hover:opacity-80
        ${className}`}
    >
      {label}

      {icon && (
        <Image
          src="/assets/icons/consult_arrow.svg"
          alt="right arrow"
          width={16}
          height={16}
        />
      )}
    </Link>
  )
}

export default GetConsultBtn