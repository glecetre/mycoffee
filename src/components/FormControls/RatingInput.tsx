import { useFormContext } from "react-hook-form";
import { Rating } from "src/components/Common";
import { Label } from "src/components/Typography";
import { ICommonControlProps } from "./ICommonControlProps";

/**
 * Image-based rating form control.
 */
export function RatingInput(props: IRatingInputProps) {
    const form = useFormContext();
    const inputName = props.register.name;
    const ratingValue: number = form.watch(inputName);

    return (
        <label className='flex flex-col mb-4 p-2 rounded focus-within:ring text-gray-400 focus-within:text-gray-600'>
            <Label>Rating</Label>
            <div className='w-1/2'>
                <Rating icon={props.icon} value={ratingValue} onClick={setInputValue} />
            </div>
            <input
                type='hidden'
                {...props.register}
            />
        </label>
    )

    /**
     * Set the given value as input's value in the form data.
     * @param value Value to set.
     */
    function setInputValue(value: number): void {
        form.setValue(props.register.name, value);
    }
}

RatingInput.defaultProps = {
    maxValue: 5,
}

interface IRatingInputProps extends ICommonControlProps {
    /** Path to the image to use as rating icon. */
    icon: string;

    /** Maximum rating value. */
    maxValue: number;
}