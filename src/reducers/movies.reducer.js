import { createReducer, createEntityAdapter } from "@reduxjs/toolkit";
import * as moviesActions from "actions/movies.actions";

export const key = "movies";

export const movieEntity = createEntityAdapter({
	selectId: (movie) => movie._id,
});

const initialState = {

	/**
	 * Movies page state
	 */
	moviesListView: {

		/**
		 * Movies list showed on page.
		 * Concat array by pagination requests.
		 * @type {string[]}
		 */
		ids: [],

		/**
		 * is first data fetch done
		 * @type {boolean}
		 */
		isFetchComplete: false,

		/**
		 * is any data request in progress
		 * @type {boolean}
		 */
		isRequestProcess: false,

		/**
		 * Error if request failed
		 * @property {string}
		 */
		error: "",
	},

	/**
	 * Series page state
	 */
	seriesListView: {

		/**
		 * Series list showed on page.
		 * Concat array by pagination requests.
		 * @type {string[]}
		 */
		ids: [],

		/**
		 * is first data fetch done
		 * @type {boolean}
		 */
		isFetchComplete: false,

		/**
		 * is any data request in progress
		 * @type {boolean}
		 */
		isRequestProcess: false,

		/**
		 * Error if request failed
		 * @property {string}
		 */
		error: "",
	},

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

	[moviesActions.fetchMoviesList.pending]: (state) => {
		state.moviesListView.isLoading = true;
	},

	[moviesActions.fetchMoviesList.rejected]: (state) => {
		// todo: add error text
		state.moviesListView.isLoading = false;
	},

	[moviesActions.fetchMoviesList.fulfilled]: (state, action) => {
		movieEntity.addMany(state, action.payload.movies);
		state.moviesListView.ids = [...state.moviesListView.ids, ...action.payload.movies.map((item) => item._id)];

		state.moviesListView.isLoading = false;
		state.moviesListView.isLoaded = true;
	},

	[moviesActions.fetchMovie.pending]: () => {
	},

	[moviesActions.fetchMovie.rejected]: () => {
	},

	[moviesActions.fetchMovie.fulfilled]: (state, action) => {
		movieEntity.addOne(state, action.payload.movie);
	},
});

export default moviesReducer;
