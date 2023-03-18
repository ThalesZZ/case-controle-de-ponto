import { Express } from "express";
import users from "../persistence/users";

export default {
	init(app: Express) {
		app.post("/login", (req, res) => {
			const { authCod } = req.body;

			const user = users.find((user) => user.authCod === authCod);

			return user
				? res.status(200).json(user)
				: res.status(404).send("User not found");
		});
	},
};
