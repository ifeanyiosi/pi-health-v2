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
import { SignUpValidation } from "@/lib/validations/signUp";

export default function SignUpPage() {
  const form = useForm({
    resolver: zodResolver(SignUpValidation),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof SignUpValidation>) => {
    console.log(values);
  };

  return (
    <div className="flex lg:px-[30px] font-aspekta flex-col w-full pb-[100px] items-center justify-center">
      <div className="flex w-full px-8 flex-col items-start lg:items-center mt-8 lg:mt-[90px] justify-start lg:justify-center">
        <h1 className="text-[32px] text-start lg:text-center text-[rgba(0,0,0,0.90)] font-bold font-aspekta ">
          Sign Up
        </h1>

        <p className="text-[18px] text-start lg:text-center mt-[30px] text-[rgba(0,0,0,0.70)]  ">
          Create an account with us
        </p>

        <div className="lg:max-w-[500px] flex flex-col items-center justify-center mt-8  lg:mt-[70px] w-full">
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="flex flex-col justify-start w-full  space-y-8"
            >
              <FormField
                control={form.control}
                name="firstName"
                render={({ field }) => (
                  <FormItem className="flex flex-col  w-full">
                    <FormLabel className="text-base-semibold text-light-2">
                      First Name
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
                name="lastName"
                render={({ field }) => (
                  <FormItem className="flex flex-col  w-full">
                    <FormLabel className="text-base-semibold text-light-2">
                      Last Name
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

              <FormField
                control={form.control}
                name="confirmPassword"
                render={({ field }) => (
                  <FormItem className="flex flex-col  w-full">
                    <FormLabel className="text-base-semibold text-light-2">
                      Confirm Password
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

              <Button
                className=" text-[#000] h-[55px] py-[16px] font-bold text-[16px] "
                type="submit"
              >
                Sign Up
              </Button>
            </form>
          </Form>

          <div className="flex items-center gap-2">
            <div className="bg-red-500 h-[2px] max-w-[200px] w-full  " />
            <p className="text-[15px] whitespace-nowrap mt-4 lg:mt-10 font-[500] ">
              Or sign in with
            </p>
            <div className="bg-[rgba(217,217,217,0.50)] h-[2px] max-w-[200px] w-full " />
          </div>

          <div className="flex flex-col w-full lg:flex-row mt-6 items-center gap-6">
            <Button
              className="border-[rgba(0,0,0,0.2)] h-[45px] w-full flex gap-2 rounded-[20px] text-[16px] font-bold "
              variant="outline"
            >
              <FcGoogle />
              Google
            </Button>

            <Button
              className="border-[rgba(0,0,0,0.2)] h-[45px] w-full flex gap-2 rounded-[20px] text-[16px] font-bold "
              variant="outline"
            >
              <FaApple />
              Apple
            </Button>

            <Button
              className="border-[rgba(0,0,0,0.2)] h-[45px] w-full flex gap-2 rounded-[20px] text-[16px] font-bold "
              variant="outline"
            >
              <FaFacebookF className="text-[#3275D9] " />
              Facebook
            </Button>
          </div>

          <div>
            <p className="text-[rgba(0,0,0,0.65)] mt-4 lg:mt-[60px] text-[15px] ">
              Have an account?
              <Link
                className="text-pi-green font-bold hover:underline "
                href="/auth/login"
              >
                Login
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
