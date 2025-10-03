import MeditationText from "@/app/component/guide/meditation_text";

export default function MeditationTextArea() {
  return (
    <div className="ml-4 mt-10">
      <MeditationText>
        케노시스 수도원은 <span className="font-bold">경건 훈련을 통하여</span>
      </MeditationText>
      <MeditationText>
        이 땅에 이루어지는 하나님 나라를 추구하는 개혁교회에 속한 수도원입니다.
      </MeditationText>
      <br />
      <MeditationText>
        <span className="font-bold">그리스도를 영생과 진리로 만난</span>
      </MeditationText>
      <MeditationText>모든 이들을 위한 공간입니다.</MeditationText>
      <MeditationText>
        원하시는 분은 아래의 영성 프로그램에 참여할 수 있습니다.
      </MeditationText>
    </div>
  );
}
