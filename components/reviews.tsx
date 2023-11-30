import { reviewers } from "@/constants/constant";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Reviews() {
  return (
    <div className="w-full py-[60px] px-[30px] flex flex-col items-center justify-center lg:px-[64px] bg-[#fff] ">
      <div className="w-full mb-[50px] flex items-center justify-between">
        <h1 className="w-full text-[25px] lg:text-[32px] font-bold text-start">
          Reviews
        </h1>
        <Link
          href=""
          className="text-[rgba(0,0,0,0.7)] whitespace-nowrap text-[15px] "
        >
          See all reviews {">>"}
        </Link>
      </div>
      <div className="w-full grid grid-cols-1 lg:grid-cols-3 place-items-center gap-8 lg:gap-[60px]  items-center justify-center">
        {reviewers.map((rev) => (
          <div
            className=" flex flex-col items-center lg:items-start gap-4 justify-between"
            key={rev.id}
          >
            <div className="flex flex-col lg:flex-row items-center gap-2">
              <Image width={80} height={80} src={rev.img} alt="review" />
              <h3 className="font-bold">{rev.name} </h3>
            </div>

            <p className="text-[15px] text-center lg:text-start text-[rgba(0,0,0,0.65)] ">
              {rev.review}{" "}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
