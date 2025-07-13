import { Routes, Route, Navigate } from "react-router-dom";
import AdminHome from "../pages/AdminHome";
import AdminOrder from "../pages/AdminOrder";
import AdminHistory from "../pages/AdminHistory";
import AdminBills from "../pages/AdminBills";
import AdminUsers from "../pages/AdminUsers";
import AdminProducts from "../pages/AdminProducts";
import AdminTicket from "../pages/AdminTicket";
import Sidebar from "../components/dashboard/Sidebar";
import Topbar from "../components/dashboard/Topbar";

function AdminRouter() {
  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <div className="flex flex-col flex-1">
        <Topbar />
        <div className="flex-1 bg-gray-50">
          <Routes>
            <Route path="/" element={<AdminHome />} />
            <Route path="order" element={<AdminOrder />} />
            <Route path="history" element={<AdminHistory />} />
            <Route path="bills" element={<AdminBills />} />
            <Route path="users" element={<AdminUsers />} />
            <Route path="products" element={<AdminProducts />} />
            <Route path="ticket" element={<AdminTicket />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default AdminRouter;
