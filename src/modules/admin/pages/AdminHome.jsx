import React from "react";
import { useAuth } from "../../../hooks/useAuth";
import { useNavigate } from "react-router-dom";

function AdminHome() {
  const { logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  const goToOrder = () => {
    navigate("/admin/order");
  };

  return (
    <div style={{ padding: 20 }}>
      <h2>Admin Dashboard</h2>
      <button onClick={goToOrder} style={{ marginRight: 10 }}>
        Go to Orders
      </button>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
}

export default AdminHome;
