import { useState } from "react";
import ReportProblemModal from "./ReportProblemModal";

export default function ReportProblemButton() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="px-4 py-2 bg-zinc-800 text-white rounded-lg hover:bg-zinc-900"
      >
        + Report Problem
      </button>

      {open && <ReportProblemModal onClose={() => setOpen(false)} />}
    </>
  );
}
