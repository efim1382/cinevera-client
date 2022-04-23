import React, { Fragment, useState } from "react";
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
		<Fragment>
			<header className={style.header}>
				<NavLink to="/" className={style.logo}>
					<h1>Cinevera</h1>
				</NavLink>
			</header>

			<main className={style.auth}>
				<div className={style.background}>
					<h2>Welcome to <span>SearchTabs</span></h2>

					<p className={style.text_description}>
						Please, enter your personal details
						<br />
						and start working with us
					</p>

					<NavLink to="/auth/sign-in/" className={style.link}>
						<BasicButton
							appearance="outline"
							theme="contrast"
							text="Sign In"
						/>
					</NavLink>
				</div>

				<div className={style.section}>
					<h2 className={style.subtitle}>Create new password</h2>

					<p className={style.another_text}>
						Your new password must be different
						<br />
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
			</main>
		</Fragment>
	);
};

export default NewPassword;
