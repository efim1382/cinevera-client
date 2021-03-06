import React from "react";
import PropTypes from "prop-types";
import Icon from "components/Icon";
import Button from "components/BasicButton";
import classnames from "classnames/bind";
import style from "./style.css";

const cx = classnames.bind(style);

const ManageListHeader = (props) => {
	const {
		to,
		title,
		className,
	} = props;

	return (
		<div className={cx("subheader", className)}>
			<h2 className={style.title}>{title}</h2>

			<button className={style.search_button}>
				<Icon name="search" />
			</button>

			<Button
				text="Add New"
				to={to}
				icon="add"
				className={style.add_button}
			/>
		</div>
	);
};

ManageListHeader.propTypes = {
	to: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
	title: PropTypes.string.isRequired,
	className: PropTypes.string,
};

export default ManageListHeader;
