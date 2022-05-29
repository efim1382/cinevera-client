import React from "react";
import PropTypes from "prop-types";
import classnames from "classnames/bind";
import Checkbox from "./Checkbox";
import HeadingCell from "./HeadingCell";
import Cell from "./Cell";
import style from "./style.css";

const cx = classnames.bind(style);

const Table = ({ className }) => {
	return (
		<div className={cx("table", className)}>
			<div className={style.headings}>
				<Checkbox />
				<HeadingCell width={150} text="Name" />
				<HeadingCell width={150} text="Year" />
			</div>

			{Array.from(Array(20).keys()).map((index) => {
				return (
					<div key={index} className={style.row}>
						<Checkbox />

						<Cell width={150}>
							<p>Name</p>
						</Cell>

						<Cell width={150}>
							<p>Name</p>
						</Cell>
					</div>
				);
			})}
		</div>
	);
};

Table.propTypes = {
	className: PropTypes.string,
};

export default Table;
