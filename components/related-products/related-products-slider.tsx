"use client";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { relatedProducts } from "@/constants/constant";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import RightArrow from "./right-arrow";
import LeftArrow from "./left-arrow";

export default function RelatedProductsSlider() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    // slidesToShow: 4, // Adjust the number of slides shown at a time
    slidesToScroll: 1,
    nextArrow: <LeftArrow />,
    prevArrow: <RightArrow />,
    slidesToShow: 4,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 769,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
        },
      },
    ],
  };

  return (
    <div className="w-full font-aspekta flex items-center gap-4 mt-[30px] lg:mt-[50px] ">
      <div className="w-full  ">
        <Slider className="z-[50] " {...settings}>
          {relatedProducts.map((rel) => (
            <div className="flex items-center px-2 py-4 gap-4" key={rel.id}>
              {" "}
              <Link
                href={rel.href}
                className="flex w-full z-[50] bg-[#fff]  items-center justify-start p-2 rounded-[8px] shadow-md h-full flex-col gap-3 "
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
                  <p className="text-pi-green font-bold text-[18px] ">
                    ${rel.price}{" "}
                  </p>

                  <Link className="flex items-center" href="/">
                    <Image
                      src="/cart.svg"
                      width={30}
                      height={30}
                      alt="cart-icon"
                    />
                  </Link>
                </div>
              </Link>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}
