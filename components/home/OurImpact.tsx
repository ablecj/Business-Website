"use client"

import React from 'react'
import PageContainer from '../layout/PageContainer'
import AnimatedCounter from '../common/AnimatedCounter'

import { motion } from "framer-motion";

const OurImpact = () => {
  return (
    <section className="min-h-screen bg-[url('/assets/images/bg-line-3.svg')] bg-no-repeat bg-cover bg-center">
      <PageContainer>
        <motion.div 
        initial={{opacity: 0, y: 30}}
        whileInView={{opacity: 1, y: 0}}
        viewport={{once: true, amount: 0.9}}
        transition={{duration: 0.9, ease: 'easeInOut'}}
        className="bg-transparent   pt-12
              sm:pt-16
              md:pt-20
              lg:pt-24 ">
          <h2 className="  text-3xl sm:text-4xl md:text-5xl
              font-semibold
              leading-tight
              mx-auto
              text-center md:text-left">Our Impact</h2>
          <p className="mx-auto
              font-['Geist_Mono']
              font-normal
              text-[14px] sm:text-[16px] md:text-[18px]
              leading-[21px] sm:leading-[24px] md:leading-[27px]
              text-[#151D26]
              text-center md:text-left lg:mt-6 md:mt-5 sm:mt-4 mt-3">Discover the milestones that define our success.</p>
        </motion.div>

        <div className=" mt-4
              sm:mt-6
              md:mt-8
              lg:mt-[45px]
              xl:mt-[45px]  
              grid grid-cols-1
              sm:grid-cols-2
              lg:grid-cols-4
              gap-4
              sm:gap-6
              md:gap-8
              lg:gap-12
              xl:gap-12">
         <motion.div
      initial={{ opacity: 0, y: 30 }} 
      whileInView={{ opacity: 1, y: 0 }} 
      viewport={{ once: true, amount: 0.9 }} 
      transition={{ duration: 1.1, ease: "easeInOut" }}
      className="mt-4
              sm:mt-6
              md:mt-8
              lg:mt-[45px]
              xl:mt-[45px]"
    >
            <h3 className="  font-['Geist']
                  font-bold
                  text-[36px]
                  sm:text-[48px]
                  md:text-[60px]
                  lg:text-[74px]
                  leading-[1.2]
                  md:leading-[89px]
                  text-[#151D26]
                  flex justify-center">
                <AnimatedCounter value={95} suffix='%' />
            </h3>
            <p className="  font-['Geist_Mono']
                font-normal
                text-[10px]
                sm:text-[12px]
                md:text-[12px]
                lg:text-[14px]
                leading-[1.5]
                text-[#151D26]
                xl:mt-6 lg:mt-6
                md:mt-5 sm:mt-4
                mt-3 flex justify-center
            ">Client Satisfaction Rate</p>
          </motion.div>

             <motion.div
              initial={{ opacity: 0, y: 30 }} 
              whileInView={{ opacity: 1, y: 0 }} 
              viewport={{ once: true, amount: 0.9 }} 
              transition={{ duration: 1.1, ease: "easeInOut" }} 
              className="mt-4
                  sm:mt-6
                  md:mt-8
                  lg:mt-[45px]
                  xl:mt-[45px]"
              >
              <h3 className="  font-['Geist']
                  font-bold
                  text-[36px]
                  sm:text-[48px]
                  md:text-[60px]
                  lg:text-[74px]
                  leading-[1.2]
                  md:leading-[89px]
                  text-[#151D26] flex justify-center">
                <AnimatedCounter value={300} suffix='+' />
              </h3>
                 <p className="  font-['Geist_Mono']
              font-normal
               text-[10px]
              sm:text-[12px]
              md:text-[12px]
              lg:text-[14px]
              leading-[1.5]
              text-[#151D26]
              xl:mt-6 lg:mt-6
              md:mt-5 sm:mt-4
              mt-3 flex justify-center
              ">Successful Projects Delivered</p>
              </motion.div>
                <motion.div
              initial={{ opacity: 0, y: 30 }} 
              whileInView={{ opacity: 1, y: 0 }} 
              viewport={{ once: true, amount: 0.9 }} 
              transition={{ duration: 1.1, ease: "easeInOut" }} 
              className="mt-4
                sm:mt-6
                md:mt-8
                lg:mt-[45px]
                xl:mt-[45px]"
            >
            <h3 className="  font-['Geist']
                  font-bold
                  text-[36px]
                  sm:text-[48px]
                  md:text-[60px]
                  lg:text-[74px]
                  leading-[1.2]
                  md:leading-[89px]
                  text-[#151D26] flex justify-center">
                <AnimatedCounter value={40} suffix='%' />
            </h3>
            <p className="  font-['Geist_Mono']
          font-normal
          text-[10px]
          sm:text-[12px]
          md:text-[12px]
          lg:text-[14px]
          leading-[1.5]
          text-[#151D26]
          xl:mt-6 lg:mt-6
          md:mt-5 sm:mt-4
          mt-3 flex justify-center
          ">Faster MVP Delivery</p>
          </motion.div>

                  <motion.div
            initial={{ opacity: 0, y: 30 }} 
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.9 }} 
            transition={{ duration: 1.1, ease: "easeInOut" }} 
            className="mt-4
              sm:mt-6
              md:mt-8
              lg:mt-[45px]
              xl:mt-[45px]"
    >
            <h3 className="  font-['Geist']
                  font-bold
                  text-[36px]
                  sm:text-[48px]
                  md:text-[60px]
                  lg:text-[74px]
                  leading-[1.2]
                  md:leading-[89px]
                  text-[#151D26] flex justify-center">
                <AnimatedCounter value={10} suffix='+' />
            </h3>
            <p className="  font-['Geist_Mono']
    font-normal
    text-[10px]
    sm:text-[12px]
    md:text-[12px]
    lg:text-[14px]
    leading-[1.5]
    text-[#151D26]
    xl:mt-6 lg:mt-6
    md:mt-5 sm:mt-4
    mt-3 flex justify-center
    ">Years of Combined Expertise</p>
          </motion.div>

        </div>

        {/* <div className="mt-4
              sm:mt-6
              md:mt-8
              lg:mt-[45px]
              xl:mt-[45px] "> */}
                         <motion.div
      initial={{ opacity: 0, y: 30 }} 
      whileInView={{ opacity: 1, y: 0 }} 
      viewport={{ once: true, amount: 0.9 }} 
      transition={{ duration: 1.1, ease: "easeInOut" }} 
      className="mt-4
              sm:mt-6
              md:mt-8
              lg:mt-[45px]
              xl:mt-[45px]
              flex justify-center flex-col items-center pb-6
              sm:pb-10
              md:pb-14
              lg:pb-24"
        >
        <h2 className=" font-['Geist']
              font-bold
              text-[48px]
              sm:text-[64px]
              md:text-[88px]
              lg:text-[120px]
              leading-[1.2]
              text-[#3398DB]">

                <AnimatedCounter value={100} suffix='%' />
        </h2>
          <p className="  font-['Geist_Mono']
              font-normal
              text-[14px]
              sm:text-[16px]
              md:text-[18px]
              leading-[1.5]
              text-[#3398DB] lg:mt-5 md:mt-5 sm:mt-4 mt-3">

                Uptime Guarantee
          </p>
    </motion.div>
        
        {/* </div> */}
      </PageContainer>

    </section>

  )
}

export default OurImpact