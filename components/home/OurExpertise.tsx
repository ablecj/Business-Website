import React from 'react'
import PageContainer from '../layout/PageContainer'
import type { ExpertiseCardProps } from '../common/ExpertiseCard';
import ExpertiseGrid from '../common/ExpertiseGrid';
import Link from 'next/link';
import Image from 'next/image';



const OurExpertise = () => {

     const topCards: ExpertiseCardProps[] = [
    {
      title: "Web Development",
      description:
        "Scalable and high-performance web solutions tailored to your business needs.",
      image: "/assets/images/Bussnes_ser_img/WEB_DEV.png",
      href: "/expertise/web-development",
    },
    {
      title: "UI/UX Design",
      description:
        "User-centered designs that enhance engagement and usability.",
      image: "/assets/images/Bussnes_ser_img/UI_UX.png",
      href: "/expertise/ui-ux",
    },
    {
      title: "Mobile Applications",
      description:
        "Cross-platform mobile applications built for performance and scale.",
      image: "/assets/images/Bussnes_ser_img/MOB_APP.png",
      href: "/expertise/mobile-apps",
    },
  ];

  // Row 3 cards
  const bottomCards: ExpertiseCardProps[] = [
    {
      title: "Cloud Solutions",
      description:
        "Secure, scalable cloud infrastructure and DevOps solutions.",
      image: "/assets/images/Bussnes_ser_img/Cloud.png",
      href: "/expertise/cloud",
    },
    {
      title: "E-commerce",
      description:
        "End-to-end e-commerce platforms optimized for conversion.",
      image: "/assets/images/Bussnes_ser_img/ECOMM.png",
      href: "/expertise/ecommerce",
    },
    {
      title: "AI & Automation",
      description:
        "Intelligent automation solutions to streamline your operations.",
      image: "/assets/images/Bussnes_ser_img/AI.png",
      href: "/expertise/ai",
    },
  ];


    return (
        <section className="h-auto bg-[url('/assets/images/BG_2.svg')] bg-no-repeat bg-cover bg-center">
            <PageContainer>
                <div className="Title_section_Expertise mt-10 sm:mt-16 md:mt-20 lg:mt-24 ">
                    <h2 className='font-geist font-normal
  text-[32px] sm:text-[44px] md:text-[60px] lg:text-[74px]
  leading-[40px] sm:leading-[56px] md:leading-[72px] lg:leading-[89px]
  text-[#151D26]
  flex-none order-0 self-stretch flex-grow-0'>
                        Our Expertise
                    </h2>
                    <p className='font-geist-mono font-normal
    text-[14px] sm:text-[16px] md:text-[18px]
    leading-[21px] sm:leading-[24px] md:leading-[27px]
    text-[#151D26]
    flex-none order-1 flex-grow-0 mt-4 sm:mt-5 md:mt-6 lg:mt-6 '>
                        We specialize in delivering tailored solutions to address your business needs across these key areas:
                    </p>
                </div>

                {/* Row 1 - Cards */}
        {/* <ExpertiseGrid cards={topCards} /> */}
        <ExpertiseGrid cards={topCards} />

        {/* Row 2 - Center Button */}
        <div className="mt-14 flex justify-center">
          <Link
      href='/contact'
      className={`
       box-border
    flex items-center justify-center
    gap-2 sm:gap-2.5 md:gap-3
    px-5 py-4 sm:px-6 sm:py-4.5 md:px-7 md:py-6
    mx-auto

    rounded-lg
    bg-transparent
    border border-gray-200
    shadow-sm

    text-sm sm:text-base md:text-lg
    font-medium
    text-[#151D26]

    transition
    hover:bg-gray-50
    active:scale-[0.98]
        `}
    >
            Get a consultation
             <Image
                      src="/assets/icons/Blue_get_consult_arr.svg"
                      alt="right arrow"
                      width={16}
                      height={16}
                    />
          </Link>
        </div>

        {/* Row 3 - Cards */}
        <div className="mt-14">
          <ExpertiseGrid cards={bottomCards} />
        </div>
            </PageContainer>
        </section>
    )
}

export default OurExpertise