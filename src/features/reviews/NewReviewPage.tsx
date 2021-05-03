import { useContext, useState } from 'react'
import { useHistory } from 'react-router'
import { APP_PAGES } from 'src/features/navigation'
import { AppContext, getFileDataUrl } from 'src/helpers'
import { AppPageContainer } from 'src/layouts'
import { IReview } from './IReview'
import { IReviewFormModel } from './IReviewFormModel'
import { NewReviewForm } from './NewReviewForm'
import { ReviewSavedConfirmation } from './ReviewSavedConfirmation'

export function NewReviewPage() {
    const history = useHistory()
    const appContext = useContext(AppContext)

    const [savedReviewId, setSavedReviewId] = useState<number | null>(null)

    return (
        <AppPageContainer heading={(!savedReviewId && 'Write a New Review') || undefined} browserTitle='New Review'>
            {!savedReviewId && (
                <NewReviewForm
                    onSubmit={saveReview}
                    onCancel={() => history.push(APP_PAGES.reviews.url())}
                />
            )}
            {savedReviewId && (
                <ReviewSavedConfirmation reviewId={savedReviewId} onBackClicked={() => setSavedReviewId(null)} />
            )}
        </AppPageContainer>
    )

    /**
     * Save the form values as a Review.
     * @param formModel Model from the NewReviewForm.
     */
    async function saveReview(formModel: IReviewFormModel): Promise<void> {
        const pictureDataUrl = formModel.picture ? await getFileDataUrl(formModel.picture[0]) : ''

        const review: IReview = {
            ...formModel,
            picture: pictureDataUrl,
            date: (new Date()).toISOString(),
        }

        const reviewId = await appContext.reviewsRepository.upsert(review)

        if (reviewId) {
            setSavedReviewId(reviewId)
        }
    }
}
