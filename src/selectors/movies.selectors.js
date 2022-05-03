import { key as moviesKey } from "reducers/movies.reducer";

/**
 *
 * @param state
 * @returns {{}}
 */
export const getData = (state) => state[moviesKey] || {};

/**
 *
 * @param state
 * @returns {*[]}
 */
export const isLoaded = (state) => getData(state).isLoaded || false;

/**
 *
 * @param state
 * @returns {boolean|*}
 */
export const isLoading = (state) => getData(state).isLoading || false;

/**
 *
 * @param state
 * @returns {*[]}
 */
export const getMoviesListIds = (state) => getData(state).ids || [];

/**
 *
 * @param id
 * @returns {function(*)}
 */
export const getMovieState = (id) => (state) => getData(state).list[id] || {};

/**
 *
 * @param id
 * @returns {function(*)}
 */
export const isMovieLoaded = (id) => (state) => getMovieState(id)(state).isLoaded || false;

/**
 *
 * @param id
 * @returns {function(*)}
 */
export const isMovieLoading = (id) => (state) => getMovieState(id)(state).isLoading || false;

/**
 *
 * @param id
 * @returns {function(*)}
 */
export const getMovieError = (id) => (state) => getMovieState(id)(state).error || "";

/**
 *
 * @param id
 * @returns {function(*)}
 */
export const getMovieData = (id) => (state) => getMovieState(id)(state).data || {};
