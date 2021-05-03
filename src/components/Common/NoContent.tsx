import classNames from "classnames";
import { Frown } from 'lucide-react'
import { InfoText } from "src/components/Typography";

export function NoContent(props: INoContentProps) {
    return (
        <div className={classNames('p-8 px-10 bg-gray-50 rounded-lg', props.className)}>
            <InfoText className='text-center'>
                <Frown className='mx-auto mb-2' size='2.5em' strokeWidth='1px' />
                We found nothing to show
            </InfoText>
        </div>
    )
}

interface INoContentProps {
    /** Class name */
    className?: string,
}