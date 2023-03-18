import React from "react";
import styled, { css } from 'styled-components';
import { EntryType, Shift } from "../../../../src/models/Shift";
import { User } from "../../../../src/models/User";
import { ActionButton } from "../../components/ActionButton";
import { API } from "../../services/api/api";
import { useToggle } from "../../services/hooks/useToggle";
import { CurrentShiftView } from "./CurrentShiftView";
import { HistoryView } from "./HistoryView";

interface ShiftsViewProps {
    user: User
    setUser: React.Dispatch<React.SetStateAction<User>>
}

export function ShiftsView({ user, setUser }: ShiftsViewProps): React.ReactElement {
    const entryTypeToggler = useToggle(true)
    const entryType: EntryType = React.useMemo(() => entryTypeToggler.active ? 'checkin' : 'checkout', [entryTypeToggler.active])

    const currentShift: Shift = React.useMemo(() => user.shifts.find(shift => !shift.checkout), [user])

    function startShift(): void {
        API.startShift(user.id).then(setUser)
    }

    function stopShift(): void {
        API.stopShift(user.id, currentShift.id).then(setUser)
    }

    return (
        <Container>
            <header>
                <label>Relógio de ponto</label>
                <div>
                    <label>#{user.authCod}</label>
                    <span>Usuário</span>
                </div>
            </header>

            <CurrentShiftView currentShift={currentShift} startShift={startShift} stopShift={stopShift} />

            <ActionButton
                text={`Hora de ${entryType === 'checkin' ? 'entrada' : 'saída'}`}
                onClick={entryTypeToggler.toggle}
            />

            <HistoryView entryType={entryType} shifts={user.shifts} />
        </Container>
    )
}

const Container = styled.div`
    ${({ theme }) => css`
        width: 28%;
        height: 85%;
        flex-flow: column;
        gap: 1.5em;

        > header {
            display: flex;
            width: 100%;
            justify-content: space-between;

            > div {
                flex-flow: column;
                align-items: flex-end;

                span:last-child {
                    color: ${theme.auxiliarTextColor};
                    font-weight: 300;
                    font-size: 0.8em;
                }
            }
        }
    `}
`