import { AppContext, defaultAppContext } from 'src/helpers/AppContext'
import { AppRouter } from 'src/features/navigation/AppRouter'

function App() {
    return (
        <AppContext.Provider value={defaultAppContext}>
            <AppRouter />
        </AppContext.Provider>
    );
}

export default App;
