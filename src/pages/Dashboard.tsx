import DashboardLayout from "../components/DashboardLayout";
import ProblemFeed from "../components/ProblemFeed.tsx";
import ReportProblemButton from "../components/ReportProblemButton.tsx";

export default function Dashboard() {
  return (
    <DashboardLayout>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold text-zinc-900">Dashboard</h1>
        <ReportProblemButton />
      </div>

      <ProblemFeed />
    </DashboardLayout>
  );
}
