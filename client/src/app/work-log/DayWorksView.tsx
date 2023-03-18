import React from "react";
import styled, { css } from 'styled-components';
import { User } from "../../../../src/models/User";

interface WorkLogProps {
    user: User
}

export function DayWorksView({ user }: WorkLogProps): React.ReactElement {
    return (
        <Container>
            <header>
                <span>Relógio de ponto</span>
                <div>
                    <span>#{user.authCod}</span>
                    <span>Usuário</span>
                </div>
            </header>
        </Container>
    )
}

const Container = styled.div`
    ${({theme}) => css`
        width: 30%;
        height: 85%;
        border: 1px solid red;

        > header {
            display: flex;
            width: 100%;
            justify-content: space-between;

            span {
                font-weight: 700;
                font-size: 0.8em;
            }

            > div {
                flex-flow: column;
                align-items: flex-end;

                span:last-child {
                    color: ${theme.auxiliarTextColor};
                    font-weight: 300;
                }
            }
        }
    `}
`