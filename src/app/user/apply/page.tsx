"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { isHoliday } from "@hyunbinseo/holidays-kr";
import TitleComponent from "@/app/component/common/title";
import ButtonList from "@/app/component/common/ButtonList";
import AuthLayout from "@/app/component/common/AuthLayout";
import { useAvailableRoomNumber } from "@/app/hooks/apply/useAvailableRoomNumber";
import ApplySelect from "@/app/component/apply/ApplySelect";
import ApplyType from "@/app/component/apply/ApplyType";
import ApplyRoomCheckboxes from "@/app/component/apply/ApplyRoomCheckboxes";
import InputText from "@/app/component/common/InputText";

export default function ApplyPage() {
  const router = useRouter();
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [checkRoomNumber, setCheckRoomNumber] = useState<string[]>([]);
  const [endDateList, setEndDateList] = useState<string[]>(["선택"]);
  const [applyType, setApplyType] = useState<string>("");
  const { data: availableRoomNumber } = useAvailableRoomNumber(
    startDate,
    endDate
  );
  const [availableRoomNumberList, setAvailableRoomNumberList] = useState<
    string[]
  >([]);

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
    const newStartDate = new Date(Date.now() + (i + 1) * 24 * 60 * 60 * 1000);
    if (newStartDate.getDay() === 0 || newStartDate.getDay() === 6) {
      continue;
    }
    if (isHoliday(newStartDate)) {
      continue;
    }
    startDateOptions.push(newStartDate.toISOString().split("T")[0]);
  }

  useEffect(() => {
    if (startDate) {
      const endlist = [];

      for (let i = 0; i < 7; i++) {
        const newEndDate = new Date(
          new Date(startDate).getTime() + (i + 1) * 24 * 60 * 60 * 1000
        );
        if (
          new Date(newEndDate).getDay() === 0 ||
          new Date(newEndDate).getDay() === 6
        ) {
          continue;
        }
        endlist.push(new Date(newEndDate).toISOString().split("T")[0]);
      }
      setEndDateList(endlist);
      setEndDate(endlist[0]);
    }
  }, [startDate]);

  useEffect(() => {
    if (availableRoomNumber?.data) {
      setAvailableRoomNumberList(availableRoomNumber?.data);
    }
  }, [availableRoomNumber]);

  useEffect(() => {
    console.log(checkRoomNumber);
  }, [checkRoomNumber]);

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
              onChange={(e) => setStartDate(e.target.value)}
              label="시작일자"
            />
            <ApplySelect
              options={endDateList}
              onChange={(e) => setEndDate(e.target.value)}
              label="종료일자"
            />
            <ApplyType applyType={applyType} setApplyType={setApplyType} />
            {applyType === "sleep" && (
              <ApplyRoomCheckboxes
                roomList={availableRoomNumberList}
                setCheckRoomNumber={setCheckRoomNumber}
              />
            )}
          </div>
        </form>
      </div>
    </AuthLayout>
  );
}
