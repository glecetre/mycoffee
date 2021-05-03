import { useContext } from 'react'
import { useHistory } from 'react-router'
import { APP_PAGES } from 'src/features/navigation'
import { AppContext } from 'src/helpers'
import { AppPageContainer } from 'src/layouts'
import { EditProfileForm } from './EditProfileForm'
import { IProfile } from './IProfile'
import { IProfileFormModel } from './IProfileFormModel'

export function EditProfilePage(props: IEditProfileProps) {
    const history = useHistory()
    const appContext = useContext(AppContext)

    return (
        <AppPageContainer browserTitle='My Profile'>
            <div className='flex-grow mt-4'>
                <EditProfileForm profile={props.profile} onSubmit={saveProfile} onCancel={goToDisplayProfile} />
            </div>
        </AppPageContainer>
    )

    /**
     * Save the edited profile.
     * @param newProfile Profile to save.
     */
    function saveProfile(newProfile: IProfileFormModel): void {
        if (!newProfile.createdOn) {
            newProfile.createdOn = new Date().toISOString()
        }

        appContext.profilesRepository.upsert(newProfile)
        goToDisplayProfile()
    }

    /**
     * Navigate to the DisplayProfile page
     */
    function goToDisplayProfile(): void {
        history.push(APP_PAGES.profile.url())
    }
}

interface IEditProfileProps {
    /** Profile information to pre-fill the form. */
    profile?: IProfile,
}