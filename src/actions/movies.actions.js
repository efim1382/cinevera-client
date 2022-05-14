import { createAction, createAsyncThunk } from "@reduxjs/toolkit";
import * as moviesApi from "api/movies.api";

export const loadObjects = createAction("objects/load");

export const fetchMovie = createAsyncThunk(
	"movies/fetchMovie",
	async (id) => await moviesApi.getMovieDetails(id),
);

export const fetchSeriesDetails = createAsyncThunk(
	"movies/fetchSeriesDetails",
	async (id) => await moviesApi.getSeriesDetails(id),
);
