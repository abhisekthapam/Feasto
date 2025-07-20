import React, { useState, useEffect } from "react";

function AdminTicket() {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [statusUpdates, setStatusUpdates] = useState({});

  useEffect(() => {
    const fetchOrders = async () => {
      setLoading(true);
      setError(null);
      try {
        const token = localStorage.getItem("token");
        const res = await fetch("http://localhost:5000/orders", {
          headers: {
            Authorization: token ? `Bearer ${token}` : undefined,
          },
        });
        if (!res.ok) throw new Error("Failed to fetch orders");
        const data = await res.json();
        setOrders(Array.isArray(data) ? data : data.orders || []);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchOrders();
  }, []);

  const handleStatusChange = (orderId, newStatus) => {
    setStatusUpdates((prev) => ({ ...prev, [orderId]: newStatus }));
  };

  const QR = () => (
    <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
      <rect width="48" height="48" rx="8" fill="#eee" />
      <rect x="6" y="6" width="10" height="10" rx="2" fill="#222" />
      <rect x="32" y="6" width="10" height="10" rx="2" fill="#222" />
      <rect x="6" y="32" width="10" height="10" rx="2" fill="#222" />
      <rect x="20" y="20" width="4" height="4" fill="#222" />
      <rect x="28" y="28" width="2" height="2" fill="#222" />
      <rect x="24" y="28" width="2" height="2" fill="#222" />
      <rect x="28" y="24" width="2" height="2" fill="#222" />
      <rect x="24" y="24" width="2" height="2" fill="#222" />
    </svg>
  );

  const statusOptions = ["Ordered", "Confirmed", "Delivered", "Paid", "Cancel"];

  return (
    <div className="min-h-screen p-4 bg-gray-50">
      <h2 className="mb-6 text-2xl font-bold">All Orders</h2>
      {loading && <div>Loading...</div>}
      {error && <div className="text-red-500">{error}</div>}
      {!loading && !error && (
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
          {orders.length === 0 ? (
            <div className="py-8 text-center text-gray-500 col-span-full">
              No orders found.
            </div>
          ) : (
            orders.map((order) => {
              let items =
                order.items && order.items.length > 0
                  ? order.items
                  : [
                      {
                        ...order.productSnapshot,
                        quantity: order.quantity,
                      },
                    ];
              const total = items.reduce(
                (sum, item) =>
                  sum + Number(item.price) * Number(item.quantity || 1),
                0
              );
              const statusMap = {
                placed: { text: "Ordered", color: "bg-blue-100 text-blue-700" },
                confirmed: {
                  text: "Confirmed",
                  color: "bg-yellow-100 text-yellow-700",
                },
                delivered: {
                  text: "Delivered",
                  color: "bg-green-100 text-green-700",
                },
                paid: { text: "Paid", color: "bg-gray-100 text-gray-700" },
                cancel: { text: "Cancel", color: "bg-red-100 text-red-700" },
                finished: {
                  text: "Finished",
                  color: "bg-green-100 text-green-700",
                },
              };
              const rawStatus = (
                statusUpdates[order._id] ||
                order.status ||
                "placed"
              ).toLowerCase();
              const statusObj = statusMap[rawStatus] || {
                text: rawStatus,
                color: "bg-gray-100 text-gray-700",
              };
              return (
                <div
                  key={order._id}
                  className="flex flex-col gap-4 p-6 transition-all duration-200 bg-white border border-gray-100 shadow rounded-xl hover:shadow-lg"
                >
                  <div className="flex items-center justify-between mb-2">
                    <div>
                      <div className="text-xs text-gray-400">Order ID</div>
                      <div className="font-bold text-gray-800">
                        #{order._id?.slice(-5) || "-"}
                      </div>
                    </div>
                    <div>
                      <div className="text-xs text-gray-400">Total</div>
                      <div className="font-bold text-green-600">Rs.{total}</div>
                    </div>
                  </div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs text-gray-400">Placed</span>
                    <span className="text-xs text-gray-500">
                      {order.createdAt
                        ? new Date(order.createdAt).toLocaleString()
                        : "-"}
                    </span>
                  </div>
                  <div className="mb-2">
                    <div className="mb-1 font-medium text-gray-700">
                      Ordered Items{" "}
                      <span className="text-xs text-gray-400">
                        ({items.length})
                      </span>
                    </div>
                    <div className="flex flex-col gap-2">
                      {items.map((item, idx) => (
                        <div key={idx} className="flex items-center gap-3">
                          <img
                            src={
                              item.image
                                ? `http://localhost:5000/${item.image.replace(
                                    /\\/g,
                                    "/"
                                  )}`
                                : "/placeholder.png"
                            }
                            alt={item.name}
                            className="object-cover border border-gray-200 rounded-full w-9 h-9"
                          />
                          <div>
                            <span className="text-sm font-medium text-gray-800">
                              {item.quantity || 1} x {item.name}
                            </span>
                            <span className="ml-2 text-xs text-gray-400">
                              Rs.{item.price}
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="flex items-center justify-between mt-2">
                    <div>
                      <span className="block mb-1 text-xs font-medium text-gray-400">
                        Status
                      </span>
                      <span
                        className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${statusObj.color}`}
                      >
                        {statusObj.text}
                      </span>
                    </div>
                    <div className="flex flex-col items-center">
                      <div className="p-2 border border-gray-200 rounded-lg bg-gray-50">
                        <QR />
                      </div>
                      <span className="mt-1 text-xs text-gray-400">
                        Show QR
                      </span>
                    </div>
                  </div>
                  <button className="py-2 mt-4 text-base font-semibold tracking-wide text-white transition-all duration-200 bg-blue-600 rounded-lg shadow hover:bg-blue-700">
                    Update
                  </button>
                </div>
              );
            })
          )}
        </div>
      )}
    </div>
  );
}

export default AdminTicket;
