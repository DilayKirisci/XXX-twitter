import { BrowserRouter, Routes, Route, Link, Outlet } from "react-router-dom";

import "./style.scss";

// PAGES //
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Home from "./pages/home/Home";
import Profile from "./pages/profile/Profile";

// COMPONENTS //
import LeftBar from "./components/leftbar/LeftBar";
import RightBar from "./components/rightbar/RightBar";
import Navbar from "./components/navbar/Navbar";

function App() {
	const Layout = () => {
		return (
			<div className="theme-light">
				<Navbar />
				<div style={{ display: "flex" }}>
					<LeftBar />
					<div style={{ flex: 6 }}>
						<Outlet />
					</div>
					<RightBar />
				</div>
			</div>
		);
	};

	return (
		<div className="App">
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<Layout />}>
						<Route path="/" element={<Home />}>
							{" "}
						</Route>
						<Route path="/profile/:id" element={<Profile />}>
							{" "}
						</Route>
					</Route>
					<Route path="/login" element={<Login />}></Route>
					<Route path="/register" element={<Register />}></Route>
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
