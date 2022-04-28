import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import Form from "components/Form/Form";
import Input from "components/Form/Input";
import TextField from "components/FormElements/TextField";
import BasicButton from "components/BasicButton";
import { withValidationHandling } from "helpers/validation";
import validations from "./validations";
import style from "../style.css";

const signUp = () => Promise.resolve();

const SignUp = () => {
	const navigate = useNavigate();
	const [isFetching, setIsFetching] = useState(false);

	const onSubmit = (values) => {
		setIsFetching(true);

		return signUp(values)
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
				<h2 className={style.title}>Sign up to cinevera</h2>

				<Form
					className={style.form}
					onSubmit={onSubmit}
					validations={validations}
				>
					<Input name="name">
						<TextField
							label="Name"
							placeholder="John Wick"
							icon="person"
							className={style.input}
						/>
					</Input>

					<Input name="email">
						<TextField
							type="email"
							label="Email"
							placeholder="someemail@gmail.com"
							icon="email"
							className={style.input}
						/>
					</Input>

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
						text="Sign Up"
						isLoading={isFetching}
						className={style.submit}
					/>
				</Form>
			</div>

			<p className={style.auth_link}>
				Already a member?
				{" "}

				<NavLink to="/auth/sign-in/">
					Sign in now
				</NavLink>
			</p>
		</main>
	);
};

export default SignUp;
