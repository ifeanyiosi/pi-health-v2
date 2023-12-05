import Link from "next/link";
import React from "react";
import {
  BsTwitter,
  BsYoutube,
  BsTiktok,
  BsFacebook,
  BsInstagram,
} from "react-icons/bs";

export default function Footer() {
  return (
    <footer className="w-full flex flex-col min-h-[400px] bg-[#000]  justify-end items-center lg:pt-[78px] pt-[228px]">
      <div className="max-w-[1366px] flex flex-col gap-[32px]  mb-[40px] items-center justify-between w-full px-8">
        <div className="flex w-full gap-[67px] lg:flex-row flex-col justify-between">
          <div className="flex flex-col items-start gap-[8px] max-w-[300px]">
            <div className="mb-2 flex items-start text-[20px] w-full font-bold text-[#fff]   ">
              <Link href="/">PI SENSE</Link>
            </div>

            <div className="flex flex-col items-start gap-[12px]">
              <h3 className="font-normal text-[18px] text-[#fff] max-w-[466px] text-center font-Beautiste leading-[21.6px]">
                Contact Us
              </h3>

              <Link
                href="mailto:support@savetobuy.io"
                className="text-[#fff]/80 text-[14px]"
              >
                Mail
              </Link>
              <a
                className="text-[#fff]/80 text-[14px]"
                href="https://wa.link/xcesqo"
                rel="noopener noreferrer"
              >
                Whatsapp
              </a>
            </div>

            <div className="flex items-center gap-[20px] mt-4 w-full">
              <a href="https://instagram.com/usesavetobuy?igshid=YmM0MjE2YWMzOA==">
                <BsInstagram className="text-[#fff] " />
              </a>
              <a href="https://www.youtube.com/@usesavetobuy">
                <BsYoutube className="text-[#fff]" />
              </a>
              <a href="https://web.facebook.com/usesavetobuy">
                <BsFacebook className="text-[#fff]" />
              </a>
              <a href="https://twitter.com/UseSavetoBuy">
                <BsTwitter className="text-[#fff]" />
              </a>
              <a href="https://www.tiktok.com/@usesavetobuy">
                {" "}
                <BsTiktok className="text-[#fff]" />
              </a>
            </div>
          </div>
          <div className="flex flex-col items-start gap-[24px]">
            <h3 className="font-normal text-[18px] text-[#fff] max-w-[466px] text-center font-Beautiste leading-[21.6px]">
              Our Products
            </h3>
            <Link href="/savetobuy" className="text-[#fff]/80 text-[14px]">
              Product Bundles
            </Link>
            <Link className="text-[#fff]/80 text-[14px]" href="/financialgoal">
              Smart health Ring
            </Link>
            <Link href="/saveup" className="text-[#fff]/80 text-[14px]">
              ECG Smart Watch
            </Link>{" "}
            <Link href="/halal" className="text-[#fff]/80 text-[14px]">
              Atrial Fibrillation
            </Link>
            <Link href="/merchants" className="text-[#fff]/80 text-[14px]">
              Smart Sleep Monitor
            </Link>
            <Link href="/merchants" className="text-[#fff]/80 text-[14px]">
              ECG Patch
            </Link>
          </div>
          <div className="flex flex-col items-start gap-[12px]">
            <h3 className="font-normal text-[18px] text-[#fff]  max-w-[466px] text-center font-Beautiste leading-[21.6px]">
              PI Health
            </h3>
            <Link href="/terms" className="text-[#fff]/80 text-[14px]">
              Hospital
            </Link>
            <Link href="/privacy-policy" className="text-[#fff]/80 text-[14px]">
              Home Care
            </Link>
            <Link href="/privacy-policy" className="text-[#fff]/80 text-[14px]">
              Clinicians
            </Link>
            <Link href="/privacy-policy" className="text-[#fff]/80 text-[14px]">
              Careers
            </Link>
          </div>
          <div className="flex flex-col items-start gap-[12px]">
            <h3 className="font-normal text-[18px] text-[#fff] max-w-[466px] text-center font-Beautiste leading-[21.6px]">
              Company
            </h3>
            <Link href="/about" className="text-[#fff]/80 text-[14px]">
              About Us
            </Link>
            <Link href="/faqs" className="text-[#fff]/80 text-[14px]">
              FAQ
            </Link>
            <Link
              href="https://www.blog.savetobuy.io/"
              rel="noreferrer"
              className="text-[#fff]/80 text-[14px]"
            >
              Invest in Us
            </Link>
          </div>
          <div className="flex flex-col items-start gap-[12px]">
            <h3 className="font-normal text-[18px] text-[#fff] max-w-[466px] text-center font-Beautiste leading-[21.6px]">
              Download
            </h3>

            <Link
              href="mailto:support@savetobuy.io"
              className="text-[#fff]/80 text-[14px]"
            >
              iOS
            </Link>
            <a
              className="text-[#fff]/80 text-[14px]"
              href="https://wa.link/xcesqo"
              rel="noopener noreferrer"
            >
              Android
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
