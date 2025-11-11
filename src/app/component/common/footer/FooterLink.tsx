import Link from "next/link";

export default function FooterLink({
  text,
  link,
}: {
  text: string;
  link: string;
}) {
  return (
    <Link href={link} className="mr-5">
      <span className="text-white hover:text-gray-400 cursor-pointer">
        {text}
      </span>
    </Link>
  );
}
