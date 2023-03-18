import moment from "moment";

export const padTimeValue = (value: number): string =>
	value.toString().padStart(2, "0");

export function getFormattedTimer(hours: number, minutes: number): string {
	return `${padTimeValue(hours)}h ${padTimeValue(minutes)}m`;
}

export function getFormattedDateTime(value: Date): [string, string] {
	const datetime = moment(value);
	const formattedDate = datetime.format("DD/MM/YY");
	const formattedTime = getFormattedTimer(datetime.hour(), datetime.minute());

	return [formattedDate, formattedTime];
}
