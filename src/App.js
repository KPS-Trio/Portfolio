import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./HomePage";
import AboutPage from "./AboutPage";
import ServicesPage from "./ServicesPage";
import ProjectPage from "./ProjectPage";
import ContactPage from "./ContactPage";
import "./App.css";

function App() {
	return (
		<Routes>
			<Route path="/" element={<HomePage />} />
			<Route path="/about" element={<AboutPage />} />
			<Route path="/services" element={<ServicesPage />} />
			<Route path="/project" element={<ProjectPage />} />
			<Route path="/contact" element={<ContactPage />} />
		</Routes>

		// <div className="Head">
		// 	Hello World!
		// </div>
	);
}

export default App;
