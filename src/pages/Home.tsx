import Layout from "../components/Layout";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <Layout>
      <div className="text-center py-20">
        <h1 className="text-4xl font-bold text-zinc-900 mb-4">
          Welcome to UPTS
        </h1>
        <p className="text-zinc-700 mb-6">
          Report and track community problems at AIT.
        </p>
        <Link
          to="/problems"
          className="px-6 py-3 bg-zinc-800 text-white rounded-lg hover:bg-zinc-900"
        >
          View Problems
        </Link>
      </div>
    </Layout>
  );
}
