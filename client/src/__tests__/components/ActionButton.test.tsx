import { describe, expect, jest, test } from '@jest/globals'
import { render } from '@testing-library/react'
import React from 'react'
import { ActionButton } from '../../components/ActionButton'

describe('action button', () => {
    const buttonAction = jest.fn()
    const { baseElement } = render(
        <ActionButton
            text={"buttonText"}
            onClick={buttonAction}
        />
    )

    test('text render', () => {
        expect(baseElement.textContent).toBe("buttonText")
    })
})