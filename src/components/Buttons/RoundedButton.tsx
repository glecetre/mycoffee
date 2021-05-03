import classNames from "classnames";
import { LucideIcon } from "src/helpers/types";

export function RoundedButton(props: IRoundedButtonProps) {
    return (
        <button
            onClick={props.onClick}
            className={classNames(
                { 'p-2': props.size === 'normal' },
                { 'p-4': props.size === 'lg' },
                'rounded-full text-primary-500 bg-primary-100 active:text-white active:bg-primary-500 focus:ring outline-none'
            )}
        >
            <props.icon size={iconSize[props.size]} />
        </button>
    )
}

/** Icon size to use for each `IRoundedButtonProps.size` value. */
const iconSize = {
    normal: 16,
    lg: 24,
}

RoundedButton.defaultProps = {
    size: 'normal',
}

interface IRoundedButtonProps {
    /** Icon of the button. */
    icon: LucideIcon,

    /** Size of the button */
    size: 'normal' | 'lg',

    /** Called when the button is clicked. */
    onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void,
}