import MeditationItem from "@/app/component/guide/meditation_item";

export default function MeditationItemList() {
  const meditationItemList = [
    {
      image: "/guide/narrow_door.jpg",
      title: "좁은문",
      meditationTitle: "예수안으로 들어가기",
      message: "마7:13-14, 마16:24",
      questionText: `"어떤 희생이 따르더라도 예수 그리스도 안으로 들어가시겠습니까?`,
      prayText: `"주여! 좁은 길 가는 용기와 기쁨을 주소서!"`,
    },
    {
      image: "/guide/david.jpg",
      title: "다윗상",
      meditationTitle: "세상에 던지는 나의 물맷돌",
      message: "삼상17:45, 행3:6",
      questionText: `"당신이 세상에 던지는 물맷돌은 무엇입니까?"`,
      prayText: `"은과 금이 아니라 주님의 이름을 내게 주셨나이다."`,
    },
    {
      image: "/guide/kenosis.jpg",
      title: "케노시스",
      meditationTitle: "비움과 채움",
      message: "빌2:5-11",
      questionText: `"하나님을 채우기 위해 어떤 부분을 비워내 드렸습니까?"`,
      prayText: `"나는 아니오! 예수 그리스만 예!`,
    },
    {
      image: "/guide/tomb.jpg",
      title: "무덤",
      meditationTitle: "생명 연합",
      message: "갈2:20",
      questionText: `"그리스도를 살기 위해 당신의 모든 것을 포기하셨습니까?"`,
      prayText: `"나를 포기하는 만큼 그리스도를 만나 살아갑니다."`,
    },
    {
      image: "/guide/open_door.jpg",
      title: "열린문",
      meditationTitle: "하늘의 문과 응답",
      message: "계3:8, 4:1, 마18:18, 약4:2",
      questionText: `"당신의 하늘 문은 열려있나요?"`,
      prayText: `"주여! 내게 천국 열쇠를 주셨나이다."`,
    },
    {
      image: "/guide/cross_garden.jpg",
      title: "십자가 정원",
      meditationTitle: "하나님 사랑과 구원의 증거 확인하기",
      message: "롬5:8, 롬6:1",
      questionText: `"하나님이 나를 용서하셨다는 증거가 어디에 있습니까?"`,
      prayText: `"예수 그리스도께서 죽으심으로 나의 모든 죄와 허물을 대속하셨나이다."`,
    },
    {
      image: "/guide/time_eternal.jpg",
      title: "시간과 영원",
      meditationTitle: "시간과 영원, 그리고 나",
      message: "창2:7, 전3:20-21",
      questionText: `"시간과 영원이 만나는 자리에 누가 있을까요?"`,
      prayText: `"나는 영적 존재로서 육적 경험을 하는 중입니다."`,
    },
    {
      image: "/guide/warm_hill.jpg",
      title: "다정의 언덕",
      meditationTitle: "승리하는 삶",
      message: "창1:28, 시121편",
      questionText: `"삶이 짐이 된 까닭은?"`,
      prayText: `"내가 아버지이며, 아브라함입니다."`,
    },
    {
      image: "/guide/made_name.jpg",
      title: "내가 지은 이름",
      meditationTitle: "내 인생의 결정권",
      message: "고후5:17, 히8:12, 창2:19",
      questionText: `"당신 인생의 이름은 누가 지었나요?"`,
      prayText: `"주께서 주신 인생의 주인으로 살아갑니다."`,
    },
    {
      image: "/guide/accompany_road.jpg",
      title: "동행의 길",
      meditationTitle: "주님과 걷기",
      message: "눅24:13-36, 요일1:3",
      questionText: `주님과 더 친밀한 사귐을 갖습니다. 주님께서 제 옆에, 제 안에 언제나 함께 걷고 계십니다.`,
      prayText: `"주님께서 언제나 제 옆에, 제 안에 함께 걷고 계십니다."`,
    },
    {
      image: "/guide/meet_afternoon.jpg",
      title: "정오의 만남",
      meditationTitle: "드러남의 자유",
      message: "요4:6, 요일1:5, 약1:17",
      questionText: `"당신을 두렵게 하는 것은 무엇일까요?"`,
      prayText: `"숨기고 감출 것 없는 인생이 자유입니다."`,
    },
    {
      image: "/guide/smile_jesus.jpg",
      title: "웃으시는 예수님",
      meditationTitle: "아버지의 마음",
      message: "살전5:16-18",
      questionText: `"너는 나로 인하여 행복하니"`,
      prayText: `"아버지의 모든 것을 기뻐합니다. 제게 행하신 모든 일이 선하심을 믿습니다."`,
    },

    // {
    //   image: "",
    //   title: "",
    //   meditationTitle: "",
    //   message: "",
    //   questionText: ``,
    //   prayText: ``,
    // }
  ];
  return (
    <div className="mt-5 grid grid-cols-2 gap-12">
      {meditationItemList.map((item) => (
        <MeditationItem key={item.title} {...item} />
      ))}
    </div>
  );
}
