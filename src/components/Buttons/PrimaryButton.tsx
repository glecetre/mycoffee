import classNames from 'classnames';
import { LinkOrButton } from 'src/components/Buttons';

/**
 * Button for primary action.
 */
export function PrimaryButton(props: IPrimaryButtonProps) {
    return (
        <LinkOrButton
            href={props.href}
            onClick={props.onClick}
            className='rounded-full outline-none focus-within:ring'
        >
            <div className={classNames(
                'py-2 px-6 rounded-full text-primary-500 active:text-white bg-primary-100 active:bg-primary-500 text-center',
                props.className
            )}>
                {props.children}
            </div>
        </LinkOrButton>
    )
}

interface IPrimaryButtonProps {
    /** Link to navigate to. */
    href?: string,

    /** Action to execute on click. */
    onClick?: () => void,

    /** Class name */
    className?: string,

    /** Text of the button. */
    children: string;
}