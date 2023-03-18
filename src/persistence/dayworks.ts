import { DayWork } from '../models/DayWork';

type DayWorksMappedByUserId = Map<number, Array<DayWork>>

const dayWorks: DayWorksMappedByUserId = new Map<number, Array<DayWork>>([
    [1, [ 
        { id: 1, checkin: new Date(0), checkout: new Date(1000)},
        { id: 2, checkin: new Date(1000), checkout: new Date(2000)},
        { id: 3, checkin: new Date(2000), checkout: new Date(4000)},
        { id: 4, checkin: new Date(4000), checkout: new Date(8000)},
     ]]
]);

export default dayWorks