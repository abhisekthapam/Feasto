import React from "react";
import { FiBell, FiSearch, FiMessageCircle } from "react-icons/fi";

function Topbar({ user }) {
  return (
    <header className="sticky top-0 z-10 flex items-center justify-between px-8 py-4 bg-white border-b">
      <div>
        <h2 className="text-lg font-semibold text-gray-800">Welcome, {user?.name || "Admin"}</h2>
        <div className="mt-1 text-xs text-gray-400">{new Date().toLocaleDateString()} | {new Date().toLocaleTimeString()} GMT</div>
      </div>
      <div className="flex items-center gap-4">
        <div className="relative">
          <input
            type="text"
            placeholder="Search"
            className="px-3 py-2 text-sm bg-gray-100 rounded-lg outline-none focus:ring-2 focus:ring-indigo-200"
          />
          <button className="absolute text-gray-400 right-2 top-2">
            <FiSearch />
          </button>
        </div>
        <button className="text-gray-500 hover:text-indigo-600">
          <FiMessageCircle size={20} />
        </button>
        <button className="text-gray-500 hover:text-indigo-600">
          <FiBell size={20} />
        </button>
        <div className="flex items-center justify-center w-8 h-8 font-bold text-indigo-600 bg-indigo-100 rounded-full">
          {user?.name?.[0] || "A"}
        </div>
      </div>
    </header>
  );
}

export default Topbar;
