import { Request, Response } from "express";
import { Controller } from "./Controller";

export class UserController extends Controller {

	async get(req: Request, res: Response) {
		return res.status(500).send('TODO');
	}
}
