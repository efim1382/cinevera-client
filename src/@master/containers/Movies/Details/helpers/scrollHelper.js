/**
 *
 * @param {Object} config
 */
export const addBackgroundOpacityOnScroll = (config = {}) => {
	const {
		backgroundOpacityFrom = 0.4,
		backgroundOpacityTo = 0.9,
		fullOpacityFrom = 400,
		elementId = "film-details",
		cssVariable = "--background-opacity",
	} = config;

	const backgroundOpacityRange = backgroundOpacityFrom - backgroundOpacityTo;
	const pageElement = document.getElementById(elementId);

	if (!pageElement) {
		return;
	}

	let percentScroll = window.scrollY / fullOpacityFrom * 100;

	if (percentScroll > 100) {
		percentScroll = 100;
	}

	const currentOpacity = backgroundOpacityFrom - ((percentScroll * backgroundOpacityRange) / 100);

	if (pageElement.style.getPropertyValue(cssVariable) !== `${currentOpacity}`) {
		pageElement.style.setProperty(cssVariable, currentOpacity);
	}
};
