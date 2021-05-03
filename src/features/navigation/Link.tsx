import { ReactNode } from 'react'
import { Link as RouterLink } from 'react-router-dom'

/**
 * Navigation link that wraps the content.
 */
export function Link(props: ILinkProps) {
    return props.href
        ? (
            <RouterLink to={props.href} title={props.title} className={props.className}>
                {props.children}
            </RouterLink>
        )
        : <span className={props.className}>{props.children}</span>
}

interface ILinkProps {
    /** Link to navigate to. */
    href?: string,

    /** Title of the link. */
    title?: string,

    /** Classnames to add to the wrapping element. */
    className?: string,

    /** Clickable element. */
    children: ReactNode,
}