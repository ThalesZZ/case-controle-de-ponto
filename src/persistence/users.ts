import { User } from "../models/User";
import shifts from "./shifts";

const users: Array<User> = [
	{ id: "1", authCod: "ABC123", shifts: shifts.get("1") },
];

export default users;
