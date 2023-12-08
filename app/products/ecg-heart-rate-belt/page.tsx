import ProductHero from "@/components/product-hero";
import { Button } from "@/components/ui/button";
import { heartRateBelt } from "@/constants/constant";
import Image from "next/image";
import React from "react";

export default function HeartRateBelt() {
  return (
    <div className="w-full">
      {heartRateBelt.map((product) => (
        <ProductHero
          id={product.id}
          key={product.id}
          image={product.img}
          image2={product.img2}
          image3={product.img3}
          heading={product.heading}
          desc={product.desc}
        />
      ))}
    </div>
  );
}
