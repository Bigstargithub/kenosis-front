export default function IntroduceText({
  text,
  isBold = false,
}: {
  text: string;
  isBold?: boolean;
}) {
  return (
    <p className={`text-xl ${isBold ? "font-bold" : "font-medium"}`}>{text}</p>
  );
}
