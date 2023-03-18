import React from "react";
import styled, { css } from 'styled-components';

export function TextInput(): React.ReactElement {
    const [value, setValue] = React.useState<string>('')

    return (
        <Container className="text-input" label="Código do usuário">
            <StyledInput value={value} onChange={e => setValue(e.target.value)} />
        </Container>
    )
}

const Container = styled.div<{ label: string }>`
    ${({ theme, label }) => css`
        position: relative;
        flex-flow: column;
        gap: 0.25em;
        background-color: ${theme.auxiliar};
        border-radius: ${theme.boxRadius}px;
        width: 100%;
        padding: 0.5em 1em;

        ::before {
            content: '${label}';
            color: ${theme.inputTextColor};
            width: 100%;
            font-weight: 300;
            font-size: 0.75em;
        }

    `}
`

const StyledInput = styled.input`
    ${({ theme }) => css`
        position: relative;

        background-color: transparent;
        border: none;
        width: 100%;

        color: ${theme.inputTextColor};
        font-size: 1.5em;
        font-weight: 700;
    `}
`