import Breadcrumb from "@/components/breadcrumbs";
import React from "react";
import ImageGallery from "./image-gallery";
import DetailsSection from "./details-section";

export default function DetailsHero() {
  const breadcrumbItems = [
    { text: "Home", link: "/" },
    { text: "Product", link: "/category" },
    { text: "Detail", link: "/category" },
    { text: "Smart Health Ring" },
  ];

  return (
    <div className="flex px-[30px] lg:px-[54px] mx-auto mt-[30px] lg:mt-[100px] font-aspekta   flex-col w-full pb-[100px] ">
      <Breadcrumb items={breadcrumbItems} />
      <div className="flex flex-col mt-[50px] gap-[20px] lg:mt-[60px] lg:flex-row lg:gap-[100px]  justify-between">
        <ImageGallery />
        <DetailsSection />
      </div>
    </div>
  );
}
