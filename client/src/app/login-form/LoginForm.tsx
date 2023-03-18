import React from 'react';
import styled, { css } from 'styled-components';
import { User } from '../../../../src/models/User';
import { API } from '../../api/api';
import { ActionButton } from '../../components/ActionButton';
import { TextInput } from "../../components/TextInput";

interface LoginFormProps {
    setLoggedUser: React.Dispatch<React.SetStateAction<User>>
}

export function LoginForm({setLoggedUser}: LoginFormProps): React.ReactElement {
    const [authCod, setAuthCod] = React.useState<string>('')

    function login(): void {
        API.login(authCod).then(setLoggedUser)
    }

    return (
        <Container>
            <div id="login-header">
                Ponto <span>Ilumeo</span>
            </div>
            <TextInput value={authCod} setValue={setAuthCod} />
            <ActionButton text="Confirmar" onClick={login} />
        </Container>
    )
}

const Container = styled.div`
    ${({ theme }) => css`
        width: 28%;
        flex-flow: column;
        gap: 1.5em;

        #login-header {
            font-size: 1.3em;
            font-weight: 400;
            color: #CFCFCF;
            margin-bottom: 1em;

            span {
                font-size: 1.05em;
                margin-left: 5px;
                font-weight: 700;
            }
        }
    `}
`