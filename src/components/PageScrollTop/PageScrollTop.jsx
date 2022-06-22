import { useEffect } from "react";
import PropTypes from "prop-types";
import { useLocation } from "react-router";

const ScrollToTop = ({ children }) => {
	const location = useLocation();

	useEffect(() => {
		window.scrollTo(0, 0);
	}, [location]);

	return children;
};

ScrollToTop.propTypes = {
	children: PropTypes.any.isRequired,
};

export default ScrollToTop;
