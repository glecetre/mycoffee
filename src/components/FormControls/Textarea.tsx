import { DetailedHTMLProps, TextareaHTMLAttributes } from "react";
import { Label } from "src/components/Typography";
import { ICommonControlProps } from "./ICommonControlProps";

/**
 * Text input for lengthy text content.
 */
export function Textarea(props: ITextareaProps) {
    const {
        label,
        register,
        ...defaulElementProps
    } = props

    return (
        <label className='flex flex-col mb-4 p-2 rounded bg-gray-100 focus-within:ring text-gray-400 focus-within:text-gray-600'>
            {/* <span className='mb-2 focus-within:text-gray-600 uppercase text-xs'>{label}</span> */}
            <Label>{label}</Label>
            <textarea
                className='bg-transparent text-black outline-none'
                {...register}
                {...defaulElementProps}
            >
            </textarea>
        </label>
    )
}

interface ITextareaProps extends ICommonControlProps, DetailedHTMLProps<TextareaHTMLAttributes<HTMLTextAreaElement>, HTMLTextAreaElement> { }