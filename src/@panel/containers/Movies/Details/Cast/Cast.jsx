import React, { useContext } from "react";
import BasicButton from "components/BasicButton";
import Item from "./Item";
import { MovieDetailsContext } from "@panel/containers/Movies/Details/Details.store";
import style from "./style.css";

const Cast = () => {
	const { state } = useContext(MovieDetailsContext);

	const {
		data = {},
		isFetchComplete,
	} = state;

	const { cast = [] } = data;

	if (!isFetchComplete) {
		return null;
	}

	return (
		<div className={style.cast}>
			<BasicButton
				text="Add"
				to={{ search: "?add-cast" }}
				className={style.button}
			/>

			<div className={style.cast_list}>
				{cast.map((item) => {
					return (
						<Item
							key={item.actor.id}
							id={item.actor.id}
							photo={item.actor.photo}
							name={item.actor.name}
							characterName={item.characterName}
						/>
					);
				})}
			</div>
		</div>
	);
};

export default Cast;
