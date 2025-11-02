import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-zinc-100 border-b border-zinc-300 p-4 flex justify-between items-center">
      <div className="text-xl font-bold text-zinc-900">
        <Link to="/">UPTS</Link>
      </div>

      <div className="space-x-4">
        <Link to="/problems" className="text-zinc-700 hover:text-zinc-900">
          Problems
        </Link>
        <Link to="/dashboard" className="text-zinc-700 hover:text-zinc-900">
          Dashboard
        </Link>
        <Link to="/login" className="text-zinc-700 hover:text-zinc-900">
          Login
        </Link>
      </div>
    </nav>
  );
}
