import React from "react"
import styled, { css } from 'styled-components'
import { DayWork, EntryType } from "../../../../src/models/DayWork"
import { getFormattedDateTime } from '../../utils'

interface HistoryProps {
    dayworks: Array<DayWork>
    entryType: EntryType
}

export function History({ dayworks, entryType }: HistoryProps): React.ReactElement {
    return (
        <Container>
            <label>Dias anteriores</label>
            <div id="entries">
                {dayworks.map(daywork => {
                    const { formattedDate, formattedTime } = getFormattedDateTime(daywork[entryType])

                    return (
                        <div key={daywork.id} className="entry">
                            <span>{formattedDate}</span>
                            <span>{formattedTime}</span>
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
        overflow-y: auto;

        #entries {
            flex-flow: column;
            overflow-y: auto;
            gap: 0.5em;

            .entry {
                justify-content: space-between;
                padding: 1em;
                padding-right: 1.5em;
                background-color: ${theme.auxiliar};
                border-radius: ${theme.boxRadius}px;

                span:first-child {
                    color: ${theme.auxiliarTextColor};
                    font-weight: 500;
                }

                span:last-child {
                    color: ${theme.textColor};
                    font-weight: 700;
                }
            }
        }
    `}
`