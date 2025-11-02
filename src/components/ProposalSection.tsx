import { useState } from "react";

interface Props {
  problemId: number;
}

export default function ProposalSection({ problemId }: Props) {
  const [proposals, setProposals] = useState<string[]>([
    "We can install WiFi repeaters in weak zones.",
    "IT can run a signal strength survey to identify drop points."
  ]);

  const [input, setInput] = useState("");

  function submitProposal(e: React.FormEvent) {
    e.preventDefault();
    if (!input.trim()) return;
    setProposals([...proposals, input]);
    setInput("");
  }

  return (
    <div className="mt-12">
      <h2 className="text-lg font-semibold text-zinc-900 mb-4">Proposed Solutions</h2>

      <form onSubmit={submitProposal} className="mb-4 flex gap-3">
        <textarea
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Propose a solution..."
          className="flex-1 px-3 py-2 border border-zinc-300 rounded-lg focus:ring-2 focus:ring-zinc-600 focus:outline-none"
        />
        <button
          type="submit"
          className="px-4 py-2 bg-zinc-800 text-white rounded-lg hover:bg-zinc-900"
        >
          Submit
        </button>
      </form>

      <div className="space-y-4">
        {proposals.map((p, index) => (
          <div
            key={index}
            className="bg-white border border-zinc-200 p-4 rounded-lg"
          >
            <p className="text-zinc-700">{p}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
