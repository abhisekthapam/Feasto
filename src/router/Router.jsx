import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import ProtectedRoute from "./ProtectedRoute";
import UserHome from "../modules/user/pages/UserHome";
import UserAbout from "../modules/user/pages/UserAbout";
import AdminRouter from "../modules/admin/router/AdminRouter";
import SuperAdminRouter from "../modules/super-admin/router/SuperAdminRouter";
import Login from "../pages/Login";
import Register from "../pages/Register";
import UserNavbar from "../modules/user/components/UserNavbar";
import UserSolution from "../modules/user/pages/UserSolution";
import UserContact from "../modules/user/pages/UserContact";
import SuperAdminLogin from "../pages/SuperAdminLogin";

function Router() {
  const location = useLocation();
  const hideNavbar =
    location.pathname.startsWith("/admin") ||
    location.pathname.startsWith("/superadmin");

  return (
    <div>
      {!hideNavbar && <UserNavbar />}
      <Routes>
        <Route path="/" element={<UserHome />} />
        <Route path="/about-us" element={<UserAbout />} />
        <Route path="/solutions" element={<UserSolution />} />
        <Route path="/contact-us" element={<UserContact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/superadmin/login" element={<SuperAdminLogin />} />
        <Route
          path="/admin/*"
          element={
            <ProtectedRoute element={AdminRouter} allowedRoles={["admin"]} />
          }
        />
        <Route
          path="/superadmin/*"
          element={
            <ProtectedRoute
              element={SuperAdminRouter}
              allowedRoles={["superadmin"]}
            />
          }
        />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </div>
  );
}

export default Router;
