export const TO_DEFAULT = "CURRENT_USER:TO_DEFAULT";

/**
 *
 * @returns {{type: string}}
 */
export const toDefault = () => ({
	type: TO_DEFAULT,
});

export const SET_CURRENT_USER_ID = "CURRENT_USER:SET_CURRENT_USER_ID";

/**
 *
 * @param {string} id
 * @returns {{state: *, type: string}}
 */
export const setCurrentUserId = (id) => ({
	type: SET_CURRENT_USER_ID,

	id: typeof id === "string"
		? id
		: "",
});
