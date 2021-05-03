import classNames from "classnames";
import { CheckCircle, Plus } from 'lucide-react'
import { MutableRefObject } from "react";
import { useFormContext } from "react-hook-form";
import { Label } from "src/components/Typography";
import { ICommonControlProps } from "./ICommonControlProps"

export function FileInput(props: IFileInputProps) {
    const form = useFormContext()
    const selectedPicture = form.watch(props.register.name)
    const isPictureSelected = selectedPicture?.length > 0

    const { ref: inputRef, ...inputRegister } = props.register

    return (
        <div className={classNames(
            { 'hidden': props.isHidden },
            'relative w-16 mb-4 p-2 flex flex-col justify-around items-center focus-within:ring text-gray-400 bg-gray-100 rounded'
        )}>
            <input
                type='file'
                accept='image/*'
                className='absolute w-full h-full opacity-0 cursor-pointer'
                ref={(elementRef) => {
                    inputRef(elementRef)

                    if(props.innerRef) {
                        props.innerRef.current = elementRef
                    }
                }}
                {...inputRegister}
            />
            <Label>{props.label}</Label>
            {!isPictureSelected && <Plus size='1.5em' />}
            {isPictureSelected && <CheckCircle size='1.5em' className='text-gray-700' />}
        </div>
    )
}

interface IFileInputProps extends ICommonControlProps {
    /** Whether the control is hidden. */
    isHidden?: boolean,

    /** Ref to access the inner input control. */
    innerRef?: MutableRefObject<HTMLInputElement | null>,

}