import React from "react";
import { IoIosStar } from "react-icons/io";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { BsCartFill } from "react-icons/bs";

export default function DetailsSection() {
  return (
    <div className="w-full flex items-start h-full justify-start flex-col ">
      <h1 className="text-[25px] lg:text-[32px] font-bold ">Smart Health Ring</h1>
      <p className="text-[#000]/60 text-[14px] lg:text-[14px]  ">
        Elevate your well-being with our Smart Health Ring. Monitor vitals,
        track activity, and receive health insights - all on your finger. It’s
        wellness, redefined
      </p>

      <div className=" flex gap-4 mt-[20px] ">
        <p className="text-[25px] lg:text-[32px] text-pi-green ">$250</p>
        <p className="text-[25px] line-through lg:text-[32px] text-[#000]/30 ">
          $250
        </p>
      </div>

      <div className="flex items-center text-[#BDC017] gap-0.5">
        <IoIosStar />
        <IoIosStar />
        <IoIosStar />
        <IoIosStar />
        <IoIosStar />
        <p className="text-[14px] text-[#344054] ">(121)</p>
      </div>

      <div className="border-b pb-4 border-[#000]/10 w-full"></div>

      <div className="mt-4">
        <p className="font-bold text-[16px]">Choose a color</p>
        <div className="flex mt-3 items-center gap-4">
          <div className="bg-red-500 rounded-full h-[44px] w-[44px] "></div>
          <div className="bg-blue-500 rounded-full h-[44px] w-[44px] "></div>
        </div>
      </div>

      <div className="border-b pb-4 border-[#000]/10 w-full"></div>

      <div className="mt-5 w-full">
        <div className="flex ic justify-between w-full lg:max-w-[400px]">
          <p className="font-bold text-[16px]">Select size</p>
          <Link
            href="/"
            className="font-bold text-pi-green underline text-[16px]"
          >
            Size guide
          </Link>
        </div>
        <Select>
          <SelectTrigger className="lg:w-[400px] w-full mt-4 placeholder:text-[#000]/60 border-[#000]/10 bg-[#F7F7F7] h-[55px] ">
            <SelectValue
              className="placeholder:text-[#000]/60 "
              placeholder="Select your ring size"
            />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Fruits</SelectLabel>
              <SelectItem value="apple">Apple</SelectItem>
              <SelectItem value="banana">Banana</SelectItem>
              <SelectItem value="blueberry">Blueberry</SelectItem>
              <SelectItem value="grapes">Grapes</SelectItem>
              <SelectItem value="pineapple">Pineapple</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>

      <div className="mt-8">
        <div>
          <p className="font-bold text-[16px]">Quantity</p>
        </div>

        <div className="flex mt-4 items-center gap-4">
          <button className="h-[55px] flex items-center justify-center rounded-[5px] border border-[#000]/20 bg-[#F7F7F7] w-[55px] ">
            -
          </button>
          <button className="h-[55px] flex items-center justify-center rounded-[5px] border border-[#000]/20 bg-[#F7F7F7] w-[55px] ">
            2
          </button>
          <button className="h-[55px] flex items-center justify-center rounded-[5px] border border-[#000]/20 bg-[#F7F7F7] w-[55px] ">
            +
          </button>
        </div>
      </div>

      <div className="w-full mt-8 flex gap-4 flex-col lg:flex-row">
        <Button
          variant="secondary"
          className="flex border w-full h-[55px] border-pi-green gap-2"
        >
          {" "}
          <BsCartFill />
          Add To Cart
        </Button>

        <Button className="flex border w-full h-[55px] border-pi-green gap-2">
          Check Out
        </Button>
      </div>
    </div>
  );
}
