export default function ApplyType({
  applyType,
  setApplyType,
}: {
  applyType: string;
  setApplyType: (applyType: string) => void;
}) {
  return (
    <div className="flex items-center gap-3 mt-4">
      <h3 className="w-[80px] p-2 text-md">예약 유형</h3>
      <button
        className={`cursor-pointer p-4 rounded-sm ${
          applyType === "visit" ? "bg-black text-white" : "bg-white text-black"
        }`}
        onClick={() => setApplyType("visit")}
      >
        방문
      </button>
      <button
        className={`cursor-pointer p-4 rounded-sm ${
          applyType === "sleep"
            ? "bg-black text-white cursor-pointer"
            : "bg-white text-black cursor-pointer"
        }`}
        onClick={() => setApplyType("sleep")}
      >
        숙박
      </button>
    </div>
  );
}
