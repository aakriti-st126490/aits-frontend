import type { FormEvent } from "react";
import { Link, useNavigate } from "react-router-dom";
import Layout from "../components/Layout";
import Input from "../components/Input";

export default function Signup() {
  const navigate = useNavigate();

  function handleSignup(e: FormEvent) {
    e.preventDefault();
    // TODO: API signup call
    navigate("/dashboard");
  }

  return (
    <Layout>
      <div className="max-w-md mx-auto mt-16 bg-white p-8 rounded-xl border border-zinc-200">
        <h2 className="text-2xl font-bold text-zinc-900 mb-6 text-center">Create an Account</h2>

        <form onSubmit={handleSignup}>
          <Input label="Full Name" type="text" required />
          <Input label="Email" type="email" required />
          <Input label="Password" type="password" required />
          <Input label="Confirm Password" type="password" required />

          <button
            type="submit"
            className="w-full py-2 bg-zinc-800 text-white rounded-lg hover:bg-zinc-900"
          >
            Sign Up
          </button>
        </form>

        <p className="text-center text-zinc-600 text-sm mt-4">
          Already have an account?{" "}
          <Link to="/login" className="text-zinc-900 font-medium hover:underline">
            Login
          </Link>
        </p>
      </div>
    </Layout>
  );
}
