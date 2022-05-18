import ReactDOM from "react-dom";
import PropTypes from "prop-types";

const Portal = ({ id, children }) => {
	return ReactDOM.createPortal(children, document.getElementById(id));
};

Portal.propTypes = {
	children: PropTypes.any.isRequired,
	id: PropTypes.string.isRequired,
};

export default Portal;
