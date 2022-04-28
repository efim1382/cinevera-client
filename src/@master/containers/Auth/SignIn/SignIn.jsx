import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import Form from "components/Form/Form";
import Input from "components/Form/Input";
import TextField from "components/FormElements/TextField";
import BasicButton from "components/BasicButton";
import { withValidationHandling } from "helpers/validation";
import validations from "./validations";
import style from "../style.css";

const signIn = () => Promise.resolve();

const SignIn = () => {
	const navigate = useNavigate();
	const [isFetching, setIsFetching] = useState(false);

	const onSubmit = (values) => {
		setIsFetching(true);

		return signIn(values)
			.then((data) => {
				window.localStorage.setItem("token", data.token);
				setIsFetching(false);
				navigate("/");
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
				<h1 className={style.title}>Sign in to cinevera</h1>

				<Form
					className={style.form}
					onSubmit={onSubmit}
					validations={validations}
				>
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

					<NavLink to="/auth/forgot/" className={style.forgot}>Forgot your password?</NavLink>

					<BasicButton
						type="submit"
						text="Sign In"
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

export default SignIn;
