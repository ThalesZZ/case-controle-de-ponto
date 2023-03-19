import { describe, jest, test } from '@jest/globals';
import { render, screen } from '@testing-library/react';
import React from 'react';
import { CurrentShiftView } from '../../../app/shifts-view/CurrentShiftView';

describe('current shift view component', () => {
    test('no current shift', () => {
        const startShift = jest.fn()
        const stopShift = jest.fn()
        const setState: React.Dispatch<React.SetStateAction<string>> = jest.fn()
        jest.spyOn(React, 'useState').mockImplementationOnce(initState => [initState, setState])
        render(<CurrentShiftView currentShift={null} startShift={startShift} stopShift={stopShift} />)

        const component = screen.getByTestId('test-current-shift-view')
        const buttonStart = screen.getByTestId('test-shift-button-start')
        const getButtonStop = () => screen.getByTestId('test-shift-button-stop')
        expect(component).toBeTruthy();
        expect(buttonStart).toBeTruthy();
        expect(getButtonStop).toThrow();
    });
})