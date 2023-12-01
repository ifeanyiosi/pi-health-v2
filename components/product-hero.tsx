"use client";

import { Button } from "@/components/ui/button";

import Image from "next/image";
import React, { useState } from "react";

interface ProductHeroProps {
  image: string;
  image2: string;
  image3: string;
  heading: string;
  desc: string;
}

export default function ProductHero({
  image,
  image2,
  image3,
  heading,
  desc,
}: ProductHeroProps) {
  const [fullText, setFullText] = useState(false);

  return (
    <div className="w-full relative min-h-screen px-[30xp] lg:px-[64px] bg-[rgba(17,16,16,0.95)] ">
      <div className="w-full px-[30px] py-[34px] flex flex-col lg:flex-row-reverse  items-center ">
        <>
          <div className="flex flex-col mt-[35px] justify-center w-full gap-8 items-center">
            <div className="bg-[rgba(255,255,255,0.20)] rounded-[12px] px-[50px] py-[20px] ">
              <Image
                width={500}
                height={300}
                className="object-contain w-full h-full "
                src={image}
                alt="smart watch"
              />
            </div>

            <div className="w-full flex items-center gap-4 mt-[20px] ">
              <div className="bg-[rgba(255,255,255,0.20)] w-full flex items-center justify-center rounded-[8px] ">
                <Image
                  width={70}
                  height={70}
                  className="object-contain w-[70px] h-[70px] "
                  src={image2}
                  alt="smart watch"
                />
              </div>

              <div className="bg-[rgba(255,255,255,0.20)] w-full flex items-center justify-center rounded-[8px] ">
                <Image
                  width={70}
                  height={70}
                  className="object-contain w-[70px] h-[70px] "
                  src={image3}
                  alt="smart watch"
                />
              </div>
            </div>
          </div>

          <div className="mt-[30px] flex flex-col relative items-start w-full ">
            <div className="">
              <div>
                <h1 className="text-[25px] lg:text-[35px] text-start text-[#fff] ">
                  {heading}
                </h1>
                <ul className="text-[#fff] mt-[20px] max-w-[500px]  list-disc text-[15px] flex flex-col gap-5 ">
                  <p
                    className={`${
                      fullText ? "line-clamp-none" : "line-clamp-4"
                    }`}
                  >
                    {desc}
                  </p>
                </ul>
              </div>
            </div>

            <button
              type="button"
              onClick={() => setFullText(!fullText)}
              className="underline mt-[24px] text-[#fff] font-bold text-[16px] "
            >
              See More
            </button>

            <div className=" mt-[46px] w-full">
              <Button className="bg-[#73DB73] h-[55px] text-[#000] max-w-[400px] w-full">
                Buy Now
              </Button>
            </div>
          </div>
        </>
      </div>
    </div>
  );
}
