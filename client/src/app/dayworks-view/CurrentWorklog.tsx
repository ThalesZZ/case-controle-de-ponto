import React from "react";
import styled from 'styled-components';
import { getFormattedDateTime } from "../../utils";

export function CurrentWorklog(): React.ReactElement {
    const currentTime = React.useMemo(() =>{
        const time = getFormattedDateTime(new Date()).formattedTime

        return time
    }, [])

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