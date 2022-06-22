import { useContext } from "react";
import { ObjectDetailsContext } from "@master/store/ObjectDetailsProvider";

export default () => {
	const { state } = useContext(ObjectDetailsContext);
	const { data, isFetchComplete, error, isRequestProcess } = state;

	if (!isFetchComplete || error || isRequestProcess) {
		throw Promise.resolve();
	}

	return data;
};
