import React from "react";
import styled, { css } from 'styled-components';

export function TextInput(): React.ReactElement {
    return <StyledInput type="text" />
}

const StyledInput = styled.input`
    ${({ theme }) => css`
        background-color: ${theme.auxiliar};
        border-radius: ${theme.boxRadius};
        border: none;
        width: 100%;

        color: ${theme.inputTextColor};
    `}
`