import GuideButtonList from "@/app/component/guide/guide_button_list";
import MeditationProgramArea from "@/app/component/guide/meditation_program_area";
import MeditationTextArea from "@/app/component/guide/meditation_text_area";
import MeditationItemList from "@/app/component/guide/meditation_item_list";

export default function MeditationPage() {
  return (
    <section className="lg:w-3/5 m-auto relative">
      <GuideButtonList />
      <div className="mt-10">
        <h2 className="text-xl font-bold">Meditation Guide</h2>
        <div className="mt-5">
          <p className="text-3xl font-medium">
            "영생의 소망으로 만난 이들에게 열린공간"
          </p>
          <p className="text-3xl text-blue-500 font-bold mt-2">묵상안내</p>
        </div>
        <MeditationTextArea />
      </div>
      <MeditationProgramArea />
      <MeditationItemList />
    </section>
  );
}
