import { useState } from "react";

import "./App.css";
import "@assets/resources/styles/css/style.css";
import { Header } from "./main/dev_abhi/components/layout/header/Header";
import { Home } from "./main/dev_abhi/pages/home/Home";
import { Footer } from "./main/dev_abhi/components/layout/footer/Footer";
import { Route, Routes } from "react-router-dom";
import { NotFound } from "./main/dev_abhi/pages/notFound/NotFound";

function App() {
	return (
		<>
			<Header />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/*" element={<NotFound />} />
			</Routes>
			<Footer />
		</>
	);
}

export default App;
