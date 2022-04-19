import React from "react";
import HeaderComponent from "./index";

export default {
	title: "components",
	component: HeaderComponent,
};

export const Header = (args) => (
	<HeaderComponent {...args} />
);

Header.parameters = {

};
