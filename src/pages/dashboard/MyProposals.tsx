import { Link } from "react-router-dom";

export default function MyProposals() {
  const proposals = [
    { id: 10, problemTitle: "Hostel WiFi Unstable", summary: "Install signal repeaters", status: "Pending" },
    { id: 11, problemTitle: "Stray Dogs near Library", summary: "Coordinate with animal rescue org", status: "Approved" },
  ];

  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold text-zinc-900 mb-4">My Proposals</h1>

      <div className="space-y-3">
        {proposals.map((p) => (
          <div
            key={p.id}
            className="bg-white p-4 border border-zinc-200 rounded-lg hover:bg-zinc-50"
          >
            <Link
              to={`/problems/${p.id}`}
              className="text-lg font-semibold text-zinc-900 underline"
            >
              {p.problemTitle}
            </Link>
            <p className="text-zinc-700">{p.summary}</p>
            <p className="text-sm text-zinc-600 mt-1">Status: {p.status}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
