import { createAction, createAsyncThunk } from "@reduxjs/toolkit";
import * as moviesApi from "api/movies.api";

export const loadMovies = createAction("movies/load");
export const addMovie = createAction("movies/add");
export const toDefault = createAction("movies/default");

export const fetchMoviesListSimple = () => (dispatch) => {
	return moviesApi.getMoviesList()
		.then(({ movies }) => {
			dispatch(loadMovies(movies));
			return movies;
		})

		.catch((error) => {
			console.log(error);
			return error;
		});
};

export const fetchMoviesList = createAsyncThunk(
	"movies/fetchMovies",

	async (params, { rejectWithValue }) => {
		return await moviesApi.getMoviesList();
	},
);

export const fetchMovie = createAsyncThunk(
	"movies/fetchMovie",
	async (id) => await moviesApi.getMovie(id),
);
