import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Mainpage from "./components/Mainpage";
import MainPagein from "./components/MainPagein";
import SelectProvider from "./components/SelectProvider";
import Data from "./Pages/Data";
import Airtime from "./Pages/Airtime";
import AirtimeToCash from "./Pages/AirtimeToCash";
import AirtimeAmount from "./components/Components/AirtimeAmount";
import AirtimePopup from "./components/Components/Modals/AirtimePopup";

const AppRoutes = () => {
	const [ selectedCard, setSelectedCard ] = useState(null)
	const [ formData, setFormData ] = useState({})

	const renderPopup = () => {
		switch(selectedCard){
		  case 'airtimePopup' : 
			return (
			  <div>
				<AirtimePopup formData={formData} setFormData={setFormData} />
			  </div>
			)

			default:
				return null;
		}
	}

	const closePopup = () => {
		setSelectedCard(null)
	  }
	
	return (
		<div className="phone:pl-4 phone:pr-4 pr-4 pl-4">
		{
			selectedCard && (
			  <div className='fixed w-[100vw] h-[100vh] top-0 left-0 bg-black bg-opacity-40 z-50 overflow-x-hidden'>
				<div className={`bg-white w-full absolute flex flex-col bottom-0 left-0 rounded-tl-[4rem] rounded-tr-[4rem] pl-6 pr-6 pt-4 pb-4`}>
				  <span onClick={closePopup} className='text-[40px] small-phone:text-[35px] font-extralight border-[3px] text-gray-600 cursor-pointer rounded-full border-gray-600 h-[40px] w-[40px] small-phone:h-[35px] small-phone:w-[35px] flex items-center justify-center ml-auto'>&times;</span>
				  <div className='h-full relative'>
					{
					  renderPopup()
					}
				  </div>
				</div>
			  </div>
			)
		  }
			<Router>
				<Routes>
					{/* Define routes for your pages */}
					<Route path="/" element={<Mainpage />} />
					<Route path="/mainpagein" element={<MainPagein />} />
					<Route path="/selectprovider" element={<SelectProvider />} />

					<Route path="/data" element={<Data formData={formData} setFormData={setFormData} />} />
					<Route path="/airtime" element={<Airtime formData={formData} setFormData={setFormData} />} />
					<Route path="/airtimeToCash" element={<AirtimeToCash formData={formData} setFormData={setFormData} />} />
				
					<Route path="/airtime-amount" element={<AirtimeAmount formData={formData} setFormData={setFormData} setSelectedCard={setSelectedCard} />} />
				</Routes>
			</Router>
		</div>
	);
};

export default AppRoutes;

