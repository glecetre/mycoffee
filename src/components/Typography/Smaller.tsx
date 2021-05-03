import { ReactNode } from "react";

export function Smaller(props: ISmallerProps) {
    return (
        <span style={{ fontSize: '0.8em' }}>{props.children}</span>
    )
}

interface ISmallerProps {
    /** Content. */
    children: ReactNode,
}