import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

function Register() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [logoPreview, setLogoPreview] = useState(null);
  const [logoFile, setLogoFile] = useState(null);
  const [error, setError] = useState("");
  const confirmPasswordRef = useRef();
  const passwordRef = useRef();

  const handleLogoChange = (e) => {
    const file = e.target.files[0];
    setLogoFile(file);
    if (file) {
      const reader = new FileReader();
      reader.onload = (ev) => setLogoPreview(ev.target.result);
      reader.readAsDataURL(file);
    } else {
      setLogoPreview(null);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");
    if (passwordRef.current.value !== confirmPasswordRef.current.value) {
      setError("Passwords do not match");
      return;
    }
    const formData = new FormData(e.target);
    console.log(Object.fromEntries(formData));
  };

  return (
    <motion.div
      className="pt-40 flex items-center justify-center bg-[#1B1B1B] text-white font-sans relative"
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -50 }}
      transition={{ duration: 0.5, type: "spring" }}
    >
      <div className="fixed inset-0 z-0 pointer-events-none bg-gradient-to-b from-black to-transparent" />
      <div className="relative z-10 flex items-end w-full h-screen">
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
          <div className="relative w-full max-w-5xl p-4 rounded-lg shadow-xl sm:p-6 md:p-8 glass-effect my-28">
            <div className="mb-8 text-center">
              <span className="font-['Pacifico'] text-3xl text-white block mb-2">
                Feasto
              </span>
              <h1 className="mb-2 text-3xl font-bold text-white">
                Create Restaurant Account
              </h1>
              <p className="text-[#DADADA] text-sm">
                Register your restaurant with Feasto
              </p>
            </div>
            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 gap-4 mb-6 sm:grid-cols-2 lg:grid-cols-4">
                <div>
                  <label
                    htmlFor="restaurantName"
                    className="block text-[#DADADA] text-sm mb-2"
                  >
                    Restaurant Name
                  </label>
                  <input
                    type="text"
                    id="restaurantName"
                    name="restaurantName"
                    className="bg-[#1B1B1B]/60 border border-[#BDC3C7] text-white transition-all w-full px-4 py-3 rounded-[8px] focus:border-[#FFD700] focus:ring-2 focus:ring-[#FFD700]/20 outline-none placeholder-[#DADADA]"
                    placeholder="Enter restaurant name"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="ownerName"
                    className="block text-[#DADADA] text-sm mb-2"
                  >
                    Owner Name
                  </label>
                  <input
                    type="text"
                    id="ownerName"
                    name="ownerName"
                    className="bg-[#1B1B1B]/60 border border-[#BDC3C7] text-white transition-all w-full px-4 py-3 rounded-[8px] focus:border-[#FFD700] focus:ring-2 focus:ring-[#FFD700]/20 outline-none placeholder-[#DADADA]"
                    placeholder="Enter owner name"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-[#DADADA] text-sm mb-2"
                  >
                    Business Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="bg-[#1B1B1B]/60 border border-[#BDC3C7] text-white transition-all w-full px-4 py-3 rounded-[8px] focus:border-[#FFD700] focus:ring-2 focus:ring-[#FFD700]/20 outline-none placeholder-[#DADADA]"
                    placeholder="your@restaurant.com"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="phone"
                    className="block text-[#DADADA] text-sm mb-2"
                  >
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    className="bg-[#1B1B1B]/60 border border-[#BDC3C7] text-white transition-all w-full px-4 py-3 rounded-[8px] focus:border-[#FFD700] focus:ring-2 focus:ring-[#FFD700]/20 outline-none placeholder-[#DADADA]"
                    placeholder="Enter phone number"
                    required
                  />
                </div>
              </div>
              <div className="grid grid-cols-1 gap-4 mb-6 sm:grid-cols-2 lg:grid-cols-4">
                <div>
                  <label
                    htmlFor="panNumber"
                    className="block text-[#DADADA] text-sm mb-2"
                  >
                    PAN Number
                  </label>
                  <input
                    type="text"
                    id="panNumber"
                    name="panNumber"
                    className="bg-[#1B1B1B]/60 border border-[#BDC3C7] text-white transition-all w-full px-4 py-3 rounded-[8px] focus:border-[#FFD700] focus:ring-2 focus:ring-[#FFD700]/20 outline-none placeholder-[#DADADA]"
                    placeholder="Enter PAN number"
                    required
                  />
                </div>
                <div>
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
                      name="password"
                      ref={passwordRef}
                      className="bg-[#1B1B1B]/60 border border-[#BDC3C7] text-white transition-all w-full px-4 py-3 rounded-[8px] focus:border-[#FFD700] focus:ring-2 focus:ring-[#FFD700]/20 outline-none placeholder-[#DADADA]"
                      placeholder="••••••••"
                      required
                    />
                    <button
                      type="button"
                      className="absolute right-3 top-1/2 -translate-y-1/2 w-6 h-6 flex items-center justify-center text-[#DADADA]"
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
                <div>
                  <label
                    htmlFor="confirmPassword"
                    className="block text-[#DADADA] text-sm mb-2"
                  >
                    Confirm Password
                  </label>
                  <div className="relative">
                    <input
                      type={showConfirmPassword ? "text" : "password"}
                      id="confirmPassword"
                      name="confirmPassword"
                      ref={confirmPasswordRef}
                      className="bg-[#1B1B1B]/60 border border-[#BDC3C7] text-white transition-all w-full px-4 py-3 rounded-[8px] focus:border-[#FFD700] focus:ring-2 focus:ring-[#FFD700]/20 outline-none placeholder-[#DADADA]"
                      placeholder="••••••••"
                      required
                    />
                    <button
                      type="button"
                      className="absolute right-3 top-1/2 -translate-y-1/2 w-6 h-6 flex items-center justify-center text-[#DADADA]"
                      onClick={() => setShowConfirmPassword((prev) => !prev)}
                      tabIndex={-1}
                    >
                      <i
                        className={
                          showConfirmPassword
                            ? "ri-eye-off-line"
                            : "ri-eye-line"
                        }
                      ></i>
                    </button>
                  </div>
                </div>
                <div>
                  <label className="block text-[#DADADA] text-sm mb-2">
                    Restaurant Logo
                  </label>
                  <div className="relative">
                    <input
                      type="file"
                      id="logo"
                      name="logo"
                      accept="image/*"
                      className="hidden"
                      onChange={handleLogoChange}
                      required
                    />
                    <label
                      htmlFor="logo"
                      className="flex items-center justify-center w-full px-4 py-3 border border-dashed border-[#BDC3C7] rounded-[8px] cursor-pointer hover:border-[#FFD700] transition-colors"
                    >
                      <i className="mr-2 ri-upload-2-line"></i>
                      <span className="text-[#DADADA]">
                        Click to upload logo
                      </span>
                    </label>
                    {logoPreview && (
                      <div className="flex justify-center mt-2">
                        <img
                          src={logoPreview}
                          alt="Logo preview"
                          className="object-cover w-16 h-16 rounded-lg"
                        />
                      </div>
                    )}
                  </div>
                </div>
              </div>
              <div className="flex items-center mb-6">
                <input
                  type="checkbox"
                  id="terms"
                  name="terms"
                  className="appearance-none w-[18px] h-[18px] bg-[#1B1B1B]/60 border border-[#BDC3C7] rounded-[4px] cursor-pointer relative transition-all mr-2 checked:bg-[#FFD700] checked:border-[#FFD700]"
                  required
                />
                <label htmlFor="terms" className="text-[#DADADA] text-sm">
                  I agree to the{" "}
                  <a href="#" className="text-[#FFD700] hover:text-white">
                    Terms of Service
                  </a>{" "}
                  and{" "}
                  <a href="#" className="text-[#FFD700] hover:text-white">
                    Privacy Policy
                  </a>
                </label>
              </div>
              {error && (
                <div className="text-[#E74C3C] text-sm mt-2">{error}</div>
              )}
              <button
                type="submit"
                className="bg-[#FFD700] text-[#1B1B1B] w-full py-3 font-medium rounded-[8px] whitespace-nowrap mb-6 hover:bg-gradient-to-r hover:from-[#FFD700] hover:to-[#FFC107] hover:-translate-y-0.5 hover:shadow-lg transition"
              >
                Create Account
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
                  className="bg-[#1B1B1B]/80 border border-[#BDC3C7]/20 flex items-center justify-center py-3 rounded-[8px] whitespace-nowrap hover:shadow-lg hover:border-[#FFD700]/40 transition"
                >
                  <div className="flex items-center justify-center w-5 h-5">
                    <i className="text-white ri-google-fill"></i>
                  </div>
                </button>
                <button
                  type="button"
                  className="bg-[#1B1B1B]/80 border border-[#BDC3C7]/20 flex items-center justify-center py-3 rounded-[8px] whitespace-nowrap hover:shadow-lg hover:border-[#FFD700]/40 transition"
                >
                  <div className="flex items-center justify-center w-5 h-5">
                    <i className="text-white ri-facebook-fill"></i>
                  </div>
                </button>
                <button
                  type="button"
                  className="bg-[#1B1B1B]/80 border border-[#BDC3C7]/20 flex items-center justify-center py-3 rounded-[8px] whitespace-nowrap hover:shadow-lg hover:border-[#FFD700]/40 transition"
                >
                  <div className="flex items-center justify-center w-5 h-5">
                    <i className="text-white ri-apple-fill"></i>
                  </div>
                </button>
              </div>
              <div className="text-center">
                <p className="text-[#DADADA] text-sm">
                  Already have an account?{" "}
                  <Link
                    to="/login"
                    className="text-[#FFD700] hover:text-white transition-colors"
                  >
                    Sign In
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

export default Register;
