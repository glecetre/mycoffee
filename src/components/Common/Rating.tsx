import classNames from "classnames";
import { ReactNode } from "react";

export function Rating(props: IRatingProps) {
    if (props.maxValue < 1 || props.maxValue < props.value) {
        throw new Error('Rating.maxValue cannot be less than 1 or less than Rating.value.');
    }

    return (
        <div className='grid grid-flow-col gap-2 justify-start'>
            {getRatingIcons()}
        </div>
    )

    /**
     * Get an array of ReactNode representing this rating.
     */
    function getRatingIcons(): ReactNode[] {
        const icons: ReactNode[] = [];

        for (let i = 1; i <= props.maxValue; i++) {
            const isActivated = i <= props.value;

            icons.push(
                <img
                    src={props.icon}
                    alt={`Rating ${i}`}
                    title={`Rating ${i}`}
                    key={`rating-${i}`}
                    onClick={props.onClick ? () => props.onClick?.(i) : undefined}
                    className={classNames(
                        'h-8 transition-opacity',
                        { 'opacity-25': !isActivated },
                        { 'filter invert': props.isLight },
                        { 'cursor-pointer': props.onClick }
                    )}
                />
            )
        }

        return icons;
    }
}

Rating.defaultProps = {
    maxValue: 5,
}

interface IRatingProps {
    /** Rating icon. */
    icon: string,

    /** Value of the rating. */
    value: number,

    /** Maximum rating value. */
    maxValue: number,

    /** Whether to use light colors. */
    isLight?: boolean,

    /** Callback when the user clicks a value icon. The component is read-only if none is provided. */
    onClick?: (value: number) => void,
}