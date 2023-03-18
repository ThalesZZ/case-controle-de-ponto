import React from "react";
import styled, { css } from 'styled-components';
import { User } from "../../../../src/models/User";
import { History } from "./History";

interface WorkLogProps {
    user: User
}

export function DayWorksView({ user }: WorkLogProps): React.ReactElement {

    return (
        <Container>
            <header>
                <label>Relógio de ponto</label>
                <div>
                    <label>#{user.authCod}</label>
                    <span>Usuário</span>
                </div>
            </header>
            <History dayworks={user.dayWorks} />
        </Container>
    )
}

const Container = styled.div`
    ${({theme}) => css`
        width: 30%;
        height: 85%;
        flex-flow: column;
        border: 1px solid red;

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