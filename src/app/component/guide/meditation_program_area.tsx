import MeditationProgram from "@/app/component/guide/meditation_program";
import MeditationProgramList from "./meditation_program_list";

export default function MeditationProgramArea() {
  const programTopList = [
    "영성수련회",
    "중보기도",
    "성경공부",
    "거룩한 도서",
    "고전읽기",
  ];

  const programBottomList = [
    "찬양 침묵 기도회",
    "삼종 기도",
    "묵상 정원 안내",
    "케노시스 포럼",
    "기타",
  ];

  return (
    <div className="mt-10">
      <h3 className="text-2xl font-bold">프로그램 안내</h3>
      <div className="mt-4">
        <MeditationProgramList programList={programTopList} />
        <p className="ml-2 text-blue-600">
          ● 마음으로 떠나는 천국여행, 말씀으로 찾아가는 천국여행
        </p>
        <MeditationProgramList programList={programBottomList} />
      </div>
    </div>
  );
}
