import classNames from "classnames"

/**
 * Display a stylized page heading.
 */
export function PageHeading(props: IPageHeadingProps) {
    return (
        <h2
            className={classNames("my-4 text-3xl tracking-wide text-primary-500", props.className)}
        >
            {props.children}
        </h2>
    )
}

interface IPageHeadingProps {
    /** Class names. */
    className?: string,

    /** Heading text. */
    children: string,
}