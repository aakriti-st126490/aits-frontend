import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import ProblemList from "./pages/ProblemList";
import ProblemDetail from "./pages/ProblemDetail";
import Dashboard from "./pages/Dashboard";
import DashboardLayout from "./components/DashboardLayout";
import MyProfile from "./pages/dashboard/MyProfile";
import MyProposals from "./pages/dashboard/MyProposals";
import MyProblems from "./pages/dashboard/MyProblems";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/problems" element={<ProblemList />} />
        <Route path="/problems/:id" element={<ProblemDetail />} />
        <Route path="/dashboard" element={<DashboardLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="profile" element={<MyProfile />} />
          <Route path="problems" element={<MyProblems />} />
          <Route path="proposals" element={<MyProposals />} />
        </Route>
      </Routes>
    </Router>

    // <div className="p-6 bg-zinc-200 text-zinc-800">
    //   ✅ Tailwind v4 + Zinc is working
    // </div>  
  );
}
