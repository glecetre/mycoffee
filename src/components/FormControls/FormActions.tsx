import { ReactNode } from "react";

/**
 * Layout to display actions beneath a form.
 */
export function FormActions(props: IFormActionsProps) {
    return (
        <div className='grid grid-flow-col gap-2'>
            {props.children}
        </div>
    )
}

interface IFormActionsProps {
    /** Form actions to display. */
    children: ReactNode;
}