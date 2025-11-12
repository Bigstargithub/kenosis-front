import Image from "next/image";

export default function AmenitiesRoomItem() {
  return (
    <div className="mt-10">
      <h3 className="text-2xl font-bold border-b-1 pb-2">○ 숙소</h3>
      <div className="mt-3 grid grid-cols-2 gap-4">
        <Image
          src="/guide/amenities/room_1.jpg"
          alt="room1"
          width={1200}
          height={0}
          className="w-full object-cover h-[450px] object-center"
        />
        <Image
          src="/guide/amenities/room_2.jpg"
          alt="room2"
          width={1200}
          height={0}
          className="w-full object-cover h-[450px] object-center"
        />
        <Image
          src="/guide/amenities/room_3.jpg"
          alt="room3"
          width={1200}
          height={0}
          className="w-full object-cover h-[450px] object-center"
        />
        <Image
          src="/guide/amenities/room_4.jpg"
          alt="room4"
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
        <div className="grid grid-cols-4 gap-5 mt-5">
          <div className="flex flex-col leading-1.2 text-xl font-bold">
            <p>2인 1실 기준의 독립 객실 13칸이 마련되어 있으며,</p>
            <p>모든 객실은 조용하고 아늑한 분위기 속에서 편안한 휴식을</p>
            <p>누리실 수 있도록 정성껏 준비되어 있습니다.</p>
          </div>
          <div className="flex flex-col leading-1.2">
            <h3 className="text-lg font-bold mb-2">객실 구성</h3>
            <ul>
              <li>싱글 침대 2개</li>
              <li>전용 욕실 1개</li>
            </ul>
          </div>
          <div className="flex flex-col leading-1.2">
            <h3 className="text-lg font-bold mb-2">공용 어메니티</h3>
            <ul>
              <li>고급비누, 치약</li>
              <li>샴푸, 린스</li>
              <li>바디워시 구비</li>
            </ul>
          </div>
          <div className="flex flex-col leading-1.2">
            <h3 className="text-lg font-bold mb-2">비치 물품</h3>
            <ul>
              <li>헤어드라이어</li>
              <li>화장지</li>
              <li>쓰레기 비움용 봉투</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
