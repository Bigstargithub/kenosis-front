import MeditationProgram from "@/app/component/guide/meditation_program";

export default function MeditationProgramList({
  programList,
}: {
  programList: string[];
}) {
  return (
    <div className="mt-2 flex w-full gap-4">
      {programList.map((program) => (
        <MeditationProgram key={program} programName={program} />
      ))}
    </div>
  );
}
