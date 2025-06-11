import { Routes, Route, Navigate } from "react-router-dom";
import AdminHome from "../pages/AdminHome";
import AdminOrder from "../pages/AdminOrder";

function AdminRouter() {
  return (
    <Routes>
      <Route path="/" element={<AdminHome />} />
      <Route path="order" element={<AdminOrder />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}

export default AdminRouter;
