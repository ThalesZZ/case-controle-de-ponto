import React from 'react';
import styled, { css } from 'styled-components';
import { ActionButton } from '../../components/ActionButton';
import { TextInput } from "../../components/TextInput";

export function LoginForm(): React.ReactElement {
    const [authCod, setAuthCod] = React.useState<string>('')

    return (
        <Container>
            <TextInput value={authCod} setValue={setAuthCod} />
            <ActionButton text="Confirmar" onClick={undefined} />
        </Container>
    )
}

const Container = styled.div`
    ${({ theme }) => css`
        width: 28%;
        flex-flow: column;
        gap: 1.5em;
    `}
`