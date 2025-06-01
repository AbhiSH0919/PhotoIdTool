/* ====================STYLES==================== */
import "./App.css";
import "@assets/resources/styles/css/style.css";

/* ====================REACT==================== */
import { useState } from "react";

/* ====================R-R-D==================== */
import { BrowserRouter, Route, Routes } from "react-router-dom";

/* ====================COMPONENTS==================== */
import { Header } from "./main/dev_abhi/components/layout/header/Header";
import { Footer } from "./main/dev_abhi/components/layout/footer/Footer";

/* ====================PAGES==================== */
import { Home } from "./main/dev_abhi/pages/home/Home";
import { NotFound } from "./main/dev_abhi/pages/notFound/NotFound";
/* ============================================================ */

function App() {
	return (
		<BrowserRouter>
			<Header />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/*" element={<NotFound />} />
			</Routes>
			<Footer />
		</BrowserRouter>
	);
}

export default App;
