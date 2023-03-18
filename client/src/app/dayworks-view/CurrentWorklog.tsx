/* eslint-disable react-hooks/exhaustive-deps */
import moment from "moment";
import React from "react";
import styled, { css } from 'styled-components';
import { DayWork } from "../../../../src/models/DayWork";
import { useContinuous } from "../../hooks/useContinuous";
import { getFormattedTimer } from "../../utils";

interface CurrentWorklogProps {
    currentDaywork: DayWork
    startShift: () => void
    stopShift: () => void
}

const refreshIntervalMs = 10000

export function CurrentWorklog({ currentDaywork, startShift, stopShift }: CurrentWorklogProps): React.ReactElement {
    const dayworkStarted = !!currentDaywork?.checkin

    const [workTimer, setWorkTimer] = React.useState<string>('')

    useContinuous(refreshIntervalMs, () => {
        if (!currentDaywork)
            return setWorkTimer(getFormattedTimer(0, 0))

        const now = moment(new Date())
        const minutesSinceCheckin = now.diff(currentDaywork.checkin, 'minutes')
        const hours = Math.floor(minutesSinceCheckin / 60)
        const minutes = minutesSinceCheckin % 60

        setWorkTimer(getFormattedTimer(hours, minutes))
    }, [currentDaywork])

    return (
        <Container dayWorkStarted={dayworkStarted}>
            <div id="timer">
                <span>{workTimer}</span>
                <label>Horas de hoje</label>
            </div>

            {!dayworkStarted ? (
                <button onClick={startShift}>Iniciar turno</button>
            ) : (
                <button onClick={stopShift}>Finalizar turno</button>
            )}
        </Container>
    )
}

const Container = styled.div<{dayWorkStarted: boolean}>`
    ${({theme, dayWorkStarted}) => css`
        justify-content: space-between;

        > button {
            border: none;
            border-radius: ${theme.boxRadius}px;
            background-color: ${dayWorkStarted ? theme.danger : theme.success};
            padding: 0.5em 1em;
            font-weight: 700;
            font-size: 0.8em;
            color: ${theme.auxiliar};
            cursor: pointer;

            :hover {
                background-color: ${dayWorkStarted ? theme.dangerLight : theme.successLight};
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