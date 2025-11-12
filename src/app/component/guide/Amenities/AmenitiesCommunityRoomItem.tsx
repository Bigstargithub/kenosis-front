import Image from "next/image";

export default function AmenitiesCommunityRoomItem() {
  return (
    <div>
      <h3 className="text-2xl font-bold border-b-1 pb-2">○ 교제실</h3>
      <div className="mt-3 grid gap-4">
        <Image
          src="/guide/amenities/community_room.jpg"
          alt="community room1"
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
              교제실은 본관 C동 2층, 301호실 입구를 통해 이용하실 수 있습니다.
            </p>
            <p>
              이 공간은 성도 간의 따뜻한 교제와 쉼을 위한 장소로 마련되어
              있습니다.
            </p>
            <p>
              정갈하게 준비된 공간에서 소중한 나눔과 회복의 시간을 보내시기
              바랍니다.
            </p>
          </div>
          <div className="flex flex-col leading-1.2">
            <h3 className="text-lg font-bold mb-2">시설안내</h3>
            <ul>
              <li>산소챔버 3대 설치 (※ 사용은 본 교회 성도에 한함)</li>
              <li>편안한 테이블과 의자</li>
              <li>각 기수별 영성수련회 사진 전시</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
