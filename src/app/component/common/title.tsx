export default function TitleComponent({
  text,
  level,
}: {
  text: string;
  level: "main" | "sub" | "tertiary";
}) {
  if (level === "main") {
    return <h2 className="text-3xl font-bold">{text}</h2>;
  } else if (level === "sub") {
    return <h3 className="text-2xl font-bold">{text}</h3>;
  } else if (level === "tertiary") {
    return <h4 className="text-xl font-bold">{text}</h4>;
  }
}
