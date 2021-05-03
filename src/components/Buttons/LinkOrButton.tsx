import { ReactNode } from "react";
import { Link } from "src/features/navigation";

/**
 * Wrap the content in a Link or in a Button depending on the given property.
 * If an href is given, a Link will be used, else a button.
 */
export function LinkOrButton(props: ILinkOrButtonProps) {
    const wrapperAttributes = {
        onClick: props.onClick,
        className: props.className,
    };

    if (props.href) {
        return (
            <Link href={props.href} {...wrapperAttributes}>
                {props.children}
            </Link>
        )
    }
    else {
        return (
            <button {...wrapperAttributes}>
                {props.children}
            </button>
        )
    }
}

interface ILinkOrButtonProps {
    /** Link to navigate to. */
    href?: string,

    /** Class names of the outer element. */
    className?: string,

    /** Action to execute on click. */
    onClick?: () => void,

    /** Content of the link or button. */
    children: ReactNode,
}