import Image from "next/image";

export default function AmenitiesLibraryItem() {
  return (
    <div className="mt-15">
      <h3 className="text-2xl font-bold border-b-1 pb-2">○ 도서관</h3>
      <div className="mt-3 grid grid-cols-2 gap-4">
        <Image
          src="/guide/amenities/library_1.jpg"
          alt="library1"
          width={1200}
          height={0}
          className="w-full object-cover h-[450px] object-center"
        />
        <Image
          src="/guide/amenities/library_2.jpg"
          alt="library2"
          width={1200}
          height={0}
          className="w-full object-cover h-[450px] object-center"
        />
        <Image
          src="/guide/amenities/library_3.jpg"
          alt="library3"
          width={1200}
          height={0}
          className="w-full object-cover h-[450px] object-center"
        />
        <Image
          src="/guide/amenities/library_4.jpg"
          alt="library4"
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
        <div className="grid grid-cols-3 gap-5 mt-5">
          <div className="flex flex-col leading-1.2 text-xl font-bold">
            <p>
              도서관은 본관 2층에 위치해 있으며, 101호실 문을 통해 입장하실 수
              있습니다.
            </p>
            <p>
              고요한 분위기 속에서 다양한 서적을 자유롭게 열람하실 수 있도록
              준비되어있습니다.
            </p>
          </div>
          <div className="flex flex-col leading-1.2">
            <h3 className="text-lg font-bold mb-2">이용안내</h3>
            <ul>
              <li>모든도서 자유 열람</li>
              <li>단, 외부 반출 금지</li>
            </ul>
          </div>
          <div className="flex flex-col leading-1.2">
            <h3 className="text-lg font-bold mb-2">운영시간</h3>
            <ul>
              <li>밤 10시 자동 소등 및 이용 제한</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
