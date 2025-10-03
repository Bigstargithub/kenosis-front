export default function MeditationProgram({
  programName,
}: {
  programName: string;
}) {
  return (
    <div className="bg-blue-600 rounded-full w-full text-white text-center p-4">
      {programName}
    </div>
  );
}
