import * as currentUserActions from "actions/currentUser.actions";

describe("currentUser actions", () => {
	test(currentUserActions.TO_DEFAULT, () => {
		expect(
			currentUserActions.toDefault(),
		).toStrictEqual({
			type: currentUserActions.TO_DEFAULT,
		});
	});

	describe(currentUserActions.SET_CURRENT_USER_ID, () => {
		test("correct params", () => {
			const action = {
				type: currentUserActions.SET_CURRENT_USER_ID,
				id: "23jk2jsjkd2k3ej2ke",
			};

			expect(
				currentUserActions.setCurrentUserId(action.id),
			).toStrictEqual(
				action,
			);
		});

		test("wrong types params", () => {
			const id = {};

			const action = {
				type: currentUserActions.SET_CURRENT_USER_ID,
				id: "",
			};

			expect(
				currentUserActions.setCurrentUserId(id),
			).toStrictEqual(
				action,
			);
		});

		test("no params", () => {
			const action = {
				type: currentUserActions.SET_CURRENT_USER_ID,
				id: "",
			};

			expect(
				currentUserActions.setCurrentUserId(),
			).toStrictEqual(
				action,
			);
		});
	});
});
