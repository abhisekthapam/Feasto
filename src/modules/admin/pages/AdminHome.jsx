import React from "react";

const stats = [
  { label: "Total Orders", value: 128, icon: (
    <svg className="text-blue-500 w-7 h-7" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M3 7h18M3 12h18M3 17h18" /></svg>
  ) },
  { label: "Menu Items", value: 24, icon: (
    <svg className="text-blue-500 w-7 h-7" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 10h16M4 14h16M4 18h16" /></svg>
  ) },
  { label: "Revenue", value: "Rs. 32,500", icon: (
    <svg className="text-blue-500 w-7 h-7" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 1.343-3 3s1.343 3 3 3 3-1.343 3-3-1.343-3-3-3zm0 0V4m0 8v8" /></svg>
  ) },
  { label: "Active Tables", value: 8, icon: (
    <svg className="text-blue-500 w-7 h-7" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect width="20" height="8" x="2" y="8" rx="2" /><path d="M2 16h20" /></svg>
  ) },
];

const recentOrders = [
  { id: "ORD-001", customer: "Sita Gurung", item: "Veg Pizza", total: "Rs. 500", status: "Completed", time: "Today, 10:30 AM" },
  { id: "ORD-002", customer: "Ram Shrestha", item: "Chicken Burger", total: "Rs. 350", status: "Pending", time: "Today, 9:50 AM" },
  { id: "ORD-003", customer: "Bina Maharjan", item: "Momo", total: "Rs. 250", status: "Completed", time: "Yesterday, 7:15 PM" },
];


function AdminHome() {
  return (
    <div className="min-h-screen px-2 py-10 font-sans text-black bg-white md:px-0">
      <div className="max-w-5xl mx-auto">
        <header className="mb-10 text-center">
          <h1 className="mb-2 text-3xl font-bold tracking-tight md:text-4xl">Welcome, Himalayan Delights</h1>
          <p className="text-lg text-gray-500">Your restaurant dashboard at a glance</p>
        </header>

        <div className="grid grid-cols-1 gap-6 mb-10 sm:grid-cols-2 md:grid-cols-4">
          {stats.map((stat, i) => (
            <div key={i} className="flex flex-col items-center p-6 bg-white border border-gray-200 shadow rounded-xl">
              <div className="mb-3">{stat.icon}</div>
              <div className="mb-1 text-2xl font-bold">{stat.value}</div>
              <div className="text-sm font-medium text-gray-500">{stat.label}</div>
            </div>
          ))}
        </div>

        <div className="p-6 bg-white border border-gray-200 shadow rounded-xl">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-semibold">Recent Orders</h2>
            <button className="px-4 py-2 font-semibold text-white transition bg-blue-600 rounded-md hover:bg-blue-700">View All</button>
          </div>
          <div className="overflow-x-auto">
            <table className="min-w-full text-sm">
              <thead>
                <tr className="text-left text-gray-500 border-b border-gray-200">
                  <th className="py-2">Order ID</th>
                  <th className="py-2">Customer</th>
                  <th className="py-2">Item</th>
                  <th className="py-2">Total</th>
                  <th className="py-2">Status</th>
                  <th className="py-2">Time</th>
                  <th className="py-2"></th>
                </tr>
              </thead>
              <tbody>
                {recentOrders.map((order) => (
                  <tr key={order.id} className="transition border-b border-gray-100 hover:bg-blue-50">
                    <td className="py-3 font-semibold text-black">{order.id}</td>
                    <td className="py-3">{order.customer}</td>
                    <td className="py-3">{order.item}</td>
                    <td className="py-3">{order.total}</td>
                    <td className="py-3">
                      <span className={`px-3 py-1 rounded-full text-xs font-semibold ${order.status === "Completed" ? "bg-blue-100 text-blue-700" : "bg-white text-black border border-blue-400"}`}>
                        {order.status}
                      </span>
                    </td>
                    <td className="py-3 text-gray-500">{order.time}</td>
                    <td className="py-3">
                      <button className="px-3 py-1 text-xs font-semibold text-white transition bg-blue-600 rounded hover:bg-blue-700">View</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminHome;