import React from "react";
import AppLayout from "./AppLayout";
import SectionFour from "@/components/home/SectionFour";
import SectionTwo from "@/components/home/SectionTwo";

interface Props {
  children: React.ReactNode;
}

const CategoriesLayout = ({ children }: Props) => {
  return (
    <AppLayout>
      <div className="flex flex-col gap-32 pb-24">
        {children}
        <SectionTwo />
        <SectionFour />
      </div>
    </AppLayout>
  );
};

export default CategoriesLayout;
