import React, { createContext, useMemo, useState } from "react";
import { useParams, Outlet } from "react-router-dom";
import * as moviesApi from "@panel/api/movies.api";

export const SeasonsContext = createContext(null);

const SeasonsProvider = () => {
	const { id } = useParams();

	/**
	 * Movies details object
	 * @type object
	 */
	const [data, setData] = useState([]);

	/**
	 * is first data fetch done
	 * @type {boolean}
	 */
	const [isFetchComplete, setIsFetchComplete] = useState(false);

	/**
	 * is any data request in progress
	 * @type {boolean}
	 */
	const [isRequestProcess, setIsRequestProcess] = useState(false);

	/**
	 * Error if request failed
	 * @property {string}
	 */
	const [error, setError] = useState("");

	/**
	 *
	 * @param {object} season
	 */
	const addSeason = (season) => {
		setData([...data, season]);
	};

	/**
	 * Call details ajax again to refresh data
	 */
	const refresh = () => {
		setIsRequestProcess(true);

		return moviesApi.getSeriesSeasons(id)
			.then(({ seasons }) => {
				setData(seasons);
				setIsRequestProcess(false);
			})

			.catch((error) => {
				setIsRequestProcess(false);
				setError(error);
			});
	};

	/**
	 *  When you want to refresh data without changing global isRequestProcess state
	 */
	const quiteRefresh = () => {
		return moviesApi.getSeriesSeasons(id)
			.then(({ seasons }) => {
				setData(seasons);
			})

			.catch((error) => {
				setError(error);
			});
	};

	const value = useMemo(() => ({
		state: {
			data,
			isFetchComplete,
			isRequestProcess,
			error,
		},

		actions: {
			setData,
			addSeason,
			refresh,
			quiteRefresh,
		},
	}), [
		JSON.stringify(data),
		isFetchComplete,
		isRequestProcess,
		error,
	]);

	React.useEffect(() => {
		if (!isFetchComplete && !isRequestProcess) {
			setIsRequestProcess(true);

			moviesApi.getSeriesSeasons(id)
				.then(({ seasons }) => {
					setData(seasons);
					setIsFetchComplete(true);
					setIsRequestProcess(false);
				})

				.catch((error) => {
					setIsRequestProcess(false);
					setError(error);
				});
		}
	}, []);

	return (
		<SeasonsContext.Provider value={value}>
			<Outlet />
		</SeasonsContext.Provider>
	);
};

export default SeasonsProvider;
