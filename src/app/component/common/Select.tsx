export default function Select({
  options,
  onChange,
}: {
  options: string[];
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}) {
  return <select onChange={onChange} className="ml-2 w-1/3 p-2 border-1 rounded-sm text-md">{options.map((option) => (
    <option key={option} value={option}>{option}</option>
  ))}</select>;
}