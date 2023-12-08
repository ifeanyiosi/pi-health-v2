import Link from "next/link";
import React from "react";
import { FaCaretDown } from "react-icons/fa6";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";

export default function NavbarContent() {
  return (
    <div className="flex px-[30px] py-[100px] flex-col gap-[50px] ">
      <div className="text-[16px] flex gap-1 items-center font-bold text-[#000]">
        {" "}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <h3 className="flex items-center gap-1 text-[16px]">
              Our Products <FaCaretDown />
            </h3>
          </DropdownMenuTrigger>

          <DropdownMenuContent className="w-56" align="end">
            <DropdownMenuLabel>
              <div className="flex flex-col gap-2 space-y-1">
                <Link href="/products/smart-health-ring">
                  Smart Health Ring
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

      {/* <Link
        className="text-[16px] flex gap-1 items-center font-bold text-[#000]"
        href="/"
      >
        {" "}
        Shop Now
      </Link> */}
    </div>
  );
}
