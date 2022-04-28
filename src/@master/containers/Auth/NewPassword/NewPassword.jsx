import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import Form from "components/Form/Form";
import Input from "components/Form/Input";
import TextField from "components/FormElements/TextField";
import BasicButton from "components/BasicButton";
import { withValidationHandling } from "helpers/validation";
import validations from "./validations";
import style from "../style.css";

const updatePassword = () => Promise.resolve();

const NewPassword = () => {
	const navigate = useNavigate();
	const [isFetching, setIsFetching] = useState(false);

	const onSubmit = (values) => {
		setIsFetching(true);

		return updatePassword(values)
			.then(() => {
				setIsFetching(false);
				navigate("/auth/sign-in/");
			})

			.catch(withValidationHandling((error) => {
				console.error(error);
				setIsFetching(false);
			}));
	};

	return (
		<main className={style.auth}>
			<header className={style.header}>
				<p className={style.logo}>cinevera</p>
			</header>

			<div className={style.section}>
				<h2 className={style.title}>Create new password</h2>

				<p className={style.another_text}>
					Your new password must be different
					from previous used passwords.
				</p>

				<Form
					className={style.form}
					onSubmit={onSubmit}
					validations={validations}
				>
					<Input name="password">
						<TextField
							type="password"
							label="Password"
							placeholder="********"
							icon="lock"
							className={style.input}
						/>
					</Input>

					<BasicButton
						type="submit"
						text="Reset Password"
						isLoading={isFetching}
						className={style.submit}
					/>
				</Form>
			</div>

			<p className={style.auth_link}>
				Have no account?
				{" "}

				<NavLink to="/auth/sign-up/">
					Sign up now
				</NavLink>
			</p>
		</main>
	);
};

export default NewPassword;
