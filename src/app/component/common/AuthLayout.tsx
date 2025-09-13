'use client';

import { useAccessToken, useRefreshToken } from "@/app/hooks/auth/useAccessToken";
import { useEffect } from "react";
import { useRouter } from "next/navigation";


export default function AuthLayout({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const { data: accessToken } = useAccessToken();
  const { mutate: refreshToken, isPending: isRefreshTokenPending } = useRefreshToken();

  useEffect(() => {
    refreshToken();
  }, []);

  useEffect(() => {
    if (accessToken === null && !isRefreshTokenPending) {
      return router.push("/user/login");
    }
  }, [accessToken, isRefreshTokenPending, router]);

  return <main>{children}</main>;
}