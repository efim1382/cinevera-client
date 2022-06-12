import React, { useContext, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import Overlay from "components/Overlay";
import BasicButton from "components/BasicButton";
import Form from "components/Form/Form";
import Input from "components/Form/Input";
import CastField from "@panel/components/FormElements/CastField";
import { updateMovie } from "@panel/api/movies.api";
import validations from "./validations";
import useQuery from "hooks/useQuery";
import { MovieDetailsContext } from "@panel/containers/Movies/Details/Details.store";
import style from "./style.css";

export const queryParam = "add-cast";

const AddCastOverlay = () => {
	const navigate = useNavigate();
	const location = useLocation();
	const query = useQuery();
	const { id } = useParams();
	const [isUpdating, setIsUpdating] = useState(false);

	const {
		state: { data: { cast } },
		actions,
	} = useContext(MovieDetailsContext);

	const closeOverlay = () => {
		query.delete(queryParam);
		navigate(`${location.pathname}${query.toString()}`);
	};

	const handleSubmit = (values) => {
		setIsUpdating(true);

		const filteredCast = [...cast, ...values.cast]
			.map((item) => ({
				...item,
				actor: item.actor.id || item.actor,
			}));

		updateMovie(id, { cast: filteredCast })
			.then(({ movie }) => {
				actions.setData(movie);
				setIsUpdating(false);
				closeOverlay();
			})

			.catch((error) => {
				setIsUpdating(false);
				console.log(error);
			});
	};

	return (
		<Overlay onClose={closeOverlay}>
			<Form className={style.form} onSubmit={handleSubmit} validations={validations}>
				<Input name="cast">
					<CastField className={style.cast_field} />
				</Input>

				<BasicButton
					type="submit"
					text="Submit"
					isLoading={isUpdating}
					className={style.submit}
				/>
			</Form>
		</Overlay>
	);
};

export default AddCastOverlay;
