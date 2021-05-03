import { LinkOrButton } from 'src/components/Buttons';

/**
 * Button for secondary action.
 */
export function SecondaryButton(props: ISecondaryButtonProps) {
    return (
        <LinkOrButton
            href={props.href}
            onClick={props.onClick}
            className='py-2 px-6 rounded-full text-gray-500 active:text-white bg-gray-100 active:bg-gray-500 outline-none focus:ring text-center'
        >
            {props.children}
        </LinkOrButton>
    )
}

interface ISecondaryButtonProps {
    /** Link to navigate to. */
    href?: string,

    /** Action to execute on click. */
    onClick?: () => void,

    /** Text of the button. */
    children: string;
}