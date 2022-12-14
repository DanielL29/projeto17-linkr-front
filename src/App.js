import { GlobalStyle } from './styles/GlobalStyle'
import { BrowserRouter } from 'react-router-dom'
import Router from './Router'
import Header from './layouts/header/Header'
import { HashtagProvider } from './contexts/HashtagContext'
import { UserProvider } from './contexts/UserContext'
import { HasMoreProvider } from './contexts/HasMoreContext';

export default function App() {
    return (
        <HasMoreProvider>
            <UserProvider>
                <HashtagProvider>
                    <GlobalStyle />
                    <BrowserRouter>
                        <Header />
                        <Router />
                    </BrowserRouter>
                </HashtagProvider>
            </UserProvider>
        </HasMoreProvider>
    )
}