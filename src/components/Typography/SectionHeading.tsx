import { ReactNode } from "react";
import { SectionHeadingText } from "..";

export function SectionHeading(props: ISectionHeadingProps) {
    return (
        <div className='flex flex-row justify-center items-center mt-10 mb-4'>
            <SectionHeadingText>
                {props.children}
            </SectionHeadingText>
            <div className='flex-grow ml-2 border-b border-primary-100'></div>
        </div>
    )
}

interface ISectionHeadingProps {
    /** Title content. */
    children: ReactNode;
}