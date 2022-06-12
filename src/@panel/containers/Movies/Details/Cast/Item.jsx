import React, { useState, useContext } from "react";
import PropTypes from "prop-types";
import Icon from "components/Icon";
import LoadingRing from "components/LoadingRing";
import { updateMovie } from "@panel/api/movies.api";
import { MovieDetailsContext } from "@panel/containers/Movies/Details/Details.store";
import style from "./style.css";
import { useParams } from "react-router-dom";

const Item = (props) => {
	const {
		id: actorId,
		photo,
		name,
		characterName,
	} = props;

	const { id } = useParams();
	const [isUpdating, setIsUpdating] = useState(false);
	const { state, actions } = useContext(MovieDetailsContext);
	const { data: { cast = [] } } = state;

	const inline = { backgroundImage: `url(${photo})` };

	const deleteCharacter = () => {
		const filteredCast = cast
			.filter((item) => item.actor.id !== actorId)

			.map((item) => ({
				...item,
				actor: item.actor.id,
			}));

		setIsUpdating(true);

		updateMovie(id, { cast: filteredCast })
			.then(({ movie }) => {
				actions.setData(movie);
				setIsUpdating(false);
			})
			.catch((error) => {
				setIsUpdating(false);
				console.log(error);
			});
	};

	return (
		<div className={style.item}>
			<div className={style.photo} style={inline} />

			<div className={style.information}>
				<p className={style.name}>{name}</p>
				<p className={style.character}>{characterName}</p>
			</div>

			<button type="button" className={style.delete} onClick={deleteCharacter}>
				<Icon name="delete" />

				{isUpdating && (
					<LoadingRing isShown className={style.loading} />
				)}
			</button>
		</div>
	);
};

Item.propTypes = {
	id: PropTypes.string.isRequired,
	photo: PropTypes.string,
	name: PropTypes.string.isRequired,
	characterName: PropTypes.string.isRequired,
};

export default Item;
