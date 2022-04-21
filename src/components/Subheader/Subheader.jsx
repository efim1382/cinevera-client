import React, { Fragment } from "react";
import PropTypes from "prop-types";
import classnames from "classnames/bind";
import Loading from "components/Loading";
import style from "./style.css";

const cx = classnames.bind(style);

const Subheader = (props) => {
	const {
		title,
		text,
		isLoading,
		className,
	} = props;

	const isContentShown = !isLoading && title;

	return (
		<div className={cx("subheader", className)}>
			<div className="container">
				{isContentShown && (
					<Fragment>
						<h2>{title}</h2>

						{text && (
							<p className={style.subtitle}>{text}</p>
						)}
					</Fragment>
				)}

				{isLoading && (
					<Loading />
				)}
			</div>
		</div>
	);
};

Subheader.defaultProps = {
	text: "",
	isLoading: false,
};

Subheader.propTypes = {
	text: PropTypes.string,
	isLoading: PropTypes.bool,
	className: PropTypes.string,

	title: (props, propName, componentName) => {
		const type = typeof props[propName];

		if (!props.isLoading && type !== "string") {
			return new Error(`'${propName}' of type '${type}' supplied to ${componentName} expected 'string'`);
		}
	},
};

export default Subheader;
