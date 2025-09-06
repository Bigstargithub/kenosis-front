"use client";

import TitleComponent from "@/app/component/common/title";
import ButtonList from "@/app/component/common/ButtonList";
import { useAccessToken } from "@/app/hooks/auth/useAccessToken";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function ApplyPage() {
  const { accessToken } = useAccessToken();
  const router = useRouter();

  useEffect(() => {
    if (!accessToken) {
      router.push("/user/login");
    }
  }, [accessToken, router]);

  const buttonList = [
    {
      text: "숙소 예약",
      onClick: () => {
        router.push("/user/apply");
      },
    },
    {
      text: "예약 확인",
      onClick: () => {
        router.push("/user/apply/check");
      },
    },
  ];
  return (
    <main>
      <TitleComponent text="숙소 예약" level="main" />
      <div className="mt-5">
        <ButtonList buttonList={buttonList} />
      </div>
    </main>
  );
}
