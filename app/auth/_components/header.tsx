import Link from "next/link";
import React from "react";

export default function AuthHeader() {
  return (
    <div className="w-full bg-[#FAFAFA] shadow-sm py-8 px-[60px] ">
      <Link
        href="/"
        className="text-[rgba(0,0,0,0.90)] text-[18px] font-[700] "
      >
        PI-SENSE
      </Link>
    </div>
  );
}
