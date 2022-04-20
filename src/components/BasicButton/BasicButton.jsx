import React from "react";
import PropTypes from "prop-types";
import classnames from "classnames/bind";
import LoadingRing from "components/LoadingRing";
import style from "./style.css";

const cx = classnames.bind(style);

const BasicButton = (props) => {
	const {
		appearance,
		theme,
		type,
		onClick,
		className,
		isLoading,
		isDisabled,
		text,
	} = props;

	const isButtonDisabled = isDisabled || isLoading;

	return (
		<button
			type={type}
			onClick={onClick}
			className={cx("button", className, { "_is-disabled": isDisabled, "_is-loading": isLoading })}
			theme={theme}
			appearance={appearance}
			{...isButtonDisabled ? { disabled: true } : {}}
		>
			{text && (
				<p className={style.caption}>{text}</p>
			)}

			<LoadingRing className={style.loading} isShown={isLoading} />
		</button>
	);
};

BasicButton.defaultProps = {
	appearance: "fill",
	theme: "primary",
	type: "button",
	className: "",
	onClick: new Function,
	isLoading: false,
	isDisabled: false,
};

BasicButton.propTypes = {
	type: PropTypes.oneOf(["button", "submit"]),
	onClick: PropTypes.func,
	className: PropTypes.string,
	isLoading: PropTypes.bool,
	isDisabled: PropTypes.bool,
	text: PropTypes.string,
	appearance: PropTypes.oneOf(["fill", "outline"]),
	theme: PropTypes.oneOf(["primary", "contrast"]),
};

export default BasicButton;
