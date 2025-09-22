"use client";

import { useState } from "react";
import SignInInputText from "@/app/component/sign-in/SignInInputText";
import { useCheckAuthCode } from "@/app/hooks/auth/useSignin";

export default function UserSigninPage() {
  const [email, setEmail] = useState("");
  const [isSend, setIsSend] = useState(false);
  const [authCode, setAuthCode] = useState("");
  const [isVerfiy, setIsVerify] = useState(false);
  const { mutate: checkAuthCodeMutate } = useCheckAuthCode(setIsVerify);

  const formSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
  };

  const sendAuthCode = async (event: React.FormEvent) => {
    event.preventDefault();

    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/auth/code`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
      }),
    });

    const resJson = await res.json();

    if (resJson.status === 200) {
      setIsSend(true);
    }
  };

  const checkAuthCode = async (event: React.FormEvent) => {
    event.preventDefault();
    if (isVerfiy) return alert("이미 인증 완료했습니다.");

    await checkAuthCodeMutate({ auth_code: authCode });
    setIsVerify(true);
  };

  return (
    <main>
      <h2 className="text-3xl font-bold mt-10">수도원 회원가입</h2>
      <form onSubmit={formSubmit}>
        <div className="mt-5">
          <SignInInputText
            label="이메일"
            type="text"
            name="email"
            id="email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <SignInInputText
            label="비밀번호"
            type="password"
            name="password"
            id="password"
          />
          <SignInInputText
            label="교회이름"
            type="text"
            name="church_name"
            id="church_name"
          />
          <SignInInputText
            label="직분"
            type="text"
            name="church_position"
            id="church_position"
          />
          <SignInInputText
            label="교단 "
            type="text"
            name="church_denomination"
            id="church_denomination"
          />
          <SignInInputText
            label="전화번호"
            type="number"
            name="phone_middle"
            id="phone_middle"
            placeholder="숫자만 입력하세요."
          />
          <SignInInputText
            label="인증코드"
            type="number"
            name="auth_code"
            id="auth_code"
            placeholder="인증코드를 입력하세요."
            disabled={isSend ? false : true}
            onChange={(e) => setAuthCode(e.target.value)}
          >
            {!isSend && (
              <button
                className="p-2 rounded-sm border-1 lg:ml-3 cursor-pointer"
                onClick={sendAuthCode}
              >
                인증코드 발송
              </button>
            )}
            {isSend && (
              <button
                className="p-2 rounded-sm border-1 lg:ml-3 cursor-pointer"
                onClick={checkAuthCode}
              >
                인증받기
              </button>
            )}
          </SignInInputText>
          <div className="signin-input">
            <button className="p-2 rounded-sm bg-black border-1 cursor-pointer text-white">
              회원가입
            </button>
          </div>
        </div>
      </form>
    </main>
  );
}
