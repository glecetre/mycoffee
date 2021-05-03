import { useContext, useEffect, useState } from 'react'
import { ReviewCard } from 'src/features/reviews'
import { IReview } from 'src/features/reviews/IReview'
import { AppContext } from 'src/helpers/AppContext'
import { AppPageContainer } from 'src/layouts'
import { APP_PAGES } from 'src/features/navigation'
import { PrimaryButton } from 'src/components/Buttons'
import { Loading } from 'src/components/Common/Loading'
import { NoContent } from 'src/components/Common/NoContent'

export function ReviewsListPage() {
    const appContext = useContext(AppContext)
    const [isLoading, setLoading] = useState(true)
    const [reviews, setReviews] = useState<IReview[]>([])



    useEffect(() => {
        const getAllReviews = async () => {
            const reviews = await appContext.reviewsRepository.getAll()
            setReviews(reviews)
            setLoading(false)
        }

        getAllReviews()
    }, [appContext.reviewsRepository])

    if (isLoading) {
        return (
            <div className='h-full flex flex-col justify-center'>
                <Loading />
            </div>
        )
    }

    return (
        <AppPageContainer heading='Your Reviews' browserTitle='Reviews'>
            {reviews.length === 0 && (
                <div className='h-full flex flex-col justify-between items-center self-center text-center'>
                    <NoContent className='align-stretch' />
                    <PrimaryButton href={APP_PAGES.newReview.url()}>Write a review</PrimaryButton>
                </div>
            )}
            {reviews.length > 0 && (
                <div className='w-full flex flex-wrap'>
                    {reviews.map((review) => (
                        <div className='mr-2 mb-2' key={review.id}>
                            <ReviewCard review={review} href={APP_PAGES.reviews.url(review.id!)} isSmall />
                        </div>
                    ))}
                </div>
            )}
        </AppPageContainer>
    )
}
