import { randomUUID } from "crypto";
import { Express } from "express";
import { DayWork } from "../models/DayWork";
import dayworks from "../persistence/dayworks";
import users from "../persistence/users";

export default {
	init(app: Express) {
		app.post("/start", (req, res) => {
			const { userId } = req.body;

			const user = users.find((user) => user.id === userId);
			if (!user) return res.status(404).send("User not found");

			const now = new Date();
			const newDayWork: DayWork = { id: randomUUID(), checkin: now };
			dayworks.get(userId)?.push(newDayWork);

			return res.status(200).json(user);
		});
	},
};
