import React, { useState, useRef, useMemo } from "react";
import PropTypes from "prop-types";
import Icon from "components/Icon";
import TextField from "components/FormElements/TextField";
import useHandleClickOutside from "hooks/useHandleClickOutside";
import classnames from "classnames/bind";
import style from "./style.css";

const cx = classnames.bind(style);

const Select = (props) => {
	const {
		value,
		label,
		options,
		error,
		onChange,
		className,
	} = props;

	const buttonRef = useRef();
	const dropdownContentRef = useRef();
	const [isDropdownShown, setIsDropdownShown] = useState(false);

	const selectedOption = useMemo(() => (
		options.find((item) => item.value === value) || {}
	), [options, value]);

	const currentValue = selectedOption?.label || "";

	const openDropdown = () => setIsDropdownShown(true);
	const closeDropdown = () => setIsDropdownShown(false);

	useHandleClickOutside([dropdownContentRef, buttonRef], () => {
		setIsDropdownShown(false);
	});

	const handleSelect = (item) => {
		if (onChange) {
			onChange(item.value);
		}

		closeDropdown();
	};

	return (
		<div className={cx("select_container", className)}>
			<TextField
				isReadOnly
				label={label}
				getRef={buttonRef}
				value={currentValue}
				isActive={isDropdownShown}
				onFocus={openDropdown}
				error={error}
				className={style.input}
			/>

			{isDropdownShown && (
				<div ref={dropdownContentRef} className={style.dropdown}>
					{options.map((item) => {
						const onClick = () => {
							handleSelect(item);
						};

						return (
							<button
								key={item.value}
								type="button"
								className={cx("dropdown_item", item.className)}
								onClick={onClick}
							>
								{item.icon && (
									<Icon name={item.icon} />
								)}

								<p className={style.caption}>{item.label}</p>
							</button>
						);
					})}
				</div>
			)}
		</div>
	);
};

Select.defaultProps = {
	options: [],
};

Select.propTypes = {
	value: PropTypes.string,
	label: PropTypes.string,

	options: PropTypes.arrayOf(PropTypes.shape({
		label: PropTypes.string,
		value: PropTypes.string,
	})),

	error: PropTypes.string,
	onChange: PropTypes.func,
	className: PropTypes.string,
};

export default Select;
