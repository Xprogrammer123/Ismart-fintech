import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Mainpage from "./components/Mainpage";
import MainPagein from "./components/MainPagein";
import SelectProvider from "./components/SelectProvider";
import Data from "./Pages/Data";
import Airtime from "./Pages/Airtime";
import AirtimeToCash from "./Pages/AirtimeToCash";

const AppRoutes = () => {
	return (
		<Router>
			<Routes>
				{/* Define routes for your pages */}
				<Route path="/" element={<Mainpage />} />
				<Route path="/mainpagein" element={<MainPagein />} />
				<Route path="/selectprovider" element={<SelectProvider />} />

				<Route path="'/data" element={<Data />} />
				<Route path="'/airtime" element={<Airtime />} />
				<Route path="'/airtimeToCash" element={<AirtimeToCash />} />
			</Routes>
		</Router>
	);
};

export default AppRoutes;

