import { Request, Response } from "express";
import { Controller } from "./Controller";

export class UserController extends Controller {
	async get(req: Request, res: Response) {
		return res.status(500).send("TODO");
	}

	async create(authCod: string) {
		console.log("CREATING", authCod);
		const user = await this.prisma.user.create({ data: { authCod } });
		console.log("!!!!! CREATED USER: ", user);

		return user;
	}
}
