import Image from "next/image";

export default function AmenitiesChapelRoomItem() {
  return (
    <div>
      <h3 className="text-2xl font-bold border-b-1 pb-2">○ 채플동</h3>
      <div className="mt-3 grid gap-4">
        <Image
          src="/guide/amenities/chapel_1.jpg"
          alt="chapel room1"
          width={1200}
          height={0}
          className="w-full object-cover h-[450px] object-center"
        />
      </div>
      <div className="mt-10">
        <h3 className="flex items-center border-b-1 pb-2">
          <Image
            src="/arrow_right.svg"
            alt="arrow right"
            width={24}
            height={24}
          />
          <span className="text-xl font-bold">상세정보</span>
        </h3>
        <div className="grid grid-cols-2 gap-5 mt-5">
          <div className="flex flex-col leading-1.2 text-xl font-bold">
            <p>채플동은 제일 오른쪽에 위치해 있으며,</p>
            <p>매일 삼종 예배와 (오전 10시, 오후 3시, 오후 8시)</p>
            <p>목요성경공부 (오전 10시)가 진행되고 있습니다.</p>
          </div>
        </div>
        <div className="flex flex-col leading-1.2">
          <h3 className="text-lg font-bold mb-2">이용안내</h3>
          <ul>
            <li>매일 삼종 예배(오전 10시, 오후 3시, 오후 8시)</li>
            <li>목요성경공부(오전 10시)</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
