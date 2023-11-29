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

export default function Navbar() {
  return (
    <div className="w-full font-aspekta ">
      <div className="bg-[rgba(68,68,68,1)] w-full lg:text-[18px] text-[#fff] px-[30px] lg:px-[240px] flex items-center justify-between py-[16px] ">
        <h3 className="text-[13px] ">Search</h3>
        <h3 className="text-[13px] ">Login</h3>
      </div>

      <div className="w-full py-[25px] flex justify-between items-center px-[30px] lg:px-[54px] bg-[#73DB73] ">
        <Link className="font-aspekta text-[18px] font-bold " href="/">
          PI-SENSE
        </Link>

        <div className="hidden lg:flex gap-[50px] ">
          <div className="text-[16px] flex gap-1 items-center font-bold text-[#000]">
            {" "}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <h3 className="flex cursor-pointer items-center gap-1 text-[16px]">
                  Our Products <FaCaretDown />
                </h3>
              </DropdownMenuTrigger>

              <DropdownMenuContent className="w-56" align="end">
                <DropdownMenuLabel>
                  <div className="flex flex-col gap-2 space-y-1">
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
            className="text-[16px] flex gap-1 items-center font-bold text-[#000]"
            href="/"
          >
            {" "}
            Pi-Health <FaCaretDown />
          </Link>

          <Link
            className="text-[16px] flex gap-1 items-center font-bold text-[#000]"
            href="/"
          >
            {" "}
            How It Works <FaCaretDown />
          </Link>

          <Link
            className="text-[16px] flex gap-1 items-center font-bold text-[#000]"
            href="/"
          >
            {" "}
            Download
          </Link>

          <Link
            className="text-[16px] flex gap-1 items-center font-bold text-[#000]"
            href="/"
          >
            {" "}
            Support
          </Link>

          <Link
            className="text-[16px] flex gap-1 items-center font-bold text-[#000]"
            href="/"
          >
            {" "}
            Shop Now
          </Link>
        </div>

        <MobileSideBar />
      </div>
    </div>
  );
}
