import { LucideProps } from 'lucide-react'
import { LinkOrButton } from 'src/components/Buttons';

/**
 * Round floating action button (FAB), primarily designed for icon content.
 */
export function FAButton(props: IFAButtonProps) {
    return (
        <LinkOrButton
            href={props.href}
            onClick={props.onClick}
            className='fixed bottom-8 right-8 p-2 w-auto text-white bg-blue-500 rounded-full'
        >
            <props.icon size={48} />
        </LinkOrButton>
    )
}

interface IFAButtonProps {
    /** Icon to display. */
    icon: (props: LucideProps) => JSX.Element,

    /** Link to navigate to. */
    href?: string,

    /** Action to execute on click. */
    onClick?: () => void,
}