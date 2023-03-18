import React from "react";
import styled, { css } from 'styled-components';
import { EntryType } from "../../../../src/models/DayWork";
import { User } from "../../../../src/models/User";
import { ActionButton } from "../../components/ActionButton";
import { useToggle } from "../../hooks/useToggle";
import { History } from "./History";

interface WorkLogProps {
    user: User
}

export function DayWorksView({ user }: WorkLogProps): React.ReactElement {
    const entryTypeToggler = useToggle(true)

    const entryType: EntryType = React.useMemo(() => entryTypeToggler.active ? 'checkin' : 'checkout', [entryTypeToggler.active])

    return (
        <Container>
            <header>
                <label>Relógio de ponto</label>
                <div>
                    <label>#{user.authCod}</label>
                    <span>Usuário</span>
                </div>
            </header>

            <ActionButton
                text={`Hora de ${entryType === 'checkin' ? 'entrada' : 'saída'}`}
                onClick={entryTypeToggler.toggle}
            />
            
            <History dayworks={user.dayWorks} entryType={entryType} />
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