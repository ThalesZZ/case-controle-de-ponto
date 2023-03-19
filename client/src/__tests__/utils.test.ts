import { describe, expect, test } from "@jest/globals";
import {
	getFormattedDateTime,
	getFormattedTime,
	padTimeValue
} from "../services/utils";

describe("date/time formatting funtions", () => {
	test("time value padding", () => {
		const [expected1, actual1] = ["01", padTimeValue(1)];
		const [expected2, actual2] = ["00", padTimeValue(0)];
		const [expected3, actual3] = ["12", padTimeValue(12)];

		expect(actual1).toBe(expected1);
		expect(actual2).toBe(expected2);
		expect(actual3).toBe(expected3);
		expect(() => padTimeValue(999)).toThrow();
	});

	test("time formatting", () => {
		const [expected1, actual1] = ["12h 34m", getFormattedTime(12, 34)];
		const [expected2, actual2] = [
			"01h 05m",
			getFormattedTime(1.9999, 5.0001),
		];

		expect(actual1).toBe(expected1);
		expect(actual2).toBe(expected2);
		expect(() => getFormattedTime(60, 60)).toThrow();
	});

	test("date formatting", () => {
		const date = new Date("2023-03-19T11:23:58");
		const [expectedDate, expectedTime] = ["19/03/23", "11h 23m"];
		const [actualDate, actualTime] = getFormattedDateTime(date);

		expect(actualDate).toBe(expectedDate);
		expect(actualTime).toBe(expectedTime);
	});
});
