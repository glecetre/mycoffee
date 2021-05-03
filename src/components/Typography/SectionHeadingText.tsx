import { ReactNode } from "react";

export function SectionHeadingText(props: ISsectionHeadingText) {
    return (
        <h3 className='text-xl tracking-wide text-primary-500'>
            {props.children}
        </h3>
    )
}

interface ISsectionHeadingText {
    /** Title content. */
    children: ReactNode;
}