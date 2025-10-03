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
import CheckBox from "@/app/component/common/CheckBox";
import ApplyRoomPrice from "@/app/component/apply/ApplyRoomPrice";
import Button from "@/app/component/common/Button";

export default function ApplyPage() {
  const router = useRouter();
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [checkRoomNumber, setCheckRoomNumber] = useState<string[]>([]);
  const [endDateList, setEndDateList] = useState<string[]>(["선택"]);
  const [applyType, setApplyType] = useState<string>("");
  const [agree, setAgree] = useState(false);
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
    const newStartDate = new Date(Date.now() + (i + 2) * 24 * 60 * 60 * 1000);
    if (
      newStartDate.getDay() === 0 ||
      newStartDate.getDay() === 6 ||
      isHoliday(newStartDate)
    ) {
      continue;
    }
    startDateOptions.push(newStartDate.toLocaleDateString("sv-SE"));
  }

  useEffect(() => {
    if (startDate) {
      const endlist = [];

      for (let i = 0; i < 7; i++) {
        const newEndDate = new Date(
          new Date(startDate).getTime() + i * 24 * 60 * 60 * 1000
        );
        if (new Date(newEndDate).getDay() === 0) {
          break;
        }
        if (isHoliday(newEndDate)) {
          continue;
        }
        endlist.push(new Date(newEndDate).toISOString().split("T")[0]);
      }
      if (endlist.length === 0) {
        endlist.push("이 날짜는 불가능합니다.");
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
    if (applyType === "sleep") {
      if (endDateList.length > 1) {
        setEndDateList((prev) => prev.filter((_, index) => index !== 0));
      } else if (endDateList.length === 1) {
        setEndDateList(["이 날짜는 불가능합니다."]);
      }
    } else {
      if (startDate) {
        if (
          endDateList[0] !== new Date(startDate).toISOString().split("T")[0]
        ) {
          setEndDateList((prev) => [
            new Date(startDate).toISOString().split("T")[0],
            ...prev,
          ]);
        }
      }
    }
  }, [applyType]);

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
            {applyType === "sleep" &&
              endDateList[0] !== "이 날짜는 불가능합니다." && (
                <ApplyRoomCheckboxes
                  roomList={availableRoomNumberList}
                  setCheckRoomNumber={setCheckRoomNumber}
                />
              )}
            <CheckBox
              label="개인정보 수집 동의"
              value="agree"
              setCheckout={() => setAgree(!agree)}
            />
            {applyType === "sleep" && (
              <ApplyRoomPrice checkRoomNumber={checkRoomNumber} />
            )}
            <Button text="예약하기" onClick={formSubmit} />
          </div>
        </form>
      </div>
    </AuthLayout>
  );
}
