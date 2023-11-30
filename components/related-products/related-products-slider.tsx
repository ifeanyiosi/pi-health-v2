"use client";

import { relatedProducts } from "@/constants/constant";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function RelatedProductsSlider() {
  return (
    <div className="w-full font-aspekta mt-[30px] lg:mt-[50px] ">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 place-items-center gap-4">
        {relatedProducts.map((rel) => (
          <div
            className="flex w-full bg-[#fff] items-center justify-start p-2 rounded-[8px] shadow-md h-full flex-col gap-3 "
            key={rel.id}
          >
            <div className="bg-[rgba(238,239,240,0.80)]  w-full  h-[200px] rounded-[30px] flex items-center justify-center ">
              <Image
                width={150}
                height={100}
                className="object-contain"
                src={rel.img}
                alt="related products"
              />
            </div>
            <p className="text-[13px] text-start w-full lg:text-[15px] font-bold ">
              {rel.name}
            </p>
            <p className="text-[rgba(0,0,0,0.60)] font-[450] text-[12px] ">
              {rel.desc}{" "}
            </p>
            <div className="flex items-center w-full justify-between">
              <p className="text-[#29B852] font-bold text-[18px] ">
                ${rel.price}{" "}
              </p>

              <Link className="flex items-center" href="/">
                <Image src="/cart.svg" width={30} height={30} alt="cart-icon" />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
