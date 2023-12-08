import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";

export default function ImageGallery() {
  return (
    <div className="w-full flex  flex-col">
      <div className="w-full flex  flex-col lg:flex-row  ">
        <div className="w-full flex items-center justify-center lg:justify-start lg:items-start flex-col lg:flex-row-reverse ">
          <div className="justify-center w-full h-full flex items-center">
            <Image
              className="object-cover w-[200px] h-[200px] lg:w-[280px] lg:h-[280px] "
              width={280}
              height={280}
              src="/ringBig.png"
              alt="image-big"
            />
          </div>

          <div className="flex items-center justify-between lg:justify-start lg:items-start lg:gap-4  w-full lg:w-auto lg:flex-col ">
            <div className="bg-[rgba(247,247,247,0.90)] max-w-[120px] max-h-[120px] rounded-[5px] lg:justify-start lg:items-start flex items-center justify-center border border-[rgba(0,0,0,0.30)] ">
              <Image
                className="object-cover w-[60px]  h-[60px] lg:w-[90px] lg:h-[90px] "
                width={280}
                height={280}
                src="/ringBig.png"
                alt="image-big"
              />
            </div>

            <div className="bg-[rgba(247,247,247,0.90)] rounded-[5px] flex items-center justify-center border border-[rgba(0,0,0,0.30)] ">
              <Image
                className="object-cover w-[60px] h-[60px] lg:w-[90px] lg:h-[90px] "
                width={280}
                height={280}
                src="/ringBig.png"
                alt="image-big"
              />
            </div>
            <div className="bg-[rgba(247,247,247,0.90)] rounded-[5px] flex items-center justify-center border border-[rgba(0,0,0,0.30)] ">
              <Image
                className="object-cover w-[60px] h-[60px] lg:w-[90px] lg:h-[90px] "
                width={280}
                height={280}
                src="/ringBig.png"
                alt="image-big"
              />
            </div>
            <div className="bg-[rgba(247,247,247,0.90)] rounded-[5px] flex items-center justify-center border border-[rgba(0,0,0,0.30)] ">
              <Image
                className="object-cover w-[60px] h-[60px] lg:w-[90px] lg:h-[90px] "
                width={280}
                height={280}
                src="/ringBig.png"
                alt="image-big"
              />
            </div>
          </div>
        </div>

        <div className="mt-8">
          <Button className="rounded-[30px] lg:max-w-[150px] w-full h-[50px] text-[12px] lg:text-[15px]  font-bold ">
            Virtual Try-On
          </Button>
        </div>
      </div>

      <div className="mt-8">
        <Button className="rounded-[5px] bg-[#EB6440] lg:max-w-[550px] w-full h-[50px] text-[12px] lg:text-[15px]  ">
          Order for Business Discount
        </Button>
      </div>
    </div>
  );
}
