import Layout from "../components/Layout";
import { Link } from "react-router-dom";

const problems = [
  { id: 1, title: "Littering near cafeteria", votes: 12 },
  { id: 2, title: "Wild animals in parking lot", votes: 7 },
];

export default function ProblemList() {
  return (
    <Layout>
      <h2 className="text-2xl font-bold text-zinc-900 mb-4">Reported Problems</h2>
      <ul className="space-y-3">
        {problems.map((p) => (
          <li
            key={p.id}
            className="bg-white border border-zinc-200 p-4 rounded-lg hover:shadow"
          >
            <Link to={`/problems/${p.id}`} className="text-zinc-800 font-semibold">
              {p.title}
            </Link>
            <span className="ml-2 text-zinc-500">Votes: {p.votes}</span>
          </li>
        ))}
      </ul>
    </Layout>
  );
}
