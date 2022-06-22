import React, { createContext, useMemo, useState } from "react";
import { useParams } from "react-router-dom";
import PropTypes from "prop-types";
import * as actorsApi from "@panel/api/actors.api";

export const ActorDetailsContext = createContext(null);

const ActorDetailsProvider = (props) => {
	const {
		children,
	} = props;

	const { id } = useParams();

	/**
	 * Movies details object
	 * @type object
	 */
	const [data, setData] = useState({});

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

	const value = useMemo(() => ({
		state: {
			data,
			isFetchComplete,
			isRequestProcess,
			error,
		},

		actions: {
			setData,
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

			actorsApi.getActor(id)
				.then(({ actor }) => {
					setData(actor);
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
		<ActorDetailsContext.Provider value={value}>
			{children}
		</ActorDetailsContext.Provider>
	);
};

ActorDetailsProvider.propTypes = {
	type: PropTypes.oneOf(["movie", "series"]),
	children: PropTypes.any.isRequired,
};

export default ActorDetailsProvider;
