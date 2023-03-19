import { Request, Response } from "express";
import users from "../persistence/users";

export class UserController {
	async login(req: Request, res: Response) {
		const { authCod } = req.body;

		const user = users.find((user) => user.authCod === authCod);

		return user
			? res.status(200).json(user)
			: res.status(404).send("User not found");
	}
}
