import IntroduceButtonList from "@/app/component/introduce/introduce_button_list";
import IntroduceText from "@/app/component/introduce/introduce_text";

export default function IntroducePage() {
  return (
    <section className="lg:w-3/5 m-auto">
      <IntroduceButtonList />
      <div className="mt-10">
        <h2 className="text-xl font-bold text-blue-800">Greetings</h2>
        <div className="mt-5">
          <p className="text-3xl font-medium">
            시간과 영원이, 땅과 하늘이 조우하는 곳
          </p>
          <p className="text-3xl text-blue-500 font-bold mt-2">
            케노시스 수도원
          </p>
        </div>
        <div className="ml-4 mt-10">
          <IntroduceText text="주님의 이름으로 평안을 전합니다." />
          <IntroduceText text="케노시스(κένωσɩς)수도원은" />
          <IntroduceText text="예수 그리스도의 자기 비움의 삶을 본받아" />
          <IntroduceText text="나를 비워 그리스도를 살아가는 경건을 훈련합니다." />
          <br />
          <IntroduceText text="몸의 쉼, 마음의 쉼, 존재의 쉼을 통하여" />
          <IntroduceText text="일상의 아름다움과 존귀한 자리로 돌아갈 힘을 얻는 곳입니다." />
          <br />
          <IntroduceText text="영혼의 쉼과 회복을 갈망하는 분들을 위한" />
          <IntroduceText text="기도와 묵상, 쉼과 위로의 자리가 여기에 준비되어 있습니다." />
          <IntroduceText text="세상의 분주함을 떠나" />
          <IntroduceText text="아버지 하나님과 깊은 교제의 시간을 갖도록 하십시오." />
          <br />
          <IntroduceText text={`"시간과 영원이,`} />
          <IntroduceText text={`땅과 하늘이 조우하는 곳!"`} />
          <IntroduceText text="케노시스 수도원" />
        </div>
        <div className="mt-10 text-2xl font-bold">
          <h3>대표 안내자 서범석</h3>
        </div>
      </div>
    </section>
  );
}
