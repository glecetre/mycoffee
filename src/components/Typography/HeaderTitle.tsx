import { Link } from "src/features/navigation";

/**
 * Title image block to display in the header bar. Can include an optional image serving as app logo.
 */
export function HeaderTitle(props: IHeaderTitleProps) {
    return (
        <Link href={props.link} title='Go to the home page' className='flex flex-row items-center'>
            {props.logo && <img alt='Logo' src={props.logo} className='h-7 mr-2' />}
            <h1 className='text-2xl'>{props.children}</h1>
        </Link>
    )
}

interface IHeaderTitleProps {
    /** Path to the logo. */
    logo?: string,

    /** Link to navigate to when the user click the heading. */
    link?: string,

    /** Title to display. */
    children: string,
}