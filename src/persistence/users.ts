import { User } from '../models/User';
import dayworks from '../persistence/dayworks';

const users: Array<User> = [
    { id: 1, authCod: "ABC123", dayWorks: dayworks.get(1) }
];

export default users