import Image from "next/image";

export default function AmenitiesPrayRoomItem() {
  return (
    <div>
      <h3 className="text-2xl font-bold border-b-1 pb-2">○ 기도실</h3>
      <div className="mt-3 grid grid-cols-2 gap-4">
        <Image
          src="/guide/amenities/pray_room_1.jpg"
          alt="pray room1"
          width={1200}
          height={0}
          className="w-full object-cover h-[450px] object-center"
        />
        <Image
          src="/guide/amenities/pray_room_2.jpg"
          alt="pray room2"
          width={1200}
          height={0}
          className="w-full object-cover h-[450px] object-center"
        />
        <Image
          src="/guide/amenities/pray_room_3.jpg"
          alt="pray room3"
          width={1200}
          height={0}
          className="w-full object-cover h-[450px] object-center"
        />
        <Image
          src="/guide/amenities/pray_room_4.jpg"
          alt="pray room4"
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
            <p>
              기도실은 24시간 떼제음악이 흘러 나오며 침묵으로 기도하는
              공간입니다.
            </p>
            <p>매일 중보기도가 진행되고 있습니다.</p>
          </div>
          <div className="flex flex-col leading-1.2">
            <h3 className="text-lg font-bold mb-2">이용안내</h3>
            <ul>
              <li>기도실은 본관B동 2층에 위치해 있습니다.</li>
              <li>201호 문을 통해 이용하실 수 있습니다.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
