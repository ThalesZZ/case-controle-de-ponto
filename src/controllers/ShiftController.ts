import { randomUUID } from "crypto";
import { Express } from "express";
import { Shift } from "../models/Shift";
import shifts from "../persistence/shifts";
import users from "../persistence/users";

export default {
	init(app: Express) {
		app.post("/start-shift", (req, res) => {
			const { userId } = req.body;

			const user = users.find((user) => user.id === userId);
			if (!user) return res.status(404).send("User not found");

			const now = new Date();
			const shift: Shift = { id: randomUUID(), checkin: now };
			shifts.get(userId)?.push(shift);

			return res.status(200).json(user);
		});

		app.post("/stop-shift", (req, res) => {
			const { userId, shiftId } = req.body;

			const user = users.find((user) => user.id === userId);
			if (!user) return res.status(404).send("User not found");

			const shift = user.shifts.find((shift) => shift.id === shiftId);
			if (!shift) return res.status(404).send("Shift not found");

			const now = new Date();
			shift.checkout = now;

			return res.status(200).json(user);
		});
	},
};
