import {
    BrowserRouter as Router,
    Switch,
    Route,
} from 'react-router-dom'
import { HeaderAndNavbarLayout } from 'src/layouts'
import { FourOhFourPage } from '../fourOhFour'

import { ROUTE_ORDERED_PAGES } from './appPages'

export function AppRouter() {
    return (
        <Router basename='/mycoffee'>
            <Switch>
                {ROUTE_ORDERED_PAGES.map((page) => (
                    <Route path={page.paths} exact={page.exactMatch} key={page.paths.join()}>
                        <HeaderAndNavbarLayout>
                            <page.component />
                        </HeaderAndNavbarLayout>
                    </Route>
                ))}
                <Route path='*'>
                    <HeaderAndNavbarLayout>
                        <FourOhFourPage />
                    </HeaderAndNavbarLayout>
                </Route>
            </Switch>
        </Router>
    )
}
