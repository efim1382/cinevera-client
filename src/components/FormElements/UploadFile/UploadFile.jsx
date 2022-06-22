import React, { useState, useRef, cloneElement } from "react";
import PropTypes from "prop-types";
import AWS from "aws-sdk";
import style from "./style.css";

console.log(process.env.AWS_ACCESS_KEY_ID);
console.log(process.env.AWS_SECRET_ACCESS_KEY);
console.log(process.env.S3_BUCKET_NAME);

AWS.config.update({
	accessKeyId: process.env.AWS_ACCESS_KEY_ID,
	secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
});

const myBucket = new AWS.S3({
	params: { Bucket: process.env.S3_BUCKET_NAME },
	region: "us-east-2",
});

const UploadFile = (props) => {
	const {
		value,
		accept,
		onChange,
		children,
	} = props;

	const inputRef = useRef(null);
	const [progress, setProgress] = useState(null);

	const openChooseFile = () => {
		inputRef.current.click();
	};

	const onInputChange = async (event) => {
		console.log("event", event);
		const file = event.target.files[0];
		const extension = file.name.split(".").pop();

		const generatedFileName = new Date()
			.getTime()
			.toString(36);

		const fullName = `${generatedFileName}.${extension}`;
		console.log(fullName);

		const params = {
			ACL: "public-read",
			Body: event.target.files[0],
			Bucket: process.env.S3_BUCKET_NAME,
			Key: fullName,
		};

		setProgress(0);

		const callback = (a, b) => {
			console.log("callback", a, b);
			const fileUrl = `https://${process.env.S3_BUCKET_NAME}.${myBucket.config.endpoint}/${fullName}`;
			console.log(fileUrl);
			onChange(fileUrl);
			setProgress(null);
		};

		await myBucket.putObject(params, callback)
			.on("httpUploadProgress", (event) => {
				console.log("progress", event);
				setProgress(Math.round((event.loaded / event.total) * 100));
			});
	};

	const childProps = {
		value,
		isLoading: progress !== null,
		progress,
		openChooseFile,
	};

	return (
		<div className={style.upload_container}>
			{cloneElement(children, childProps)}

			<input
				ref={inputRef}
				type="file"
				accept={accept}
				onChange={onInputChange}
				className={style.input}
			/>
		</div>
	);
};

UploadFile.defaultProps = {
	accept: ".jpg, .jpeg",
	onChange: Function(),
};

UploadFile.propTypes = {
	value: PropTypes.string,
	accept: PropTypes.string,
	onChange: PropTypes.func,
	children: PropTypes.any.isRequired,
};

export default UploadFile;
