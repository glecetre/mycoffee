import { HeaderTitle } from 'src/components/Typography'
import { APP_PAGES } from 'src/features/navigation'

import logo from 'src/assets/logo.png'

/**
 * Default header bar for the application.
 */
export function Header() {
    return (
        <header className='sticky z-50 top-0 p-4 w-full flex flex-row justify-between items-center bg-white text-primary-500 border-b border-gray-100 shadow'>
            <HeaderTitle link={APP_PAGES.reviews.url()} logo={logo}>My Coffee</HeaderTitle>
        </header>
    )
}