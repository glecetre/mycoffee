import { ReactNode } from "react";
import { Header, Navbar } from "src/features/navigation";

/**
 * Layout for displaying content beneath the header bar.
 */
export function HeaderAndNavbarLayout({ children }: IHeaderAndNavbarLayoutProps) {
    return (
        <div className="h-screen pb-4 grid grid-rows-topMenuLayout-content">
            <Header />
            <main className="h-100 flex flex-col p-4 pb-6 overflow-auto">
                {children}
            </main>
            <Navbar />
        </div>
    )
}

interface IHeaderAndNavbarLayoutProps {
    /** Content to display. */
    children: ReactNode,
}