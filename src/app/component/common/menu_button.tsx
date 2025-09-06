import Link from "next/link";

export default function MenuButtonComponent({
  link,
  text,
}: {
  link: string;
  text: string;
}) {
  return (
    <Link
      href={`${link}`}
      className="cursor-pointer font-bold text-xl text-white"
    >
      {text}
    </Link>
  );
}
