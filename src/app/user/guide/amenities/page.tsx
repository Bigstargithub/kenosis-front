import GuideButtonList from "@/app/component/guide/guide_button_list";
import AmenitiesRoomItem from "@/app/component/guide/Amenities/AmenitiesRoomItem";
import AmenitiesLibraryItem from "@/app/component/guide/Amenities/AmenitiesLibraryItem";

export default function AmenitiesPage() {
  return (
    <section className="lg:w-3/5 m-auto">
      <GuideButtonList />
      <div className="mt-10">
        <h2 className="text-xl font-bold">Amenities</h2>
        <div className="mt-5">
          <p className="text-3xl font-medium">"경건 훈련을 위한 공간"</p>
          <p className="text-3xl text-blue-600 font-bold mt-2">편의시설</p>
        </div>
        <div className="mt-10 flex flex-col text-lg leading-1.2">
          <span>
            케노시스 수도원은 3개의 숙소동 및 채플동으로 총 4개의 건물이
            있습니다.
          </span>
          <span>
            각 숙소동의 2층은 도서관, 기도실, 교제실로 사용되고 있습니다.
          </span>
        </div>
        <AmenitiesRoomItem />
        <AmenitiesLibraryItem />
      </div>
    </section>
  );
}
