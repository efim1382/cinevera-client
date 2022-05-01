/**
 *
 * @param {number} fromTop
 * @param {string} className
 */
export const addHeaderClassOnScroll = (fromTop = 0, className = "_is-filled") => {
	const headerElement = document.getElementById("header");

	if (!headerElement) {
		return;
	}

	const isOpacityClassContains = headerElement.classList.contains(className);

	if (window.scrollY >= fromTop && !isOpacityClassContains) {
		headerElement.classList.add(className);
	}

	if (window.scrollY < fromTop && isOpacityClassContains) {
		headerElement.classList.remove(className);
	}
};
