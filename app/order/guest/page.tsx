import ShippingForm from "@/components/shipping-form";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { IoIosCart } from "react-icons/io";

export default function Guest() {
  return (
    <div className="min-h-screen font-aspekta pb-[30px] lg:pb-[100px] px-[30px] lg:px-[54px] w-full">
      <div className="flex mt-5 lg:mt-[50px] lg:px-[50px] gap-2">
        <h1 className="text-[25px] lg:text-[32px] uppercase font-bold">
          Checkout
        </h1>
        <div className="relative flex">
          <IoIosCart className="w-[40px] h-[40px] " />
          <div className="bg-[#EB6440] left-[26px] top-[-5px] absolute p-2 flex items-center justify-center h-[18px] w-[18px] rounded-[50%] text-[12px] ">
            <p className="font-bold text-white">2</p>
          </div>
        </div>
      </div>
      <div className="h-[3px] mt-5 w-full bg-[#D9D9D94D]/30 "></div>
      <div className="w-fulll mt-11 flex flex-col lg:flex-row">
        <div className="w-full">
          <div className="bg-[#FAFAFA] border border-[#000]/5  rounded-[5px] lg:max-w-[600px] w-full px-4 py-6 ">
            <p className="text-]14px] lg:text-[18px] text-[#000] ">
              <Link href="/auth/login" className="font-bold underline">
                Sign in
              </Link>{" "}
              for a faster checkout experience or continue your checkout process
              as a guest
            </p>
          </div>

          <div className="w-full lg:max-w-[600px] mt-[40px] lg:mt-[50px] ">
            <div className="w-full flex justify-between items-center">
              <h1 className="font-bold text-[25px] lg:text-[32px]">
                1. Shipping
              </h1>
              <p className="text-14px lg:text-[18px] text-[#000]/90 ">
                STEP 1 OF 3
              </p>
            </div>
            <ShippingForm />
          </div>
        </div>
        <div className="w-full flex flex-col">
          <div className="bg-[#FAFAFA] border flex flex-col items-center justify-center border-[#000]/5  rounded-[5px]  w-full px-4 py-6 ">
            <h3 className="text-[14px] font-bold lg:text-[18px]">
              Order Summary
            </h3>
            <div className="w-full mt-[50px] lg:px-[100px] flex items-center justify-between">
              <h3 className="text-[18px] lg:text-[25px]  text-[#000]/60">
                Subtotal :
              </h3>
              <h3 className="text-[18px] lg:text-[25px] font-bold text-[#000]">
                $450
              </h3>
            </div>
            <div className="w-full mt-[50px] lg:px-[100px] flex items-center justify-between">
              <h3 className="text-[18px] lg:text-[25px]  text-[#000]/60">
                Tax :
              </h3>
              <h3 className="text-[18px] lg:text-[25px] font-bold text-[#000]">
                $450
              </h3>
            </div>
            <div className="w-full mt-[50px] lg:px-[100px] flex items-center justify-between">
              <h3 className="text-[18px] lg:text-[25px]  text-[#000]/60">
                Order Total :
              </h3>
              <h3 className="text-[18px] lg:text-[25px] font-bold text-[#000]">
                $450
              </h3>
            </div>
          </div>
          <div className="bg-[#FAFAFA] mt-11 border flex flex-col items-center justify-center border-[#000]/5  rounded-[5px]  w-full px-4 py-6 ">
            <h3 className="text-[14px] font-bold lg:text-[18px]">
              Cart Summary
            </h3>

            <div className="flex mt-[30px] items-center">
              <div>
                <Image
                  width={150}
                  height={150}
                  className="object-cover"
                  src="/products/watch2.png"
                  alt="cart-item"
                />
              </div>
              <div className="flex flex-col text-[12px] lg:text-[14px] gap-2">
                <p className="font-bold text-[15px] lg:text-[18px]">
                  Smart Health Ring
                </p>
                <p>Black</p>
                <p>QTY : 1</p>
                <p>$200</p>
                <p className="font-bold">Total : $200</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
