import type { InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

export default function Input({ label, ...props }: InputProps) {
  return (
    <label className="block mb-4">
      <span className="block text-sm font-medium text-zinc-700 mb-1">{label}</span>
      <input
        {...props}
        className="w-full px-3 py-2 border border-zinc-300 rounded-lg bg-white
                   text-zinc-800 focus:outline-none focus:ring-2 focus:ring-zinc-600"
      />
    </label>
  );
}
