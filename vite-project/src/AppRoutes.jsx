import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Mainpage from "./components/Mainpage";
import Mainpagein from "./components/Mainpagein";
import SelectProvider from "./components/SelectProvider";

const AppRoutes = () => {
	return (
		<Router>
			<Routes>
				{/* Define routes for your pages */}
				<Route path="/" element={<Mainpage />} />
				<Route path="/mainpagein" element={<Mainpagein />} />
				<Route path="/selectprovider" element={<SelectProvider />} />
			</Routes>
		</Router>
	);
};

export default AppRoutes;
