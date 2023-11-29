"use client";

import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { LoginValidation } from "@/lib/validations/login";
import { FaApple, FaFacebookF } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { z } from "zod";
import Link from "next/link";
import { Checkbox } from "@/components/ui/checkbox";

export default function LoginPage() {
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
    <div className="flex lg:px-[30px] font-aspekta flex-col w-full pb-[100px] items-center justify-center">
      <div className="flex px-8 w-full flex-col justify-start items-start lg:items-center mt-8 lg:mt-[90px] lg:justify-center">
        <h1 className="text-[32px] text-start lg:text-center text-[rgba(0,0,0,0.90)] font-bold font-aspekta ">
          Login
        </h1>

        <p className="text-[18px] text-left lg:text-center mt-[30px] text-[rgba(0,0,0,0.70)]  ">
          Enter your details to sign into your account
        </p>

        <div className="lg:max-w-[500px] flex flex-col items-center justify-center mt-8  lg:mt-[70px] w-full">
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="flex flex-col justify-start w-full  space-y-8"
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

              <Button
                className=" text-[#000] h-[55px] font-bold text-[18px] "
                type="submit"
              >
                Login
              </Button>
            </form>
          </Form>

          <div className="flex mt-2  items-center gap-2">
            <div className="bg-red-500 h-[2px] max-w-[200px] w-full  " />
            <p className="text-[15px] whitespace-nowrap mt-4 lg:mt-10 font-[500] ">
              Or sign in with
            </p>
            <div className="bg-[rgba(217,217,217,0.50)] h-[2px] max-w-[200px] w-full " />
          </div>

          <div className="flex flex-col lg:flex-row w-full mt-6 items-center gap-6">
            <Button
              className="border-[rgba(0,0,0,0.2)] w-full flex gap-2 rounded-[20px] text-[16px] font-bold "
              variant="outline"
            >
              <FcGoogle />
              Google
            </Button>

            <Button
              className="border-[rgba(0,0,0,0.2)] w-full flex gap-2 rounded-[20px] text-[16px] font-bold "
              variant="outline"
            >
              <FaApple />
              Apple
            </Button>

            <Button
              className="border-[rgba(0,0,0,0.2)] w-full flex gap-2 rounded-[20px] text-[16px] font-bold "
              variant="outline"
            >
              <FaFacebookF className="text-[#3275D9] " />
              Facebook
            </Button>
          </div>

          <div>
            <p className="text-[rgba(0,0,0,0.65)] mt-4 lg:mt-[60px] text-[15px] ">
              Don’t have an account?{" "}
              <Link
                className="text-[#227322] font-bold underline "
                href="/auth/sign-up"
              >
                Create One
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
