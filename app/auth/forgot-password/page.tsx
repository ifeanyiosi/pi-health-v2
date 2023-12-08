"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";

export default function ForgotPassword() {
  const router = useRouter();

  return (
    <div className=" w-full min-h-screen px-8 items-center justify-center ">
      <div className="flex items-center mt-8 lg:mt-[50px] justify-center">
        <Image width={180} height={156} src="/forgot1.png" alt="logo" />
      </div>

      <h1 className="text-[25px] mt-4 text-center lg:text-[32px] font-bold  ">
        Forgot your password ?
      </h1>
      <p className="text-[14px] text-center text-[rgba(0,0,0,0.70)] ">
        Enter your email so we can send your password reset link
      </p>

      <div className="flex  mx-auto  lg:max-w-[400px] mt-[30px] flex-col">
        <label className="text-[14px] mb-[10px] font-bold " htmlFor="">
          Email
        </label>
        <Input />
      </div>

      <div className="w-full items-center mx-auto justify-center lg:max-w-[400px] mt-10 ">
        <Button
          onClick={() => router.push("/auth/forgot-password/check")}
          className="h-[55px]  w-full font-bold "
        >
          Send Email
        </Button>
      </div>
    </div>
  );
}
