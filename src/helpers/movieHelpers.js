/**
 *
 * @param array
 * @returns {string|*}
 */
export const formatSeriesYear = (array = []) => {
	if (array.length === 0) {
		return "";
	}

	const from = array[0];
	let yearTo = "";

	if (array[1] && array[0] !== array[1]) {
		yearTo = array[1];
	}

	if (!array[1]) {
		yearTo = "Now";
	}

	return yearTo
		? `${from} - ${yearTo}`
		: from;
};
