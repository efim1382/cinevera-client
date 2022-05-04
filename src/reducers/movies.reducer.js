import { createReducer } from "@reduxjs/toolkit";
import * as moviesActions from "actions/movies.actions";

export const key = "movies";

const initialState = {
	ids: [],
	list: {},
	isLoading: false,
	isLoaded: false,
	error: "",
};

const moviesReducer = createReducer(initialState, (builder) => {
	builder
		.addCase(moviesActions.addMovie, (state, action) => {
			console.log(action);
		})

		.addCase(moviesActions.loadMovies, (state, action) => {
			action.payload.forEach((item) => {
				if (state.ids.indexOf(item._id) === -1) {
					state.ids.push(item._id);
				}

				if (!state.list[item._id]) {
					state.list[item._id] = {
						isLoading: false,
						isLoaded: true,
						error: "",
						data: item,
					};
				}
			});
		})

		.addCase(moviesActions.fetchMovie.pending, (state, action) => {
			const id = action.meta.arg;

			if (state.ids.indexOf(id) === -1) {
				state.ids.push(id);
			}

			if (!state.list[id]) {
				state.list[id] = {
					isLoading: true,
					isLoaded: false,
					error: "",
					data: {},
				};
			}
		})

		.addCase(moviesActions.fetchMovie.rejected, (state, action) => {
			console.log(action);
		})

		.addCase(moviesActions.fetchMovie.fulfilled, (state, action) => {
			state.list[action.payload.movie._id].isLoaded = true;
			state.list[action.payload.movie._id].isLoading = false;
			state.list[action.payload.movie._id].data = action.payload.movie;
		})

		.addCase(moviesActions.fetchMoviesList.pending, (state) => {
			state.isLoading = true;
		})

		.addCase(moviesActions.fetchMoviesList.rejected, (state) => {
			state.isLoading = false;
		})

		.addCase(moviesActions.fetchMoviesList.fulfilled, (state, action) => {
			action.payload.movies.forEach((item) => {
				if (state.ids.indexOf(item._id) === -1) {
					state.ids.push(item._id);
				}

				if (!state.list[item._id]) {
					state.list[item._id] = {
						isLoading: false,
						isLoaded: true,
						error: "",
						data: item,
					};
				}
			});

			state.isLoaded = true;
			state.isLoading = false;
		});
});

export default moviesReducer;
