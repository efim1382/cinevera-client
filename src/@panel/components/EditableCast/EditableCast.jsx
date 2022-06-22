import React, { useState } from "react";
import PropTypes from "prop-types";
import Icon from "components/Icon";
import LoadingRing from "components/LoadingRing";
import AddCastPopup from "./AddCastPopup";
import classnames from "classnames/bind";
import style from "./style.css";

const cx = classnames.bind(style);

const EditableCast = (props) => {
	const {
		onAdd,
		onRemove,
		items,
		className,
	} = props;

	const [castRemovingId, setCastRemovingId] = useState("");
	const [isAddCastPopupShown, setIsAddCastPopupShown] = useState(false);

	const openAddCastPopup = () => setIsAddCastPopupShown(true);
	const closeAddCastPopup = () => setIsAddCastPopupShown(false);

	const handleRemove = (id) => {
		setCastRemovingId(id);

		onRemove(id)
			.then(() => {
				setCastRemovingId("");
			});
	};

	return (
		<div className={cx("cast", className)}>
			<button type="button" onClick={openAddCastPopup} className={style.item}>
				<div className={style.empty_photo}>
					<Icon name="add" />
				</div>

				<p className={style.add_text}>Add Cast</p>
			</button>

			{items.map((item) => {
				const inline = { backgroundImage: `url(${item.actor.photo})` };
				const isLoading = castRemovingId === item.actor.id;

				const onRemove = () => {
					handleRemove(item.actor.id);
				};

				return (
					<div key={item.actor.id} className={style.item}>
						<div className={style.photo} style={inline} />

						<div className={style.information}>
							<p className={style.name}>{item.actor.name}</p>
							<p className={style.character}>{item.characterName}</p>
						</div>

						<button type="button" className={style.delete} onClick={onRemove}>
							<Icon name="delete" />

							{isLoading && (
								<LoadingRing isShown className={style.loading} />
							)}
						</button>
					</div>
				);
			})}

			{isAddCastPopupShown && (
				<AddCastPopup
					onSubmit={onAdd}
					onClose={closeAddCastPopup}
				/>
			)}
		</div>
	);
};

EditableCast.propTypes = {
	onAdd: PropTypes.func.isRequired,
	onRemove: PropTypes.func.isRequired,
	items: PropTypes.array,
	className: PropTypes.string,
};

export default EditableCast;
