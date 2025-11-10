import Image from "next/image";
import MeditationItemText from "@/app/component/guide/meditation_item_text";

export default function MeditationItem({
  image,
  title,
  meditationTitle,
  message,
  questionText,
  prayText,
}: {
  image: string;
  title: string;
  meditationTitle: string;
  message: string;
  questionText: string;
  prayText: string;
}) {
  return (
    <div key={title}>
      <Image
        src={image}
        alt="meditation item"
        width={1200}
        height={0}
        className="w-full object-cover h-[450px] object-center"
      />
      <h3 className="text-2xl font-bold mt-2">{title}</h3>
      <div className="mt-3">
        <MeditationItemText title="묵상주제" text={meditationTitle} />
        <MeditationItemText title="성경말씀" text={message} />
        <MeditationItemText title="질문" text={questionText} />
        <MeditationItemText title="기도" text={prayText} />
      </div>
    </div>
  );
}
