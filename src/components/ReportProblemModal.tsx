import type { FormEvent } from "react";
import Input from "./Input";

interface Props {
  onClose: () => void;
}

export default function ReportProblemModal({ onClose }: Props) {
  function submitProblem(e: FormEvent) {
    e.preventDefault();
    // TODO: API submit
    onClose();
  }

  return (
    <div className="fixed inset-0 bg-black/40 flex justify-center items-center z-50">
      <div className="bg-white p-6 rounded-xl w-full max-w-lg border border-zinc-300">
        <h2 className="text-xl font-semibold mb-4 text-zinc-900">
          Report a Problem
        </h2>

        <form onSubmit={submitProblem}>
          <Input label="Title" type="text" required />
          <textarea
            required
            placeholder="Describe the issue..."
            className="w-full h-28 p-3 border border-zinc-300 rounded-lg bg-white text-zinc-800 focus:ring-2 focus:ring-zinc-600 focus:outline-none mb-4"
          />
          <Input label="Location" type="text" required />

          <div className="mt-6 flex justify-end gap-3">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 border border-zinc-300 rounded-lg hover:bg-zinc-100"
            >
              Cancel
            </button>

            <button
              type="submit"
              className="px-4 py-2 bg-zinc-800 text-white rounded-lg hover:bg-zinc-900"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
