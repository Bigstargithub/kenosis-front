import Image from "next/image";
import IntroduceButtonList from "@/app/component/introduce/introduce_button_list";
import IntroduceText from "@/app/component/introduce/introduce_text";

export default function IntroducePrayPage() {
  return (
    <section className="lg:w-3/5 m-auto">
      <IntroduceButtonList />
      <div className="mt-10">
        <h2 className="text-xl font-bold text-blue-800">Prayer</h2>
        <div className="mt-5">
          <p className="text-3xl font-medium">
            "수도원과 함께하는 특별한 순간들"
          </p>
          <p className="text-3xl text-blue-500 font-bold mt-2">
            복음 선포의 기도문
          </p>
          <div className="mt-5">
            <Image
              src="/pray/pray_banner.jpg"
              alt="기도문"
              width={1200}
              height={900}
              className="w-full h-auto max-h-[400px] object-none rounded-sm"
            />
          </div>
          <div className="mt-10 ml-4">
            <IntroduceText
              text="예수 그리스도를 소개하고 복음을 선포하는 기도문입니다."
              isBold={true}
            />
            <IntroduceText text="아버지께서 제게 행하시는 모든 일은 선하십니다." />
            <IntroduceText text="아버지의 능하신 팔이 저를 붙잡고 계시며, 아버지의 지혜가 저의 삶을 인도하고 있음을 믿습니다." />
            <IntroduceText text="온 우주 만물이 아버지를 증거하며, 사랑과 권능을 나타내나이다." />
            <IntroduceText text="저는 아버지에게서 왔고, 아버지 안에 살다가 아버지께로 돌아가나이다." />
            <IntroduceText text="온 세상이 아버지의 것이니, 지금 저는 아버지의 세상을 살아가나이다." />
            <IntroduceText text="아버지께서 저를 떠나신 적 없으시니, 저도 아버지를 떠난 적이 없나이다." />
            <br />

            <IntroduceText
              text="우리 주 예수 그리스도께서 나의 모든 죄를 사하셨으니, 나를 정죄할 자 없나이다."
              isBold={true}
            />
            <IntroduceText text="주께서 행하신 구원과 사랑은 부족함이 없어," />
            <IntroduceText text="나의 모든 허물을 덮고 죄악을 동이 서에서 먼 것 같이 옮기셨나이다." />
            <IntroduceText text="주님을 통하여 아버지께서 사람에게 행하신 사랑과 구원이 무엇인지를 알게 되나니," />
            <IntroduceText text="주님은 아버지의 사랑과 구원의 보증이십니다." />
            <IntroduceText text="주께서 행하신 모든 일이 지금 제 안에 이미 와 있으니," />
            <IntroduceText text="이 진리를 믿는 자가 모든 얽매임에서 자유하나이다." />
            <IntroduceText text="주께서는 아버지께로 나아갈 문을 열어놓으셨으니," />
            <IntroduceText text="믿음이 있는 자는 언제든지 아버지께 나아가 은혜를 얻나이다." />
            <IntroduceText text="주 안에 거하는 자는 죄악도 어둠도 없나니 오직 생명의 빛으로 가득하나이다." />
            <IntroduceText text="주님 안에서 아버지를 만났고, 나를 만났나이다." />
            <br />

            <IntroduceText
              text="아버지는 아들 안에서 구원을 이루시고, 성령으로 우리 안에 담으시나이다."
              isBold={true}
            />
            <IntroduceText text="예수 그리스도 안에서 이루신 아버지의 구원을 믿을 때에, 성령이 제 안으로 오시어 새 생명이 되었나이다." />
            <IntroduceText text="성령 안에서 아버지와 아들이 하나인 것처럼, 저는 아버지와 하나입니다." />
            <IntroduceText text="아버지의 생명으로 오시고, 아들의 영으로 오신 성령이여!" />
            <IntroduceText text="아버지는 아들의 몸으로 이 땅으로 오시고, 성령으로 내 안에 오시었나이다." />
            <IntroduceText text="제 삶의 모든 영역이 성령으로 충만하나이다." />
            <IntroduceText text="치유오 회복으로 날마다 새롭게 하시며, 권능으로 마귀의 일을 멸하시고, 진리로 자유하게 하시나이다." />
            <IntroduceText text="끊임없는 생수로 영생을 맛보게 하시고, 하나님 나라를 새 하늘과 새 땅으로 만나게 하시나이다." />
            <IntroduceText text="주께서는 저를 떠나신 적 없으시며, 결코 포기하지 않으시니 주님의 사랑이 저를 거룩하게 하나이다." />
            <br />

            <IntroduceText
              text="교회는 주님의 몸이요, 주님의 나라입니다."
              isBold={true}
            />
            <IntroduceText text="이 땅에 아버지를 담아내는 그릇이요." />
            <IntroduceText text="아버지의 생명을 하나로 가졌으니 한 가족이며, 주님의 말씀과 성령의 다스림 아래 있으니 하나님 나라입니다." />
            <IntroduceText text="봉사와 섬김을 통하여 교회는 천국을 맛보며, 천국이 되어가나이다." />
            <br />

            <IntroduceText
              text="예배와 성도의 교제를 통하여 생명이 확정될 것입니다."
              isBold={true}
            />
            <IntroduceText text="우리는 영생을 얻었으니 지금 영생을 몸으로 담아내고 경험하나이다." />
            <IntroduceText text="여기가 하늘 지금이 천국입니다." />
            <IntroduceText text="아버지는 아들 안에서 구원을 이루시고, 성령으로 우리 안에 담으시나이다." />
            <IntroduceText text="예수 그리스도 안에서 이루신 아버지의 구원을 믿을 때에, 성령이 제 안으로 오시어 새 생명이 되었나이다." />
            <IntroduceText text="설영 안에서 아버지오 아들이 하나인 것처럼, 저는 아버지와 하나입니다." />
            <IntroduceText text="아버지의 생명으로 오시고, 아들의 영으로 오신 성령이여!" />
            <IntroduceText text="아버지는 아들의 몸으로 이 땅으로 오시고, 성령으로 내 안에 오시었나이다." />
            <IntroduceText text="제 삶의 모든 영역이 성령으로 충만하나이다." />
            <IntroduceText text="치유와 회복으로 날마다 새롭게 하시며, 권능으로 마귀의 일을 멸하시고, 진리로 자유하게 하시나이다." />
            <IntroduceText text="끊임없는 생수로 영생을 맛보게 하시고, 하나님 나라를 새 하늘과 새 땅으로 만나게 하시나이다." />
            <IntroduceText text="주께서는 저를 떠나신 적 없으시며, 결코 포기하지 않으시니 주님의 사랑이 저를 거룩하게 하나이다." />
            <br />

            <IntroduceText
              text="교회는 주님의 몸이요, 주님의 나라입니다."
              isBold={true}
            />
            <IntroduceText text="이 땅에 아버지를 담아내는 그릇이요." />
            <IntroduceText text="아버지의 생명을 하나로 가졌으니 한 가족이며, 주님의 말씀과 성령의 다스림 아래 있으니 하나님 나라입니다." />
            <IntroduceText text="봉사와 섬김을 통하여 교회는 천국을 맛보며, 천국이 되어가나이다." />
            <br />

            <IntroduceText
              text="예배와 성도의 교제를 통하여 생명이 확장될 것입니다."
              isBold={true}
            />
            <IntroduceText text="우리는 영생을 얻었으니" isBold={true} />
            <IntroduceText
              text="지금 영생을 몸으로 담아내고 경험하나이다."
              isBold={true}
            />
            <IntroduceText
              text="여기가 하늘 지금이 천국입니다."
              isBold={true}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
