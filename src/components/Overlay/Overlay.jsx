import React, { useEffect } from "react";
import PropTypes from "prop-types";
import Portal from "components/Portal";
import Icon from "components/Icon";
import classnames from "classnames/bind";
import style from "./style.css";

const cx = classnames.bind(style);

const Overlay = ({ children, onClose, className }) => {
	const onKeyDown = (event) => {
		if (event.key === "Escape") {
			onClose();
		}
	};

	useEffect(() => {
		document.body.style.setProperty("overflow", "hidden");
		document.addEventListener("keydown", onKeyDown);

		return () => {
			document.body.style.removeProperty("overflow");
			document.removeEventListener("keydown", onKeyDown);
		};
	}, []);

	return (
		<Portal id="overlay-root">
			<div className={cx("overlay", className)}>
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
	className: PropTypes.string,
};

export default Overlay;
