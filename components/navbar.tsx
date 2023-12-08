import { FaCaretDown } from "react-icons/fa6";
import Link from "next/link";
import React from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import MobileSideBar from "./mobile-sidebar";
import Image from "next/image";

export default function Navbar() {
  return (
    <div className="w-full font-aspekta ">
      <div className="bg-[rgba(68,68,68,1)] w-full lg:text-[18px] text-[#fff] px-[30px] lg:px-[54px] flex items-center justify-between py-[16px] ">
        <div className="w-full flex items-center justify-between gap-2 ">
          <Link className="text-[16px] " href="/">
            Search
          </Link>
          <div className="flex items-center justify-between gap-[60px] ">
            {" "}
            <Link className="text-[16px] " href="/">
              Contact Us
            </Link>
            <Link className="text-[16px] " href="/auth/login">
              Login
            </Link>
          </div>
        </div>
      </div>

      <div className="w-full py-[25px] flex justify-between items-center px-[30px] lg:px-[54px] bg-pi-green ">
        <Link
          className="font-aspekta flex items-center gap-2 text-[#fff] text-[18px] font-bold "
          href="/"
        >
          <Image width={24} height={24} src="/Health.svg" alt="logo" />
          PI-SENSE
        </Link>

        <div className="hidden lg:flex gap-[50px] ">
          <div className="text-[16px] flex gap-1 items-center font-bold text-[#fff]">
            {" "}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <h3 className="flex cursor-pointer items-center gap-1 text-[16px]">
                  Our Products <FaCaretDown />
                </h3>
              </DropdownMenuTrigger>

              <DropdownMenuContent className="w-56" align="end">
                <DropdownMenuLabel>
                  <div className="flex flex-col text-[#000] gap-2 space-y-1">
                    <Link href="/products/smart-health-ring">
                      Smart Health Ring
                    </Link>
                    <DropdownMenuSeparator />
                    <Link href="/products/ecg-heart-rate-belt">
                      ECG Heart Rate Belt
                    </Link>
                    <DropdownMenuSeparator />
                    <Link href="/products/ecg-patch">ECG Patch</Link>
                    <DropdownMenuSeparator />
                    <Link href="/products/blood-pressure-watch">
                      Blood Pressure Watch
                    </Link>
                    <DropdownMenuSeparator />
                    <Link href="/products/smart-sleep-monitor">
                      Smart Sleep Monitor
                    </Link>
                    <DropdownMenuSeparator />
                    <Link href="/products/ecg-watch">ECG Watch</Link>
                  </div>
                </DropdownMenuLabel>
              </DropdownMenuContent>
            </DropdownMenu>{" "}
          </div>

          <Link
            className="text-[16px] flex gap-1 items-center font-bold text-[#fff]"
            href="/"
          >
            {" "}
            Pi-Health <FaCaretDown />
          </Link>

          <Link
            className="text-[16px] flex gap-1 items-center font-bold text-[#fff]"
            href="/"
          >
            {" "}
            How It Works <FaCaretDown />
          </Link>

          <Link
            className="text-[16px] flex gap-1 items-center font-bold text-[#fff]"
            href="/"
          >
            {" "}
            Download
          </Link>

          <Link
            className="text-[16px] flex gap-1 items-center font-bold text-[#fff]"
            href="/"
          >
            {" "}
            Support
          </Link>

          <Link
            className="text-[16px] relative flex gap-1 items-center font-bold text-[#fff]"
            href="/"
          >
            <Image width={30} height={30} src="/cart.svg" alt="cart-icon" />
            <div className="bg-[#EB6440] left-[20px] top-[-5px] absolute p-2 flex items-center justify-center h-[18px] w-[18px] rounded-[50%] text-[12px] ">
              <p>2</p>
            </div>
          </Link>
        </div>

        <div className="flex lg:hidden items-center gap-4">
          <Link
            className="text-[16px] relative flex gap-1 items-center font-bold text-[#fff]"
            href="/"
          >
            <Image width={30} height={30} src="/cart.svg" alt="cart-icon" />
            <div className="bg-[#EB6440] left-[20px] top-[-5px] absolute p-2 flex items-center justify-center h-[18px] w-[18px] rounded-[50%] text-[12px] ">
              <p>2</p>
            </div>
          </Link>

          <MobileSideBar />
        </div>
      </div>
    </div>
  );
}
