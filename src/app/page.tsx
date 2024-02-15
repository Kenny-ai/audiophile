"use cilent";
import HomeHero from "@/components/home/HomeHero";
import SectionFour from "@/components/home/SectionFour";
import SectionThree from "@/components/home/SectionThree";
import SectionTwo from "@/components/home/SectionTwo";
import AppLayout from "@/layouts/AppLayout";
import React from "react";

const Home = () => {
  return (
    <AppLayout>
      <div className="flex flex-col gap-32 pb-24">
        <HomeHero />
        <SectionTwo />
        <SectionThree />
        <SectionFour />
      </div>
    </AppLayout>
  );
};

export default Home;
