import React, { useState } from "react";
import { toast as showToast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import DashboadImage from "../../../assets/super-admin/dashboard.png";
import { FaCheckCircle, FaTimesCircle, FaEnvelope } from "react-icons/fa";

const SuperAdminDashboard = () => {
  // Track hidden rows by index
  const [hiddenRows, setHiddenRows] = useState([]);

  // Confirmation modal state
  const [modal, setModal] = useState({ show: false, index: null, type: null });

  // Show confirmation modal
  const handleAction = (i, type) => {
    setModal({ show: true, index: i, type });
  };

  // Undo logic
  const [undoData, setUndoData] = useState(null);

  // Confirm action
  const confirmAction = () => {
    setHiddenRows((prev) => [...prev, modal.index]);
    setUndoData({ index: modal.index, type: modal.type });
    showToast(
      <div className="flex flex-col items-start">
        <span>
          {modal.type === "approve" ? "Approved" : "Rejected"} successfully!
        </span>
        <button
          className="px-3 py-1 mt-2 text-xs font-semibold text-gray-100 transition-colors bg-gray-800 border border-gray-700 rounded shadow hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-yellow-400"
          onClick={() => handleUndo(modal.index)}
        >
          Undo
        </button>
      </div>,
      {
        position: "top-right",
        autoClose: 15000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        closeButton: true,
      }
    );
    setModal({ show: false, index: null, type: null });
  };

  // Undo handler
  const handleUndo = (index) => {
    setHiddenRows((prev) => prev.filter((i) => i !== index));
    setUndoData(null);
    showToast.info("Action undone.", {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      theme: "colored",
    });
  };

  // Cancel modal
  const cancelModal = () => setModal({ show: false, index: null, type: null });

  return (
    <div className="bg-[#1D1D1D] min-h-screen  ">
      <div className="flex flex-col items-center justify-between gap-6 p-4 md:flex-row">
        <div className="flex-1 space-y-3 text-center md:space-y-2 md:text-left">
          <h2 className="text-base font-normal text-white font-poppins md:text-lg lg:text-xl">
            Welcome to Briger System Admin
          </h2>
          <p className="mb-6 text-white md:max-w-lg ">
            Manage your restaurants system efficiently. Monitor activities,
            approve sign-ups and keep track of all operations from this
            dashboard.
          </p>
          <button className="bg-[#FFD700] text-black font-medium rounded-md py-2 px-4 hover:bg-yellow-400 transition">
            Quick Tour
          </button>
        </div>

        <div className="flex-1">
          <img
            src={DashboadImage}
            alt="Dashboard"
            className="object-cover object-center w-full h-auto rounded"
          />
        </div>
      </div>
      <div className="w-full p-4 border-t border-r border-[#9CA3AF] mt-2">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          <div className="flex flex-col space-y-6 p-4 bg-[#252525] rounded-lg">
            <div className="flex items-center justify-between space-x-2">
              <h3 className="text-base text-white md:text-lg">
                Total Restaurants
              </h3>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="27"
                height="26"
                viewBox="0 0 27 26"
                fill="none"
              >
                <circle cx="13.5273" cy="13.384" r="12.5859" fill="#3B3721" />
                <path
                  d="M8.2832 7.09106V11.4962..."
                  stroke="#FFD700"
                  strokeWidth="0.9"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M10.7988 7.09106V19.6772"
                  stroke="#FFD700"
                  strokeWidth="0.9"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M19.6112 15.2721V7.09106..."
                  stroke="#FFD700"
                  strokeWidth="0.9"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <div className="flex flex-col space-y-2">
              <span className="text-base text-white md:text-2xl">124</span>
              <div className="flex items-center space-x-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="14"
                  height="13"
                  viewBox="0 0 14 13"
                  fill="none"
                >
                  <path
                    d="M11.04 8.61816L7.10693 4.68507L3.17383 8.61816"
                    stroke="#29BF71"
                    strokeWidth="1.35"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <p className="text-[#29BF71]">+12% from last week</p>
              </div>
            </div>
          </div>
          <div className="flex flex-col space-y-6 p-4 bg-[#252525] rounded-lg">
            <div className="flex items-center justify-between space-x-2">
              <h3 className="text-base text-white md:text-lg">Active Users</h3>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="23"
                height="23"
                viewBox="0 0 23 23"
                fill="none"
              >
                <circle cx="11.2712" cy="11.7219" r="11.1872" fill="#3B3721" />
                <path
                  d="M9.81765 10.2156C11.3835 10.2156 12.6529 8.94624 12.6529 7.38039C12.6529 5.81454 11.3835 4.54517 9.81765 4.54517C8.2518 4.54517 6.98242 5.81454 6.98242 7.38039C6.98242 8.94624 8.2518 10.2156 9.81765 10.2156Z"
                  stroke="#FFD700"
                  stroke-width="0.88887"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M14.354 14.7522C14.354 13.5491 13.876 12.3952 13.0253 11.5445C12.1746 10.6938 11.0207 10.2158 9.81761 10.2158C8.61449 10.2158 7.46065 10.6938 6.60992 11.5445C5.75919 12.3952 5.28125 13.5491 5.28125 14.7522"
                  stroke="#FFD700"
                  stroke-width="0.88887"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
            <div className="flex flex-col space-y-2">
              <span className="text-base text-white md:text-2xl">1,893</span>
              <div className="flex items-center space-x-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="14"
                  height="13"
                  viewBox="0 0 14 13"
                  fill="none"
                >
                  <path
                    d="M11.04 8.61816L7.10693 4.68507L3.17383 8.61816"
                    stroke="#29BF71"
                    strokeWidth="1.35"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <p className="text-[#29BF71]">+7.5% from last week</p>
              </div>
            </div>
          </div>
          <div className="flex flex-col space-y-6 p-4 bg-[#252525] rounded-lg">
            <div className="flex items-center justify-between space-x-2">
              <h3 className="text-base text-white md:text-lg">
                Pending Approvals
              </h3>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="23"
                height="23"
                viewBox="0 0 23 23"
                fill="none"
              >
                <circle cx="11.5232" cy="11.6575" r="11.1365" fill="#3B3721" />
                <path
                  d="M10.2407 16.5088C13.6615 16.5088 16.4346 13.7357 16.4346 10.3149C16.4346 6.89417 13.6615 4.12109 10.2407 4.12109C6.81995 4.12109 4.04688 6.89417 4.04688 10.3149C4.04688 13.7357 6.81995 16.5088 10.2407 16.5088Z"
                  stroke="#FFD700"
                  stroke-width="0.884835"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M10.2422 6.59863V10.3149L12.7197 11.5537"
                  stroke="#FFD700"
                  stroke-width="0.884835"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
            <div className="flex flex-col space-y-2">
              <span className="text-base text-white md:text-2xl">13</span>
              <div className="flex items-center space-x-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="14"
                  height="13"
                  viewBox="0 0 14 13"
                  fill="none"
                >
                  <path
                    d="M11.04 8.61816L7.10693 4.68507L3.17383 8.61816"
                    stroke="#29BF71"
                    strokeWidth="1.35"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <p className="text-[#29BF71]">+12% from last week</p>
              </div>
            </div>
          </div>
          <div className="flex flex-col space-y-6 p-4 bg-[#252525] rounded-lg">
            <div className="flex items-center justify-between space-x-2">
              <h3 className="text-base text-white md:text-lg">
                Today’s Orders
              </h3>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <circle cx="12.4166" cy="11.6872" r="11.5534" fill="#3B3721" />
                <path
                  d="M8.47723 16.6622C8.8314 16.6622 9.11852 16.3751 9.11852 16.0209C9.11852 15.6668 8.8314 15.3796 8.47723 15.3796C8.12305 15.3796 7.83594 15.6668 7.83594 16.0209C7.83594 16.3751 8.12305 16.6622 8.47723 16.6622Z"
                  stroke="#FFD700"
                  stroke-width="0.91796"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M15.5319 16.6622C15.8861 16.6622 16.1732 16.3751 16.1732 16.0209C16.1732 15.6668 15.8861 15.3796 15.5319 15.3796C15.1777 15.3796 14.8906 15.6668 14.8906 16.0209C14.8906 16.3751 15.1777 16.6622 15.5319 16.6622Z"
                  stroke="#FFD700"
                  stroke-width="0.91796"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M4.66211 3.86841H5.94469L7.65052 11.8332C7.71309 12.1249 7.8754 12.3857 8.10949 12.5706C8.34359 12.7556 8.63483 12.8531 8.93309 12.8465H15.2049C15.4968 12.846 15.7798 12.746 16.0072 12.5629C16.2345 12.3798 16.3927 12.1247 16.4554 11.8396L17.5135 7.07486H6.63087"
                  stroke="#FFD700"
                  stroke-width="0.91796"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
            <div className="flex flex-col space-y-2">
              <span className="text-base text-white md:text-2xl">342</span>
              <div className="flex items-center space-x-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="14"
                  height="13"
                  viewBox="0 0 14 13"
                  fill="none"
                >
                  <path
                    d="M11.04 8.61816L7.10693 4.68507L3.17383 8.61816"
                    stroke="#29BF71"
                    strokeWidth="1.35"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <p className="text-[#29BF71]">+12% from last week</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col lg:flex-row gap-6 bg-[#1e1e1e] p-4  text-white">
        <div className="w-full lg:w-3/4 bg-[#2a2a2a] p-6 rounded-lg shadow">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold md:text-xl">
              Recent Activities
            </h2>
            <button className="text-xl text-gray-400 hover:text-white">
              ⋮
            </button>
          </div>
          <ul className="space-y-6">
            <li className="pb-4 border-b border-gray-700">
              <div className="flex items-center space-x-3">
                <span className="w-2 h-2 bg-yellow-400 rounded-full"></span>
                <p className="text-sm font-medium">New restaurant approved</p>
              </div>
              <p className="ml-5 text-sm text-gray-400">
                Italian Bistro has been approved and credentials sent.
              </p>
              <p className="mt-1 ml-5 text-xs text-gray-500">15 minutes ago</p>
            </li>
            <li className="pb-4 border-b border-gray-700">
              <div className="flex items-center space-x-3">
                <span className="w-2 h-2 bg-green-400 rounded-full"></span>
                <p className="text-sm font-medium">System update completed</p>
              </div>
              <p className="ml-5 text-sm text-gray-400">
                Menu management module has been updated to v2.4.1
              </p>
              <p className="mt-1 ml-5 text-xs text-gray-500">2 hours ago</p>
            </li>
            <li className="pb-4 border-b border-gray-700">
              <div className="flex items-center space-x-3">
                <span className="w-2 h-2 bg-red-500 rounded-full"></span>
                <p className="text-sm font-medium">Failed login attempt</p>
              </div>
              <p className="ml-5 text-sm text-gray-400">
                Multiple failed login attempts for user john@seafoodplace.com
              </p>
              <p className="mt-1 ml-5 text-xs text-gray-500">3 hours ago</p>
            </li>
            <li className="pb-4 border-b border-gray-700">
              <div className="flex items-center space-x-3">
                <span className="w-2 h-2 bg-green-400 rounded-full"></span>
                <p className="text-sm font-medium">New sign-up request</p>
              </div>
              <p className="ml-5 text-sm text-gray-400">
                Sushi Express has requested to join the platform
              </p>
              <p className="mt-1 ml-5 text-xs text-gray-500">Yesterday</p>
            </li>
            <li>
              <div className="flex items-center space-x-3">
                <span className="w-2 h-2 bg-yellow-400 rounded-full"></span>
                <p className="text-sm font-medium">Menu updated</p>
              </div>
              <p className="ml-5 text-sm text-gray-400">
                Urban Grill has updated their menu with 12 new items
              </p>
              <p className="mt-1 ml-5 text-xs text-gray-500">Yesterday</p>
            </li>
          </ul>
          <div className="mt-6 text-right">
            <button className="text-sm text-yellow-400 hover:underline">
              View All Activities
            </button>
          </div>
        </div>
        <div className="w-full lg:w-1/3 bg-[#2a2a2a] p-6 rounded-lg space-y-6 shadow">
          <div>
            <h3 className="mb-4 text-base font-semibold text-white">
              Quick Actions
            </h3>
            <button className="flex items-center justify-between w-full px-4 py-2 font-semibold text-black bg-yellow-400 rounded-md">
              <span className="flex items-center gap-2 ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="17"
                  height="18"
                  viewBox="0 0 17 18"
                  fill="none"
                >
                  <path
                    d="M13.5967 5.05068V7.62353M13.5967 7.62353V10.1964M13.5967 7.62353H16.1695M13.5967 7.62353H11.0238M9.09417 4.08586C9.09417 4.85352 8.78922 5.58974 8.24641 6.13255C7.70359 6.67537 6.96738 6.98032 6.19972 6.98032C5.43206 6.98032 4.69585 6.67537 4.15303 6.13255C3.61022 5.58974 3.30527 4.85352 3.30527 4.08586C3.30527 3.31821 3.61022 2.58199 4.15303 2.03917C4.69585 1.49636 5.43206 1.19141 6.19972 1.19141C6.96738 1.19141 7.70359 1.49636 8.24641 2.03917C8.78922 2.58199 9.09417 3.31821 9.09417 4.08586ZM0.732422 15.1148V15.0205C0.732422 13.5705 1.30844 12.1798 2.33376 11.1545C3.35907 10.1292 4.7497 9.55317 6.19972 9.55317C7.64974 9.55317 9.04037 10.1292 10.0657 11.1545C11.091 12.1798 11.667 13.5705 11.667 15.0205V15.114C10.0165 16.108 8.12559 16.6318 6.19886 16.6285C4.19976 16.6285 2.3293 16.0754 0.732422 15.114V15.1148Z"
                    stroke="#030303"
                    stroke-width="1.10265"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
                Approve Sign-Ups
              </span>
              <span className="bg-black text-yellow-400 text-xs font-bold px-2 py-0.5 rounded-full">
                3
              </span>
            </button>

            <button className="flex items-center w-full px-4 py-2 mt-3 text-white border border-gray-600 rounded-md hover:bg-gray-700">
              <span className="mr-2 text-lg text-yellow-400">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="21"
                  height="21"
                  viewBox="0 0 21 21"
                  fill="none"
                >
                  <path
                    d="M10.884 3.89917V16.304M17.0864 10.1016H4.68164"
                    stroke="#FFD700"
                    stroke-width="1.10265"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </span>
              Add Restaurant
            </button>

            <button className="flex items-center w-full px-4 py-2 mt-3 text-white border border-gray-600 rounded-md hover:bg-gray-700">
              <span className="mr-2 text-lg text-yellow-400">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="21"
                  height="21"
                  viewBox="0 0 21 21"
                  fill="none"
                >
                  <path
                    d="M17.4997 3.61816H7.57585C6.66238 3.61816 5.92188 4.35867 5.92188 5.27214V12.715C5.92188 13.6285 6.66238 14.369 7.57585 14.369H17.4997C18.4132 14.369 19.1537 13.6285 19.1537 12.715V5.27214C19.1537 4.35867 18.4132 3.61816 17.4997 3.61816Z"
                    stroke="#FFD700"
                    stroke-width="1.10265"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M19.1537 6.09912L13.2821 9.22513C12.8107 9.47323 12.2649 9.47323 11.7935 9.22513L5.92188 6.09912"
                    stroke="#FFD700"
                    stroke-width="1.10265"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M2.61523 6.92627V16.0231C2.61523 16.9328 3.35952 17.6771 4.26921 17.6771H15.847"
                    stroke="#FFD700"
                    stroke-width="1.10265"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </span>
              Send Credentials
            </button>

            <button className="flex items-center w-full px-4 py-2 mt-3 text-white border border-gray-600 rounded-md hover:bg-gray-700">
              <span className="mr-2 text-lg text-yellow-400">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="21"
                  height="21"
                  viewBox="0 0 21 21"
                  fill="none"
                >
                  <path
                    d="M9.0148 3.70095C9.08923 3.25272 9.47791 2.92358 9.93275 2.92358H10.8366C11.2915 2.92358 11.6802 3.25272 11.7546 3.70095L11.8778 4.44028C11.9357 4.79092 12.1954 5.0721 12.5229 5.20938C12.852 5.345 13.2299 5.32681 13.5194 5.12006L14.1289 4.68424C14.3081 4.5561 14.5271 4.49574 14.7466 4.51392C14.9662 4.53209 15.1723 4.62761 15.328 4.78348L15.9673 5.42356C16.2898 5.74526 16.3311 6.25221 16.0665 6.6227L15.6307 7.23218C15.4239 7.52163 15.4057 7.89874 15.5422 8.22788C15.6787 8.55619 15.9598 8.81504 16.3113 8.87293L17.0498 8.99697C17.4989 9.0714 17.8272 9.45926 17.8272 9.9141V10.8188C17.8272 11.2737 17.4989 11.6624 17.0498 11.7368L16.3105 11.86C15.9598 11.9179 15.6787 12.1767 15.5422 12.5051C15.4057 12.8342 15.4239 13.2113 15.6307 13.5007L16.0665 14.1111C16.3311 14.4807 16.289 14.9877 15.9673 15.3102L15.3272 15.9495C15.1715 16.1051 14.9656 16.2005 14.7462 16.2187C14.5268 16.2368 14.3081 16.1766 14.1289 16.0487L13.5186 15.6129C13.2291 15.4061 12.852 15.3879 12.5237 15.5244C12.1946 15.6608 11.9365 15.942 11.8778 16.2927L11.7546 17.032C11.6802 17.4802 11.2915 17.8093 10.8366 17.8093H9.93192C9.47708 17.8093 9.08923 17.4802 9.01397 17.032L8.89158 16.2927C8.83286 15.942 8.57401 15.6608 8.2457 15.5236C7.91656 15.3879 7.53945 15.4061 7.25001 15.6129L6.63969 16.0487C6.27003 16.3133 5.76308 16.2711 5.44056 15.9495L4.8013 15.3094C4.64544 15.1536 4.54991 14.9476 4.53174 14.728C4.51357 14.5084 4.57392 14.2895 4.70206 14.1102L5.13788 13.5007C5.34463 13.2113 5.36282 12.8342 5.2272 12.5051C5.09074 12.1767 4.80874 11.9179 4.4581 11.86L3.71877 11.736C3.27055 11.6615 2.94141 11.2728 2.94141 10.8188V9.9141C2.94141 9.45926 3.27055 9.07058 3.71877 8.99615L4.4581 8.87293C4.80874 8.81504 5.09074 8.55619 5.2272 8.22788C5.36365 7.89874 5.34546 7.52163 5.13788 7.23218L4.70289 6.62187C4.57475 6.44261 4.51439 6.2237 4.53257 6.0041C4.55074 5.78451 4.64626 5.57849 4.80213 5.42274L5.44139 4.78348C5.59714 4.62761 5.80316 4.53209 6.02275 4.51392C6.24234 4.49574 6.46126 4.5561 6.64052 4.68424L7.25001 5.12006C7.53945 5.32681 7.91739 5.345 8.2457 5.20855C8.57401 5.0721 8.83286 4.79092 8.89075 4.44028L9.0148 3.70095Z"
                    stroke="#FFD700"
                    stroke-width="1.10265"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M12.8662 10.3665C12.8662 11.0245 12.6048 11.6555 12.1396 12.1208C11.6743 12.586 11.0432 12.8474 10.3853 12.8474C9.72727 12.8474 9.09622 12.586 8.63095 12.1208C8.16568 11.6555 7.9043 11.0245 7.9043 10.3665C7.9043 9.70847 8.16568 9.07742 8.63095 8.61215C9.09622 8.14688 9.72727 7.8855 10.3853 7.8855C11.0432 7.8855 11.6743 8.14688 12.1396 8.61215C12.6048 9.07742 12.8662 9.70847 12.8662 10.3665Z"
                    stroke="#FFD700"
                    stroke-width="1.10265"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </span>
              System Settings
            </button>
          </div>
          <div>
            <h3 className="mb-4 text-base font-semibold text-white">
              System Status
            </h3>
            <div className="space-y-3 text-sm text-gray-300">
              <div className="flex items-center justify-between">
                <span className="flex items-center gap-2">
                  <svg
                    className="w-4 h-4 text-green-400"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <circle cx="12" cy="12" r="10" />
                  </svg>
                  System Uptime
                </span>
                <span className="text-green-400">99.8%</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="flex items-center gap-2">
                  <svg
                    className="w-4 h-4 text-yellow-400"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 12c2.21 0 4-1.79 4-4S14.21 4 12 4s-4 1.79-4 4 1.79 4 4 4z" />
                    <path d="M12 14c-4.42 0-8 1.79-8 4v2h16v-2c0-2.21-3.58-4-8-4z" />
                  </svg>
                  Active Sessions
                </span>
                <span>247</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="flex items-center gap-2">
                  <svg
                    className="w-4 h-4 text-orange-400"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M4 4h16v16H4z" />
                  </svg>
                  Server Status
                </span>
                <span className="text-green-400">Operational</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full p-4 text-white ">
        <div className="bg-[#2a2a2a] p-4 md:p-4 rounded-lg">
          <div className="flex flex-col items-start justify-between gap-4 mb-4 md:flex-row md:items-center">
            <h2 className="text-lg font-semibold md:text-xl">
              Pending Approvals
            </h2>

            <div className="relative w-full md:w-64">
              <input
                type="text"
                placeholder="Search..."
                className="w-full py-2 pl-10 pr-4 text-sm placeholder-gray-400 bg-transparent border border-gray-500 rounded-md focus:outline-none focus:ring-1 focus:ring-yellow-400"
              />
              <svg
                className="absolute left-3 top-2.5 h-4 w-4 text-gray-400"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M12.9 14.32a8 8 0 111.414-1.414l4.387 4.387a1 1 0 01-1.414 1.414l-4.387-4.387zM8 14a6 6 0 100-12 6 6 0 000 12z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
          </div>

          <div className="space-y-4">
            {[
              {
                name: "Himalayan Delights",
                owner: "Sita Gurung",
                location: "Pokhara, Nepal",
                date: "Shrawan 4, 2082",
              },
              {
                name: "Everest Spice",
                owner: "Ram Shrestha",
                location: "Kathmandu, Nepal",
                date: "Ashar 28, 2082",
              },
              {
                name: "Newa Kitchen",
                owner: "Bina Maharjan",
                location: "Bhaktapur, Nepal",
                date: "Jestha 15, 2082",
              },
              {
                name: "Sagarmatha Cafe",
                owner: "Kiran Rai",
                location: "Dharan, Nepal",
                date: "Baisakh 30, 2082",
              },
            ].map(({ name, owner, location, date }, i) =>
              hiddenRows.includes(i) ? null : (
                <div
                  key={i}
                  className="flex flex-col md:flex-row items-start md:items-center justify-between bg-[#232323] rounded-lg shadow p-4 gap-4 border border-gray-700 hover:shadow-lg transition"
                >
                  <div className="flex items-center w-full gap-4 md:w-auto">
                    {/* Avatar/Logo */}
                    <div className="flex items-center justify-center flex-shrink-0 w-12 h-12 text-xl font-bold text-yellow-300 uppercase bg-yellow-900 rounded-full">
                      {name
                        .split(" ")
                        .map((w) => w[0])
                        .join("")}
                    </div>
                    <div>
                      <div className="text-lg font-semibold text-white">{name}</div>
                      <div className="text-sm text-gray-300">Owner: <span className="font-medium text-yellow-200">{owner}</span></div>
                      <div className="flex gap-2 mt-1 text-xs text-gray-400">
                        <span className="inline-flex items-center gap-1">
                          <svg className="inline w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20"><path d="M10 2C5.58 2 2 5.58 2 10c0 4.42 3.58 8 8 8s8-3.58 8-8c0-4.42-3.58-8-8-8zm0 14.5c-3.59 0-6.5-2.91-6.5-6.5S6.41 3.5 10 3.5 16.5 6.41 16.5 10 13.59 16.5 10 16.5z"/><circle cx="10" cy="10" r="2.5" fill="#FFD700"/></svg>
                          {location}
                        </span>
                        <span className="inline-flex items-center gap-1">
                          <svg className="inline w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20"><path d="M6 2a1 1 0 00-1 1v1H5a3 3 0 00-3 3v8a3 3 0 003 3h10a3 3 0 003-3V7a3 3 0 00-3-3h-.001V3a1 1 0 00-1-1H6zm0 2h8v1H6V4zm-1 3h10a1 1 0 011 1v8a1 1 0 01-1 1H5a1 1 0 01-1-1V8a1 1 0 011-1z"/></svg>
                          {date}
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col items-center gap-2 mt-2 md:flex-row md:gap-4 md:mt-0">
                    <span className="px-2 py-1 mb-2 text-xs text-yellow-300 bg-yellow-800 rounded-full md:mb-0">Pending</span>
                    <button
                      className="flex items-center gap-1 px-4 py-2 text-xs font-semibold text-white bg-green-600 rounded-md shadow hover:bg-green-700"
                      onClick={() => handleAction(i, "approve")}
                    >
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                      Approve
                    </button>
                    <button
                      className="flex items-center gap-1 px-4 py-2 text-xs font-semibold text-white bg-red-600 rounded-md shadow hover:bg-red-700"
                      onClick={() => handleAction(i, "reject")}
                    >
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" /></svg>
                      Reject
                    </button>
                  </div>
                  {/* Confirmation Modal */}
                  {modal.show && modal.index === i && (
                    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
                      <div className="w-full max-w-xs p-6 text-center bg-white rounded-lg shadow-lg">
                        <div className="flex flex-col items-center mb-4">
                          <div className="flex items-center justify-center w-12 h-12 mb-2 text-xl font-bold text-yellow-300 uppercase bg-yellow-900 rounded-full">
                            {name.split(" ").map((w) => w[0]).join("")}
                          </div>
                          <h3 className="text-lg font-semibold text-gray-900">{modal.type === "approve" ? "Approve" : "Reject"} Request?</h3>
                        </div>
                        <p className="mb-2 font-medium text-gray-700">{name}</p>
                        <p className="mb-4 text-sm text-gray-500">Owner: {owner}</p>
                        <p className="mb-6 text-gray-700">Are you sure you want to {modal.type === "approve" ? "approve" : "reject"} this restaurant?</p>
                        <div className="flex justify-center gap-4">
                          <button
                            className={`px-4 py-2 rounded font-semibold text-white ${modal.type === "approve" ? "bg-green-600 hover:bg-green-700" : "bg-red-600 hover:bg-red-700"}`}
                            onClick={confirmAction}
                          >
                            Yes, {modal.type === "approve" ? "Approve" : "Reject"}
                          </button>
                          <button
                            className="px-4 py-2 font-semibold text-gray-700 bg-gray-200 rounded hover:bg-gray-300"
                            onClick={cancelModal}
                          >
                            Cancel
                          </button>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              )
            )}
          </div>
          <ToastContainer
            position="top-right"
            autoClose={2000}
            hideProgressBar={false}
            newestOnTop
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="colored"
          />
          <div className="flex flex-col items-start justify-between gap-2 mt-4 text-sm text-gray-400 sm:flex-row sm:items-center">
            <span>Showing 1–4 of 14 results</span>
            <div className="flex items-center gap-2">
              <button className="w-6 h-6 text-white bg-gray-600 rounded">
                ‹
              </button>
              <button className="w-6 h-6 text-black bg-yellow-400 rounded">
                1
              </button>
              <button className="w-6 h-6 text-white bg-gray-700 rounded hover:bg-gray-500">
                2
              </button>
              <button className="w-6 h-6 text-white bg-gray-700 rounded hover:bg-gray-500">
                3
              </button>
              <button className="w-6 h-6 text-white bg-gray-600 rounded">
                ›
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full p-4 ">
        <div className="p-4 md:p-4 bg-[#2a2a2a] rounded-lg mb-8">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-semibold text-white">Recent Activity</h2>
            <a href="#" className="text-sm text-yellow-400 hover:underline">View All</a>
          </div>
          {/* ...existing activity code... */}
        </div>

        {/* Approved Restaurants Section */}
        <div className="p-4 md:p-4 bg-[#232323] rounded-lg">
          <h2 className="mb-4 text-xl font-semibold text-white">Approved Restaurants</h2>
          <div className="space-y-4">
            {/* Example static data, replace with dynamic if available */}
            {[
              { name: "Himalayan Delights", owner: "Sita Gurung", location: "Pokhara, Nepal" },
              { name: "Everest Spice", owner: "Ram Shrestha", location: "Kathmandu, Nepal" },
              { name: "Newa Kitchen", owner: "Bina Maharjan", location: "Bhaktapur, Nepal" },
              { name: "Sagarmatha Cafe", owner: "Kiran Rai", location: "Dharan, Nepal" },
            ].map(({ name, owner, location }, i) => (
              <div key={i} className="flex flex-col md:flex-row items-center md:items-center justify-between bg-[#252525] rounded-lg p-4 border border-gray-700 gap-4">
                <div className="flex items-center w-full gap-4 md:w-auto">
                  <div className="flex items-center justify-center flex-shrink-0 w-10 h-10 text-lg font-bold text-yellow-300 uppercase bg-yellow-900 rounded-full">
                    {name.split(" ").map((w) => w[0]).join("")}
                  </div>
                  <div>
                    <div className="text-base font-semibold text-white">{name}</div>
                    <div className="text-xs text-gray-300">Owner: <span className="font-medium text-yellow-200">{owner}</span></div>
                    <div className="mt-1 text-xs text-gray-400">{location}</div>
                  </div>
                </div>
                <div className="flex items-center gap-2 mt-2 md:mt-0">
                  <button className="p-2 transition hover:bg-yellow-500" title="View">
                    <svg className="w-5 h-5 text-yellow-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.477 0 8.268 2.943 9.542 7-1.274 4.057-5.065 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" /></svg>
                  </button>
                  <button className="p-2 transition hover:bg-yellow-500" title="Edit">
                    <svg className="w-5 h-5 text-yellow-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M11 5h2M12 7v10m-7 4h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
                  </button>
                  <button className="p-2 transition hover:bg-yellow-500" title="Suspend">
                    <svg className="w-5 h-5 text-yellow-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M18.364 5.636l-12.728 12.728M5.636 5.636l12.728 12.728" /></svg>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SuperAdminDashboard;
