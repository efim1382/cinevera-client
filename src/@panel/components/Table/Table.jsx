import React from "react";
import PropTypes from "prop-types";
import classnames from "classnames/bind";
import Checkbox from "./Checkbox";
import Icon from "components/Icon";
import HeadingCell from "./HeadingCell";
import Cell from "./Cell";
import style from "./style.css";

const cx = classnames.bind(style);

const Table = ({ className }) => {
	return (
		<div className={cx("table", className)}>
			<div className={style.headings}>
				<Checkbox />
				<HeadingCell width={200} text="Name" />
				<HeadingCell width={80} text="Year" />
				<div className={style.fake_button} />
			</div>

			{Array.from(Array(20).keys()).map((index) => {
				return (
					<div key={index} className={style.row}>
						<Checkbox />

						<Cell width={200}>
							<p>Name</p>
						</Cell>

						<Cell width={80}>
							<p>Name</p>
						</Cell>

						<button type="button" className={style.delete_button}>
							<Icon name="delete" />
						</button>
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
