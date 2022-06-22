import React, { Fragment } from "react";
import PropTypes from "prop-types";
import Icon from "components/Icon";
import classnames from "classnames/bind";
import style from "./style.css";

const cx = classnames.bind(style);

const UploadImage = (props) => {
	const {
		value,
		isLoading,
		progress,
		openChooseFile,
		className,
	} = props;

	const imageInline = {};
	const progressInline = {};

	if (value) {
		imageInline["backgroundImage"] = `url(${value})`;
	}

	if (progress) {
		progressInline["--progress"] = progress;
	}

	const cxObject = cx(
		"image",
		className,

		{
			"_is-filled": !!value,
			"_is-loading": isLoading,
		},
	);

	return (
		<button
			type="button"
			onClick={openChooseFile}
			style={imageInline}
			className={cxObject}
		>
			{!value && (
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="100%"
					height="100%"
				>
					<rect
						width="100%"
						height="100%"
						fill="none"
						rx="3"
						ry="3"
						strokeWidth="4"
						strokeDasharray="6, 14"
						strokeDashoffset="0"
						strokeLinecap="square"
					/>
				</svg>
			)}

			<div className={style.content}>
				{!isLoading && (
					<Fragment>
						<Icon name="upload_file" />
						<p className={style.title}>Select file to upload</p>
						<p className={style.caption}>or drag and drop it here</p>
					</Fragment>
				)}

				{isLoading && (
					<Fragment>
						<p className={style.uploading_text}>Uploading File...</p>
						<div className={style.progress} style={progressInline} />
					</Fragment>
				)}
			</div>
		</button>
	);
};

UploadImage.propTypes = {
	value: PropTypes.string,
	isLoading: PropTypes.bool,
	progress: PropTypes.number,
	openChooseFile: PropTypes.func,
	className: PropTypes.string,
};

export default UploadImage;
