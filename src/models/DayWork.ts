export type EntryType = 'checkin' | 'checkout'

export interface DayWork {
    id: number
    checkin: Date
    checkout: Date
}