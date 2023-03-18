import { User } from "../../../src/models/User";

const path = (endpoint: string) => `http://localhost:8000/${endpoint}`

export const API = {
    async login(authCod: string): Promise<User> {
        const res = await fetch(path('login'), {
            method: 'POST',
            headers: { 'Content-type': 'application/json' },
            body: JSON.stringify({ authCod })
        });
        if (res.status === 200)
            return res.json();
        else
            throw res;
    },
    async startShift(userId: string): Promise<User> {
        const res = await fetch(path('start'), {
            method: 'POST',
            headers: { 'Content-type': 'application/json' },
            body: JSON.stringify({ userId })
        });
        if (res.status === 200)
            return res.json();
        else
            throw res;
    }
}