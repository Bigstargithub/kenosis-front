export default function CheckBox({
  label,
  value,
  setCheckout,
}: {
  label: string;
  value: string;
  setCheckout: (x: any) => void;
}) {
  return (
    <div>
      <input
        type="checkbox"
        onChange={setCheckout}
        value={value}
        className="mr-2"
      />
      <label>{label}</label>
    </div>
  );
}
