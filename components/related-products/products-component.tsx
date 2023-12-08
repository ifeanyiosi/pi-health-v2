import Image from "next/image";
import Link from "next/link";
import React from "react";

interface ProductsComponentProps {
  href: string;
  img: string;
  name: string;
  desc: string;
  price: number;
}

export default function ProductsComponent({
  href,
  img,
  name,
  desc,
  price,
}: ProductsComponentProps) {
  return (
    <div className="w-full font-aspekta flex items-center gap-4 mt-[30px] lg:mt-[50px]">
      <div className="flex items-center gap-4">
        {" "}
        <Link
          href={href}
          className="flex w-full z-[50] bg-[#fff]  items-center justify-start p-2 rounded-[8px] shadow-md h-full flex-col gap-3 "
        >
          <div className="bg-[rgba(238,239,240,0.80)]  w-full  h-[200px] rounded-[30px] flex items-center justify-center ">
            <Image
              width={150}
              height={100}
              className="object-contain"
              src={img}
              alt="related products"
            />
          </div>
          <p className="text-[13px] text-start w-full lg:text-[15px] font-bold ">
            {name}
          </p>
          <p className="text-[rgba(0,0,0,0.60)] font-[450] text-[12px] ">
            {desc}{" "}
          </p>
          <div className="flex items-center w-full justify-between">
            <p className="text-pi-green font-bold text-[18px] ">${price} </p>

            <Link className="flex items-center" href="/">
              <Image src="/cart.svg" width={30} height={30} alt="cart-icon" />
            </Link>
          </div>
        </Link>
      </div>
    </div>
  );
}
