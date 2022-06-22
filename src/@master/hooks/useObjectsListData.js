import { useContext } from "react";
import { ObjectsListContext } from "@master/store/ObjectsListProvider";

export default () => {
	const { state } = useContext(ObjectsListContext);
	const { isFetchComplete, error } = state;

	if (!isFetchComplete || error) {
		throw Promise.resolve();
	}

	return state;
};
