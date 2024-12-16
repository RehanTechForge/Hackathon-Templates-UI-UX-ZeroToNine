import BreadCrumb from "@/components/BreadCrumb";
import FilterSection from "@/components/FilterSection";
import ShopProductSection from "@/components/ShopProductSection";
import SupportSection from "@/components/SupportSection";
import React from "react";

const ShopPage = () => {
  return (
    <>
      <BreadCrumb
        backgroundImage="/banner.png"
        icon="/house.png"
        title="Shop"
        links={[
          { name: "Home", href: "/" },
          { name: "Shop", isActive: true },
        ]}
      />
      <FilterSection />
      <ShopProductSection />
      <SupportSection />
    </>
  );
};

export default ShopPage;
