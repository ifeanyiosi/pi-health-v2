import Navbar from "@/components/navbar";
import ProductFeatures from "@/components/product-features";
import RelatedProducts from "@/components/related-products/related-products";
import Reviews from "@/components/reviews";
import React from "react";

export default function ProductDetailsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        {" "}
        <Navbar /> {children} <ProductFeatures /> <Reviews />{" "}
        <RelatedProducts />
      </body>
    </html>
  );
}
