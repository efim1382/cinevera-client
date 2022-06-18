import React from "react";
import PropTypes from "prop-types";
import Icon from "components/Icon";
import { getGenreByCode } from "config/genres";
import classnames from "classnames/bind";
import style from "./style.css";

const cx = classnames.bind(style);

const GenreItem = (props) => {
	const { code, onRemove, className } = props;

	const Component = !onRemove
		? "div"
		: "button";

	const additionalProps = {};

	if (onRemove) {
		additionalProps["type"] = "button";
	}

	const name = getGenreByCode(code)?.label || code;

	const cxObject = cx("genre", className, { "_is-removable": !!onRemove });

	return (
		<Component
			data-genre={code}
			className={cxObject}
			onClick={onRemove}
			{...additionalProps}
		>
			<p>{name}</p>

			{!!onRemove && (
				<Icon name="close" />
			)}
		</Component>
	);
};

GenreItem.propTypes = {
	code: PropTypes.string.isRequired,
	className: PropTypes.string,
	onRemove: PropTypes.func,
};

export default GenreItem;
