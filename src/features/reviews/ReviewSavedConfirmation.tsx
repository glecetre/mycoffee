import { CheckCircle } from 'lucide-react'
import { PrimaryButton, SecondaryButton } from "src/components/Buttons";
import { APP_PAGES } from "src/features/navigation";

export function ReviewSavedConfirmation(props: IReviewSavedConfirmationProps) {
    return (
        <div className='flex flex-col flex-grow'>
            <div className='flex flex-col flex-grow justify-center items-center text-lg text-primary-500'>
                <CheckCircle size='2.5em' />
                <p className='mt-4'>Your review was correctly saved!</p>
            </div>
            {props.onBackClicked && (
                <div className='grid grid-cols-2 gap-2 justify-items-stretch'>
                    <SecondaryButton onClick={props.onBackClicked}>Go back</SecondaryButton>
                    <PrimaryButton href={APP_PAGES.reviews.url(props.reviewId)}>See the review</PrimaryButton>
                </div>
            )}
            {!props.onBackClicked && (
                <div className='flex justify-center'>
                    <PrimaryButton href={APP_PAGES.reviews.url(props.reviewId)}>See the review</PrimaryButton>
                </div>
            )}
        </div>
    )
}

interface IReviewSavedConfirmationProps {
    /** Id of the just-save review. */
    reviewId: number,

    /** Fired when the user clicks the Back button. No button is displayed if no callback is provided. */
    onBackClicked?: () => void,
}