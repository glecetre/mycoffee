import { PrimaryButton } from "src/components/Buttons"
import { InfoText, PageHeading } from "src/components/Typography"
import { APP_PAGES } from 'src/features/navigation'
import { AppPageContainer } from "src/layouts"

export function ErrorPage() {
    return (
        <AppPageContainer browserTitle='404'>
            <div
                className='h-full grid justify-center items-end justify-items-center text-center'
                style={{ gridTemplateRows: '1fr auto 1fr auto' }}
            >
                <img src='/assets/cafoups.svg' className='w-20' alt='' />
                <div>
                    <PageHeading>There was an error</PageHeading>
                    <InfoText>Take a deep breath and have a coffee</InfoText>
                </div>
                <PrimaryButton href={APP_PAGES.reviews.url()}>Go to the Home page</PrimaryButton>
            </div>
        </AppPageContainer>
    )
}