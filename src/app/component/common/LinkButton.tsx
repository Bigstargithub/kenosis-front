import Link from "next/link";

export default function LinkButton({
  text,
  link,
  isActive,
}: {
  text: string;
  link: string;
  isActive: boolean;
}) {
  return (
    <Link href={link} className="w-full">
      <button
        className={`border-1 border-gray-300 mr-5 px-5 py-2 h-fit w-full cursor-pointer  ${
          isActive ? "bg-blue-700 text-white" : "bg-white text-blue-700"
        }`}
      >
        {text}
      </button>
    </Link>
  );
}
