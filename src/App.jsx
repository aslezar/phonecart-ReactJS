import React from "react";
import { AppProvider, useGlobalContext } from "./context";

// components
import Navbar from "./Navbar";
import CartContainer from "./CartContainer";
// items

function App() {
	const { loading } = useGlobalContext();
	if (loading) {
		return (
			<div className="loading">
				<h1>Loading...</h1>
			</div>
		);
	}
	return (
		<main>
			<Navbar />
			<CartContainer />
		</main>
	);
}
function Temp() {
	return (
		<AppProvider>
			<App />
		</AppProvider>
	);
}

export default Temp;