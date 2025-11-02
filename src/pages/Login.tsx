import type { FormEvent } from "react";
import { Link, useNavigate } from "react-router-dom";
import Layout from "../components/Layout";
import Input from "../components/Input";

export default function Login() {
  const navigate = useNavigate();

  function handleLogin(e: FormEvent) {
    e.preventDefault();
    // TODO: API login call
    navigate("/dashboard");
  }

  return (
    <Layout>
      <div className="max-w-md mx-auto mt-16 bg-white p-8 rounded-xl border border-zinc-200">
        <h2 className="text-2xl font-bold text-zinc-900 mb-6 text-center">Login</h2>

        <form onSubmit={handleLogin}>
          <Input label="Email" type="email" required />
          <Input label="Password" type="password" required />

          <button
            type="submit"
            className="w-full py-2 bg-zinc-800 text-white rounded-lg hover:bg-zinc-900"
          >
            Login
          </button>
        </form>

        <p className="text-center text-zinc-600 text-sm mt-4">
          Don't have an account?{" "}
          <Link to="/signup" className="text-zinc-900 font-medium hover:underline">
            Sign up
          </Link>
        </p>
      </div>
    </Layout>
  );
}
