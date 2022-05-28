/**
 *
 * @param {number} seconds
 * @returns {string}
 */
export const secondsToHms = (seconds = 0) => {
	const parsedHours = Math.floor(seconds / 3600);
	const parsedMinutes = Math.floor(seconds % 3600 / 60);
	const parsedSeconds = Math.floor(seconds % 3600 % 60);

	const formattedHours = parsedHours > 0
		? `${parsedHours}:`
		: "";

	const formattedMinutes = parsedMinutes < 10
		? `0${parsedMinutes}`
		: parsedMinutes;

	const formattedSeconds = parsedSeconds < 10
		? `0${parsedSeconds}`
		: parsedSeconds;

	return `${formattedHours}${formattedMinutes}:${formattedSeconds}`;
};
