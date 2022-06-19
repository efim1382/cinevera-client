import React, { Fragment } from "react";
import PropTypes from "prop-types";
import BasicButton from "components/BasicButton";
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

	const posterCaption = (
		<Fragment>
			This picture will be on a small block of the film.
			<br />
			We recommend using an image size of at least 350 x 540 pixels in JPEG format.
			Animated pictures cannot be ordered. File size - no more than 4 MB.
		</Fragment>
	);

	const backgroundCaption = (
		<Fragment>
			This picture will be on the detail page of the movie.
			<br />
			We recommend using an image size of at least 1920 x 1080 pixels in JPEG format.
			Animated pictures cannot be ordered. File size - no more than 4 MB.
		</Fragment>
	);

	const caption = type === "background"
		? backgroundCaption
		: posterCaption;

	return (
		<div className={cx("editable_image", className)}>
			<p className={style.caption}>{caption}</p>

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
	type: PropTypes.string,
	image: PropTypes.string,
	onChange: PropTypes.func,
	className: PropTypes.string,
};

export default EditableImage;
