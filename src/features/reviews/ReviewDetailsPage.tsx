import { useContext, useEffect, useState } from 'react'
import { Calendar, DollarSign, MapPin } from 'lucide-react'
import { useHistory } from 'react-router'
import { SectionHeading } from 'src/components/Typography'
import { APP_PAGES } from 'src/features/navigation'
import { ReviewCard } from 'src/features/reviews'
import { Identity } from 'src/features/profile'
import { AppPageContainer } from 'src/layouts'
import { AppContext } from 'src/helpers/AppContext'
import { displayDecimalNumber, displayShortDate } from 'src/helpers/helpers'
import { RoundedIcon } from 'src/components/Common/RoundedIcon'
import { Smaller } from 'src/components/Typography/Smaller'
import { Loading } from 'src/components/Common/Loading'

import { IReview } from './IReview'

export function ReviewDetailsPage(props: IReviewDetailsPageProps) {
    const history = useHistory()
    const appContext = useContext(AppContext)

    const [isLoading, setLoading] = useState(true)
    const [review, setReview] = useState<IReview | undefined>(undefined)

    useEffect(() => {
        const fetchReview = async () => {
            const fetchedReview = await appContext.reviewsRepository.get(props.id)

            setReview(fetchedReview)
            setLoading(false)
        }

        fetchReview()
    }, [appContext.reviewsRepository, history, props.id])

    if (isLoading) {
        return (
            <Loading />
        )
    }
    else if (!review) {
        history.replace(APP_PAGES.fourOhFour.url())
        return null
    }

    return (
        <AppPageContainer browserTitle={review.coffee}>
            <ReviewCard review={review} />

            <div className='px-2'>
                <div className='grid grid-rows-2 gap-4 mt-4 text-primary-500'>
                    <div className='grid grid-cols-2 text-primary-500'>
                        <RoundedIcon icon={Calendar}>{displayShortDate(review.date)}</RoundedIcon>
                        <RoundedIcon icon={DollarSign}>
                            {displayDecimalNumber(review.price)}&nbsp;<Smaller>€ / 100 g</Smaller>
                        </RoundedIcon>
                    </div>
                    <div>
                        <RoundedIcon icon={MapPin}>{review.shop}</RoundedIcon>
                    </div>
                </div>

                <SectionHeading>
                    <Identity size='sm' isNameDisplayed />
                </SectionHeading>
                <p className='text-justify'>{review.content}</p>
            </div>
        </AppPageContainer>
    )
}

interface IReviewDetailsPageProps {
    /** ID of the review to display. */
    id: number,
}