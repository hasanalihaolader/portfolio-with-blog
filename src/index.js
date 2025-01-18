import React from "react";
import ReactDOM from "react-dom/client";
import WebRoute from "./routes/web";
import "./assets/css/index.scss";
import NavbarUI from "./components/navbar/navbar";
import Footer from "./components/common/footer";
import { BrowserRouter } from "react-router";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<React.StrictMode>
		<div class="bg-body-wallpaper">
			<BrowserRouter basename="/portfolio-with-blog">
				<NavbarUI />
				<WebRoute />
				<Footer />
			</BrowserRouter>
		</div>
	</React.StrictMode>
);
