"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { IoIosCart } from "react-icons/io";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { LoginValidation } from "@/lib/validations/login";
import { Input } from "@/components/ui/input";
import { z } from "zod";
import { Checkbox } from "@/components/ui/checkbox";

export default function Checkout() {
  const form = useForm({
    resolver: zodResolver(LoginValidation),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof LoginValidation>) => {
    console.log(values);
  };

  return (
    <div className="min-h-screen pb-[40px] w-full px-[30px] lg:px-[54px]">
      <div className="flex mt-5 lg:mt-[50px] lg:px-[50px] gap-2">
        <h1 className="text-[25px] lg:text-[32px] uppercase font-bold">
          Checkout
        </h1>
        <div className="relative flex">
          <IoIosCart className="w-[40px] h-[40px] " />
          <div className="bg-[#EB6440] left-[26px] top-[-5px] absolute p-2 flex items-center justify-center h-[18px] w-[18px] rounded-[50%] text-[12px] ">
            <p className="font-bold text-white">2</p>
          </div>
        </div>
      </div>
      <div className="h-[3px] mt-5 w-full bg-[#D9D9D94D]/30 "></div>

      <div className="flex flex-col mt-5 lg:mt-20 lg:px-[50px] lg:flex-row">
        <div className="w-full ">
          <h1 className="text-[25px] font-[650] lg:text-[32px]">
            New Customers
          </h1>
          <p className="text-[16px] lg:max-w-[500px] w-full text-[#000]/95 ">
            Proceed to checkout and you will have an opportunity to{" "}
            <Link href="/auth/sign-up" className="font-bold underline">
              Create an account
            </Link>{" "}
            at the end if one does not already exist for you.
          </p>

          <Button className="h-[55px] mt-10 lg:max-w-[500px] w-full">
            Continue as Guest
          </Button>
        </div>
        <div className="w-full mt-8 lg:mt-0 ">
          <h1 className="text-[25px] lg:text-[32px] text-start  text-[rgba(0,0,0,0.90)] font-bold font-aspekta ">
            Returning Customers
          </h1>

          <p className="text-[16px] text-left  my-[10px] text-[rgba(0,0,0,0.80)]  ">
            Sign in to speed up the checkout process and save payment to account
          </p>
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="flex flex-col justify-start mt-4 w-full  space-y-8"
            >
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem className="flex flex-col  w-full">
                    <FormLabel className="text-base-semibold text-light-2">
                      Email
                    </FormLabel>
                    <FormControl className="">
                      <Input
                        className="account-form_input no-focus"
                        placeholder=""
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem className="flex flex-col  w-full">
                    <FormLabel className="text-base-semibold text-light-2">
                      Password
                    </FormLabel>
                    <FormControl className="">
                      <Input
                        className="account-form_input no-focus"
                        placeholder=""
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <div className="flex items-center justify-between">
                <div className="flex gap-2 items-center">
                  <Checkbox />
                  <p>Remember me</p>
                </div>

                <Link href="/auth/forgot-password">Forgot Password?</Link>
              </div>

              <Button className="  h-[55px]  text-[18px] " type="submit">
                Login
              </Button>
            </form>
          </Form>
        </div>
      </div>
    </div>
  );
}
