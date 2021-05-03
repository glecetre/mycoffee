import { PrimaryButton } from 'src/components'
import { InfoText } from 'src/components/Typography'
import { AppPageContainer } from 'src/layouts'
import { APP_PAGES } from 'src/features/navigation'
import { IProfile, Identity } from 'src/features/profile'
import { getDateFullYear } from 'src/helpers/helpers'

export function DisplayProfilePage(props: IDisplayProfileProps) {
    return (
        <AppPageContainer browserTitle='My Profile'>
            <div className='h-full flex flex-col items-center'>
                <div className='flex-grow mt-4 text-center'>
                    <Identity isNameDisplayed />
                    {props.profile.createdOn && <InfoText>Since {getDateFullYear(props.profile.createdOn)}</InfoText>}
                </div>
                <PrimaryButton href={APP_PAGES.profile.url('edit')}>Edit</PrimaryButton>
            </div>
        </AppPageContainer>
    )
}

interface IDisplayProfileProps {
    /** Profile information to display. */
    profile: IProfile,
}