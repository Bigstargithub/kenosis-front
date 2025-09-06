import Image from "next/image";

export default function MainBannerComponent() {
  return (
    <section className="min-h-screen relative flex items-center ">
      <div className="absolute left-0 t-0 w-full h-full">
        <Image
          src="/main/main_banner.jpg"
          width={1200}
          height={900}
          alt="메인배너"
          className="w-full h-full object-cover"
        />
        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-70"></div>
      </div>
      <div className="lg:w-3/5 z-5 m-auto">
        <h2 className="font-bold text-white text-8xl">KENOSIS</h2>
        <h3 className="font-bold text-white text-6xl">Monastery</h3>
        <p className="font-medium text-white mt-10 text-xl">
          경건 훈련을 통해
          <br />
          이 땅에 이루어지는 하나님 나라를 추구하는
          <br />
          개혁교회에 속한 수도원입니다.
          <br />
          <br />
          그리스도를 영생과 진리로 만난 모든 이들을 위한 공간입니다.
        </p>
      </div>
    </section>
  );
}
