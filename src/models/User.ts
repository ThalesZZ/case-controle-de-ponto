import { DayWork } from "./DayWork";

export interface User {
	id: number;
	authCod: string;
	dayWorks: Array<DayWork>;
}
