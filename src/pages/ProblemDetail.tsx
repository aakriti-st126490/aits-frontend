import { useParams } from "react-router-dom";
import CommentSection from "../components/CommentSection";

const mockProblem = {
  id: 1,
  title: "Campus WiFi dead zones",
  description: "There are several areas in campus buildings where WiFi drops suddenly.",
  location: "Library - 2nd Floor",
  votes: 23,
  status: "Open",
};

export default function ProblemDetail() {
  const { id } = useParams(); // For now unused, later fetch real data

  return (
    <div className="max-w-3xl mx-auto pt-6">
      <h1 className="text-3xl font-bold text-zinc-900">{mockProblem.title}</h1>

      <div className="flex items-center gap-3 mt-3">
        <span
          className={`text-sm px-2 py-1 rounded ${
            mockProblem.status === "Open"
              ? "bg-zinc-200 text-zinc-700"
              : mockProblem.status === "In Progress"
              ? "bg-yellow-200 text-yellow-800"
              : "bg-green-200 text-green-800"
          }`}
        >
          {mockProblem.status}
        </span>

        <span className="text-zinc-700 text-sm">{mockProblem.location}</span>
      </div>

      <p className="text-zinc-700 mt-5">{mockProblem.description}</p>

      {/* Vote Button */}
      <button className="mt-6 px-4 py-2 bg-zinc-800 text-white rounded-lg hover:bg-zinc-900">
        👍 Upvote ({mockProblem.votes})
      </button>

      {/* Comment Section */}
      <CommentSection problemId={mockProblem.id} />
    </div>
  );
}
