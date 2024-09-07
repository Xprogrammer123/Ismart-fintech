import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { BsQrCode, BsTicketPerforated, BsShop } from "react-icons/bs";
import { FaMoneyBillTransfer } from "react-icons/fa6";
import { CgGames } from "react-icons/cg";
import { PiCoinLight } from "react-icons/pi";

const Sidebar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <>
      {/* Button to trigger the sidebar on mobile (hamburger) */}
      <button
        onClick={toggleSidebar}
        className="fixed top-6 right-4 z-50 text-custom-color md:hidden"
      >
        {isSidebarOpen ? <FaTimes className="text-2xl" /> : <FaBars className="text-2xl" />}
      </button>

      {/* Sidebar */}
      <div
        className={`fixed top-0 right-0 w-full h-full bg-slate-100 transition-transform md:translate-y-2/4 md:translate-x-80 md:ml-10 md:w-2/4 md:h-screen  transform z-40 ${
          isSidebarOpen ? 'translate-x-0' : 'translate-x-full'
        } md:translate-x-0 md:relative md:flex md:flex-col`}
      >
        {/* Sidebar Header (visible for all screen sizes) */}
        <div className="flex justify-between items-center p-4 bg-custom-color">
          <h2 className="text-white text-lg">Sidebar</h2>

          {/* Close button (Times icon) visible only on mobile screens */}
          <button onClick={toggleSidebar} className="md:hidden">
            <FaTimes className="text-white text-xl" />
          </button>
        </div>

        {/* Sidebar Buttons */}
        <div className="grid grid-cols-2 space-y-2 mb-3 p-2">
          <button className="md:h-32 md:w-36 h-48 w-48 shadow rounded-xl text-custom-color font-semibold text-xl mt-2">
            <BsQrCode className="text-3xl ml-10" /> QRcode payment
          </button>
          <button className="md:h-32 md:w-36 h-48 w-48 shadow rounded-xl text-custom-color font-semibold text-xl">
            <BsTicketPerforated className="text-3xl ml-10" /> Sales of ticket
          </button>
          <button className="md:h-32 md:w-36 h-48 w-48 shadow rounded-xl text-custom-color font-semibold text-xl">
            <CgGames className="text-3xl ml-10" /> Games
          </button>
          <button className="md:h-32 md:w-36 h-48 w-48 shadow rounded-xl text-custom-color font-semibold text-xl">
            <PiCoinLight className="text-3xl ml-10" /> Tap Coin
          </button>
          <button className="md:h-32 md:w-36 h-48 w-48 shadow rounded-xl text-custom-color font-semibold text-xl">
            <FaMoneyBillTransfer className="text-3xl ml-10" /> Airtime2Cash
          </button>
          <button className="md:h-32 md:w-36 h-48 w-48 shadow rounded-xl text-custom-color font-semibold text-xl">
            <BsShop className="text-3xl ml-10" /> Market Place
          </button>
        </div>

        {/* Sidebar Image */}
        <div className="rounded-2xl w-4/5 ml-3 h-28 shadow-lg mb-3 mr-3">
          <img
            src="https://img.freepik.com/free-vector/hand-drawn-unboxing-illustration_23-2150280741.jpg"
            alt="Unboxing"
            className="object-contain bg-no-repeat rounded-2xl "
          />
        </div>
      </div>
    </>
  );
};

export default Sidebar;
