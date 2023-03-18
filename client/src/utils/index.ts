import moment from "moment";

export const padTimeValue = (value: number): string =>
	value.toString().padStart(2, "0");

export function getFormattedDateTime(value: Date): {
	formattedDate: string;
	formattedTime: string;
} {
	const datetime = moment(value);
	const formattedDate = datetime.format("DD/MM/YY");
	const formattedTime = `${padTimeValue(datetime.hour())}h ${padTimeValue(datetime.minute())}m`;

	return { formattedDate, formattedTime };
}
