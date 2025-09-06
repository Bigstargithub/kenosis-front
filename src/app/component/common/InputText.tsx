export default function InputText({
  type,
  name,
  id,
  label,
  onChange,
}: {
  type: string;
  name: string;
  id: string;
  label: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}) {
  return (
    <div className="mt-5 flex flex-wrap items-center">
      <label htmlFor={id} className="w-[80px] p-2 text-md">
        {label}
      </label>
      <div className="ml-2 w-1/2 p-2 text-md">
        <input
          type={type}
          name={name}
          id={id}
          onChange={onChange}
          className="w-1/3 p-2 border-1 rounded-sm"
        />
      </div>
    </div>
  );
}
