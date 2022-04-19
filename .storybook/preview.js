import React from "react";
import { BrowserRouter } from "react-router-dom";

import "../src/style.css";

export const parameters = {
	backgrounds: {
		default: 'light',

		values: [
			{ name: 'light', value: '#fff' },
			{ name: 'dark', value: '#11a3f5' },
		],
	},

	controls: { expanded: true },
	actions: { argTypesRegex: "^on[A-Z].*" },
	layout: "padded",
};

export const decorators = [
	(Story) => (
		<BrowserRouter>
			<Story />
		</BrowserRouter>
	),
];

window.onload = () => {
	const link = document.createElement("link");
	link.rel = "stylesheet";
	link.href = "https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200;300;400;500;600;700;800;900&display=swap";
	document.head.appendChild(link);
};
