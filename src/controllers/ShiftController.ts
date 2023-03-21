import { randomUUID } from "crypto";
import { Request, Response } from "express";
import { Shift } from "../models/Shift";
import shifts from "../persistence/shifts";
import users from "../persistence/users";

export class ShiftController {
	async start(req: Request, res: Response) {
		const { userId } = req.body;

		const user = users.find((user) => user.id === userId);
		if (!user) return res.status(404).send("Usuário não encontrado");

		const now = new Date();
		const shift: Shift = { id: randomUUID(), checkin: now };
		shifts.get(userId)?.push(shift);

		return res.status(200).json(user);
	}

	async stop(req: Request, res: Response) {
		const { userId } = req.body;

		const user = users.find((user) => user.id === userId);
		if (!user) return res.status(404).send("Usuário não encontrado");

		const shift = user.shifts.find((shift) => !shift.checkout);
		if (!shift) return res.status(404).send("Turno não encontrado");

		const now = new Date();
		shift.checkout = now;

		return res.status(200).json(user);
	}
}
