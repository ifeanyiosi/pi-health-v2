import React from "react";
import { Input } from "./ui/input";
import Link from "next/link";
import { Button } from "./ui/button";

export default function ShippingForm() {
  return (
    <div className="mt-[30px] lg:mt-[47px] w-full">
      <div className="w-full flex flex-col gap-8">
        <div>
          <label className="text-[14px] mb-2 lg:text-[18px] ">
            Email for order confirmation
          </label>
          <Input />
        </div>

        <div>
          <label className="text-[14px] mb-2 lg:text-[18px] ">Country</label>
          <Input />
        </div>

        <div>
          <label className="text-[14px] mb-2 lg:text-[18px] ">
            Full name (First and last name)
          </label>
          <Input />
        </div>

        <div>
          <label className="text-[14px] mb-2 lg:text-[18px] ">
            Phone Number
          </label>
          <Input />
        </div>

        <div>
          <label className="text-[14px] mb-2 lg:text-[18px] ">
            Address line 1
          </label>
          <Input />
        </div>

        <div className="flex items-center gap-[30px] justify-between">
          <div>
            <label className="text-[14px] mb-2 lg:text-[18px] ">City</label>
            <Input />
          </div>

          <div>
            <label className="text-[14px] mb-2 lg:text-[18px] ">State</label>
            <Input />
          </div>

          <div>
            <label className="text-[14px] mb-2 lg:text-[18px] ">Zip Code</label>
            <Input />
          </div>
        </div>

        <Link className="w-full" href="">
          <Button className="w-full h-[55px]">Next</Button>
        </Link>
      </div>
    </div>
  );
}
