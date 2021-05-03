import { ReactNode } from 'react'
import { LucideProps } from 'lucide-react'
import { LucideIcon } from 'src/helpers/types'

export function RoundedIcon(props: IRoundedIconProps) {
    return (
        <div className='flex items-center'>
            <div className='p-2 text-primary-500 bg-primary-100 rounded-full'>
                <props.icon size={16} {...props} />
            </div>
            {props.children && (
                <div className='ml-2'>{props.children}</div>
            )}
        </div>
    )
}

interface IRoundedIconProps extends LucideProps {
    /** Icon to display. */
    icon: LucideIcon,

    /** Text to display next to the icon. */
    children?: ReactNode,
}