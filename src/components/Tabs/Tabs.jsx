import React from "react";
import PropTypes from "prop-types";
import { NavLink, useParams } from "react-router-dom";
import { generatePath } from "react-router";
import classnames from "classnames/bind";
import style from "./style.css";

const cx = classnames.bind(style);

const Tabs = (props) => {
	const params = useParams();
	const { items, className } = props;

	return (
		<nav className={cx("tabs", className)}>
			{items.map((item) => {
				const href = generatePath(item.to, params);

				return (
					<NavLink
						key={item.to}
						to={href}
						className={cx("tab", item.className)}
					>
						{item.label}
					</NavLink>
				);
			})}
		</nav>
	);
};

Tabs.propTypes = {
	items: PropTypes.arrayOf(PropTypes.shape({
		to: PropTypes.oneOfType([PropTypes.string, PropTypes.object]).isRequired,
		label: PropTypes.string.isRequired,
	})).isRequired,

	className: PropTypes.string,
};

export default Tabs;
