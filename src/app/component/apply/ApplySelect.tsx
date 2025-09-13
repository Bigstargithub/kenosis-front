import Select from "@/app/component/common/Select";

export default function ApplySelect({
  options,
  onChange,
  label
}: {
  options: string[];
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  label: string;
}) {
  return (
    <div className="mt-5 flex flex-wrap items-center">
      <p className="w-[80px] p-2 text-md">{label}</p>
      <Select options={options} onChange={onChange} />
    </div>
  )
}