"use client";

import React from "react";
import PageContainer from "../layout/PageContainer";
import GetConsultBtn from "../common/GetConsultBtn";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import { Autoplay } from "swiper/modules";

const partners = [
  "../assets/images/partners/partner1.jpg",
  "../assets/images/partners/partner2.jpg",
  "../assets/images/partners/partner3.jpg",
  "../assets/images/partners/partner4.jpg",
  "../assets/images/partners/partner5.jpg",
  "../assets/images/partners/partner6.jpg",
];

const HomeBanner = () => {
  return (
    <section
      className="h-auto bg-[url('/assets/images/Hero-Bg.svg')] bg-no-repeat bg-cover bg-center"
    >
      <PageContainer className="pt-20 sm:pt-26 md:pt-32 flex flex-col h-full pb-8">
        {/* TOP ROW */}
        <div className="flex flex-col gap-6">
          <h1 className="font-geist font-normal text-[48px] sm:text-[64px] md:text-[96px] lg:text-[120px] leading-tight lg:leading-[144px] text-[#151D26]">
            Empowering <br /> Global Businesses
          </h1>
          <p className="max-w-[1014px] font-geist-mono text-[14px] sm:text-[16px] md:text-[18px] leading-relaxed sm:leading-[27px] text-[#151D26]/80">
            From startups to multinational corporations, we deliver scalable,
            reliable, and cost-effective services to address your unique
            challenges.
          </p>
        </div>

        {/* BOTTOM ROW: Paragraph + Button + Link */}
        <div className="flex flex-col items-center sm:items-end gap-4 sm:gap-6 pb-8 w-full mt-8 md:mt-[68px]">
          {/* Paragraph */}
          <p className="text-center sm:text-right max-w-full sm:max-w-[520px] md:max-w-[592px] font-geist-mono text-[14px] sm:text-[16px] md:text-[18px] leading-[21px] sm:leading-[24px] md:leading-[27px] text-[#151D26]/80">
            Transform your business with expert engineering, seamless migrations,
            and innovative digital solutions, no matter where you are.
          </p>

          {/* Buttons & Link */}
          <div className="flex flex-col sm:flex-row items-center sm:items-center justify-start sm:justify-start gap-4 sm:gap-6 w-full sm:max-w-[520px] md:max-w-[592px]">
            <GetConsultBtn />
            <Link
              href="/learn-more"
              className="relative font-geist-mono text-[#151D26]/80 text-[14px] sm:text-[16px] md:text-[18px]  decoration-[#151D26]/80 after:absolute after:bottom-0 after:left-0 after:h-[1px] after:w-full after:bg-[#151D26]/80 after:origin-right after:scale-x-100 after:transition-transform after:duration-500 hover:after:origin-left hover:after:scale-x-0"
            >
              View Case Studies
            </Link>
          </div>
        </div>

        {/* Partners Slider */}
        <div className="mt-12 sm:mt-16 w-full">

          {/*  */}
          <p className="mb-6 font-geist font-semibold text-[24px] leading-[30px] text-center text-[#151D26] flex-none self-stretch">
            join our ever growing client list
          </p>
          <Swiper
            modules={[Autoplay]}
            spaceBetween={40}
            slidesPerView={6} // default for mobile
            loop={true}
            autoplay={{ delay: 2000, disableOnInteraction: false }}
            breakpoints={{
              640: { slidesPerView: 2 }, // small devices
              768: { slidesPerView: 3 }, // tablet
              1024: { slidesPerView: 5 }, // desktop
            }}
          >
            {partners.map((partner, index) => (
              <SwiperSlide key={index}>
                <img
                  src={partner}
                  alt={`Partner ${index + 1}`}
                  className="w-full h-auto object-contain"
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </PageContainer>
    </section>
  );
};

export default HomeBanner;
