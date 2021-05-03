import { useHistory, useParams } from 'react-router'
import { APP_PAGES } from 'src/features/navigation'
import { useProfile } from 'src/features/profile'

import { DisplayProfilePage } from './DisplayProfilePage'
import { EditProfilePage } from './EditProfilePage'

export function ProfilePage() {
    const { action } = useParams<{action: string}>()
    const history = useHistory()
    const profile = useProfile()

    if (!action) {
        return <DisplayProfilePage profile={profile} />
    }
    else if (action === 'edit') {
        return <EditProfilePage profile={profile} />
    }
    else {
        history.replace(APP_PAGES.fourOhFour.url())
        return null
    }
}