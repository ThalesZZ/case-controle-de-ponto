import { Shift } from '../models/Shift';

type ShiftsMappedByUserId = Map<string, Array<Shift>>

const shifts: ShiftsMappedByUserId = new Map<string, Array<Shift>>([
    ['1', [ 
        { id: '1', checkin: new Date(0), checkout: new Date(100000000)},
        { id: '2', checkin: new Date(100000000), checkout: new Date(200000000)},
        { id: '3', checkin: new Date(200000000), checkout: new Date(400000000)},
        { id: '4', checkin: new Date(400000000), checkout: new Date(800000000)},
     ]]
]);

export default shifts