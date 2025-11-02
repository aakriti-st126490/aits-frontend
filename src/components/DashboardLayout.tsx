import Sidebar from "./Sidebar";
import type { ReactNode } from "react";

interface DashboardLayoutProps {
  children: ReactNode;
}

export default function DashboardLayout({ children }: DashboardLayoutProps) {
  return (
    <div className="min-h-screen flex bg-zinc-50">
      <Sidebar />
      <main className="flex-1 p-6">{children}</main>
    </div>
  );
}
