import { describe, expect, test } from '@jest/globals'
import { render, screen } from '@testing-library/react'
import { ActionButton } from '../../components/ActionButton'

describe('action button component', () => {
    const buttonAction = jest.fn()
    render(
        <ActionButton
            text={"buttonText"}
            onClick={buttonAction}
        />
    )
    const button = screen.getByTestId('test-actionbutton')

    test('text render', () => {
        expect(button.textContent).toBe("buttonText")
    })
})