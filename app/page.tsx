import HomeBanner from "@/components/home/HomeBanner";
import OurExpertise from "@/components/home/OurExpertise";
import OurImpact from "@/components/home/OurImpact";
import Image from "next/image";

export default function Home() {
  return (

    // bg-zinc-50 font-sans dark:bg-black
    <main className="h-auto  ">
      <HomeBanner />
      <OurExpertise />  
      <OurImpact />
    </main>
  );
}
