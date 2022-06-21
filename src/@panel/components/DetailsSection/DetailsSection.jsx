import React from "react";
import PropTypes from "prop-types";
import LoadingRing from "components/LoadingRing";
import classnames from "classnames/bind";
import style from "./style.css";

const cx = classnames.bind(style);

const DetailsSection = (props) => {
	const {
		title,
		text,
		isLoading,
		className,
		children,
	} = props;

	return (
		<section className={cx("section", className)}>
			<div className={style.subtitle_wrapper}>
				<h3 className={style.title}>{title}</h3>

				{isLoading && (
					<LoadingRing isShown className={style.loading} />
				)}
			</div>

			{text && (
				<p className={style.text}>{text}</p>
			)}

			<div className={style.content}>{children}</div>
		</section>
	);
};

DetailsSection.propTypes = {
	title: PropTypes.string.isRequired,
	text: PropTypes.string,
	isLoading: PropTypes.bool,
	className: PropTypes.string,
	children: PropTypes.any.isRequired,
};

export default DetailsSection;
