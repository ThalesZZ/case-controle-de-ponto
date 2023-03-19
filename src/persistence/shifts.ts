import { Shift } from "../models/Shift";

type ShiftsMappedByUserId = Map<string, Array<Shift>>;

const shifts: ShiftsMappedByUserId = new Map<string, Array<Shift>>([["1", []]]);

export default shifts;
