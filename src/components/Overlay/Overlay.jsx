import React from "react";
import PropTypes from "prop-types";
import Portal from "components/Portal";
import Icon from "components/Icon";
import style from "./style.css";

const Overlay = ({ children, onClose }) => {
	return (
		<Portal id="overlay-root">
			<div className={style.overlay}>
				<button
					type="button"
					onClick={onClose}
					className={style.close_button}
				>
					<Icon name="close" />
				</button>

				{children}
			</div>
		</Portal>
	);
};

Overlay.defaultProps = {
	onClose: Function(),
};

Overlay.propTypes = {
	children: PropTypes.any.isRequired,
	onClose: PropTypes.func,
};

export default Overlay;
