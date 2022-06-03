import React, { useState, useEffect } from "react";
import Subheader from "@panel/components/Subheader";
import Table from "@panel/components/Table";
import { getUsers } from "./api";
import * as config from "./config";
import style from "./style.css";

const Users = () => {
	const [items, setItems] = useState([]);
	const [isRequestProcess, setIsRequestProcess] = useState(false);

	useEffect(() => {
		setIsRequestProcess(true);

		getUsers()
			.then(() => {
				setItems(fakeResult);
			})

			.catch((error) => {
				console.log(error);
			})

			.finally(() => {
				setIsRequestProcess(false);
			});
	}, []);

	return (
		<main className={style.users}>
			<Subheader
				title="Users list"
				to="/panel/users/new/"
				className={style.subheader}
			/>

			<Table
				headings={config.headings}
				items={items}
				isLoading={isRequestProcess}
				className={style.table}
			/>
		</main>
	);
};

export default Users;

export const fakeResult = [
	{
		id: "1",
		name: "Vasily Petrov",
		email: "vasyaqwe@gmail.com",
		role: "User",
	},

	{
		id: "2",
		name: "Petr Petrov",
		email: "petrov@gmail.com",
		role: "Moderator",
	},

	{
		id: "3",
		name: "Ivan Ivanov",
		email: "ivanov@gmail.com",
		role: "Admin",
	},
];
