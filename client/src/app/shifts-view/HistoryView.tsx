import React from "react"
import styled, { css } from 'styled-components'
import { EntryType, Shift } from "../../../../src/models/Shift"
import { getFormattedDateTime } from '../../services/utils'

interface HistoryProps {
    shifts: Array<Shift>
    entryType: EntryType
}

export function HistoryView({ shifts, entryType }: HistoryProps): React.ReactElement {
    return (
        <Container>
            <label>Dias anteriores</label>
            <div id="entries">
                {shifts
                    .filter(shift => !!shift.checkin && !!shift.checkout)
                    .sort((shift1, shift2) => shift2[entryType]?.getTime() - shift1[entryType]?.getTime())
                    .map(shift => {
                        const [formattedDate, formattedTime] = getFormattedDateTime(shift[entryType])

                        return (
                            <div key={shift.id} className="entry" data-testid="test-entry">
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