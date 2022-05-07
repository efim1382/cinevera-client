import React, { useState, useRef } from "react";
import PropTypes from "prop-types";
import classnames from "classnames/bind";
import useHandleClickOutside from "./useHandleClickOutside";
import style from "./style.css";

const cx = classnames.bind(style);

const Dropdown = ({ className, children }) => {
	const buttonRef = useRef();
	const dropdownContentRef = useRef();
	const [isDropdownShown, setIsDropdownShown] = useState(false);

	const isChildrenFunction = typeof children === "function";

	const toggleDropdown = () => setIsDropdownShown(!isDropdownShown);
	const closeDropdown = () => setIsDropdownShown(false);

	useHandleClickOutside([dropdownContentRef, buttonRef], () => {
		setIsDropdownShown(false);
	});

	return (
		<div className={cx("dropdown", className)}>
			<button ref={buttonRef} type="button" className={style.button} onClick={toggleDropdown}>Category</button>

			{isDropdownShown && (
				<div ref={dropdownContentRef} className={style.dropdown_list}>
					{isChildrenFunction && (
						children({ onClose: closeDropdown })
					)}

					{!isChildrenFunction && (
						children
					)}
				</div>
			)}
		</div>
	);
};

Dropdown.propTypes = {
	children: PropTypes.any.isRequired,
	className: PropTypes.string,
};

export default Dropdown;
