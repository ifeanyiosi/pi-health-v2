import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";

export default function HeartRateBelt() {
  return (
    <div className="w-full min-h-screen px-[30xp] lg:px-[64px] bg-[rgba(17,16,16,0.95)] ">
      <div className="w-full lg:hidden px-[30px] py-[34px] flex flex-col items-center ">
        <div className="bg-[rgba(255,255,255,0.20)] rounded-[12px] px-[50px] py-[20px] ">
          <Image
            width={200}
            height={200}
            className="object-contain w-full h-full "
            src="/products/watch1.png"
            alt="smart watch"
          />
        </div>
        <div className="w-full flex items-center gap-4 mt-[20px] ">
          <div className="bg-[rgba(255,255,255,0.20)] w-full flex items-center justify-center rounded-[8px] ">
            <Image
              width={70}
              height={70}
              className="object-contain w-[70px] h-[70px] "
              src="/products/watch1.png"
              alt="smart watch"
            />
          </div>

          <div className="bg-[rgba(255,255,255,0.20)] w-full flex items-center justify-center rounded-[8px] ">
            <Image
              width={70}
              height={70}
              className="object-contain w-[70px] h-[70px] "
              src="/products/watch1.png"
              alt="smart watch"
            />
          </div>
        </div>

        <div className="mt-[30px]  w-full ">
          <h1 className="text-[25px] text-start text-[#fff] ">
            ECG Heart Rate Belt
          </h1>
          <ul className="text-[#fff] mt-[20px] px-4  list-disc text-[15px] flex flex-col gap-5 ">
            <li>Heart Rate Monitoring</li>
            <li>Real Time Electrocardiogram Check</li>
            <li>Abnormal Heart Rate Alert</li>
            <li>HRV Report Supported</li>
            <li>Fatigue & Pressure lndex Analysis</li>
          </ul>

          <button className="underline mt-[24px] text-[#fff] font-bold text-[16px] ">
            See More
          </button>

          <div className=" mt-[46px] w-full">
            <Button className="bg-[#73DB73] h-[55px] text-[#000] max-w-[400px] w-full">
              Buy Now
            </Button>
          </div>
        </div>
      </div>
      <div className="w-full hidden items-center flex-col justify-between pt-[70px] lg:flex">
        <div className="flex items-center justify-between w-full ">
          <div>
            <h1 className="text-[40px] text-[#fff] ">ECG Heart Rate Belt</h1>
            <ul className="text-[#fff] mt-[46px] px-4 list-disc text-[18px] flex flex-col gap-5 ">
              <li>Heart Rate Monitoring</li>
              <li>Real Time Electrocardiogram Check</li>
              <li>Abnormal Heart Rate Alert</li>
              <li>HRV Report Supported</li>
              <li>Fatigue & Pressure lndex Analysis</li>
            </ul>

            <button className="underline mt-[54px] text-[#fff] font-bold text-[16px] ">
              See More
            </button>

            <div className="max-w-[400px] mt-[46px] w-full">
              <Button className="bg-[#73DB73] text-[#000] max-w-[400px] w-full">
                Buy Now
              </Button>
            </div>
          </div>
          <div className="bg-[rgba(255,255,255,0.20)] px-[120px] max-w-[760px] max-h-[600px] flex items-center justify-center py-[50px] border-[rgba(255,255,255,0.20)] rounded-[30px] ">
            <Image
              width={400}
              height={300}
              className="object-contain w-full h-full "
              src="/products/watch1.png"
              alt="smart watch"
            />
          </div>
        </div>
        <div className="flex items-center mt-[46px] mb-[64px] gap-12 w-full justify-between">
          <div className="w-full bg-[rgba(255,255,255,0.20)] flex items-center justify-center rounded-[30px]">
            <Image
              width={200}
              height={200}
              className="object-contain w-[200px] h-[200px] "
              src="/products/watch3.png"
              alt="smart watch"
            />
          </div>
          <div className="w-full bg-[rgba(255,255,255,0.20)] flex items-center justify-center rounded-[30px]">
            <Image
              width={200}
              height={200}
              className="object-contain w-[200px] h-[200px] "
              src="/products/watch3.png"
              alt="smart watch"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
