import React from "react";
import PropTypes from "prop-types";
import classnames from "classnames/bind";
import { NavLink } from "react-router-dom";
import LoadingRing from "components/LoadingRing";
import style from "./style.css";
import Icon from "components/Icon";

const cx = classnames.bind(style);

const BasicButton = (props) => {
	const {
		appearance,
		theme,
		type,
		to,
		onClick,
		className,
		isLoading,
		isDisabled,
		text,
		icon,
	} = props;

	const Component = to
		? NavLink
		: "button";

	const additionalProps = {};

	if (!to) {
		additionalProps["type"] = type;
	}

	if (to) {
		additionalProps["to"] = to;
	}

	const isButtonDisabled = isDisabled || isLoading;

	if (isButtonDisabled) {
		additionalProps["disabled"] = true;
	}

	return (
		<Component
			onClick={onClick}
			className={cx("button", className, { "_is-disabled": isDisabled, "_is-loading": isLoading })}
			theme={theme}
			appearance={appearance}
			{...additionalProps}
		>
			{icon && (
				<Icon name={icon} />
			)}

			{text && (
				<p className={style.caption}>{text}</p>
			)}

			<LoadingRing className={style.loading} isShown={isLoading} />
		</Component>
	);
};

BasicButton.defaultProps = {
	appearance: "fill",
	theme: "accent",
	type: "button",
	className: "",
	to: "",
	onClick: new Function,
	isLoading: false,
	isDisabled: false,
};

BasicButton.propTypes = {
	type: PropTypes.oneOf(["button", "submit"]),
	onClick: PropTypes.func,
	className: PropTypes.string,
	icon: PropTypes.string,
	isLoading: PropTypes.bool,
	isDisabled: PropTypes.bool,
	text: PropTypes.string,
	to: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
	appearance: PropTypes.oneOf(["fill", "outline"]),
	theme: PropTypes.oneOf(["primary", "accent", "translucent"]),
};

export default BasicButton;
