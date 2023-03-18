/* eslint-disable react-hooks/exhaustive-deps */
import moment from "moment";
import React from "react";
import styled from 'styled-components';
import { DayWork } from "../../../../src/models/DayWork";
import { useContinuous } from "../../hooks/useContinuous";
import { getFormattedTimer } from "../../utils";

interface CurrentWorklogProps {
    currentDaywork: DayWork
}

const refreshIntervalMs = 10000

export function CurrentWorklog({ currentDaywork }: CurrentWorklogProps): React.ReactElement {
    const [workTimer, setWorkTimer] = React.useState<string>('')

    useContinuous(refreshIntervalMs, () => {
        const now = moment(new Date())
        const minutesSinceCheckin = now.diff(currentDaywork.checkin, 'minutes')
        const hours = Math.floor(minutesSinceCheckin / 60)
        const minutes = minutesSinceCheckin % 60

        setWorkTimer(getFormattedTimer(hours, minutes))
    }, [currentDaywork])

    return (
        <Container>
            <span>{workTimer}</span>
            <label>Horas de hoje</label>
        </Container>
    )
}

const Container = styled.div`
    flex-flow: column;
    gap: 0.7em;

    > span:first-child {
        font-weight: 700;
        font-size: 1.5em;
    }
`