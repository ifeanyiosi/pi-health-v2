import React from "react";
import RelatedProductsSlider from "./related-products-slider";

export default function RelatedProducts() {
  return (
    <div className="w-full px-[30px] py-[70px] lg:px-[64px] ">
      <h1 className="text-start text-[#000] text-[25px] lg:text-[32px] font-bold ">
        Related Products
      </h1>
      <RelatedProductsSlider />
    </div>
  );
}
