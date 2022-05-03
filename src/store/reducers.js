import currentUserReducers, { key as currentUserKey } from "reducers/currentUser.reducer";
import moviesReducers, { key as moviesKey } from "reducers/movies.reducer";

export default {
	[currentUserKey]: currentUserReducers,
	[moviesKey]: moviesReducers,
};
