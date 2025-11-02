import { Link } from "react-router-dom";

export default function MyProfile() {
  // Temporary mock user data (replace with API later)
  const user = {
    name: "Aakriti Poudel",
    role: "Problem Solver",
    reputation: 120,
    reportedProblems: [
      { id: 1, title: "Hostel WiFi Unstable" },
      { id: 3, title: "Stray Dogs near Library" },
    ],
    proposedSolutions: [
      { id: 10, problemId: 1, summary: "Install signal repeaters in hallways" },
      { id: 11, problemId: 3, summary: "Coordinate with local animal rescue org" }
    ]
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      {/* Profile Header */}
      <div className="bg-white shadow rounded-xl p-6 border border-zinc-200">
        <h1 className="text-2xl font-bold text-zinc-900">{user.name}</h1>
        <p className="text-zinc-600 mt-1">{user.role}</p>

        <div className="mt-4">
          <span className="text-sm text-zinc-500">Reputation Score</span>
          <p className="text-lg font-semibold">{user.reputation}</p>
        </div>
      </div>

      {/* Reported Problems */}
      <section className="mt-10">
        <h2 className="text-xl font-semibold mb-3">Reported Problems</h2>
        <div className="space-y-3">
          {user.reportedProblems.map((p) => (
            <Link
              to={`/problems/${p.id}`}
              key={p.id}
              className="block bg-white p-4 border border-zinc-200 rounded-lg hover:bg-zinc-50"
            >
              {p.title}
            </Link>
          ))}
        </div>
      </section>

      {/* Proposed Solutions */}
      {user.role === "Problem Solver" && (
        <section className="mt-10">
          <h2 className="text-xl font-semibold mb-3">Proposed Solutions</h2>
          <div className="space-y-3">
            {user.proposedSolutions.map((s) => (
              <div
                key={s.id}
                className="bg-white p-4 border border-zinc-200 rounded-lg"
              >
                <p className="text-zinc-700">{s.summary}</p>
                <Link
                  to={`/problems/${s.problemId}`}
                  className="text-sm text-zinc-600 underline mt-2 inline-block"
                >
                  View related problem
                </Link>
              </div>
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
