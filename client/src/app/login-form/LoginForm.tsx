import React from 'react';
import styled, { css } from 'styled-components';
import { User } from '../../../../src/models/User';
import { ActionButton } from '../../components/ActionButton';
import { TextInput } from "../../components/TextInput";
import { API } from '../../services/api/api';

interface LoginFormProps {
    setLoggedUser: React.Dispatch<React.SetStateAction<User>>
}

export function LoginForm({ setLoggedUser }: LoginFormProps): React.ReactElement {
    const [authCod, setAuthCod] = React.useState('')

    const [errorMessage, setErrorMessage] = React.useState('')
    const hideErrorMessage = () => setErrorMessage('')
    React.useEffect(hideErrorMessage, [authCod])

    function login(): void {
        if (!authCod) return setErrorMessage('Informe seu código de usuário')

        API.user
            .get(authCod)
            .then(setLoggedUser)
            .catch((res: Response) => res.text().then(setErrorMessage))
    }

    return (
        <Container>
            {errorMessage && <div id="error-box">{errorMessage}</div>}
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

        #error-box {
            position: absolute;
            left: 50%;
            top: 20%;
            transform: translateX(-50%);
            padding: 1em 1.5em;
            background-color: ${theme.danger};
            font-weight: 700;
            color: ${theme.auxiliar};
            border-radius: ${theme.boxRadius}px;
        }

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