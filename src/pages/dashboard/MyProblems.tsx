import { Link } from "react-router-dom";

export default function MyProblems() {
  const problems = [
    { id: 1, title: "Hostel WiFi Unstable", status: "Open" },
    { id: 3, title: "Stray Dogs near Library", status: "In Progress" },
  ];

  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold text-zinc-900 mb-4">My Problems</h1>

      <div className="space-y-3">
        {problems.map((p) => (
          <Link
            to={`/problems/${p.id}`}
            key={p.id}
            className="block bg-white p-4 border border-zinc-200 rounded-lg hover:bg-zinc-50 flex justify-between items-center"
          >
            <span>{p.title}</span>
            <span className="text-sm text-zinc-600">{p.status}</span>
          </Link>
        ))}
      </div>
    </div>
  );
}
