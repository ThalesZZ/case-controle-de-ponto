/* eslint-disable react-hooks/exhaustive-deps */
import moment from "moment";
import React from "react";
import styled from 'styled-components';
import { DayWork } from "../../../../src/models/DayWork";
import { useToggle } from "../../hooks/useToggle";
import { getFormattedTimer } from "../../utils";

interface CurrentWorklogProps {
    currentDaywork: DayWork
}

export function CurrentWorklog({ currentDaywork }: CurrentWorklogProps): React.ReactElement {
    const updateTimerFlag = useToggle()
    React.useEffect(() => {
        const timer = setTimeout(updateTimerFlag.toggle, 10000)
        return () => clearTimeout(timer)
    }, [updateTimerFlag.active])

    const currentTime = React.useMemo(() => {
        const now = moment(new Date())
        const minutesSinceCheckin = now.diff(currentDaywork.checkin, 'minutes')
        const hours = Math.floor(minutesSinceCheckin / 60)
        const minutes = minutesSinceCheckin % 60

        return getFormattedTimer(hours, minutes)
    }, [updateTimerFlag.active, currentDaywork.checkin])

    return (
        <Container>
            <span>{currentTime}</span>
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