import CheckBox from "@/app/component/common/CheckBox";

export default function ApplyRoomCheckboxes({
  roomList,
  setCheckRoomNumber,
}: {
  roomList: string[];
  setCheckRoomNumber: React.Dispatch<React.SetStateAction<string[]>>;
}) {
  const onCheckRoom = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.checked) {
      setCheckRoomNumber((prev: string[]) => [...prev, e.target.value]);
    } else {
      setCheckRoomNumber((prev: string[]) =>
        prev.filter((room) => room !== e.target.value)
      );
    }
  };
  return (
    <div>
      {roomList.map((room) => (
        <CheckBox
          key={room}
          label={room}
          value={room}
          setCheckout={onCheckRoom}
        />
      ))}
    </div>
  );
}
