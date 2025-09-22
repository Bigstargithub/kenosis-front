export default function SignInInputText({
  label,
  type,
  name,
  id,
  placeholder,
  onChange,
  disabled = false,
  children,
}: {
  label: string;
  type: string;
  name: string;
  id: string;
  placeholder?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  disabled?: boolean;
  children?: React.ReactNode;
}) {
  return (
    <div className="signin-input">
      <h3>{label}</h3>
      <input
        type={type}
        name={name}
        id={id}
        className="input-text"
        placeholder={placeholder ?? undefined}
        onChange={onChange ?? undefined}
      />
      {children}
    </div>
  );
}
