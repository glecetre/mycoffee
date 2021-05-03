import classNames from 'classnames'
import { Rating } from 'src/components/Common'
import { Link } from 'src/features/navigation'
import { IReview } from './IReview'

export function ReviewCard(props: IReviewCardProps) {
    return (
        <Link href={props.href}>
            <div
                className={classNames(
                    'relative rounded-lg bg-cover bg-center',
                    { 'w-40 h-40': props.isSmall },
                    { 'w-full h-48': !props.isSmall },
                )}
                style={{ backgroundImage: `url(${props.review.picture}` }}
            >
                <div className='absolute top-0 h-full w-full rounded-lg bg-black opacity-50'></div>
                <div className='absolute bottom-0 w-full p-4 pb-2 text-lg text-white'>
                    <span
                        className={classNames(
                            { 'font-display': true },
                            { 'text-2xl': props.isSmall },
                            { 'text-4xl': !props.isSmall },
                        )}
                    >
                        {props.review.coffee}
                    </span>
                    <div className={classNames(
                        { 'w-3/4': props.isSmall },
                        { 'w-2/5 mt-1': !props.isSmall },
                    )}>
                        <Rating value={props.review.rating} icon='/assets/coffee-bean.svg' isLight />
                    </div>
                </div>
            </div>
        </Link>
    )
}

interface IReviewCardProps {
    /** Review to display. */
    review: IReview,

    /** URL to the review page. */
    href?: string,

    /** Whether to use a small squared card. */
    isSmall?: boolean,
}