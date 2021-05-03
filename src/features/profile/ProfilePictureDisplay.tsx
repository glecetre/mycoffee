import classNames from 'classnames'

export function ProfilePictureDisplay(props: IProfilePictureDisplayProps) {
    return (
        <img
            src={props.src}
            alt='Profile'
            className={classNames(
                {'w-8 h-8': props.size === 'sm'},
                {'w-36 h-36': props.size === 'xxl'},
                'inline-block mx-auto rounded-full'
            )}
        />
    )
}

ProfilePictureDisplay.defaultProps = {
    size: 'xxl',
}

export interface IProfilePictureDisplayProps {
    /** Picture to display. */
    src?: string,

    /** Size of the image. */
    size?: 'sm' | 'xxl'
}