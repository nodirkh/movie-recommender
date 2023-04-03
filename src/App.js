import React from "react";
import { Routes, Route } from "react-router-dom";
import Homepage from "./Routes/Homepage";
import Navbar from "./components/Navbar";
import Recommendation from "./Routes/Recommendation";

function App() {
	return (
		<React.Fragment>
			<Navbar />
			<Routes>
				<Route path="/" element={<Homepage></Homepage>}></Route>
				<Route
					path="/recom"
					element={<Recommendation></Recommendation>}
				></Route>
			</Routes>
		</React.Fragment>
	);
}

export default App;
