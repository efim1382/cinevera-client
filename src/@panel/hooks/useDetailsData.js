import { useContext } from "react";
import { MovieDetailsContext } from "@panel/store/MovieDetails.store";

export default () => {
	const { state } = useContext(MovieDetailsContext);
	const { data, isFetchComplete, error } = state;

	if (!isFetchComplete || error) {
		throw Promise.resolve();
	}

	return data;
};
