import { createReducer, createEntityAdapter } from "@reduxjs/toolkit";
import * as moviesActions from "actions/movies.actions";

export const key = "movies";

export const movieEntity = createEntityAdapter({
	selectId: (movie) => movie._id,
});

const initialState = {

	/**
	 * Full list of movies ids.
	 * Not using in UI
	 * @type {string[]}
	 */
	ids: [],

	/**
	 * Movie data details
	 * @type {Object[]} entities
	 * @property {string} entities.name
	 * @property {number} entities.ageLimit
	 * @property {number} entities.year
	 * @property {string} entities.shortDescription
	 * @property {string} entities.description
	 * @property {string[]} entities.genres
	 */
	entities: {},
};

const moviesReducer = createReducer(initialState, {
	[moviesActions.loadMovies]: (state, action) => {
		movieEntity.addMany(state, action.payload);
	},

	// ================ API ================

	[moviesActions.fetchMovie.pending]: () => {
	},

	[moviesActions.fetchMovie.rejected]: () => {
	},

	[moviesActions.fetchMovie.fulfilled]: (state, action) => {
		movieEntity.addOne(state, action.payload.movie);
	},
});

export default moviesReducer;
