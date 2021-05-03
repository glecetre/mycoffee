import classNames from 'classnames'
import { PageHeading, SectionHeadingText } from 'src/components'
import { IProfilePictureDisplayProps, ProfilePictureDisplay, useProfile } from 'src/features/profile'

export function Identity(props: IIdentityProps) {
    const profile = useProfile()

    return (
        <div className={classNames(
            { 'flex items-center space-x-2': props.size === 'sm' },
            'inline-block',
        )}>
            <ProfilePictureDisplay src={profile.picture} {...props} />
            {props.isNameDisplayed && props.size === 'xxl' && <PageHeading>{profile.name}</PageHeading>}
            {props.isNameDisplayed && props.size === 'sm' && <SectionHeadingText>{profile.name}</SectionHeadingText>}
        </div>
    )
}

Identity.defaultProps = {
    size: 'xxl',
}

interface IIdentityProps {
    /** Whether to show the user's name alongside their picture. */
    isNameDisplayed?: boolean,

    /** Size of the element. */
    size: IProfilePictureDisplayProps['size']
}
