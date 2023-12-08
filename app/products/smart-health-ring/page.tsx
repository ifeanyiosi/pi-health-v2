import ProductHero from "@/components/product-hero";
import { Button } from "@/components/ui/button";
import { smartHealthRing } from "@/constants/constant";
import Image from "next/image";
import React from "react";

export default function SmartSleepMonitor() {
  return (
    <div className="w-full">
      {smartHealthRing.map((product) => (
        <ProductHero
          id={product.id}
          key={product.heading}
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
