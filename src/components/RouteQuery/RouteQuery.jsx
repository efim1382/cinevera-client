import useQuery from "hooks/useQuery";
import PropTypes from "prop-types";

const RouteQuery = ({ param, element }) => {
	const query = useQuery();

	if (query.has(param)) {
		return element;
	}

	return null;
};

RouteQuery.propTypes = {
	param: PropTypes.string.isRequired,
	element: PropTypes.any.isRequired,
};

export default RouteQuery;
