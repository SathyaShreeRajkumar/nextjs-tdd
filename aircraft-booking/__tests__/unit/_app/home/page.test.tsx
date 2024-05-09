import HomePage from '@/app/home/page'
import { COMMON_CONST } from '@/constants/app-constants'
import { BUTTON_CONST, USER_DETAILS_CONST } from '@/constants/form-constants'
import { fireEvent, render, screen } from '@testing-library/react'

describe('HomePage', () => {
    test('should render homepage properly', () => {
        render(<HomePage />)
        const header = screen.getByText(COMMON_CONST.APP_TITLE)
        const subTitle = screen.getByText(COMMON_CONST.SUBTITLE)
        expect(header).toBeDefined()
        expect(subTitle).toBeDefined()
    })

    test('should render user form modal when new user button is clicked', () => {
        render(<HomePage />)
        const newUserButton = screen.getByRole('button', {
            name: BUTTON_CONST.NEW_USER_LABEL
        })
        fireEvent.click(newUserButton)

        expect(screen.getByText(USER_DETAILS_CONST.FORM_TITLE_LABEL))
    })

    test('should render background image properly', () => {
        render(<HomePage />)
        const imageElement = screen.getByAltText('img')
        expect(imageElement).toBeInTheDocument()
    })

    test('should render link element properly', () => {
        render(<HomePage />)
        const link = screen.getByRole('link', {
            name: COMMON_CONST.CLICK_LINK
        })
        fireEvent.click(link)

        expect(COMMON_CONST.CHOOSE_DESTINATION).toBeDefined()
    })
})
