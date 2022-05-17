import { breakpoints } from "config/adaptability";

export default {
	0: {
		slidesPerView: 1,
		spaceBetween: 20,
	},

	[breakpoints.phone]: {
		slidesPerView: 1,
		spaceBetween: 20,
	},

	[breakpoints.tablet]: {
		slidesPerView: 2,
		spaceBetween: 30,
	},

	[breakpoints.laptop]: {
		slidesPerView: 3,
		spaceBetween: 30,
	},

	[breakpoints.desktopSmall]: {
		slidesPerView: 4,
		spaceBetween: 40,
	},

	[breakpoints.desktopMedium]: {
		slidesPerView: 4,
		spaceBetween: 40,
	},

	[breakpoints.desktopLarge]: {
		slidesPerView: 5,
		spaceBetween: 30,
	},

	[breakpoints.desktopExtraLarge]: {
		slidesPerView: 6,
		spaceBetween: 30,
	},
};
