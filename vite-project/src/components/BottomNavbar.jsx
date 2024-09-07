import React, { useState } from 'react';
import { FaHome, FaSearch, FaBell, FaUser, FaPlus, FaTimes } from 'react-icons/fa';
import { ImConnection } from "react-icons/im";
import { GiTv, GiLightningArc } from "react-icons/gi";
import { TbTransferVertical } from "react-icons/tb";

const BottomNavbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="relative">
      {/* Fixed Bottom Navbar with 4/5 width */}
      <nav className="fixed bottom-0 left-0 md:w-4/5 w-full bg-slate-100 text-custom-color flex justify-between items-center px-10 py-3 rounded-t-lg ">

        <FaHome className="text-3xl" />
        <FaSearch className="text-3xl" />

        {/* Round + Button, which turns to a X */}
        <button
          onClick={toggleMenu}
          className="relative bottom-4 bg-custom-color text-white rounded-full p-4"
        >
          {isMenuOpen ? <FaTimes className="text-3xl" /> : <FaPlus className="text-3xl" />}
        </button>

        <FaBell className="text-3xl" />
        <FaUser className="text-3xl" />
      </nav>

      {/* Overlay Div with 4 Boxes, appearing anywhere */}
      {isMenuOpen && (
  <div className="fixed bottom-20 left-2/4 transform -translate-x-1/2 shadow-lg rounded-lg p-4 w-64 z-40 flex justify-between bg-white">
    <div className="grid grid-cols-2 gap-4">
      <div className="h-24 w-28 bg-slate-200 text-custom-color font-semibold text-center pt-3 rounded-lg text-lg ">
      <ImConnection className="text-3xl ml-10" /> Airtime
      </div>
      <div className="h-24 w-28 bg-slate-200 text-custom-color font-semibold text-center pt-3 rounded-lg text-lg ">
      <GiTv className="text-3xl ml-10" /> TV subscription
      </div>
      <div className="h-24 w-28 bg-slate-200 text-custom-color font-semibold text-center pt-3 rounded-lg text-lg ">
      <TbTransferVertical className="text-3xl ml-10"/>  Data
      </div>
      <div className="h-24 w-28 bg-slate-200 text-custom-color font-semibold text-center pt-3 rounded-lg text-lg ">
      <GiLightningArc className="text-3xl ml-10" /> Electricity Bills
      </div>
    </div>
  </div>
)}

    </div>
  );
};

export default BottomNavbar;
