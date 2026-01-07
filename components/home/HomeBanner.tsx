"use client";

import React, { useEffect, useState } from "react";
import PageContainer from "../layout/PageContainer";
import GetConsultBtn from "../common/GetConsultBtn";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import { Autoplay } from "swiper/modules";
import { motion, AnimatePresence } from "framer-motion";

const partners = [
  "../assets/images/partners/partner1.png",
  "../assets/images/partners/partner2.png",
  "../assets/images/partners/partner3.png",
  "../assets/images/partners/partner4.png",
  "../assets/images/partners/partner5.png",
  "../assets/images/partners/partner6.png",
];

/* 🔁 Rotating Banner Content */
const bannerContent = [
  {
    title: "Empowering\nGlobal Businesses",
    description:
      "From startups to multinational corporations, we deliver scalable, reliable, and cost-effective services to address your unique challenges.",
    description2: "  Transform your business with expert engineering, seamless migrations, and innovative digital solutions, no matter where you are.",
  },
  {
    title: "Building\nDigital Excellence",
    description:
      "We help companies modernize infrastructure, migrate seamlessly, and scale engineering teams worldwide.",
       description2: " Empower your organization with tailored technology solutions designed to optimize performance, enhance security, and accelerate growth across global markets.",
  },
  {
    title: "Driving\nInnovation Forward",
    description:
      "Leverage expert talent, cloud-native solutions, and cutting-edge technologies to stay ahead.",
    description2: "Partner with a world-class team to modernize systems, scale operations efficiently, and turn complex technical challenges into sustainable competitive advantages.",
  },
];

const HomeBanner = () => {
  const [index, setIndex] = useState(0);

  /* ⏱ Auto switch text */
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % bannerContent.length);
    }, 4500); // change text every 4.5s

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="h-auto bg-[url('/assets/images/Hero-Bg.svg')] bg-no-repeat bg-cover bg-center">
      <PageContainer className="pt-20 sm:pt-26 md:pt-32 flex flex-col h-full pb-8">

        {/* TOP ROW (Animated Text) */}
        <div className="flex flex-col gap-6 ">
          <AnimatePresence mode="wait">
            <motion.h1
              key={bannerContent[index].title}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="font-geist font-normal text-[48px] sm:text-[64px] md:text-[96px] lg:text-[120px] leading-tight lg:leading-[144px] text-[#151D26] whitespace-pre-line"
            >
              {bannerContent[index].title}
            </motion.h1>
          </AnimatePresence>

          <AnimatePresence mode="wait">
            <motion.p
              key={bannerContent[index].description}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="max-w-[1014px] font-geist-mono text-[14px] sm:text-[16px] md:text-[18px] leading-relaxed sm:leading-[27px] text-[#151D26]/80"
            >
              {bannerContent[index].description}
            </motion.p>
          </AnimatePresence>
        </div>

        {/* BOTTOM ROW */}
        <div className="flex flex-col items-center sm:items-end gap-4 sm:gap-6 pb-8 w-full mt-6 md:mt-[68px]">
          {/* <p className="text-center sm:text-right max-w-full sm:max-w-[520px] md:max-w-[592px] font-geist-mono text-[14px] sm:text-[16px] md:text-[18px] leading-[21px] sm:leading-[24px] md:leading-[27px] text-[#151D26]/80">
            Transform your business with expert engineering, seamless migrations,
            and innovative digital solutions, no matter where you are.
          </p> */}

            <AnimatePresence mode="wait">
            <motion.p
              key={bannerContent[index].description}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -10 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-center sm:text-right max-w-full sm:max-w-[520px] md:max-w-[592px] font-geist-mono text-[14px] sm:text-[16px] md:text-[18px] leading-[21px] sm:leading-[24px] md:leading-[27px] text-[#151D26]/80"
            >
              {bannerContent[index].description2}
            </motion.p>
          </AnimatePresence>

          <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 w-full sm:max-w-[520px] md:max-w-[592px]">
            <GetConsultBtn />
            <Link
              href="/learn-more"
              className="relative font-geist-mono text-[#151D26]/80 text-[14px] sm:text-[16px] md:text-[18px] after:absolute after:bottom-0 after:left-0 after:h-[1px] after:w-full after:bg-[#151D26]/80 after:origin-right after:scale-x-100 after:transition-transform after:duration-500 hover:after:origin-left hover:after:scale-x-0"
            >
              View Case Studies
            </Link>
          </div>
        </div>

        {/* Partners Slider */}
        <div className="mt-12 sm:mt-16 w-full">
          <p className="mb-6 font-geist font-semibold text-[24px] leading-[30px] text-center text-[#151D26]">
            join our ever growing client list
          </p>

          <Swiper
            modules={[Autoplay]}
            spaceBetween={40}
            slidesPerView={2}
            loop
            autoplay={{ delay: 2000, disableOnInteraction: false }}
            breakpoints={{
              640: { slidesPerView: 2 },
              768: { slidesPerView: 3 },
              1024: { slidesPerView: 5 },
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
