"use client";

import CommonHeader from "@/app/component/common/header";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useState } from "react";
import Footer from "@/app/component/common/Footer";

export default function UserLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [queryClient] = useState(() => new QueryClient());
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <CommonHeader />
        {children}
        <Footer />
      </QueryClientProvider>
    </>
  );
}
