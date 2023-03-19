/* eslint-disable react-hooks/exhaustive-deps */
import moment from "moment";
import React from "react";
import styled, { css } from 'styled-components';
import { Shift } from "../../../../src/models/Shift";
import { useContinuous } from "../../services/hooks/useContinuous";
import { getFormattedTime } from "../../services/utils";

interface CurrentShiftViewProps {
    currentShift: Shift
    startShift: () => void
    stopShift: () => void
}

const refreshIntervalMs = 60000

export function CurrentShiftView({ currentShift, startShift, stopShift }: CurrentShiftViewProps): React.ReactElement {
    const shiftStarted = !!currentShift?.checkin

    const [shiftTimer, setShiftTimer] = React.useState<string>('')

    useContinuous(refreshIntervalMs, () => {
        if (!currentShift)
            return setShiftTimer(getFormattedTime(0, 0))

        const now = moment(new Date())
        const minutesSinceCheckin = now.diff(currentShift.checkin, 'minutes')
        const hours = Math.floor(minutesSinceCheckin / 60)
        const minutes = minutesSinceCheckin % 60

        setShiftTimer(getFormattedTime(hours, minutes))
    }, [currentShift])

    return (
        <Container shiftStarted={shiftStarted} data-testid="test-current-shift-view">
            <div id="timer">
                <span>{shiftTimer}</span>
                <label>Horas de hoje</label>
            </div>

            {!shiftStarted ? (
                <button onClick={startShift} data-testid="test-shift-button-start">Iniciar turno</button>
            ) : (
                <button onClick={stopShift} data-testid="test-shift-button-stop">Finalizar turno</button>
            )}
        </Container>
    )
}

const Container = styled.div<{ shiftStarted: boolean }>`
    ${({ theme, shiftStarted }) => css`
        justify-content: space-between;

        > button {
            border: none;
            border-radius: ${theme.boxRadius}px;
            background-color: ${shiftStarted ? theme.danger : theme.success};
            padding: 0.5em 1em;
            font-weight: 700;
            font-size: 0.8em;
            color: ${theme.auxiliar};
            cursor: pointer;

            :hover {
                background-color: ${shiftStarted ? theme.dangerLight : theme.successLight};
            }
        }

        #timer {
            flex-flow: column;
            gap: 0.7em;

            > span:first-child {
                font-weight: 700;
                font-size: 1.5em;
            }
        }    
    `}
`