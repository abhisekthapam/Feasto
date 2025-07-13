import React, { useState, useEffect } from "react";

const API_URL = "http://localhost:5000/products";
const PLACEHOLDER_IMG = "/placeholder.png";

function useScreenWidth() {
  const [width, setWidth] = useState(window.innerWidth);
  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return width;
}

function AdminOrder() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [order, setOrder] = useState([]);
  const [quantities, setQuantities] = useState({});
  const screenWidth = useScreenWidth();

  useEffect(() => {
    const token = localStorage.getItem("token");
    fetch(API_URL, {
      headers: {
        Authorization: token ? `Bearer ${token}` : undefined,
      },
    })
      .then((res) => {
        if (!res.ok) throw new Error("Unauthorized or fetch error");
        return res.json();
      })
      .then((data) => {
        if (Array.isArray(data)) {
          setProducts(data);
        } else if (Array.isArray(data.products)) {
          setProducts(data.products);
        } else {
          setProducts([]);
        }
        setLoading(false);
      })
      .catch((err) => {
        setError("Failed to fetch products: " + err.message);
        setLoading(false);
      });
  }, []);

  const handleQty = (id, delta) => {
    const product = products.find((p) => p._id === id);
    const maxStock = product ? Number(product.stock) : Infinity;
    setQuantities((prev) => {
      const newQty = Math.max(0, Math.min((prev[id] || 0) + delta, maxStock));
      return { ...prev, [id]: newQty };
    });
  };

  const handleAddToOrder = (product) => {
    const qty = quantities[product._id] || 0;
    const maxStock = Number(product.stock);
    if (qty === 0 || qty > maxStock) return;
    setOrder((prev) => {
      const exists = prev.find((item) => item._id === product._id);
      if (exists) {
        const newQty = Math.min(exists.qty + qty, maxStock);
        return prev.map((item) =>
          item._id === product._id ? { ...item, qty: newQty } : item
        );
      } else {
        return [
          ...prev,
          {
            _id: product._id,
            name: product.name,
            price: product.price,
            image: product.image,
            qty,
          },
        ];
      }
    });
    setQuantities((prev) => ({ ...prev, [product._id]: 0 }));
  };

  const handleRemoveFromOrder = (id) => {
    setOrder((prev) => prev.filter((item) => item._id !== id));
  };

  const handlePlaceOrder = async () => {
    if (order.length === 0) return;
    const token = localStorage.getItem("token");
    try {
      for (const item of order) {
        await fetch("http://localhost:5000/orders", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: token ? `Bearer ${token}` : undefined,
          },
          body: JSON.stringify({
            productId: item._id,
            quantity: item.qty,
          }),
        });
      }
      setOrder([]);
      alert("Order placed successfully!");
    } catch (err) {
      alert("Failed to place order. Please try again.");
    }
  };

  const total = order.reduce(
    (sum, item) => sum + Number(item.price) * item.qty,
    0
  );

  return (
    <div className="flex flex-col gap-6 sm:p-4 xl:flex-row lg:gap-8 bg-gray-50">
      <div className="w-full lg:flex-1">
        <h2 className="hidden mb-4 text-2xl font-bold text-gray-900 md:block">
          Products
        </h2>
        {loading && <div>Loading...</div>}
        {error && <div className="text-red-500">{error}</div>}
        {screenWidth < 640 && (
          <div className="h-[60vh] flex justify-center items-center">
            <div className="w-1/2 text-center ">
              <div className="mb-2 text-3xl font-bold leading-loose tracking-wide">
                Screen Too Small
              </div>
              <div className="text-base font-medium leading-loose text-gray-700">
                This admin dashboard is designed for tablets, iPads, laptops, or
                larger screens.
              </div>
              <div className="text-base leading-loose text-gray-500">
                For the best experience, please switch to a bigger device.
              </div>
              <div className="text-sm italic leading-loose text-gray-400">
                Mobile view is intentionally limited for security and usability.
              </div>
            </div>
          </div>
        )}
        {screenWidth >= 640 && (
          <div
            className="grid grid-cols-2 gap-6 xl:grid-cols-3 h-[75vh] overflow-y-auto pr-2 scrollbar-none"
            style={{
              WebkitOverflowScrolling: "touch",
              overflowY: "auto",
              scrollbarWidth: "none",
            }}
          >
            {products.map((product) => {
              const qty = quantities[product._id] || 0;
              const maxStock = Number(product.stock);
              return (
                <div
                  key={product._id}
                  className="flex flex-col justify-between min-w-0 p-0 transition bg-white border border-gray-100 rounded"
                >
                  <img
                    src={
                      product.image
                        ? `http://localhost:5000/${product.image.replace(
                            /\\/g,
                            "/"
                          )}`
                        : PLACEHOLDER_IMG
                    }
                    alt={product.name}
                    className="object-cover w-full rounded h-44"
                    onError={(e) => (e.target.src = PLACEHOLDER_IMG)}
                  />
                  <div className="flex items-center justify-between px-5 pt-4">
                    <div className="text-lg font-semibold text-gray-900 line-clamp-1">
                      {product.name}
                    </div>
                    <div className="text-lg font-bold text-gray-800 whitespace-nowrap">
                      Rs.{product.price}
                    </div>
                  </div>
                  <div className="px-5 pb-2 text-sm text-gray-500 line-clamp-1">
                    {product.description}
                  </div>
                  <div
                    className="flex flex-wrap w-full gap-2 px-3 pt-2 pb-5 sm:flex-row sm:items-center"
                    style={{ rowGap: "0.5rem", columnGap: "0.5rem" }}
                  >
                    <button
                      className={`flex items-center justify-center w-8 h-8 text-lg font-bold border rounded-full ${
                        qty <= 0
                          ? "bg-gray-100 text-gray-400 cursor-not-allowed"
                          : "hover:bg-gray-100"
                      }`}
                      onClick={() => qty > 0 && handleQty(product._id, -1)}
                      aria-label="Decrease quantity"
                      disabled={qty <= 0}
                    >
                      –
                    </button>
                    <span className="w-8 font-medium text-center break-words">
                      {qty}
                    </span>
                    <button
                      className={`flex items-center justify-center w-8 h-8 text-lg font-bold border rounded-full ${
                        qty >= maxStock
                          ? "bg-gray-100 text-gray-400 cursor-not-allowed"
                          : "hover:bg-gray-100"
                      }`}
                      onClick={() =>
                        qty < maxStock && handleQty(product._id, 1)
                      }
                      aria-label="Increase quantity"
                      disabled={qty >= maxStock}
                    >
                      +
                    </button>
                    <button
                      className={`w-full min-w-[120px] sm:w-auto py-2 ml-0 sm:ml-2 text-sm font-semibold text-white transition rounded-lg ${
                        qty > 0 && qty <= maxStock
                          ? "bg-indigo-600 hover:bg-indigo-700"
                          : "bg-gray-300 cursor-not-allowed"
                      }`}
                      onClick={() =>
                        qty > 0 && qty <= maxStock && handleAddToOrder(product)
                      }
                      disabled={!(qty > 0 && qty <= maxStock)}
                    >
                      Add to Order
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
      {screenWidth >= 640 && (
        <div className="flex-shrink-0 w-full lg:w-80">
          <div className="sticky flex flex-col min-w-0 p-6 bg-white border border-gray-100 shadow-md top-4 rounded-2xl">
            <h3 className="mb-4 text-xl font-bold text-gray-900">
              Order Summary
            </h3>
            <hr className="mb-4" />
            {order.length === 0 ? (
              <div className="flex-1 text-center text-gray-400">
                No items added yet.
              </div>
            ) : (
              <div className="flex-1 mb-4 space-y-4">
                {order.map((item) => (
                  <div
                    key={item._id}
                    className="flex items-center gap-3 p-2 border rounded-lg"
                  >
                    <img
                      src={
                        item.image
                          ? `http://localhost:5000/${item.image.replace(
                              /\\/g,
                              "/"
                            )}`
                          : PLACEHOLDER_IMG
                      }
                      alt={item.name}
                      className="object-cover w-12 h-12 bg-gray-100 rounded"
                      onError={(e) => (e.target.src = PLACEHOLDER_IMG)}
                    />
                    <div className="flex-1 min-w-0">
                      <div className="text-sm font-medium line-clamp-1">
                        {item.name}
                      </div>
                      <div className="text-xs text-gray-500">
                        Qty: {item.qty}
                      </div>
                    </div>
                    <div className="text-sm font-semibold whitespace-nowrap">
                      Rs. {Number(item.price) * item.qty}
                    </div>
                    <button
                      className="text-gray-400 hover:text-red-500"
                      onClick={() => handleRemoveFromOrder(item._id)}
                      aria-label="Remove item"
                    >
                      🗑️
                    </button>
                  </div>
                ))}
              </div>
            )}
            <div className="flex justify-between mb-4 text-lg font-bold">
              <span>Total</span>
              <span>Rs. {total}</span>
            </div>
            <button
              className={`w-full py-3 font-semibold text-white transition rounded-lg ${
                order.length === 0
                  ? "bg-gray-300 cursor-not-allowed"
                  : "bg-indigo-600 hover:bg-indigo-700"
              }`}
              disabled={order.length === 0}
              onClick={handlePlaceOrder}
            >
              Place Order
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default AdminOrder;
