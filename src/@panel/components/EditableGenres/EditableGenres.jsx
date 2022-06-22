import React, { useState } from "react";
import PropTypes from "prop-types";
import Icon from "components/Icon";
import GenreItem from "@panel/components/GenreItem";
import AddGenresPopup from "./AddGenresPopup";
import classnames from "classnames/bind";
import style from "./style.css";

const cx = classnames.bind(style);

const EditableGenres = (props) => {
	const {
		items,
		onAdd,
		onRemove,
		className,
	} = props;

	const [isAddGenresPopupShown, setIsAddGenresPopupShown] = useState(false);
	const [removingGenreCode, setRemovingGenreCode] = useState(null);

	const openAddGenresPopup = () => setIsAddGenresPopupShown(true);
	const closeAddGenresPopup = () => setIsAddGenresPopupShown(false);

	const handleAddGenre = (values) => {
		onAdd(values)
			.then(() => {
				closeAddGenresPopup();
			});
	};

	const handleRemoveGenre = (code) => {
		setRemovingGenreCode(code);

		onRemove(code)
			.then(() => {
				setRemovingGenreCode(null);
				closeAddGenresPopup();
			});
	};

	return (
		<div className={cx("genres", className)}>
			<button type="button" className={style.add_genre} onClick={openAddGenresPopup}>
				<Icon name="add" />
				<p>Add genres</p>
			</button>

			{items.map((code) => {
				const isLoading = code === removingGenreCode;

				return (
					<GenreItem
						key={code}
						code={code}
						onRemove={handleRemoveGenre}
						isLoading={isLoading}
					/>
				);
			})}

			{isAddGenresPopupShown && (
				<AddGenresPopup
					onSubmit={handleAddGenre}
					exclude={items}
					onClose={closeAddGenresPopup}
				/>
			)}
		</div>
	);
};

EditableGenres.propTypes = {
	onAdd: PropTypes.func,
	onRemove: PropTypes.func,
	items: PropTypes.arrayOf(PropTypes.string),
	className: PropTypes.string,
};

export default EditableGenres;
