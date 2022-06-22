import React from "react";
import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";
import Icon from "components/Icon";
import Tabs from "components/Tabs";
import classnames from "classnames/bind";
import style from "./style.css";

const cx = classnames.bind(style);

const DetailsHeader = (props) => {
	const {
		title,
		tabs,
		className,
	} = props;

	return (
		<div className={cx("header", className)}>
			<div className={style.title_wrapper}>
				<h2 className={style.title}>{title}</h2>

				<div className={style.add_menu_wrapper}>
					<button className={style.add_button}>
						<Icon name="add" className={style.add_icon} />
					</button>

					<div className={style.dropdown}>
						<NavLink to="/" className={style.dropdown_link}>
							<Icon name="add" />
							<span>Add movie</span>
						</NavLink>

						<NavLink to="/" className={style.dropdown_link}>
							<Icon name="delete_forever" />
							<span>Delete</span>
						</NavLink>
					</div>
				</div>
			</div>

			<Tabs items={tabs} className={style.navigation} />
		</div>
	);
};

DetailsHeader.propTypes = {
	title: PropTypes.string.isRequired,
	tabs: Tabs.propTypes.items,
	className: PropTypes.string,
};

export default DetailsHeader;
