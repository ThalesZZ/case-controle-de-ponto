export type EntryType = 'checkin' | 'checkout'

export interface DayWork {
    id: string
    checkin: Date
    checkout?: Date
}