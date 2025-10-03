"use client";

import LinkButton from "@/app/component/common/LinkButton";
import { usePathname } from "next/navigation";

export default function IntroduceButtonList() {
  const url = usePathname();

  return (
    <div className="flex w-full">
      <LinkButton
        text="원장인사말"
        link="/user/introduce"
        isActive={url === "/user/introduce"}
      />
      <LinkButton
        text="수도원일정"
        link="/user/introduce/calendar"
        isActive={url === "/user/introduce/schedule"}
      />
      <LinkButton
        text="기도문"
        link="/user/introduce/prayer"
        isActive={url === "/user/introduce/prayer"}
      />
    </div>
  );
}
