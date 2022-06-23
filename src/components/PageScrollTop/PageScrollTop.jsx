import { useEffect } from "react";
import PropTypes from "prop-types";
import { useLocation } from "react-router";

const setScrollTop = (scrollTop) => {
	window.scrollTop = scrollTop;
	window.document.body.scrollTop = scrollTop;
	window.document.documentElement.scrollTop = scrollTop;
};

const ScrollToTop = ({ children }) => {
	const location = useLocation();

	useEffect(() => {
		setScrollTop(0);
	}, [location]);

	return children;
};

ScrollToTop.propTypes = {
	children: PropTypes.any.isRequired,
};

export default ScrollToTop;
