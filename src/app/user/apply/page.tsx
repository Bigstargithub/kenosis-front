"use client";

import TitleComponent from "@/app/component/common/title";
import ButtonList from "@/app/component/common/ButtonList";
import { useAccessToken, useRefreshToken } from "@/app/hooks/auth/useAccessToken";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import InputText from "@/app/component/common/InputText";
import ApplySelect from "@/app/component/apply/ApplySelect";
import { useAvailableEndDate } from "@/app/hooks/apply/useAvailableEndDate";
import AuthLayout from "@/app/component/common/AuthLayout";

export default function ApplyPage() {
  
  const router = useRouter();
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [endDateList, setEndDateList] = useState<string[]>(["선택"]);
  const { data: availableEndDate } = useAvailableEndDate(startDate);
  

  const formSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
  };


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

  const startDateOptions = ["선택"];
  for (let i = 0; i < 30; i++) {
    startDateOptions.push(new Date(Date.now() + (i + 1)* 24 * 60 * 60 * 1000).toISOString().split('T')[0]);
  }

  useEffect(() => {
    if (startDate) {
      setEndDateList(availableEndDate?.data ?? ['선택']);
    }
  }, [startDate, availableEndDate]);

  const onChangeStartDate = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setStartDate(e.target.value);
  };

  return (
    <AuthLayout>
      <TitleComponent text="숙소 예약" level="main" />
      <div className="mt-5">
        <ButtonList buttonList={buttonList} />
        <form onSubmit={formSubmit}>
        <div className="mt-5">
          <InputText
            type="text"
            name="name"
            id="name"
            label="이름"
            onChange={(e) => setName(e.target.value)}
          />
          <InputText
            type="text"
            name="phone"
            id="phone"
            label="전화번호"
            onChange={(e) => setPhone(e.target.value)}
          />
          <ApplySelect
            options={startDateOptions}
            onChange={(e) => onChangeStartDate(e)}
            label="시작일자"
          />
            <ApplySelect
              options={endDateList}
                onChange={(e) => setEndDate(e.target.value)}
                label="종료일자"
              />
        </div>
        </form>
      </div>
    </AuthLayout>
  );
}
