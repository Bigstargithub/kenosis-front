import Button from "@/app/component/common/Button";
import { ButtonType } from "@/app/interfaces/ButtonList";

export default function ButtonList({
  buttonList,
}: {
  buttonList: ButtonType[];
}) {
  return (
    <div className="grid grid-cols-2 gap-5">
      {buttonList.map((button) => (
        <Button key={button.text} text={button.text} onClick={button.onClick} />
      ))}
    </div>
  );
}
