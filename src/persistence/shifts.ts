import { Shift } from "../models/Shift";

type ShiftsMappedByUserId = Map<string, Array<Shift>>;

const shifts: ShiftsMappedByUserId = new Map<string, Array<Shift>>([
	[
		"1",
		[
			{
				id: "1",
				checkin: new Date("2023-01-01T09:00:00"),
				checkout: new Date("2023-01-01T18:00:00"),
			},
			{
				id: "2",
				checkin: new Date("2023-01-02T09:05:00"),
				checkout: new Date("2023-01-02T18:05:00"),
			},
			{
				id: "3",
				checkin: new Date("2023-01-03T08:58:00"),
				checkout: new Date("2023-01-03T18:03:00"),
			},
			{
				id: "4",
				checkin: new Date("2023-01-04T09:14:50"),
				checkout: new Date("2023-01-04T18:32:59"),
			},
		],
	],
]);

export default shifts;
