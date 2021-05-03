import classNames from 'classnames'
import { useRouteMatch } from 'react-router'
import { Link } from 'react-router-dom'
import { APP_PAGES } from './appPages'

export function Navbar() {
    const menuPages = [APP_PAGES.reviews, APP_PAGES.profile, APP_PAGES.newReview]
    const routeMatch = useRouteMatch()

    return (
        <nav>
            <ul className='grid grid-flow-col grid-cols-3 text-center'>
                {menuPages.map((page) => {
                    const isCurrentPage = page.paths.includes(routeMatch.path)

                    return (
                        <li
                            key={page.paths.join()}
                            className={classNames(
                                'rounded-md text-xs transition-colors',
                                { 'text-primary-500': isCurrentPage }
                            )}
                        >
                            <Link
                                to={page.url()}
                                className='inline-block p-4 pb-2 rounded-md focus:bg-primary-100 outline-none'
                            >
                                {page.icon && <page.icon size={24} className='mx-auto' />}
                                <span className={classNames(
                                    {'opacity-0': !isCurrentPage},
                                    {'opacity-1': isCurrentPage},
                                    'transition-opacity'
                                )}>
                                    {page.name}
                                </span>
                            </Link>
                        </li>
                    )
                })}
            </ul>
        </nav>
    )
}