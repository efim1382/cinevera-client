import React from "react";
import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";
import Icon from "components/Icon";
import classnames from "classnames/bind";
import style from "./style.css";

const cx = classnames.bind(style);

const MobileHeader = ({ className }) => {
	return (
		<div className={cx("mobile_header", className)}>
			<div className={style.logo_container}>
				<NavLink to="/" className={style.logo}>
					cinevera
					{" "}
					<span>panel</span>
				</NavLink>
			</div>

			<button className={style.menu_button}>
				<Icon name="menu" />
			</button>
		</div>
	);
};

MobileHeader.propTypes = {
	className: PropTypes.string,
};

export default MobileHeader;