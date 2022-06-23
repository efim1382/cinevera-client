import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Form from "components/Form/Form";
import Input from "components/Form/Input";
import TextField from "components/FormElements/TextField";
import Overlay from "components/Overlay";
import UploadFile from "components/FormElements/UploadFile";
import UploadImage from "components/UploadImage";
import BasicButton from "components/BasicButton";
import useQuery from "hooks/useQuery";
import { createActor } from "@panel/api/actors.api";
import validations from "./validations";
import style from "./style.css";

export const queryParam = "new-actor";

const AddActorOverlay = () => {
	const query = useQuery();
	const navigate = useNavigate();
	const [isLoading, setIsLoading] = useState(false);

	const closeOverlay = () => {
		query.delete(queryParam);
		navigate(`${location.pathname}${query.toString()}`);
	};

	const onSubmit = (values) => {
		setIsLoading(true);

		return createActor(values)
			.then(({ actor }) => {
				setIsLoading(false);
				navigate(`/panel/actors/${actor.id}/`);
			})

			.catch((error) => {
				console.log(error);
				setIsLoading(false);
			});
	};

	return (
		<Overlay onClose={closeOverlay}>
			<Form
				onSubmit={onSubmit}
				validations={validations}
				className={style.form}
			>
				<Input name="name">
					<TextField label="Name" />
				</Input>

				<Input name="photo">
					<UploadFile>
						<UploadImage className={style.image} />
					</UploadFile>
				</Input>

				<BasicButton
					type="submit"
					text="Submit"
					isLoading={isLoading}
					className={style.submit}
				/>
			</Form>
		</Overlay>
	);
};

export default AddActorOverlay;
