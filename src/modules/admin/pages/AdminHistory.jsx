import React, { useEffect, useState } from "react";

const API_URL = "http://localhost:5000/orders";
const IMAGE_BASE = "http://localhost:5000/";

const STATUS_COLORS = {
  placed: "bg-blue-900 text-blue-200 border border-blue-700",
  finished: "bg-black text-white border border-blue-900",
  cancelled: "bg-black text-white border border-blue-900 opacity-60",
};

function AdminHistory() {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchOrders = async () => {
      setLoading(true);
      setError(null);
      try {
        const token = localStorage.getItem("token");
        const res = await fetch(API_URL, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        if (!res.ok) throw new Error("Failed to fetch orders");
        const data = await res.json();
        setOrders(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchOrders();
  }, []);

  // Split orders into active and history
  const activeOrders = orders.filter(
    (o) => o.status === "placed" && !o.approved
  );
  const historyOrders = orders.filter(
    (o) => o.status !== "placed" || o.approved
  );

  return (
    <div className="min-h-screen px-2 py-10 font-sans bg-black md:px-0">
      <div className="max-w-3xl mx-auto">
        <h1 className="mb-8 text-3xl font-bold tracking-tight text-center text-white">Orders</h1>
        {loading && (
          <div className="py-10 text-center text-blue-200">Loading...</div>
        )}
        {error && (
          <div className="py-10 text-center text-blue-400">{error}</div>
        )}
        {!loading && !error && orders.length === 0 && (
          <div className="py-10 text-center text-blue-200">No orders found.</div>
        )}

        {/* Active Orders */}
        {activeOrders.length > 0 && (
          <div className="mb-10">
            <h2 className="mb-4 text-2xl font-semibold text-blue-400">Active Orders</h2>
            <div className="space-y-6">
              {activeOrders.map((order) => (
                <div
                  key={order._id}
                  className="flex flex-col items-center overflow-hidden transition border border-blue-900 shadow-lg md:flex-row md:items-stretch bg-blue-950/90 rounded-xl hover:shadow-2xl group"
                >
                  <div className="flex items-center justify-center flex-shrink-0 w-full h-40 bg-black md:w-40">
                    {order.productSnapshot?.image ? (
                      <img
                        src={IMAGE_BASE + order.productSnapshot.image.replace(/\\/g, "/")}
                        alt={order.productSnapshot.name}
                        className="object-cover w-full h-full"
                      />
                    ) : (
                      <div className="flex items-center justify-center w-full h-full text-2xl font-bold text-blue-300 bg-black">
                        ?
                      </div>
                    )}
                  </div>
                  <div className="flex flex-col justify-between flex-1 p-5">
                    <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
                      <div>
                        <h2 className="mb-1 text-xl font-semibold text-white">{order.productSnapshot?.name || "Unknown Product"}</h2>
                        <p className="mb-2 text-sm text-blue-200">{order.productSnapshot?.description}</p>
                      </div>
                      <div className="flex flex-col items-end gap-1 md:items-center md:justify-center">
                        <span className="text-lg font-bold text-blue-100">Rs. {order.productSnapshot?.price}</span>
                        <span className="text-xs text-blue-400">Qty: {order.quantity}</span>
                      </div>
                    </div>
                    <div className="flex flex-col gap-2 mt-4 md:flex-row md:items-center md:justify-between">
                      <div className="flex items-center gap-2">
                        <span className={`px-3 py-1 rounded-full text-xs font-semibold ${STATUS_COLORS[order.status] || "bg-gray-900 text-white"}`}>{order.status.charAt(0).toUpperCase() + order.status.slice(1)}</span>
                        <span className="px-2 py-1 text-xs font-semibold text-blue-200 bg-blue-900 border border-blue-700 rounded-full">Pending</span>
                      </div>
                      <div className="text-xs text-blue-400 md:text-right">
                        {new Date(order.createdAt).toLocaleString("en-GB", {
                          year: "numeric",
                          month: "short",
                          day: "2-digit",
                          hour: "2-digit",
                          minute: "2-digit",
                        })}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Order History */}
        <h2 className="mb-4 text-2xl font-semibold text-blue-400">Order History</h2>
        <div className="space-y-6">
          {historyOrders.length === 0 && (
            <div className="py-10 text-center text-blue-200">No order history found.</div>
          )}
          {historyOrders.map((order) => (
            <div
              key={order._id}
              className="flex flex-col items-center overflow-hidden transition border border-blue-900 shadow-lg md:flex-row md:items-stretch bg-blue-950/80 rounded-xl hover:shadow-2xl group"
            >
              <div className="flex items-center justify-center flex-shrink-0 w-full h-40 bg-black md:w-40">
                {order.productSnapshot?.image ? (
                  <img
                    src={IMAGE_BASE + order.productSnapshot.image.replace(/\\/g, "/")}
                    alt={order.productSnapshot.name}
                    className="object-cover w-full h-full"
                  />
                ) : (
                  <div className="flex items-center justify-center w-full h-full text-2xl font-bold text-blue-300 bg-black">
                    ?
                  </div>
                )}
              </div>
              <div className="flex flex-col justify-between flex-1 p-5">
                <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
                  <div>
                    <h2 className="mb-1 text-xl font-semibold text-white">{order.productSnapshot?.name || "Unknown Product"}</h2>
                    <p className="mb-2 text-sm text-blue-200">{order.productSnapshot?.description}</p>
                  </div>
                  <div className="flex flex-col items-end gap-1 md:items-center md:justify-center">
                    <span className="text-lg font-bold text-blue-100">Rs. {order.productSnapshot?.price}</span>
                    <span className="text-xs text-blue-400">Qty: {order.quantity}</span>
                  </div>
                </div>
                <div className="flex flex-col gap-2 mt-4 md:flex-row md:items-center md:justify-between">
                  <div className="flex items-center gap-2">
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${STATUS_COLORS[order.status] || "bg-gray-900 text-white"}`}>{order.status.charAt(0).toUpperCase() + order.status.slice(1)}</span>
                    {order.approved ? (
                      <span className="px-2 py-1 text-xs font-semibold text-white border border-blue-700 rounded-full bg-blue-950">Approved</span>
                    ) : (
                      <span className="px-2 py-1 text-xs font-semibold text-blue-200 bg-blue-900 border border-blue-700 rounded-full">Pending</span>
                    )}
                  </div>
                  <div className="text-xs text-blue-400 md:text-right">
                    {new Date(order.createdAt).toLocaleString("en-GB", {
                      year: "numeric",
                      month: "short",
                      day: "2-digit",
                      hour: "2-digit",
                      minute: "2-digit",
                    })}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default AdminHistory;