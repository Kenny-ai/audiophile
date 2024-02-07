import HomeHero from "@/components/HomeHero";
import SectionFour from "@/components/SectionFour";
import SectionThree from "@/components/SectionThree";
import SectionTwo from "@/components/SectionTwo";
import AppLayout from "@/layouts/AppLayout";
import React from "react";

const Home = () => {
  return (
    <AppLayout>
      <div className="flex flex-col gap-12">
        <HomeHero />
        <SectionTwo />
        <SectionThree />
        <div className="mb-16">
          <SectionFour />
        </div>
      </div>
    </AppLayout>
  );
};

export default Home;
