import React, { useMemo } from "react";
import PropTypes from "prop-types";
import BasicButton from "components/BasicButton";
import { description } from "./config";
import classnames from "classnames/bind";
import style from "./style.css";

const cx = classnames.bind(style);

const EditableImage = (props) => {
	const {
		type,
		image,
		onChange,
		className,
	} = props;

	const inline = { backgroundImage: `url(${image})` };

	const { caption, text } = useMemo(() => (
		description[type]
	), [type]);

	return (
		<div className={cx("editable_image", className)}>
			<p className={style.caption}>
				{caption}
				<br />
				{text}
			</p>

			<div data-type={type} className={style.image} style={inline}>
				<div className={style.change_image_wrapper}>
					<BasicButton
						appearance="fill"
						theme="translucent"
						text="Change Image"
						onClick={onChange}
						className={style.button}
					/>
				</div>
			</div>
		</div>
	);
};

EditableImage.defaultProps = {
	type: "poster",
};

EditableImage.propTypes = {
	type: PropTypes.oneOf(["episode", "poster", "background"]),
	image: PropTypes.string,
	onChange: PropTypes.func,
	className: PropTypes.string,
};

export default EditableImage;
