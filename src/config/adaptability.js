export const breakpoints = {
	phone: 480,
	tablet: 768,
	laptop: 1024,
	desktopSmall: 1280,
	desktopMedium: 1400,
	desktopLarge: 1680,
	desktopExtraLarge: 1920,
};

export const moviesSliderBreakpoints = {
	0: {
		slidesPerView: 1,
		spaceBetween: 20,
	},

	[breakpoints.phone]: {
		slidesPerView: 2,
		spaceBetween: 20,
	},

	[breakpoints.tablet]: {
		slidesPerView: 3,
		spaceBetween: 30,
	},

	[breakpoints.laptop]: {
		slidesPerView: 4,
		spaceBetween: 30,
	},

	[breakpoints.desktopSmall]: {
		slidesPerView: 5,
		spaceBetween: 30,
	},

	[breakpoints.desktopMedium]: {
		slidesPerView: 6,
		spaceBetween: 30,
	},

	[breakpoints.desktopLarge]: {
		slidesPerView: 6,
		spaceBetween: 30,
	},

	[breakpoints.desktopExtraLarge]: {
		slidesPerView: 7,
		spaceBetween: 30,
	},
};
