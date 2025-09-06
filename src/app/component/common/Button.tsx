import { ButtonType } from "@/app/interfaces/ButtonList";

export default function Button({ text, onClick }: ButtonType) {
  return (
    <button
      className="p-4 rounded-sm bg-black border-1 cursor-pointer text-white text-md hover:bg-gray-800"
      onClick={onClick}
    >
      {text}
    </button>
  );
}
