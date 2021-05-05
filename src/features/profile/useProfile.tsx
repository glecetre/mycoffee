import { useContext, useEffect, useState } from 'react'
import { IProfile } from 'src/features/profile'
import { AppContext } from 'src/helpers'

import defaultProfilePicture from 'src/assets/profile-picture.png'

const defaultProfile: IProfile = {
    name: 'Unnamed',
    picture: defaultProfilePicture,
}

export function useProfile(): IProfile {
    const appContext = useContext(AppContext)
    const [profile, setProfile] = useState<IProfile>(defaultProfile)

    useEffect(() => {
        const loadProfile = async () => {
            const profile = await appContext.profilesRepository.getFirst()

            if (profile) {
                setProfile(profile)
            }
        }

        appContext.profilesRepository.onChange(loadProfile)
        loadProfile()
    }, [appContext.profilesRepository])

    return profile
}