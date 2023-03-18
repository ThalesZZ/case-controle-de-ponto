export type EntryType = 'checkin' | 'checkout'

export interface Shift {
    id: string
    checkin: Date
    checkout?: Date
}