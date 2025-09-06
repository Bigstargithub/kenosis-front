import Link from "next/link";
import MenuButtonComponent from "./menu_button";

export default function CommonHeader() {
  return (
    <header className="bg-black p-5 sticky top-0 z-50 shadow-md">
      <div className="lg:w-3/5 m-auto flex justify-between content-center">
        <Link href="/user" className="cursor-pointer">
          <p className="font-bold text-xl text-white">
            대한예수교장로회 주복교회
          </p>
          <h3 className="font-bold text-3xl text-white">케노시스 수도원</h3>
        </Link>
        <div className="flex flex-wrap content-center">
          <Link
            href="/user/login"
            className="border-1 mr-5 rounded-sm px-5 py-2 bg-white h-fit"
          >
            로그인
          </Link>
          <Link
            href="/user/signin"
            className="border-1 mr-5 rounded-sm px-5 py-2 bg-white h-fit"
          >
            회원가입
          </Link>
        </div>
      </div>
      <div className="lg:w-3/5 m-auto gap-10 flex justify-center content-center mt-10">
        <MenuButtonComponent link="/user/introduce" text="소개" />
        <MenuButtonComponent
          link="/user/letter"
          text="수도원에서 보내는 편지"
        />
        <MenuButtonComponent link="/user/story" text="수도원 이야기" />
        <MenuButtonComponent link="/user/facilities" text="시설소개" />
        <MenuButtonComponent link="/user/apply" text="숙소 예약 및 연락" />
        <MenuButtonComponent link="/user/event" text="이벤트" />
      </div>
    </header>
  );
}
