import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Mainpage from "./components/Mainpage";
import MainPagein from "./components/MainPagein";
import SelectProvider from "./components/SelectProvider";

const AppRoutes = () => {
	return (
		<Router>
			<Routes>
				{/* Define routes for your pages */}
				<Route path="/" element={<Mainpage />} />
				<Route path="/mainpagein" element={<MainPagein />} />
				<Route path="/selectprovider" element={<SelectProvider />} />
			</Routes>
		</Router>
	);
};

export default AppRoutes;

