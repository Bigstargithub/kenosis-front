export default function ApplyRoomPrice({
  checkRoomNumber,
}: {
  checkRoomNumber: string[];
}) {
  return (
    <div className="mt-5 flex flex-wrap items-center">
      <p className="w-[80px] p-2 text-md">가격</p>
      <p className="ml-2 w-1/2 p-2 text-md">
        {(checkRoomNumber.length * 40000).toLocaleString()}원
      </p>
    </div>
  );
}
