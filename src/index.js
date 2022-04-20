import React from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import Router from "./router";
import { store } from "store";

import "./style.css";

const container = document.getElementById("app");
const root = createRoot(container);

root.render(
	<React.StrictMode>
		<Provider store={store}>
			<BrowserRouter>
				<Router />
			</BrowserRouter>
		</Provider>
	</React.StrictMode>,
);

window.onload = () => {
	const link = document.createElement("link");
	link.rel = "stylesheet";
	link.href = "https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200;300;400;500;600;700;800;900&display=swap";
	document.head.appendChild(link);
};
