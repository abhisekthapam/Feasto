import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useAuth } from "../context/AuthContext";

function SuperAdminLogin() {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const { login } = useAuth();

  const initialValues = {
    email: "",
    password: "",
  };

  const validationSchema = Yup.object({
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    password: Yup.string()
      .min(6, "Password must be at least 6 characters")
      .required("Password is required"),
  });

  const handleSubmit = async (values, { setSubmitting }) => {
    try {
      const res = await axios.post("http://localhost:5000/superadmin/auth/login", values);
      if (res.data.token && res.data.user) {
        login(res.data.user, res.data.token);
        toast.success("Login successful!", { position: "top-right" });
        setTimeout(() => {
          navigate("/superadmin");
        }, 1200);
      } else if (res.data.token) {
        login({ role: "superadmin" }, res.data.token);
        toast.success("Login successful!", { position: "top-right" });
        setTimeout(() => {
          navigate("/superadmin");
        }, 1200);
      } else {
        toast.error("Invalid response from server.", { position: "top-right" });
      }
    } catch (err) {
      toast.error(
        err.response?.data?.error || "Login failed. Please try again.",
        { position: "top-right" }
      );
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <motion.div
      className="min-h-screen flex items-center justify-center bg-[#1B1B1B] text-white font-sans relative"
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 50 }}
      transition={{ duration: 0.5, type: "spring" }}
    >
      <ToastContainer />
      <div className="fixed inset-0 z-0 pointer-events-none bg-gradient-to-b from-black to-transparent" />
      <div className="relative z-10 flex w-full h-screen">
        <div
          className="relative flex items-end justify-center w-full p-4 bg-center bg-cover lg:p-8 sm:py-24 md:py-28"
          style={{
            backgroundImage:
              "url('https://readdy.ai/api/search-image?query=abstract%20modern%20luxury%20background%20with%20flowing%20dark%20waves%20and%20golden%20particles%2C%20elegant%20design%20with%20depth%20and%20dimension%2C%20premium%20quality%203D%20rendering%20with%20subtle%20lighting%20effects%20and%20rich%20textures&width=1200&height=1200&seq=2&orientation=squarish')",
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-[#1B1B1B]/90 to-[#1B1B1B]/70 backdrop-blur-sm" />
          <div className="relative w-full max-w-md p-4 rounded-lg shadow-xl sm:p-6 md:p-8 glass-effect">
            <div className="mb-8 lg:hidden">
              <span className="font-['Pacifico'] text-2xl text-white">
                Feasto SuperAdmin
              </span>
            </div>
            <div className="py-1 mb-8 text-center">
              <h1 className="mb-2 text-3xl font-bold text-white">
                SuperAdmin Login
              </h1>
              <p className="text-[#DADADA] text-sm">
                Sign in to your superadmin account
              </p>
            </div>
            <Formik
              initialValues={initialValues}
              validationSchema={validationSchema}
              onSubmit={handleSubmit}
            >
              {({ isSubmitting }) => (
                <Form>
                  <div className="mb-6">
                    <label
                      htmlFor="email"
                      className="block text-[#DADADA] text-sm mb-2"
                    >
                      Email
                    </label>
                    <Field
                      type="email"
                      id="email"
                      name="email"
                      className="w-full px-4 py-3 rounded-lg bg-[#232323]/80 border border-[#BDC3C7] text-white placeholder-[#DADADA] focus:border-[#FFD700] focus:ring-2 focus:ring-[#FFD700]/20 outline-none transition"
                      placeholder="superadmin@email.com"
                    />
                    <ErrorMessage
                      name="email"
                      component="div"
                      className="mt-1 text-xs text-red-400"
                    />
                  </div>
                  <div className="mb-4">
                    <label
                      htmlFor="password"
                      className="block text-[#DADADA] text-sm mb-2"
                    >
                      Password
                    </label>
                    <div className="relative">
                      <Field
                        type={showPassword ? "text" : "password"}
                        id="password"
                        name="password"
                        className="w-full px-4 py-3 rounded-lg bg-[#232323]/80 border border-[#BDC3C7] text-white placeholder-[#DADADA] focus:border-[#FFD700] focus:ring-2 focus:ring-[#FFD700]/20 outline-none transition"
                        placeholder="••••••••"
                      />
                      <button
                        type="button"
                        className="absolute right-3 top-1/2 -translate-y-1/2 w-6 h-6 flex items-center justify-center text-[#DADADA] focus:outline-none"
                        onClick={() => setShowPassword((prev) => !prev)}
                        tabIndex={-1}
                      >
                        <i
                          className={
                            showPassword ? "ri-eye-off-line" : "ri-eye-line"
                          }
                        ></i>
                      </button>
                    </div>
                    <ErrorMessage
                      name="password"
                      component="div"
                      className="mt-1 text-xs text-red-400"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full py-3 font-medium rounded-lg bg-[#FFD700] text-[#1B1B1B] hover:bg-gradient-to-r hover:from-[#FFD700] hover:to-[#FFC107] hover:-translate-y-0.5 hover:shadow-lg transition mb-6"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Signing In..." : "Sign In"}
                  </button>
                  <div className="text-center">
                    <p className="text-[#DADADA] text-sm">
                      <Link
                        to="/login"
                        className="text-[#FFD700] hover:text-white transition-colors"
                      >
                        Login as Admin/User
                      </Link>
                    </p>
                  </div>
                </Form>
              )}
            </Formik>
          </div>
        </div>
      </div>
      <style>{`
        .font-pacifico { font-family: 'Pacifico', cursive; }
        .glass-effect {
          background: rgba(27, 27, 27, 0.7);
          backdrop-filter: blur(12px);
          border: 1px solid rgba(255, 215, 0, 0.1);
          box-shadow: 0 8px 32px rgba(0, 0, 0, 0.2);
        }
      `}</style>
    </motion.div>
  );
}

export default SuperAdminLogin;
