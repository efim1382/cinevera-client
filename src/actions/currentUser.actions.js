export const SET_CURRENT_USER_ID = "SET_CURRENT_USER_ID";

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
