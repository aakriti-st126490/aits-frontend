import { useState } from "react";

interface Props {
  problemId: number;
}

export default function CommentSection({ problemId }: Props) {
  const [comments, setComments] = useState<string[]>([
    "Yes this is a real issue, happens to me daily.",
    "IT department should really fix this.",
  ]);

  const [input, setInput] = useState("");

  function submitComment(e: React.FormEvent) {
    e.preventDefault();
    if (!input.trim()) return;
    setComments([...comments, input]);
    setInput("");
  }

  return (
    <div className="mt-10">
      <h2 className="text-lg font-semibold text-zinc-900 mb-4">Comments</h2>

      <form onSubmit={submitComment} className="mb-4 flex gap-3">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Add a comment..."
          className="flex-1 px-3 py-2 border border-zinc-300 rounded-lg focus:ring-2 focus:ring-zinc-600 focus:outline-none"
        />
        <button
          type="submit"
          className="px-4 py-2 bg-zinc-800 text-white rounded-lg hover:bg-zinc-900"
        >
          Post
        </button>
      </form>

      <div className="space-y-3">
        {comments.map((c, index) => (
          <div
            key={index}
            className="bg-white border border-zinc-200 p-3 rounded-lg"
          >
            <p className="text-zinc-700">{c}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
