import Image from "next/image";

export default function AmenitiesCafeItem() {
  return (
    <div>
      <h3 className="text-2xl font-bold border-b-1 pb-2">○ 카페동</h3>
      <div className="mt-3 grid grid-cols-2 gap-4">
        <Image
          src="/guide/amenities/cafe_1.jpg"
          alt="cafe1"
          width={1200}
          height={0}
          className="w-full object-cover h-[450px] object-center"
        />
        <Image
          src="/guide/amenities/cafe_2.jpg"
          alt="cafe2"
          width={1200}
          height={0}
          className="w-full object-cover h-[450px] object-center"
        />
        <Image
          src="/guide/amenities/cafe_3.jpg"
          alt="cafe3"
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
            <p>카페동은 본관 정 중앙에 위치해 있습니다.</p>
            <p>카페동은 식사와 교제가 이루어지는 공간입니다.</p>
            <p>차와 음료, 식사는 무료로 제공되고 있습니다.</p>
          </div>
        </div>
        <div className="flex flex-col leading-1.2">
          <h3 className="text-lg font-bold mb-2">이용안내</h3>
          <ul>
            <li>방문객은 오전 10시부터 오후 4시까지만 개방합니다.</li>
            <li>이후는 이용 불가합니다.</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
