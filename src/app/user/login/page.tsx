"use client";

import { useState } from "react";
import TitleComponent from "@/app/component/common/title";
import InputText from "@/app/component/common/InputText";
import { useRouter } from "next/navigation";
import Button from "@/app/component/common/Button";
import { useLoginHook } from "@/app/hooks/auth/useAccessToken";

export default function UserLoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { mutate: login } = useLoginHook({ path: "/user/apply" });

  const formSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    login({ email, password });
  };

  return (
    <main>
      <TitleComponent text="로그인" level="main" />
      <form onSubmit={formSubmit}>
        <div className="mt-5">
          <InputText
            type="email"
            name="email"
            id="email"
            label="이메일"
            onChange={(e) => setEmail(e.target.value)}
          />
          <InputText
            type="password"
            name="password"
            id="password"
            label="비밀번호"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="mt-5">
          <Button text="로그인" onClick={formSubmit} />
        </div>
      </form>
    </main>
  );
}
