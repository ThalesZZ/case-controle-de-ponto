import styled, { css } from 'styled-components'

interface ActionButtonProps {
    text: string
    onClick: React.MouseEventHandler | undefined
}

export function ActionButton({ text, onClick }: ActionButtonProps): React.ReactElement {
    return <StyledButton onClick={onClick} data-testid="test-actionbutton">{text}</StyledButton>
}

const StyledButton = styled.button`
    ${({ theme }) => css`
        background-color: ${theme.secondary};
        border: none;
        border-radius: ${theme.boxRadius}px;
        padding: 1em;
        cursor: pointer;
        font-weight: 700;
        color: ${theme.auxiliar};

        &:hover {
            background-color: ${theme.secondaryLight};
        }
    `}
`