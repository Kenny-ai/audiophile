import React from "react";
import AppLayout from "./AppLayout";
import CategoryHeader from "@/components/CategoryHeader";
import SectionFour from "@/components/SectionFour";
import SectionTwo from "@/components/SectionTwo";

interface Props {
  children: React.ReactNode;
  title: string;
}

const CategoriesLayout = ({ children, title }: Props) => {
  return (
    <AppLayout>
      <div className="flex flex-col gap-32">
        <CategoryHeader title={title} />
        {children}
        <SectionTwo />
        <div className="mb-28">
          <SectionFour />
        </div>
      </div>
    </AppLayout>
  );
};

export default CategoriesLayout;
