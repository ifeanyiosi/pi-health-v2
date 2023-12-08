import React from "react";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import { AiOutlineMenu } from "react-icons/ai";
import NavbarContent from "./navbar-content";

export default function MobileSideBar() {
  return (
    <Sheet>
      <SheetTrigger className="lg:hidden pr-4 hover:opacity-75 transition">
        <AiOutlineMenu className="text-[20px] text-[#fff] " />
      </SheetTrigger>

      <SheetContent side="left" className="p-0 bg-white">
        <NavbarContent />
      </SheetContent>
    </Sheet>
  );
}
