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
	[moviesActions.loadObjects]: (state, action) => {
		movieEntity.addMany(state, action.payload);
	},

	// ================ API ================
	[moviesActions.fetchMovie.fulfilled]: (state, action) => {
		movieEntity.upsertOne(state, action.payload.movie);
	},

	[moviesActions.fetchSeriesDetails.fulfilled]: (state, action) => {
		movieEntity.upsertOne(state, action.payload.series);
	},
});

export default moviesReducer;
