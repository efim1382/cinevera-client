import { useContext } from "react";
import { SeriesDetailsContext } from "@panel/containers/Series/store/SeriesDetails.store";

export default () => {
	const { state } = useContext(SeriesDetailsContext);
	const { data, isFetchComplete, error } = state;

	if (!isFetchComplete || error) {
		throw Promise.resolve();
	}

	return data;
};
