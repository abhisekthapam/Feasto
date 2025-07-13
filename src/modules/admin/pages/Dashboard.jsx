import React from "react";
import Sidebar from "../components/dashboard/Sidebar";
import Topbar from "../components/dashboard/Topbar";
import { useAuth } from "../../../context/AuthContext";

function DashboardLayout({ children, onLogout }) {
  const { user } = useAuth();
  return (
    <div className="flex min-h-screen bg-gray-50">
      <Sidebar onLogout={onLogout} />
      <div className="flex-1 ml-64 flex flex-col min-h-screen">
        <Topbar user={user} />
        <main className="flex-1 p-6 md:p-10 bg-gray-50">{children}</main>
      </div>
    </div>
  );
}

export default DashboardLayout;
