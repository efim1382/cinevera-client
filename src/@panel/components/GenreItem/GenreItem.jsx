import React from "react";
import PropTypes from "prop-types";
import Icon from "components/Icon";
import LoadingRing from "components/LoadingRing";
import { getGenreByCode } from "config/genres";
import classnames from "classnames/bind";
import style from "./style.css";

const cx = classnames.bind(style);

const GenreItem = (props) => {
	const { code, onRemove, isLoading, className } = props;

	const Component = !onRemove
		? "div"
		: "button";

	const additionalProps = {};

	if (onRemove) {
		additionalProps["type"] = "button";
	}

	const name = getGenreByCode(code)?.label || code;
	const cxObject = cx("genre", className, { "_is-removable": !!onRemove });
	const isIconShown = !!onRemove && !isLoading;

	const onClick = () => {
		if (onRemove) {
			onRemove(code);
		}
	};

	return (
		<Component
			data-genre={code}
			className={cxObject}
			onClick={onClick}
			{...additionalProps}
		>
			<p>{name}</p>

			{isIconShown && (
				<Icon name="close" />
			)}

			{isLoading && (
				<LoadingRing isShown className={style.loading} />
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
