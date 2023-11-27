"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";

export default function ForgotPasswordReset() {
  const router = useRouter();

  return (
    <div className=" w-full px-8 items-center justify-center ">
      <div className="flex items-center mt-8 lg:mt-[50px] justify-center">
        <Image width={180} height={156} src="/forgot3.png" alt="logo" />
      </div>

      <h1 className="text-[25px] mt-4 text-center lg:text-[32px] font-bold  ">
        Reset Password
      </h1>
      <p className="text-[14px] mt-4 mx-auto max-w-[400px] text-center text-[rgba(0,0,0,0.70)] ">
        Please kindly set your new password
      </p>

      <div className="flex  mx-auto  lg:max-w-[400px] mt-[30px] flex-col">
        <label className="text-[14px] mb-[10px] font-bold " htmlFor="">
          New Password
        </label>
        <Input />
      </div>

      <div className="flex  mx-auto  lg:max-w-[400px] mt-[30px] flex-col">
        <label className="text-[14px] mb-[10px] font-bold " htmlFor="">
          Re-enter Password
        </label>
        <Input />
      </div>

      <div className="w-full items-center mx-auto justify-center lg:max-w-[400px] mt-10 ">
        <Button
          onClick={() => router.push("/auth/forgot-password/changed")}
          className="h-[55px] text-[#000] w-full font-bold "
        >
          Continue
        </Button>
      </div>
    </div>
  );
}
