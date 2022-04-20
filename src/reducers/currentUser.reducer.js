import {
	SET_CURRENT_USER_ID,
} from "actions/currentUser.actions";

export default (state = null, action) => {
	switch (action.type) {
	case SET_CURRENT_USER_ID:
		return action.id;

	default:
		return state;
	}
};
