"use client";

import { Button } from "@/components/ui/button";
import { IoIosCloseCircle } from "react-icons/io";
import Image from "next/image";
import React, { useState } from "react";
import Link from "next/link";
import { useDispatch } from "react-redux";
import { useRouter } from "next/navigation";

interface ProductHeroProps {
  image: string;
  image2: string;
  image3: string;
  heading: string;
  desc: string;
  id: number;
}

export default function ProductHero({
  image,
  image2,
  image3,
  heading,
  desc,
  id,
}: ProductHeroProps) {
  const dispatch = useDispatch();
  const router = useRouter();
  const [fullText, setFullText] = useState(false);
  const idString = (id: any) => {
    return String(id).toLowerCase().split(" ").join("");
  };
  const rootId = idString(id);

  const handleProductDetails = () => {
    router.push(`/product/${rootId}`, {
      state: {
        item: { id, heading, desc, image, image2, image3 },
      },
    });
  };

  return (
    <div className="w-full relative min-h-screen flex flex-col items-center justify-center pb-[64px] px-[30xp] lg:px-[64px] bg-[rgba(17,16,16,0.95)] ">
      {fullText && (
        <div
          onClick={() => setFullText(false)}
          className="fixed bg-[rgba(231,235,236,0.65)] pb-[50px] z-[50] backdrop-blur-md  flex h-screen w-screen left-0 top-0 items-center justify-center px-[4%] "
        >
          <div className="lg:max-w-[1030px] max-w-[400px] pt-[70px] mt-[50px]  flex flex-col rounded-md h-full overflow-x-auto items-center justify-center w-full relative px-4 lg:px-[100px]  bg-[#fff]  ">
            <button
              onClick={() => setFullText(false)}
              type="button"
              className="absolute flex items-center z-[52]  top-0 left-0 "
            >
              <IoIosCloseCircle className="text-[30px]" />
            </button>
            <div className="border-t w-full flex items-center  justify-center border-b lg:mt-[30px] mt-[150px] border-[rgba(0,0,0,0.15)]">
              <h1 className="text-[25px]  lg:text-[35px] text-start text-[#000] ">
                {heading}
              </h1>
            </div>

            <div className="flex items-center">
              {" "}
              <Image
                width={200}
                height={170}
                className="object-contain w-full h-full "
                src={image}
                alt="smart watch"
              />{" "}
            </div>

            <div>
              <p className="text-[16px] py-8 ">{desc}</p>
            </div>
          </div>
        </div>
      )}
      <div className="w-full px-[30px] py-[34px] flex flex-col lg:flex-row-reverse  items-center ">
        <>
          <div className="flex flex-col mt-[35px] justify-center w-full gap-8 items-center">
            <div className="bg-[rgba(255,255,255,0.20)] lg:max-w-[790px] w-full rounded-[12px] px-[50px] py-[20px] ">
              <Image
                width={500}
                height={300}
                className="object-contain w-full h-full "
                src={image}
                alt="smart watch"
              />
            </div>

            <div className="w-full flex items-center gap-4 mt-[20px] ">
              <div className="bg-[rgba(255,255,255,0.20)] py-4 w-full flex items-center justify-center rounded-[8px] ">
                <Image
                  width={70}
                  height={70}
                  className="object-contain w-[70px] h-[70px] "
                  src={image2}
                  alt="smart watch"
                />
              </div>

              <div className="bg-[rgba(255,255,255,0.20)] py-4 w-full flex items-center justify-center rounded-[8px] ">
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
                  <p className="line-clamp-4">{desc}</p>
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
              <Button
                onClick={handleProductDetails}
                className=" h-[55px] border-[2px] text-[18px] border-[#fff] max-w-[400px] w-full"
              >
                Buy Now
              </Button>
            </div>
          </div>
        </>
      </div>
    </div>
  );
}
