export default function MeditationItemText({
  title,
  text,
}: {
  title: string;
  text: string;
}) {
  return (
    <div className="flex justify-between align-center border-b-1 py-2">
      <h3 className="text-md font-bold">{title}</h3>
      <p className="text-md font-medium">{text}</p>
    </div>
  );
}
