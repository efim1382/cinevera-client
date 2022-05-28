import React from "react";
import PropTypes from "prop-types";
import Icon from "components/Icon";
import Button from "components/BasicButton";
import classnames from "classnames/bind";
import style from "./style.css";

const cx = classnames.bind(style);

const Subheader = (props) => {
	const {
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
				text="Add movie"
				icon="local_movies"
				className={style.add_button}
			/>
		</div>
	);
};

Subheader.propTypes = {
	title: PropTypes.string.isRequired,
	className: PropTypes.string,
};

export default Subheader;
