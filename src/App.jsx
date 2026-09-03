import { Route, Routes } from "react-router-dom";
import { Navbar } from "./components/Navigation/Navbar";
import { Home } from "./pages/Home";

export const App = () => {
	return (
		<>
			<Navbar />

			<div>
				<Routes>
					<Route path="/" element={<Home />} />
				</Routes>
			</div>
		</>
	);
};
