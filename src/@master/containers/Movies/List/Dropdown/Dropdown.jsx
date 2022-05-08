import React, { useState, useRef } from "react";
import PropTypes from "prop-types";
import classnames from "classnames/bind";
import Icon from "components/Icon";
import useHandleClickOutside from "hooks/useHandleClickOutside";
import style from "./style.css";

const cx = classnames.bind(style);

const Dropdown = (props) => {
	const {
		label,
		options,
		onChange,
		isDisabled,
		className,
	} = props;

	const buttonRef = useRef();
	const dropdownContentRef = useRef();
	const [isDropdownShown, setIsDropdownShown] = useState(false);

	const additionalButtonProps = {};

	if (isDisabled) {
		additionalButtonProps["disabled"] = "true";
	}

	const toggleDropdown = () => setIsDropdownShown(!isDropdownShown);
	const closeDropdown = () => setIsDropdownShown(false);

	useHandleClickOutside([dropdownContentRef, buttonRef], () => {
		setIsDropdownShown(false);
	});

	return (
		<div className={cx("dropdown", className)}>
			<button
				ref={buttonRef}
				type="button"
				className={style.button}
				onClick={toggleDropdown}
				{...additionalButtonProps}
			>
				<span className={style.caption}>{label}</span>
				<Icon name="expand_more" />
			</button>

			{isDropdownShown && (
				<div ref={dropdownContentRef} className={style.dropdown_list}>
					{options.map((item) => {
						const onClick = () => {
							onChange(item);
							closeDropdown();
						};

						return (
							<button
								key={item.value}
								onClick={onClick}
								className={cx("dropdown_item", item.className)}
							>
								<span className={style.caption}>{item.label}</span>

								{item.icon && (
									<Icon name={item.icon} className={style.mark} />
								)}
							</button>
						);
					})}
				</div>
			)}
		</div>
	);
};

Dropdown.defaultProps = {
	label: "",
	className: "",
	options: [],
	onChange: Function(),
	isDisabled: false,
};

Dropdown.propTypes = {
	label: PropTypes.string,
	options: PropTypes.array,
	onChange: PropTypes.func,
	isDisabled: PropTypes.bool,
	className: PropTypes.string,
};

export default Dropdown;
