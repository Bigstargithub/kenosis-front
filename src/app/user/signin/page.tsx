"use client";

import { useState } from "react";

export default function UserSigninPage() {
  const [email, setEmail] = useState("");
  const [isSend, setIsSend] = useState(false);
  const [authCode, setAuthCode] = useState("");
  const [isVerfiy, setIsVerify] = useState(false);

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

    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/auth/code`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        auth_code: authCode,
      }),
    });

    const resJson = await res.json();
    alert(resJson.message);
    if (resJson.status === 200) {
      setIsVerify(true);
    }
  };

  return (
    <main>
      <h2 className="text-3xl font-bold mt-10">수도원 회원가입</h2>
      <form onSubmit={formSubmit}>
        <div className="mt-5">
          <div className="signin-input">
            <h3>이메일</h3>
            <input
              type="text"
              name="email"
              id="email"
              className="input-text"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="signin-input">
            <h3>비밀번호</h3>
            <input
              type="password"
              name="password"
              id="password"
              className="input-text"
            />
          </div>
          <div className="signin-input">
            <h3>교회이름</h3>
            <input
              type="text"
              name="church_name"
              id="church_name"
              className="input-text"
            />
          </div>
          <div className="signin-input">
            <h3>직분</h3>
            <input
              type="text"
              name="church_position"
              id="church_position"
              className="input-text"
            />
          </div>
          <div className="signin-input">
            <h3>전화번호</h3>
            <input
              type="number"
              name="phone_middle"
              id="phone_middle"
              className="input-text"
              placeholder="숫자만 입력하세요."
            />
          </div>
          <div className="signin-input">
            <h3>인증코드</h3>
            <input
              type="number"
              name="phone_middle"
              id="phone_middle"
              className="input-text"
              placeholder="인증코드를 입력하세요."
              disabled={isSend ? false : true}
              onChange={(e) => setAuthCode(e.target.value)}
            />
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
          </div>
          <div className="signin-input">
            <button className="p-2 rounded-sm bg-black border-1 cursor-pointer">
              회원가입
            </button>
          </div>
        </div>
      </form>
    </main>
  );
}
