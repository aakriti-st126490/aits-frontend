import ProblemFeed from "../components/ProblemFeed";
import ReportProblemButton from "../components/ReportProblemButton";

export default function Dashboard() {
  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold text-zinc-900">Dashboard</h1>
        <ReportProblemButton />
      </div>
      <ProblemFeed />
    </div>
  );
}
