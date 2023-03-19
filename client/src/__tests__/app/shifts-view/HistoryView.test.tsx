import { describe, expect, test } from '@jest/globals'
import { render, screen } from '@testing-library/react'
import React from 'react'
import { HistoryView } from '../../../app/shifts-view/HistoryView'

describe('history view component', () => {
    const shifts = [
        { id: '1', checkin: new Date("2023-03-19T00:00:00"), checkout: new Date("2023-03-19T09:00:00") },
        { id: '2', checkin: new Date("2023-03-18T00:00:00") },
        { id: '3', checkin: new Date("2023-03-10T01:15:00"), checkout: new Date("2023-03-10T10:15:00") },
        { id: '4', checkin: new Date("2023-03-13T00:05:00"), checkout: new Date("2023-03-13T09:05:00") }
    ]

    test('shifts history render', () => {
        const { rerender } = render(<HistoryView entryType="checkin" shifts={shifts} />)

        const checkins = screen.getAllByTestId('test-entry');
        expect(checkins.length).toBe(3);
        expect(checkins[0].childNodes[0].textContent).toBe("19/03/23");
        expect(checkins[0].childNodes[1].textContent).toBe("00h 00m");
        expect(checkins[1].childNodes[0].textContent).toBe("13/03/23");
        expect(checkins[1].childNodes[1].textContent).toBe("00h 05m");
        expect(checkins[2].childNodes[0].textContent).toBe("10/03/23");
        expect(checkins[2].childNodes[1].textContent).toBe("01h 15m");

        rerender(<HistoryView entryType="checkout" shifts={shifts} />)
        const checkouts = screen.getAllByTestId('test-entry');
        expect(checkouts.length).toBe(3);
        expect(checkouts[0].childNodes[0].textContent).toBe("19/03/23");
        expect(checkouts[0].childNodes[1].textContent).toBe("09h 00m");
        expect(checkouts[1].childNodes[0].textContent).toBe("13/03/23");
        expect(checkouts[1].childNodes[1].textContent).toBe("09h 05m");
        expect(checkouts[2].childNodes[0].textContent).toBe("10/03/23");
        expect(checkouts[2].childNodes[1].textContent).toBe("10h 15m");
        
    });
})