import { ReactNode } from "react"

export function Label(props: ILabelProps) {
    return (
        <span className='mb-2 uppercase text-xs'>{props.children}</span>
    )
}

interface ILabelProps {
    /** Label content. */
    children: ReactNode,
}