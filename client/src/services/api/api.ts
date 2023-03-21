import { Shift } from "../../../../src/models/Shift";
import { User } from "../../../../src/models/User";

const path = (endpoint: string) => `http://localhost:8000/${endpoint}`;
const resolveResponse = (res: Response) => {
	if (res.status === 200) return res.json();
	else throw res;
};

const headers: HeadersInit = { "Content-type": "application/json" };

export const API = {
	user: {
		async get(authCod: string): Promise<User> {
			return fetch(path(`user/${authCod}`), {
				headers,
				method: "GET",
			})
				.then(resolveResponse)
				.then(Mappers.user);
		},
	},
	async startShift(userId: string): Promise<User> {
		return fetch(path("start-shift"), {
			headers,
			method: "POST",
			body: JSON.stringify({ userId }),
		})
			.then(resolveResponse)
			.then(Mappers.user);
	},
	async stopShift(userId: string): Promise<User> {
		return await fetch(path("stop-shift"), {
			method: "POST",
			headers: { "Content-type": "application/json" },
			body: JSON.stringify({ userId }),
		})
			.then(resolveResponse)
			.then(Mappers.user);
	},
};

const Mappers = {
	user(dto: User): User {
		return {
			...dto,
			shifts: dto.shifts.map(Mappers.shift),
		};
	},
	shift(dto: Shift): Shift {
		return {
			...dto,
			checkin: new Date(dto.checkin),
			checkout: dto.checkout ? new Date(dto.checkout) : null,
		};
	},
};
