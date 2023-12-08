"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";

export default function ForgotPasswordChanged() {
  const router = useRouter();

  return (
    <div className=" w-full min-h-screen px-8 items-center justify-center ">
      <div className="flex items-center mt-8 lg:mt-[50px] justify-center">
        <Image width={180} height={156} src="/forgot4.png" alt="logo" />
      </div>

      <h1 className="text-[25px] mt-4 text-center lg:text-[32px] font-bold  ">
        Password Changed !
      </h1>
      <p className="text-[14px] text-center text-[rgba(0,0,0,0.70)] ">
        You have successfully completed your password reset
      </p>

      <div className="w-full items-center mx-auto justify-center lg:max-w-[400px] mt-10 ">
        <Button
          onClick={() => router.push("/auth/login")}
          className="h-[55px]  w-full font-bold "
        >
          Continue to Login
        </Button>
      </div>
    </div>
  );
}
