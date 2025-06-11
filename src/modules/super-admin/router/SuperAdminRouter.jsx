import { Routes, Route, Navigate } from "react-router-dom";
import SuperAdminDashboard from "../pages/SuperAdminDashboard";
import SuperAdminApprove from "../pages/SuperAdminApprove";

function SuperAdminRouter() {
  return (
    <Routes>
      <Route path="/" element={<SuperAdminDashboard />} />
      <Route path="approve" element={<SuperAdminApprove />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}

export default SuperAdminRouter;
