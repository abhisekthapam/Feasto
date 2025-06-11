import React from "react";
import { useAuth } from "../../../hooks/useAuth";
import { useNavigate } from "react-router-dom";

function SuperAdminDashboard() {
  const { logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  const goToApprove = () => {
    navigate("/superadmin/approve");
  };

  return (
    <div style={{ padding: 20 }}>
      <h2>SuperAdminDashboard</h2>
      <button onClick={goToApprove} style={{ marginRight: 10 }}>
        Go to Approve Section
      </button>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
}

export default SuperAdminDashboard;
