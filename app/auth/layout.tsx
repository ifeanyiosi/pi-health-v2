import React from "react";
import AuthHeader from "./_components/header";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="h-full flex flex-col items-center justify-center">
      <AuthHeader />
      {children}
    </div>
  );
}
