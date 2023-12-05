import Breadcrumb from "@/components/breadcrumbs";
import React from "react";

export default function ProductDetails() {
  const breadcrumbItems = [
    { text: "Home", link: "/" },
    { text: "Product", link: "/category" },
    { text: "Detail", link: "/category" },
    { text: "Smart Health Ring" },
  ];
  return (
    <div className="flex lg:px-[30px] font-aspekta flex-col w-full pb-[100px] items-center justify-center">
      <Breadcrumb items={breadcrumbItems} />
    </div>
  );
}
