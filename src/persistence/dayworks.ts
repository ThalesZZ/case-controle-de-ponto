import { DayWork } from '../models/DayWork';

type DayWorksMappedByUserId = Map<number, Array<DayWork>>

const dayWorks: DayWorksMappedByUserId = new Map<number, Array<DayWork>>([
    [1, [ 
        { id: 1, checkin: new Date(0), checkout: new Date(100000000)},
        { id: 2, checkin: new Date(100000000), checkout: new Date(200000000)},
        { id: 3, checkin: new Date(200000000), checkout: new Date(400000000)},
        { id: 4, checkin: new Date(400000000), checkout: new Date(800000000)},
     ]]
]);

export default dayWorks