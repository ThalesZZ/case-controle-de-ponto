import React from "react"
import styled, { css } from 'styled-components'
import { DayWork } from "../../../../src/models/DayWork"

interface HistoryProps {
    dayworks: Array<DayWork>
}

export function History({ dayworks }: HistoryProps): React.ReactElement {
    return (
        <Container>
            <label>Dias anteriores</label>
            <div id="entries">
                {dayworks.map(daywork => {
                    

                    return (
                        <div key={daywork.id} className="entry">
                            <span>{daywork.checkin.toString()}</span>
                            <span>{daywork.checkin.toString()}</span>
                        </div>
                    )
                })}
            </div>
        </Container>
    )
}

const Container = styled.div`
    ${({ theme }) => css`
        flex-flow: column;
        gap: 0.5em;

        #entries {
            flex-flow: column;
            gap: 0.5em;

            .entry {
                padding: 0.9em;
                background-color: ${theme.auxiliar};
            }
        }
    `}
`