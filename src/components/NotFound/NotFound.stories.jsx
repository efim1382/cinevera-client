import React from "react";
import NotFoundComponent from "./index";

export default {
	title: "components",
	component: NotFoundComponent,
};

export const NotFound = (args) => (
	<NotFoundComponent {...args} />
);

NotFound.parameters = {
	layout: "fullscreen",
};

