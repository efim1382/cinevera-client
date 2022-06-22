import React from "react";
import PropTypes from "prop-types";
import classnames from "classnames/bind";
import Icon from "components/Icon";
import LoadingDots from "components/LoadingDots";
import Checkbox from "./Checkbox";
import HeadingCell from "./HeadingCell";
import Cell from "./Cell";
import style from "./style.css";

const cx = classnames.bind(style);

export const renderCell = (props) => {
	const {
		heading,
		data,
	} = props;

	const value = data[heading.key];

	return (
		<Cell width={heading.width}>
			<p>{value}</p>
		</Cell>
	);
};

renderCell.propTypes = {
	heading: PropTypes.object.isRequired,
	data: PropTypes.object.isRequired,
};

const Table = (props) => {
	const {
		headings,
		items,
		renderCell: TableCell,
		isLoading,
		className,
	} = props;

	return (
		<div className={cx("table", className)}>
			<div className={style.headings}>
				{headings.map((heading) => {
					if (heading.key === "key_checkbox") {
						return (
							<Checkbox key={heading.key} />
						);
					}

					if (heading.key === "key_remove") {
						return (
							<div key={heading.key} className={style.fake_button} />
						);
					}

					return (
						<HeadingCell key={heading.key} width={heading.width} text={heading.label} />
					);
				})}
			</div>

			{items.map((item) => (
				<div key={item.id} className={style.row}>
					{headings.map((heading) => {
						if (heading.key === "key_checkbox") {
							return (
								<Checkbox key={heading.key} />
							);
						}

						if (heading.key === "key_remove") {
							return (
								<button key={heading.key} type="button" className={style.delete_button}>
									<Icon name="delete" />
								</button>
							);
						}

						return (
							<TableCell
								key={heading.key}
								heading={heading}
								data={item}
							/>
						);
					})}
				</div>
			))}

			{isLoading && (
				<LoadingDots className={style.loading } />
			)}
		</div>
	);
};

Table.defaultProps = {
	renderCell,
	headings: [],
	items: [],
	isLoading: false,
};

Table.propTypes = {
	renderCell: PropTypes.any,
	headings: PropTypes.array.isRequired,
	items: PropTypes.array.isRequired,
	isLoading: PropTypes.bool,
	className: PropTypes.string,
};

export default Table;
