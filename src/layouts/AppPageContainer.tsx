import { ReactNode } from "react";
import { PageHeading } from "src/components/Typography";

/**
 * Default container for a page.
 */
export function AppPageContainer(props: IAppPageContainerProps) {
    document.title = `${props.browserTitle && props.browserTitle + ' · '}My Coffe`

    return (
        <>
            {props.heading && (<PageHeading>{props.heading}</PageHeading>)}

            <div className='relative h-full flex flex-col'>
                {props.children}
            </div>
        </>
    )
}

interface IAppPageContainerProps {
    /** Page title in the browser tab. */
    browserTitle: string,

    /** Page heading. */
    heading?: string

    /** Page content. */
    children: ReactNode;
}