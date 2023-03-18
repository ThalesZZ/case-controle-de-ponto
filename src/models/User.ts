import { Shift } from './Shift';

export interface User {
	id: string;
	authCod: string;
	shifts: Array<Shift>;
}
