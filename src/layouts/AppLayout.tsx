import Footer from "@/components/Footer";
import Header from "@/components/Header";
import React from "react";

interface Props {
  children: React.ReactNode;
}

const AppLayout = ({ children }: Props) => {
  return (
    <div className="">
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default AppLayout;
