import { DayWork } from "./DayWork";

export interface User {
	id: string;
	authCod: string;
	dayWorks: Array<DayWork>;
}
