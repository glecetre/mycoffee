import { Label } from "src/components/Typography";
import { DetailedHTMLProps, InputHTMLAttributes } from "react"
import { ICommonControlProps } from "./ICommonControlProps"

/**
 * Input control for forms.
 */
export function Input(props: IInputProps) {
    const {
        appendix,
        prependix,
        label,
        register,
        ...defaultElementProps
    } = props;

    return (
        <label className='flex flex-col mb-4 p-2 rounded bg-gray-100 focus-within:ring text-gray-400 focus-within:text-primary-500 transition-shadow'>
            <Label>{label}</Label>
            <div className='flex flex-row'>
                {prependix && <span className='mr-2 text-gray-400'>{prependix}</span>}
                <input className='flex-grow bg-transparent text-black outline-none' {...register} {...defaultElementProps} />
                {appendix && <span className='ml-2 text-gray-400'>{appendix}</span>}
            </div>
        </label>
    )
}

Input.defaultProps = {
    type: 'text',
}

interface IInputProps extends ICommonControlProps, DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
    /** Read-only text to display at the beginning of the field. */
    prependix?: string

    /** Read-only text to display at the end of the field. */
    appendix?: string
}