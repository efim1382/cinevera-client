import React, { Fragment, useMemo } from "react";
import PropTypes from "prop-types";
import UploadImage from "components/UploadImage";
import { description } from "./config";
import classnames from "classnames/bind";
import style from "./style.css";

const cx = classnames.bind(style);

const EditableImage = (props) => {
	const {
		type,
		className,
		...restProps
	} = props;

	const { caption, text } = useMemo(() => (
		description[type]
	), [type]);

	return (
		<div data-type={type} className={cx("editable_image", className)}>
			<p className={style.caption}>
				{caption && (
					<Fragment>
						{caption}
						<br />
					</Fragment>
				)}

				{text}
			</p>

			<UploadImage {...restProps} className={style.output} />
		</div>
	);
};

EditableImage.defaultProps = {
	type: "poster",
};

EditableImage.propTypes = {
	type: PropTypes.oneOf(Object.keys(description)),
	className: PropTypes.string,
};

export default EditableImage;
