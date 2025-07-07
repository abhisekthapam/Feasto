import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

function Login() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <motion.div
      className="min-h-screen flex items-center justify-center bg-[#1B1B1B] text-white font-sans relative"
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 50 }}
      transition={{ duration: 0.5, type: "spring" }}
    >
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
          <div className="absolute top-0 left-0 z-0 w-full h-full overflow-hidden pointer-events-none">
            {[0, 2, 4, 6, 8, 10].map((delay, i) => (
              <div
                key={i}
                className={`absolute bg-[#FFD700] rounded-full`}
                style={{
                  width: [15, 10, 20, 12, 8, 18][i],
                  height: [15, 10, 20, 12, 8, 18][i],
                  top: ["10%", "20%", "30%", "70%", "80%", "40%"][i],
                  left: ["10%", "20%", "70%", "30%", "80%", "40%"][i],
                  opacity: [0.2, 0.15, 0.1, 0.2, 0.15, 0.1][i],
                  animation: "float 15s infinite ease-in-out",
                  animationDelay: `${delay}s`,
                }}
              />
            ))}
          </div>
          <div className="relative w-full max-w-md p-4 rounded-lg shadow-xl sm:p-6 md:p-8 glass-effect">
            <div className="mb-8 lg:hidden">
              <span className="font-['Pacifico'] text-2xl text-white">
                Feasto
              </span>
            </div>
            <div className="py-1 mb-8 text-center">
              <h1 className="mb-2 text-3xl font-bold text-white">
                Welcome Back
              </h1>
              <p className="text-[#DADADA] text-sm">
                Sign in to continue to your account
              </p>
            </div>
            <form>
              <div className="mb-6">
                <label
                  htmlFor="email"
                  className="block text-[#DADADA] text-sm mb-2"
                >
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-3 rounded-lg bg-[#232323]/80 border border-[#BDC3C7] text-white placeholder-[#DADADA] focus:border-[#FFD700] focus:ring-2 focus:ring-[#FFD700]/20 outline-none transition"
                  placeholder="your@email.com"
                  required
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
                  <input
                    type={showPassword ? "text" : "password"}
                    id="password"
                    className="w-full px-4 py-3 rounded-lg bg-[#232323]/80 border border-[#BDC3C7] text-white placeholder-[#DADADA] focus:border-[#FFD700] focus:ring-2 focus:ring-[#FFD700]/20 outline-none transition"
                    placeholder="••••••••"
                    required
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
              </div>
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="remember"
                    className="w-4 h-4 rounded border border-[#BDC3C7] bg-[#232323]/80 checked:bg-[#FFD700] checked:border-[#FFD700] focus:ring-2 focus:ring-[#FFD700]/20 transition"
                  />
                  <label
                    htmlFor="remember"
                    className="text-[#DADADA] text-sm ml-2"
                  >
                    Remember me
                  </label>
                </div>
                <a
                  href="#"
                  className="text-[#DADADA] text-sm hover:text-white transition-colors"
                >
                  Forgot Password?
                </a>
              </div>
              <button
                type="submit"
                className="w-full py-3 font-medium rounded-lg bg-[#FFD700] text-[#1B1B1B] hover:bg-gradient-to-r hover:from-[#FFD700] hover:to-[#FFC107] hover:-translate-y-0.5 hover:shadow-lg transition mb-6"
              >
                Sign In
              </button>
              <div className="flex items-center my-6">
                <div className="flex-1 h-px bg-[#BDC3C7] opacity-20"></div>
                <span className="px-4 text-sm text-[#DADADA]">
                  Or continue with
                </span>
                <div className="flex-1 h-px bg-[#BDC3C7] opacity-20"></div>
              </div>
              <div className="grid grid-cols-3 gap-3 mb-6">
                <button
                  type="button"
                  className="flex items-center justify-center py-3 rounded-lg bg-[#232323]/80 border border-[#BDC3C7]/20 hover:shadow-lg hover:border-[#FFD700]/40 transition"
                >
                  <div className="flex items-center justify-center w-5 h-5">
                    <i className="text-white ri-google-fill"></i>
                  </div>
                </button>
                <button
                  type="button"
                  className="flex items-center justify-center py-3 rounded-lg bg-[#232323]/80 border border-[#BDC3C7]/20 hover:shadow-lg hover:border-[#FFD700]/40 transition"
                >
                  <div className="flex items-center justify-center w-5 h-5">
                    <i className="text-white ri-facebook-fill"></i>
                  </div>
                </button>
                <button
                  type="button"
                  className="flex items-center justify-center py-3 rounded-lg bg-[#232323]/80 border border-[#BDC3C7]/20 hover:shadow-lg hover:border-[#FFD700]/40 transition"
                >
                  <div className="flex items-center justify-center w-5 h-5">
                    <i className="text-white ri-apple-fill"></i>
                  </div>
                </button>
              </div>
              <div className="text-center">
                <p className="text-[#DADADA] text-sm">
                  Don't have an account?{" "}
                  <Link
                    to="/register"
                    className="text-[#FFD700] hover:text-white transition-colors"
                  >
                    Create Account
                  </Link>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0) translateX(0);}
          25% { transform: translateY(-30px) translateX(15px);}
          50% { transform: translateY(-15px) translateX(30px);}
          75% { transform: translateY(-25px) translateX(-15px);}
        }
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

export default Login;
