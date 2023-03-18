import moment from 'moment'
import React from "react"
import styled, { css } from 'styled-components'
import { DayWork } from "../../../../src/models/DayWork"

const padTimeValue = (value: number): string => value.toString().padStart(2, '0')

interface HistoryProps {
    dayworks: Array<DayWork>
}

export function History({ dayworks }: HistoryProps): React.ReactElement {
    const entryType: 'checkin' | 'checkout' = 'checkin'

    return (
        <Container>
            <label>Dias anteriores</label>
            <div id="entries">
                {dayworks.map(daywork => {
                    const dateTime = moment(daywork[entryType])
                    const date = dateTime.format('DD/MM/YY')
                    const hours = padTimeValue(dateTime.hour())
                    const minutes = padTimeValue(dateTime.minute())

                    return (
                        <div key={daywork.id} className="entry">
                            <span>{date}</span>
                            <span>{`${hours}h ${minutes}m`}</span>
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