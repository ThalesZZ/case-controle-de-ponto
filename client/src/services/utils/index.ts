import moment from "moment";

export function padTimeValue(value: number): string {
	const stringValue = value.toString();
	if (stringValue.length > 2) throw new Error("invalid value length");

	return stringValue.padStart(2, "0");
}

export function getFormattedTime(hours: number, minutes: number): string {
	if(minutes >= 60) throw new Error("minutes must be less than 60")

	return `${padTimeValue(Math.floor(hours))}h ${padTimeValue(Math.floor(minutes))}m`;
}

export function getFormattedDateTime(value: Date): [string, string] {
	const datetime = moment(value);
	const formattedDate = datetime.format("DD/MM/YY");
	const formattedTime = getFormattedTime(datetime.hour(), datetime.minute());

	return [formattedDate, formattedTime];
}
