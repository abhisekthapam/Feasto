import React, { useEffect, useRef } from "react";
import * as echarts from "echarts";
import { motion } from "framer-motion";
import HeroSection from "../../../components/common/HeroSection";
import SectionHeader from "../../../components/common/SectionHeader";
import FeatureCard from "../../../components/common/FeatureCard";
import PricingCard from "../../../components/common/PricingCard";
import ContactForm from "../../../components/common/ContactForm";

function UserHome() {
  const chartRef = useRef(null);

  useEffect(() => {
    if (chartRef.current) {
      const chart = echarts.init(chartRef.current);

      const option = {
        animation: false,
        tooltip: {
          trigger: "axis",
          backgroundColor: "rgba(255, 255, 255, 0.8)",
          textStyle: {
            color: "#1f2937",
          },
        },
        grid: {
          top: 10,
          right: 10,
          bottom: 20,
          left: 40,
        },
        xAxis: {
          type: "category",
          data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
          axisLine: {
            lineStyle: {
              color: "#BDC3C7",
            },
          },
          axisLabel: {
            color: "#DADADA",
          },
        },
        yAxis: {
          type: "value",
          axisLine: {
            lineStyle: {
              color: "#BDC3C7",
            },
          },
          splitLine: {
            lineStyle: {
              color: "#333333",
            },
          },
          axisLabel: {
            color: "#DADADA",
          },
        },
        series: [
          {
            name: "Riverside Bistro",
            type: "line",
            smooth: true,
            data: [3200, 3600, 3100, 3400, 3800, 4200, 4500],
            lineStyle: {
              width: 3,
              color: "rgba(87, 181, 231, 1)",
            },
            symbol: "none",
            areaStyle: {
              color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                {
                  offset: 0,
                  color: "rgba(87, 181, 231, 0.3)",
                },
                {
                  offset: 1,
                  color: "rgba(87, 181, 231, 0.1)",
                },
              ]),
            },
          },
          {
            name: "Harbor Kitchen",
            type: "line",
            smooth: true,
            data: [2800, 2900, 2700, 3100, 3300, 3600, 3800],
            lineStyle: {
              width: 3,
              color: "rgba(141, 211, 199, 1)",
            },
            symbol: "none",
            areaStyle: {
              color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                {
                  offset: 0,
                  color: "rgba(141, 211, 199, 0.3)",
                },
                {
                  offset: 1,
                  color: "rgba(141, 211, 199, 0.1)",
                },
              ]),
            },
          },
          {
            name: "Urban Plate",
            type: "line",
            smooth: true,
            data: [2500, 2400, 2600, 2800, 2900, 3200, 3400],
            lineStyle: {
              width: 3,
              color: "rgba(251, 191, 114, 1)",
            },
            symbol: "none",
            areaStyle: {
              color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                {
                  offset: 0,
                  color: "rgba(251, 191, 114, 0.3)",
                },
                {
                  offset: 1,
                  color: "rgba(251, 191, 114, 0.1)",
                },
              ]),
            },
          },
        ],
      };

      chart.setOption(option);

      const handleResize = () => {
        chart.resize();
      };

      window.addEventListener("resize", handleResize);

      return () => {
        window.removeEventListener("resize", handleResize);
        chart.dispose();
      };
    }
  }, []);

  return (
    <div className="relative min-h-screen overflow-hidden bg-charcoal">
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <motion.div 
          className="absolute rounded-full -top-40 -right-40 w-96 h-96 bg-gradient-to-br from-amber-500/10 to-orange-500/8 blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.4, 0.7, 0.4],
            x: [0, 20, 0],
            y: [0, -10, 0]
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div 
          className="absolute rounded-full -bottom-40 -left-40 w-96 h-96 bg-gradient-to-br from-cyan-500/8 to-blue-500/10 blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.3, 0.6, 0.3],
            x: [0, -15, 0],
            y: [0, 15, 0]
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
        />
        <motion.div 
          className="absolute top-1/2 left-1/2 w-[500px] h-[500px] bg-gradient-to-br from-violet-500/6 to-purple-500/8 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.2, 0.5, 0.2],
            rotate: [0, 360]
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        
        <motion.div 
          className="absolute w-32 h-32 rounded-full top-1/4 right-1/4 bg-gradient-to-br from-emerald-500/6 to-teal-500/8 blur-2xl"
          animate={{
            scale: [1, 1.4, 1],
            opacity: [0.3, 0.6, 0.3],
            x: [0, 30, 0]
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.5
          }}
        />
        <motion.div 
          className="absolute w-40 h-40 rounded-full bottom-1/4 left-1/4 bg-gradient-to-br from-rose-500/5 to-pink-500/7 blur-2xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.5, 0.2],
            y: [0, -25, 0]
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
        />
      </div>
      
      <div className="relative z-10">
        <HeroSection
          backgroundImage="https://img.freepik.com/free-photo/elegant-wooden-dining-room-with-modern-lighting-generated-by-ai_188544-29879.jpg?t=st=1748845250~exp=1748848850~hmac=dc80eeb6cc653815400fc370fa7cb6c65c4912cf6f3fa81d7280707d4e4b9077&w=740"
          title="Empower Your Restaurant Business"
          subtitle="Complete POS and management solution for multiple restaurants. Streamline operations, boost revenue, and deliver exceptional customer experiences."
          primaryButtonText="Start Free Trial"
          secondaryButtonText="Book Demo"
          highlightedWord="Restaurant"
        />

        <section className="relative py-16 overflow-hidden bg-gradient-to-b from-charcoal via-charcoal/85 to-[#222222]/90">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(251,191,36,0.05),transparent_70%)]"></div>
          <motion.div 
            className="absolute w-24 h-24 rounded-full top-10 left-1/4 bg-gradient-to-br from-amber-400/8 to-orange-400/6 blur-2xl"
            animate={{
              scale: [1, 1.2, 1],
              x: [0, 20, 0]
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <motion.div 
            className="absolute w-32 h-32 rounded-full bottom-10 right-1/4 bg-gradient-to-br from-cyan-500/6 to-blue-500/8 blur-2xl"
            animate={{
              scale: [1, 1.3, 1],
              x: [0, -15, 0]
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1
            }}
          />
          
          <div className="container relative z-10 px-6 mx-auto">
            <motion.div 
              className="mb-12 text-center"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="mb-4 text-3xl font-bold text-transparent text-slate-100 bg-gradient-to-r from-slate-100 via-gray-200 to-amber-200 bg-clip-text">
                Get Started Today
              </h3>
              <p className="max-w-2xl mx-auto text-lg leading-relaxed text-slate-300">
                Take control of your restaurant operations with our comprehensive management platform
              </p>
            </motion.div>
            
            <div className="flex flex-col items-center justify-center gap-6 sm:flex-row">
              <motion.button
                className="group relative px-10 py-5 text-lg font-semibold rounded-2xl bg-gradient-to-r from-amber-400 via-amber-300 to-orange-400 text-slate-900 whitespace-nowrap overflow-hidden shadow-2xl min-w-[220px] border border-amber-300/20"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 25px 60px -12px rgba(251, 191, 36, 0.4)",
                  filter: "brightness(1.1)"
                }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="relative z-10 flex items-center justify-center">
                  <i className="mr-3 text-xl ri-dashboard-3-line"></i>
                  View Dashboard
                </span>
                <motion.div 
                  className="absolute inset-0 transform -skew-x-12 bg-gradient-to-r from-transparent via-white/25 to-transparent"
                  initial={{ x: "-100%" }}
                  whileHover={{ 
                    x: "100%",
                    transition: { duration: 1 }
                  }}
                />
              </motion.button>

              <motion.button
                className="group relative px-10 py-5 text-lg font-semibold rounded-2xl bg-transparent border-2 border-amber-400/70 text-amber-400 whitespace-nowrap overflow-hidden hover:bg-amber-400 hover:text-slate-900 transition-all duration-500 min-w-[220px] backdrop-blur-sm"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                whileHover={{ 
                  scale: 1.05,
                  borderColor: "rgba(251, 191, 36, 0.9)",
                  boxShadow: "0 20px 40px -12px rgba(251, 191, 36, 0.2)"
                }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="relative z-10 flex items-center justify-center">
                  <i className="mr-3 text-xl ri-add-circle-line"></i>
                  Add Restaurant
                </span>
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-r from-amber-400/0 via-amber-400/10 to-amber-400/0 rounded-2xl"
                  animate={{
                    opacity: [0, 0.3, 0]
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
              </motion.button>
            </div>
          </div>
        </section>

      <section className="relative py-20 overflow-hidden bg-gradient-to-b from-charcoal to-[#222222]/95">
        <motion.div 
          className="absolute w-20 h-20 rounded-full top-10 left-10 bg-gradient-to-br from-amber-400/12 to-orange-400/8 blur-xl"
          animate={{
            y: [0, -20, 0],
            x: [0, 10, 0]
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div 
          className="absolute w-32 h-32 rounded-full bottom-10 right-10 bg-gradient-to-br from-cyan-500/8 to-blue-500/12 blur-xl"
          animate={{
            y: [0, 15, 0],
            x: [0, -15, 0]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
        />
        
        <div className="container relative z-10 px-6 mx-auto">
          <SectionHeader
            title="Trusted by Restaurant Owners Worldwide"
            subtitle=""
            centered={true}
          />
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            <motion.div 
              className="group"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0 }}
              whileHover={{ 
                scale: 1.05, 
                y: -8,
                transition: { duration: 0.3 }
              }}
              viewport={{ once: true }}
            >
              <FeatureCard
                icon="ri-computer-line"
                title="Unified POS System"
                description="Manage multiple restaurant locations from a single dashboard. Process orders, track inventory, and handle payments seamlessly."
                linkText="Learn more"
                linkUrl="#"
              />
            </motion.div>
            <motion.div 
              className="group"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              whileHover={{ 
                scale: 1.05, 
                y: -8,
                transition: { duration: 0.3 }
              }}
              viewport={{ once: true }}
            >
              <FeatureCard
                icon="ri-bar-chart-2-line"
                title="Advanced Analytics"
                description="Gain valuable insights with real-time data visualization. Track sales, customer behavior, and performance metrics across all locations."
                linkText="Learn more"
                linkUrl="#"
              />
            </motion.div>
            <motion.div 
              className="group"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              whileHover={{ 
                scale: 1.05, 
                y: -8,
                transition: { duration: 0.3 }
              }}
              viewport={{ once: true }}
            >
              <FeatureCard
                icon="ri-store-2-line"
                title="Multi-Restaurant Management"
                description="Easily add and manage multiple restaurant locations. Control access, customize menus, and implement location-specific strategies."
                linkText="Learn more"
                linkUrl="#"
              />
            </motion.div>
          </div>
        </div>
      </section>

      <section className="relative py-20 overflow-hidden bg-gradient-to-r from-charcoal via-[#222222] to-charcoal">
        <div className="absolute inset-0 opacity-8">
          <div className="absolute inset-0" style={{
            backgroundImage: `linear-gradient(rgba(251,191,36,0.08) 1px, transparent 1px),
                             linear-gradient(90deg, rgba(251,191,36,0.08) 1px, transparent 1px)`,
            backgroundSize: '50px 50px'
          }}></div>
        </div>
        
        <div className="container relative z-10 px-6 mx-auto">
          <div className="flex flex-col items-center justify-between md:flex-row">
            <motion.div 
              className="mb-10 md:w-1/2 md:mb-0"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
            >
              <h2 className="mb-6 text-4xl font-bold text-transparent text-slate-50 bg-gradient-to-r from-slate-50 via-gray-100 to-amber-100 bg-clip-text">
                Powerful Tools for Restaurant Owners
              </h2>
              <p className="mb-8 text-lg leading-relaxed text-slate-300">
                Our comprehensive platform provides everything you need to
                manage multiple restaurants efficiently.
              </p>
              <div className="space-y-6">
                {[
                  {
                    title: "Inventory Management",
                    description: "Track stock levels across all locations, set automatic reorder points, and minimize waste.",
                    delay: 0
                  },
                  {
                    title: "Staff Management", 
                    description: "Schedule shifts, track performance, and manage payroll for all your restaurant locations.",
                    delay: 0.1
                  },
                  {
                    title: "Menu Management",
                    description: "Create and update menus across multiple locations, with special pricing and promotions.",
                    delay: 0.2
                  }
                ].map((item, index) => (
                  <motion.div 
                    key={index}
                    className="flex items-start group"
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: item.delay }}
                    whileHover={{ x: 8, transition: { duration: 0.3 } }}
                    viewport={{ once: true }}
                  >
                    <motion.div 
                      className="flex items-center justify-center w-12 h-12 mr-4 border text-amber-400 bg-gradient-to-br from-amber-400/12 to-orange-400/8 rounded-xl border-amber-400/20"
                      whileHover={{ 
                        backgroundColor: "rgba(251, 191, 36, 0.15)",
                        borderColor: "rgba(251, 191, 36, 0.4)",
                        transition: { duration: 0.3 }
                      }}
                    >
                      <i className="ri-check-line ri-lg"></i>
                    </motion.div>
                    <div>
                      <motion.h3 
                        className="mb-2 text-xl font-medium text-slate-100"
                        whileHover={{ 
                          color: "#fbbf24",
                          transition: { duration: 0.3 }
                        }}
                      >
                        {item.title}
                      </motion.h3>
                      <p className="leading-relaxed text-slate-300">
                        {item.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
            <motion.div 
              className="md:w-1/2"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              whileHover={{ 
                scale: 1.05,
                transition: { duration: 0.3 }
              }}
              viewport={{ once: true }}
            >
              <div className="relative overflow-hidden border shadow-2xl rounded-2xl border-slate-600/50 backdrop-blur-sm bg-gradient-to-br from-[#222222]/60 to-[#2a2a2a]/70">
                <div className="absolute inset-0 bg-gradient-to-tr from-amber-400/6 to-transparent"></div>
                <img
                  src="https://readdy.ai/api/search-image?query=elegant%20restaurant%20management%20dashboard%20interface%20showing%20multiple%20restaurant%20analytics%2C%20dark%20theme%20with%20gold%20accents%2C%20professional%20UI%20design%20with%20charts%20and%20statistics%2C%20high-quality%20modern%20interface&width=800&height=600&seq=2&orientation=landscape"
                  alt="Feasto Dashboard"
                  className="relative z-10 w-full h-auto"
                />
                <div className="absolute inset-0 flex items-end bg-gradient-to-t from-charcoal/95 via-[#222222]/60 to-transparent">
                  <div className="p-8">
                    <p className="mb-3 text-xl font-bold text-slate-100">
                      Unified Dashboard
                    </p>
                    <p className="text-lg text-slate-300">
                      Manage all your restaurants from a single interface
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="relative py-20 overflow-hidden bg-gradient-to-b from-[#222222]/95 via-charcoal/98 to-[#222222]/95">
        <div className="absolute inset-0 opacity-25">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_20%_50%,rgba(251,191,36,0.08),transparent)]"></div>
          <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_80%_50%,rgba(6,182,212,0.08),transparent)]"></div>
        </div>
        
        <div className="container relative z-10 px-6 mx-auto">
          <motion.h2 
            className="mb-16 text-4xl font-bold text-center text-transparent text-slate-50 bg-gradient-to-r from-slate-50 via-gray-100 to-amber-100 bg-clip-text"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Key Performance Metrics
          </motion.h2>
          <div className="grid grid-cols-1 gap-8 mb-16 md:grid-cols-3">
            {[
              {
                percentage: "30%",
                label: "Average Revenue Increase",
                gradient: "from-amber-400/12 to-orange-400/8",
                border: "border-amber-400/25",
                textColor: "text-amber-400",
                bgGradient: "from-amber-400 via-amber-300 to-orange-400",
                delay: 0
              },
              {
                percentage: "25+",
                label: "Integrated Services", 
                gradient: "from-cyan-500/10 to-blue-500/12",
                border: "border-cyan-400/25",
                textColor: "text-cyan-400",
                bgGradient: "from-cyan-400 via-cyan-300 to-blue-400",
                delay: 0.1
              },
              {
                percentage: "1,500+",
                label: "Restaurants Powered",
                gradient: "from-violet-500/8 to-purple-500/10", 
                border: "border-violet-400/25",
                textColor: "text-violet-400",
                bgGradient: "from-violet-400 via-violet-300 to-purple-400",
                delay: 0.2
              }
            ].map((metric, index) => (
              <motion.div 
                key={index}
                className="text-center group"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: metric.delay }}
                whileHover={{ 
                  scale: 1.1, 
                  y: -16,
                  transition: { duration: 0.3 }
                }}
                viewport={{ once: true }}
              >
                <div className={`relative p-8 rounded-2xl bg-gradient-to-br ${metric.gradient} backdrop-blur-sm border ${metric.border} shadow-xl h-[200px] flex flex-col justify-center`}>
                  <div className={`absolute inset-0 bg-gradient-to-br ${metric.gradient} rounded-2xl`}></div>
                  <motion.p 
                    className={`mb-4 text-6xl font-bold ${metric.textColor} bg-gradient-to-r ${metric.bgGradient} bg-clip-text text-transparent`}
                    animate={{
                      opacity: [0.7, 1, 0.7]
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  >
                    {metric.percentage}
                  </motion.p>
                  <p className="relative z-10 text-xl font-medium text-slate-100">{metric.label}</p>
                </div>
              </motion.div>
            ))}
          </div>
          <motion.div 
            className="flex justify-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <motion.button 
              className="relative px-8 py-4 overflow-hidden text-lg font-medium shadow-lg group rounded-xl bg-gradient-to-r from-amber-400 via-amber-300 to-orange-400 text-slate-900 whitespace-nowrap"
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.4)"
              }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="relative z-10 font-semibold">See Success Stories</span>
              <motion.div 
                className="absolute inset-0 transform -skew-x-12 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                initial={{ x: "-100%" }}
                whileHover={{ 
                  x: "100%",
                  transition: { duration: 1 }
                }}
              />
            </motion.button>
          </motion.div>
        </div>
      </section>

      <section className="relative py-20 overflow-hidden bg-gradient-to-r from-charcoal via-[#222222] to-charcoal">
        <motion.div 
          className="absolute w-16 h-16 rounded-lg top-20 left-10 bg-gradient-to-br from-amber-400/12 to-orange-400/8"
          animate={{
            rotate: [0, 360],
            scale: [1, 1.2, 1]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        <motion.div 
          className="absolute w-12 h-12 rounded-full bottom-20 right-10 bg-gradient-to-br from-cyan-500/10 to-blue-500/12"
          animate={{
            y: [0, -20, 0],
            scale: [1, 1.1, 1]
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        
        <div className="container relative z-10 px-6 mx-auto">
          <div className="flex flex-col items-center md:flex-row">
            <motion.div 
              className="mb-10 md:w-1/2 md:mb-0 md:pr-12"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
            >
              <h2 className="mb-6 text-4xl font-bold text-transparent text-slate-50 bg-gradient-to-r from-slate-50 via-gray-100 to-amber-100 bg-clip-text">
                Restaurant Management Dashboard
              </h2>
              <p className="mb-8 text-lg leading-relaxed text-slate-300">
                Our intuitive dashboard gives you complete control over all your
                restaurant operations in one place.
              </p>

              <div className="space-y-6">
                {[
                  { icon: "ri-restaurant-line", text: "Multiple Restaurant Management" },
                  { icon: "ri-money-dollar-circle-line", text: "Real-time Sales Tracking" },
                  { icon: "ri-user-settings-line", text: "Staff Performance Monitoring" },
                  { icon: "ri-file-list-3-line", text: "Inventory Management" }
                ].map((item, index) => (
                  <motion.div 
                    key={index}
                    className="flex items-center group"
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    whileHover={{ x: 8, transition: { duration: 0.3 } }}
                    viewport={{ once: true }}
                  >
                    <motion.div 
                      className="flex items-center justify-center w-12 h-12 mr-4 border bg-gradient-to-br from-slate-700/80 to-gray-900/90 rounded-xl border-amber-400/25"
                      whileHover={{ 
                        borderColor: "rgba(251, 191, 36, 0.5)",
                        transition: { duration: 0.3 }
                      }}
                    >
                      <i className={`${item.icon} text-amber-400 text-xl`}></i>
                    </motion.div>
                    <div>
                      <motion.p 
                        className="text-lg font-medium text-slate-100"
                        whileHover={{ 
                          color: "#fbbf24",
                          transition: { duration: 0.3 }
                        }}
                      >
                        {item.text}
                      </motion.p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
            <motion.div 
              className="md:w-1/2"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              whileHover={{ 
                scale: 1.05,
                transition: { duration: 0.3 }
              }}
              viewport={{ once: true }}
            >
              <div className="relative p-6 overflow-hidden border shadow-2xl bg-gradient-to-br from-[#222222]/70 to-[#2a2a2a]/90 rounded-2xl border-slate-600/50 backdrop-blur-sm">
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-r from-amber-400/15 via-transparent to-amber-400/15 rounded-2xl"
                  animate={{
                    opacity: [0.4, 0.8, 0.4]
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
                
                <div className="relative z-10 p-6 bg-gradient-to-br from-[#222222]/90 to-[#2a2a2a]/95 rounded-xl">
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center justify-center w-10 h-10 shadow-lg rounded-xl bg-gradient-to-br from-amber-400 via-amber-300 to-orange-400">
                        <i className="text-lg font-bold ri-restaurant-2-line text-slate-900"></i>
                      </div>
                      <div>
                        <p className="text-lg font-bold text-slate-100">
                          Restaurant Overview
                        </p>
                        <p className="text-sm text-slate-400">June 2, 2025</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <motion.div 
                        className="flex items-center justify-center w-10 h-10 border cursor-pointer bg-gradient-to-br from-[#2a2a2a]/80 to-[#333333]/90 rounded-xl border-slate-500/60"
                        whileHover={{ 
                          borderColor: "rgba(251, 191, 36, 0.5)",
                          transition: { duration: 0.3 }
                        }}
                      >
                        <i className="text-slate-200 ri-notification-3-line"></i>
                      </motion.div>
                      <motion.div 
                        className="flex items-center justify-center w-10 h-10 border cursor-pointer bg-gradient-to-br from-[#2a2a2a]/80 to-[#333333]/90 rounded-xl border-slate-500/60"
                        whileHover={{ 
                          borderColor: "rgba(251, 191, 36, 0.5)",
                          transition: { duration: 0.3 }
                        }}
                      >
                        <i className="text-slate-200 ri-settings-3-line"></i>
                      </motion.div>
                    </div>
                  </div>

                  <div className="grid grid-cols-3 gap-4 mb-6">
                    {[
                      { label: "Today's Revenue", value: "$8,459.32", change: "12.5%" },
                      { label: "Orders", value: "247", change: "8.3%" },
                      { label: "Avg. Order Value", value: "$34.25", change: "3.7%" }
                    ].map((stat, index) => (
                      <motion.div 
                        key={index}
                        className="p-4 border rounded-lg bg-[#222222]/90 border-slate-700/50"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        viewport={{ once: true }}
                      >
                        <p className="mb-1 text-sm text-slate-400">{stat.label}</p>
                        <p className="text-xl font-bold text-slate-100">{stat.value}</p>
                        <p className="flex items-center mt-1 text-xs text-emerald-400">
                          <i className="mr-1 ri-arrow-up-line"></i> {stat.change}
                        </p>
                      </motion.div>
                    ))}
                  </div>

                  <motion.div 
                    className="p-4 mb-6 border rounded-lg bg-[#222222]/90 border-slate-700/50"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    viewport={{ once: true }}
                  >
                    <div className="flex items-center justify-between mb-4">
                      <p className="font-medium text-slate-100">
                        Revenue by Location
                      </p>
                      <div className="flex items-center text-sm text-slate-400">
                        <p>This Week</p>
                      </div>
                    </div>
                    <div ref={chartRef} className="h-60"></div>
                  </motion.div>

                  <motion.div 
                    className="p-4 border rounded-lg bg-[#222222]/90 border-slate-700/50"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                    viewport={{ once: true }}
                  >
                    <div className="flex items-center justify-between mb-4">
                      <p className="font-medium text-slate-100">
                        Top Performing Restaurants
                      </p>
                      <div className="text-sm text-amber-400">View All</div>
                    </div>
                    <div className="space-y-4">
                      {[
                        { name: "Riverside Bistro", location: "New York", revenue: "$24,893", change: "+15.3%" },
                        { name: "Harbor Kitchen", location: "San Francisco", revenue: "$19,472", change: "+9.7%" },
                        { name: "Urban Plate", location: "Chicago", revenue: "$18,105", change: "+12.1%" }
                      ].map((restaurant, index) => (
                        <motion.div 
                          key={index}
                          className="flex items-center justify-between"
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                          viewport={{ once: true }}
                        >
                          <div className="flex items-center">
                            <div className="flex items-center justify-center w-8 h-8 mr-3 rounded-full bg-slate-600/70">
                              <i className="text-slate-200 ri-restaurant-line"></i>
                            </div>
                            <div>
                              <p className="font-medium text-slate-100">{restaurant.name}</p>
                              <p className="text-xs text-slate-400">{restaurant.location}</p>
                            </div>
                          </div>
                          <div className="text-right">
                            <p className="font-medium text-slate-100">{restaurant.revenue}</p>
                            <p className="text-xs text-emerald-400">{restaurant.change}</p>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="relative py-20 overflow-hidden bg-gradient-to-b from-[#222222]/95 via-charcoal/98 to-[#222222]/95">
        <div className="absolute inset-0 opacity-6">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 25% 25%, rgba(251,191,36,0.15) 0%, transparent 50%),
                             radial-gradient(circle at 75% 75%, rgba(6,182,212,0.15) 0%, transparent 50%)`
          }}></div>
        </div>
        
        <div className="container relative z-10 px-6 mx-auto">
          <motion.h2 
            className="mb-6 text-4xl font-bold text-center text-transparent text-slate-50 bg-gradient-to-r from-slate-50 via-gray-100 to-amber-100 bg-clip-text"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Pricing Plans
          </motion.h2>
          <motion.p 
            className="max-w-2xl mx-auto mb-16 text-lg leading-relaxed text-center text-slate-300"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            Choose the perfect plan for your restaurant business. All plans
            include core features with additional capabilities as you grow.
          </motion.p>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            <motion.div 
              className="overflow-hidden border bg-gradient-to-br from-[#222222]/70 to-[#2a2a2a]/90 rounded-2xl border-slate-600/50 h-[580px] flex flex-col"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              whileHover={{ 
                scale: 1.05, 
                y: -8,
                transition: { duration: 0.3 }
              }}
              viewport={{ once: true }}
            >
              <div className="relative p-8 flex-1 flex flex-col">
                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-cyan-500/12 to-transparent rounded-bl-3xl"></div>
                <h3 className="relative z-10 mb-2 text-2xl font-bold text-slate-100">Starter</h3>
                <p className="relative z-10 mb-6 text-slate-300">
                  For small single-location restaurants
                </p>
                <div className="relative z-10 flex items-end mb-6">
                  <span className="text-5xl font-bold text-slate-100">$99</span>
                  <span className="ml-2 text-lg text-slate-300">/month</span>
                </div>
                <motion.button 
                  className="relative z-10 w-full py-3 mb-6 overflow-hidden font-medium bg-transparent border-2 rounded-xl border-amber-400 text-amber-400 whitespace-nowrap group"
                  whileHover={{ 
                    backgroundColor: "#fbbf24",
                    color: "#0f172a"
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className="relative z-10 font-semibold">Get Started</span>
                </motion.button>
                <div className="relative z-10 space-y-4 flex-1">
                  {[
                    "1 Restaurant Location",
                    "Basic POS System", 
                    "Inventory Management",
                    "Staff Management"                    ].map((feature, index) => (
                    <motion.div 
                      key={index}
                      className="flex items-center group"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <motion.div 
                        className="flex items-center justify-center w-6 h-6 mr-3 rounded-full text-amber-400 bg-amber-400/12"
                        whileHover={{ backgroundColor: "rgba(251, 191, 36, 0.2)" }}
                      >
                        <i className="text-sm ri-check-line"></i>
                      </motion.div>
                      <p className="text-slate-200">{feature}</p>
                    </motion.div>
                  ))}
                  <div className="flex items-center text-slate-400 group">
                    <div className="flex items-center justify-center w-6 h-6 mr-3 rounded-full bg-slate-600/30">
                      <i className="text-sm ri-close-line"></i>
                    </div>
                    <p>Advanced Analytics</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div 
              className="relative overflow-hidden border-2 bg-gradient-to-br from-[#222222]/70 to-[#2a2a2a]/90 rounded-2xl border-amber-400/60 h-[580px] flex flex-col"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              whileHover={{ 
                scale: 1.05, 
                y: -8,
                transition: { duration: 0.3 }
              }}
              viewport={{ once: true }}
            >
              <motion.div 
                className="absolute top-0 right-0 px-6 py-2 text-sm font-bold bg-gradient-to-r from-amber-400 via-amber-300 to-orange-400 text-slate-900 rounded-bl-2xl"
                animate={{
                  boxShadow: ["0 0 20px rgba(251, 191, 36, 0.4)", "0 0 30px rgba(251, 191, 36, 0.6)", "0 0 20px rgba(251, 191, 36, 0.4)"]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                Most Popular
              </motion.div>
              <div className="relative p-8 flex-1 flex flex-col">
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-amber-400/8 to-transparent rounded-2xl"></div>
                <h3 className="relative z-10 mb-2 text-2xl font-bold text-slate-100">
                  Professional
                </h3>
                <p className="relative z-10 mb-6 text-slate-300">
                  For growing multi-location businesses
                </p>
                <div className="relative z-10 flex items-end mb-6">
                  <span className="text-5xl font-bold text-slate-100">$249</span>
                  <span className="ml-2 text-lg text-slate-300">/month</span>
                </div>
                <motion.button 
                  className="relative z-10 w-full py-3 mb-6 overflow-hidden font-medium shadow-lg rounded-xl bg-gradient-to-r from-amber-400 via-amber-300 to-orange-400 text-slate-900 whitespace-nowrap group"
                  whileHover={{ 
                    boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.4)",
                    scale: 1.05
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className="relative z-10 font-semibold">Get Started</span>
                  <motion.div 
                    className="absolute inset-0 transform -skew-x-12 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                    initial={{ x: "-100%" }}
                    whileHover={{ 
                      x: "100%",
                      transition: { duration: 1 }
                    }}
                  />
                </motion.button>
                <div className="relative z-10 space-y-4 flex-1">
                  {[
                    "Up to 5 Restaurant Locations",
                    "Advanced POS System",
                    "Comprehensive Inventory",
                    "Staff & Payroll Management",
                    "Advanced Analytics"                    ].map((feature, index) => (
                    <motion.div 
                      key={index}
                      className="flex items-center group"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <motion.div 
                        className="flex items-center justify-center w-6 h-6 mr-3 rounded-full text-amber-400 bg-amber-400/12"
                        whileHover={{ backgroundColor: "rgba(251, 191, 36, 0.2)" }}
                      >
                        <i className="text-sm ri-check-line"></i>
                      </motion.div>
                      <p className="text-slate-200">{feature}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>

            <motion.div 
              className="overflow-hidden border bg-gradient-to-br from-[#222222]/70 to-[#2a2a2a]/90 rounded-2xl border-slate-600/50 h-[580px] flex flex-col"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              whileHover={{ 
                scale: 1.05, 
                y: -8,
                transition: { duration: 0.3 }
              }}
              viewport={{ once: true }}
            >
              <div className="relative p-8 flex-1 flex flex-col">
                <div className="absolute top-0 left-0 w-20 h-20 bg-gradient-to-br from-violet-500/12 to-transparent rounded-br-3xl"></div>
                <h3 className="relative z-10 mb-2 text-2xl font-bold text-slate-100">
                  Enterprise
                </h3>
                <p className="relative z-10 mb-6 text-slate-300">
                  For large restaurant chains
                </p>
                <div className="relative z-10 flex items-end mb-6">
                  <span className="text-5xl font-bold text-slate-100">$499</span>
                  <span className="ml-2 text-lg text-slate-300">/month</span>
                </div>
                <motion.button 
                  className="relative z-10 w-full py-3 mb-6 overflow-hidden font-medium bg-transparent border-2 rounded-xl border-amber-400 text-amber-400 whitespace-nowrap group"
                  whileHover={{ 
                    backgroundColor: "#fbbf24",
                    color: "#0f172a"
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className="relative z-10 font-semibold">Contact Sales</span>
                </motion.button>
                <div className="relative z-10 space-y-4 flex-1">
                  {[
                    "Unlimited Restaurant Locations",
                    "Enterprise-grade POS System",
                    "Advanced Inventory Control",
                    "Complete HR Management",
                    "Custom Reporting & API Access"                    ].map((feature, index) => (
                    <motion.div 
                      key={index}
                      className="flex items-center group"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <motion.div 
                        className="flex items-center justify-center w-6 h-6 mr-3 rounded-full text-amber-400 bg-amber-400/12"
                        whileHover={{ backgroundColor: "rgba(251, 191, 36, 0.2)" }}
                      >
                        <i className="text-sm ri-check-line"></i>
                      </motion.div>
                      <p className="text-slate-200">{feature}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>      </section>
     
      <section className="relative py-20 overflow-hidden bg-gradient-to-r from-charcoal via-[#222222] to-charcoal">
        <div className="absolute inset-0 opacity-35">
          <motion.div 
            className="absolute top-0 left-0 rounded-full w-96 h-96 bg-gradient-to-r from-amber-400/12 to-transparent blur-3xl"
            animate={{
              y: [0, -30, 0],
              x: [0, 20, 0]
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <motion.div 
            className="absolute bottom-0 right-0 rounded-full w-96 h-96 bg-gradient-to-r from-cyan-500/10 to-transparent blur-3xl"
            animate={{
              y: [0, 25, 0],
              x: [0, -15, 0]
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1
            }}
          />
        </div>
        
        <div className="container relative z-10 px-6 mx-auto">
          <div className="flex flex-col items-center md:flex-row">
            <motion.div 
              className="mb-10 md:w-1/2 md:mb-0"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
            >
              <h2 className="mb-6 text-4xl font-bold text-transparent text-slate-50 bg-gradient-to-r from-slate-50 via-gray-100 to-amber-100 bg-clip-text">
                Start Managing Your Restaurants Today
              </h2>
              <p className="mb-8 text-lg leading-relaxed text-slate-300">
                Join thousands of restaurant owners who trust Feasto to
                streamline their operations and boost profitability.
              </p>
              <div className="space-y-6">
                {[
                  {
                    title: "14-Day Free Trial",
                    subtitle: "No credit card required",
                    delay: 0
                  },
                  {
                    title: "Free Onboarding Support", 
                    subtitle: "Dedicated specialist to help you get started",
                    delay: 0.1
                  },
                  {
                    title: "Cancel Anytime",
                    subtitle: "No long-term contracts or commitments",
                    delay: 0.2
                  }
                ].map((feature, index) => (
                  <motion.div 
                    key={index}
                    className="flex items-center group"
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: feature.delay }}
                    whileHover={{ x: 8, transition: { duration: 0.3 } }}
                    viewport={{ once: true }}
                  >
                    <motion.div 
                      className="relative inline-block mr-4 w-14 h-7"
                      whileHover={{ scale: 1.1 }}
                    >
                      <input
                        type="checkbox"
                        defaultChecked
                        className="absolute w-0 h-0 opacity-0"
                      />
                      <span className="absolute top-0 bottom-0 left-0 right-0 transition-all duration-300 rounded-full shadow-lg cursor-pointer bg-gradient-to-r from-amber-400 via-amber-300 to-orange-400">
                        <span className="absolute w-5 h-5 transition-all duration-300 transform rounded-full shadow-md translate-x-7 bg-slate-50 left-1 bottom-1"></span>
                      </span>
                    </motion.div>
                    <div>
                      <motion.p 
                        className="text-lg font-bold text-slate-100"
                        whileHover={{ 
                          color: "#fbbf24",
                          transition: { duration: 0.3 }
                        }}
                      >
                        {feature.title}
                      </motion.p>
                      <p className="text-sm text-slate-300">{feature.subtitle}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
            <motion.div 
              className="md:w-1/2 md:pl-12"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              whileHover={{ 
                scale: 1.05,
                transition: { duration: 0.3 }
              }}
              viewport={{ once: true }}
            >
              <div className="relative p-8 overflow-hidden border shadow-2xl bg-gradient-to-br from-[#222222]/70 to-[#2a2a2a]/90 rounded-2xl border-slate-600/50 backdrop-blur-sm">
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-r from-amber-400/12 via-transparent to-amber-400/12 rounded-2xl"
                  animate={{
                    opacity: [0.4, 0.7, 0.4]
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
                
                <h3 className="relative z-10 mb-6 text-2xl font-bold text-slate-100">
                  Get Started Now
                </h3>
                <form className="relative z-10">
                  {[
                    { label: "Full Name", type: "text", placeholder: "John Smith" },
                    { label: "Business Email", type: "email", placeholder: "john@yourrestaurant.com" },
                    { label: "Phone Number", type: "tel", placeholder: "(555) 123-4567" }
                  ].map((field, index) => (
                    <motion.div 
                      key={index}
                      className="mb-4"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.1 + index * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <label className="block mb-2 font-medium text-slate-300">
                        {field.label}
                      </label>
                      <motion.input
                        type={field.type}
                        className="w-full px-4 py-3 transition-all duration-300 border bg-gradient-to-r from-[#222222]/90 to-[#2a2a2a]/95 border-slate-600/60 rounded-xl text-slate-100 focus:border-amber-400 focus:outline-none focus:ring-2 focus:ring-amber-400/25"
                        placeholder={field.placeholder}
                        whileFocus={{ 
                          scale: 1.02,
                          borderColor: "#fbbf24"
                        }}
                      />
                    </motion.div>
                  ))}
                  <motion.div 
                    className="mb-6"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    viewport={{ once: true }}
                  >
                    <label className="block mb-2 font-medium text-slate-300">
                      Number of Restaurant Locations
                    </label>
                    <motion.select 
                      className="w-full px-4 py-3 transition-all duration-300 border appearance-none cursor-pointer bg-gradient-to-r from-[#222222]/90 to-[#2a2a2a]/95 border-slate-600/60 rounded-xl text-slate-100 focus:border-amber-400 focus:outline-none focus:ring-2 focus:ring-amber-400/25"
                      whileFocus={{ 
                        scale: 1.02,
                        borderColor: "#fbbf24"
                      }}
                    >
                      <option>1 Location</option>
                      <option>2-5 Locations</option>
                      <option>6-10 Locations</option>
                      <option>11+ Locations</option>
                    </motion.select>
                  </motion.div>
                  <motion.button
                    type="submit"
                    className="w-full py-4 overflow-hidden text-lg font-bold shadow-lg rounded-xl bg-gradient-to-r from-amber-400 via-amber-300 to-orange-400 text-slate-900 whitespace-nowrap group"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                    whileHover={{ 
                      boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.4)",
                      scale: 1.05
                    }}
                    whileTap={{ scale: 0.95 }}
                    viewport={{ once: true }}
                  >
                    <span className="relative z-10 font-semibold">Start Free Trial</span>
                    <motion.div 
                      className="absolute inset-0 transform -skew-x-12 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                      initial={{ x: "-100%" }}
                      whileHover={{ 
                        x: "100%",
                        transition: { duration: 1 }
                      }}
                    />
                  </motion.button>
                </form>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-charcoal">
        <div className="container px-6 mx-auto">
          <motion.h2 
            className="mb-16 text-4xl font-bold text-center text-slate-100"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Trusted by Restaurant Owners Worldwide
          </motion.h2>
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            {[
              { icon: "ri-restaurant-2-fill", name: "Fine Dining Group" },
              { icon: "ri-store-2-fill", name: "Urban Eateries" },
              { icon: "ri-cup-fill", name: "Café Collective" },
              { icon: "ri-hotel-fill", name: "Hospitality Partners" }
            ].map((brand, index) => (
              <motion.div 
                key={index}
                className="flex flex-col items-center p-6 bg-gradient-to-br from-[#222222]/40 to-[#2a2a2a]/60 rounded-xl border border-slate-700/30 h-[140px] justify-center backdrop-blur-sm"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ 
                  scale: 1.05,
                  borderColor: "rgba(251, 191, 36, 0.3)",
                  transition: { duration: 0.3 }
                }}
                viewport={{ once: true }}
              >
                <div className="flex items-center justify-center w-16 h-16 mb-3 text-amber-400">
                  <i className={`${brand.icon} text-4xl`}></i>
                </div>
                <p className="font-medium text-center text-slate-200 text-sm">
                  {brand.name}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <footer className="py-16 bg-charcoal">
        <div className="container px-6 mx-auto">
          <div className="grid grid-cols-1 gap-12 mb-12 md:grid-cols-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h1 className="text-2xl font-['Pacifico'] text-slate-100 mb-6">
                Feasto
              </h1>
              <p className="mb-6 text-slate-400">
                Complete restaurant management platform for owners with multiple
                locations.
              </p>
              <div className="flex space-x-4">
                {[
                  { icon: "ri-facebook-fill", href: "#" },
                  { icon: "ri-twitter-x-fill", href: "#" },
                  { icon: "ri-instagram-fill", href: "#" },
                  { icon: "ri-linkedin-fill", href: "#" }
                ].map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    className="flex items-center justify-center w-10 h-10 transition-colors rounded-full bg-[#222222]/80 text-slate-200"
                    whileHover={{ 
                      backgroundColor: "#fbbf24",
                      color: "#0f172a",
                      scale: 1.1
                    }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <i className={social.icon}></i>
                  </motion.a>
                ))}
              </div>
            </motion.div>
            {[
              {
                title: "Product",
                links: ["Features", "Pricing", "Integrations", "Case Studies", "Documentation"]
              },
              {
                title: "Company", 
                links: ["About Us", "Careers", "Blog", "Press", "Contact"]
              }
            ].map((section, sectionIndex) => (
              <motion.div
                key={sectionIndex}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: (sectionIndex + 1) * 0.1 }}
                viewport={{ once: true }}
              >
                <h3 className="mb-6 text-lg font-bold text-slate-100">{section.title}</h3>
                <ul className="space-y-4">
                  {section.links.map((link, linkIndex) => (
                    <motion.li key={linkIndex}>
                      <motion.a
                        href="#"
                        className="transition-colors text-slate-400 hover:text-slate-100"
                        whileHover={{ x: 4 }}
                      >
                        {link}
                      </motion.a>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            ))}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <h3 className="mb-6 text-lg font-bold text-slate-100">Subscribe</h3>
              <p className="mb-4 text-slate-400">
                Get the latest news and updates
              </p>
              <form className="mb-6">
                <div className="flex">
                  <motion.input
                    type="email"
                    className="flex-grow px-4 py-2 border-none rounded-l bg-[#222222]/80 text-slate-100 focus:outline-none"
                    placeholder="Your email"
                    whileFocus={{ scale: 1.02 }}
                  />
                  <motion.button
                    type="submit"
                    className="px-4 font-semibold rounded-r bg-amber-400 text-slate-900 whitespace-nowrap"
                    whileHover={{ backgroundColor: "#fbbf24" }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Subscribe
                  </motion.button>
                </div>
              </form>
              <div className="flex items-center space-x-4">
                {["ri-visa-fill", "ri-mastercard-fill", "ri-paypal-fill"].map((icon, index) => (
                  <motion.div 
                    key={index}
                    className="flex items-center justify-center w-10 h-10 text-amber-400"
                    whileHover={{ scale: 1.1 }}
                  >
                    <i className={`${icon} text-2xl`}></i>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
          <motion.div 
            className="flex flex-col items-center justify-between pt-8 border-t border-slate-700/60 md:flex-row"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <p className="mb-4 text-sm text-slate-400 md:mb-0">
              © 2025 Feasto. All rights reserved.
            </p>
            <div className="flex space-x-6">
              {["Terms of Service", "Privacy Policy", "Cookie Policy"].map((link, index) => (
                <motion.a
                  key={index}
                  href="#"
                  className="text-sm transition-colors text-slate-400 hover:text-slate-100"
                  whileHover={{ y: -2 }}
                >
                  {link}
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>
      </footer>
      </div>
    </div>
  );
}

export default UserHome;
