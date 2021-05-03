import classNames from "classnames";
import { ReactNode } from "react";

export function InfoText(props: IInfoTextProps) {
    return (
        <p className={classNames('text-gray-500 text-sm', props.className)}>{props.children}</p>
    )
}

interface IInfoTextProps {
    /** Class name. */
    className?: string,

    /** Content. */
    children: ReactNode,
}