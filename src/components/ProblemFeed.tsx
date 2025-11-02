import { Link } from "react-router-dom";

const mockProblems = [
  { id: 1, title: "Campus WiFi dead zones", votes: 23, status: "Open" },
  { id: 2, title: "Stray dogs near dorm C", votes: 15, status: "In Progress" },
  { id: 3, title: "Water leakage in cafeteria", votes: 8, status: "Resolved" },
];

export default function ProblemFeed() {
  return (
    <div className="space-y-4">
      {mockProblems.map((p) => (
        <Link
          key={p.id}
          to={`/problems/${p.id}`}
          className="block bg-white border border-zinc-200 p-5 rounded-lg hover:shadow-sm transition"
        >
          <div className="flex justify-between">
            <h3 className="text-lg font-semibold text-zinc-900">{p.title}</h3>
            <span
              className={`text-sm px-2 py-1 rounded ${
                p.status === "Open"
                  ? "bg-zinc-200 text-zinc-700"
                  : p.status === "In Progress"
                  ? "bg-yellow-200 text-yellow-800"
                  : "bg-green-200 text-green-800"
              }`}
            >
              {p.status}
            </span>
          </div>
          <p className="text-zinc-600 text-sm mt-2">{p.votes} votes</p>
        </Link>
      ))}
    </div>
  );
}
