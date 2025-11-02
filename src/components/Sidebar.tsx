import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <aside className="w-64 bg-zinc-100 border-r border-zinc-300 p-4 hidden md:block">
      <h2 className="font-bold text-zinc-900 mb-4">Dashboard</h2>
      <ul className="space-y-2">
        <li>
          <Link to="/dashboard/problems" className="hover:text-zinc-800">
            My Problems
          </Link>
        </li>
        <li>
          <Link to="/dashboard/proposals" className="hover:text-zinc-800">
            My Proposals
          </Link>
        </li>
        <li>
          <Link to="/dashboard/profile" className="hover:text-zinc-800">
            Profile
          </Link>
        </li>
      </ul>
    </aside>
  );
}
