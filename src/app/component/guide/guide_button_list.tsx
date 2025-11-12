"use client";

import { usePathname } from "next/navigation";
import LinkButton from "../common/LinkButton";

export default function GuideButtonList() {
  const url = usePathname();

  return (
    <div className="flex w-full">
      <LinkButton
        text="묵상안내"
        link="/user/guide/meditation"
        isActive={url === "/user/guide/meditation"}
      />
      <LinkButton
        text="편의시설"
        link="/user/guide/amenities"
        isActive={url === "/user/guide/amenities"}
      />
    </div>
  );
}
