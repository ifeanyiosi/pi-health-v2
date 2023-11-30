import Image from "next/image";
import React from "react";

export default function ProductFeatures() {
  return (
    <div className="w-full py-[60px] px-[30px] lg:px-[64px] bg-[#fff] ">
      <div className="w-full flex flex-col items-center justify-center">
        <h1 className="text-[#000] w-full text-start text-[25px] lg:text-[32px] font-bold ">
          Product Features
        </h1>

        <div className="w-full mt-[50px] flex items-center gap-8 justify-between flex-col lg:flex-row">
          <div className="flex flex-col items-center justify-start">
            <div className="bg-[rgba(217,217,217,0.3)] max-w-[140px] flex items-center justify-center px-[20px] py-[20px] rounded-[100%] ">
              <Image
                className=""
                width={36}
                height={36}
                src="/game-ring.svg"
                alt="ring"
              />
            </div>

            <h3 className="text-[#000] text-start mt-[20px] font-bold ">
              Compact Design
            </h3>

            <p className="text-[rgba(0,0,0,0.70)] text-center text-[15px] mt-3 ">
              Offering a compact and unobtrusive form factor compared to larger
              wearables like smartwatches. This design is often more discreet
              and comfortable for users.
            </p>
          </div>
          <div className="flex flex-col items-center justify-start">
            <div className="bg-[rgba(217,217,217,0.3)] max-w-[140px] flex items-center justify-center px-[20px] py-[20px] rounded-[100%] ">
              <Image
                className=""
                width={36}
                height={36}
                src="/wireless.svg"
                alt="ring"
              />
            </div>

            <h3 className="text-[#000] mt-[20px] font-bold ">
              Wireless Connectivity
            </h3>

            <p className="text-[rgba(0,0,0,0.70)] text-center text-[15px] mt-3 ">
              Offering a compact and unobtrusive form factor compared to larger
              wearables like smartwatches. This design is often more discreet
              and comfortable for users.
            </p>
          </div>
          <div className="flex flex-col items-center justify-start">
            <div className="bg-[rgba(200,210,237,0.3)] max-w-[140px] flex items-center justify-center px-[20px] py-[20px] rounded-[100%] ">
              <Image
                className=""
                width={36}
                height={36}
                src="/notification-fill.svg"
                alt="ring"
              />
            </div>

            <h3 className="text-[#000] mt-[20px] font-bold ">
              Notification and alerts
            </h3>

            <p className="text-[rgba(0,0,0,0.70)] text-center text-[15px] mt-3 ">
              Offering a compact and unobtrusive form factor compared to larger
              wearables like smartwatches. This design is often more discreet
              and comfortable for users.
            </p>
          </div>
          <div className="flex flex-col items-center justify-start">
            <div className="bg-[rgba(181,234,186,0.3)] max-w-[140px] flex items-center justify-center px-[20px] py-[20px] rounded-[100%] ">
              <Image
                className=""
                width={36}
                height={36}
                src="/battery-solid.svg"
                alt="ring"
              />
            </div>

            <h3 className="text-[#000] mt-[20px] font-bold ">
              Long Battery Life
            </h3>

            <p className="text-[rgba(0,0,0,0.70)] text-center text-[15px] mt-3 ">
              Offering a compact and unobtrusive form factor compared to larger
              wearables like smartwatches. This design is often more discreet
              and comfortable for users.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
