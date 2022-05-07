import { key as moviesKey, movieEntity } from "reducers/movies.reducer";

/**
 *
 * @param state
 * @returns {{}}
 */
export const getData = (state) => state[moviesKey] || {};

/**
 *
 * @param state
 * @returns {{isLoading: boolean, ids: [], error: string, isLoaded: boolean}|{}}
 */
export const getMoviesListView = (state) => getData(state).moviesListView || {};

/**
 *
 * @param state
 * @returns {*[]}
 */
export const isMoviesListLoaded = (state) => getMoviesListView(state).isLoaded;

/**
 *
 * @param state
 * @returns {*[]}
 */
export const isMoviesListLoading = (state) => getMoviesListView(state).isLoading;

/**
 *
 * @param state
 * @returns {*[]}
 */
export const getMoviesListError = (state) => getMoviesListView(state).error;

/**
 *
 * @param state
 * @returns {*[]}
 */
export const getMoviesListIds = (state) => getMoviesListView(state).ids || [];

/**
 *
 * @param id
 * @returns {function(*)}
 */
export const getMovieData = (id) => (state) => {
	const { selectById } = movieEntity.getSelectors();

	return selectById(
		getData(state),
		id,
	) || {};
};

/**
 *
 * @param id
 * @returns {function(*)}
 */
export const isMovieLoaded = (id) => (state) => Object.keys(getMovieData(id)(state)).length > 0 || false;
