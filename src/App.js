import { GlobalStyle } from './styles/GlobalStyle'
import { BrowserRouter } from 'react-router-dom'
import Router from './Router'
import Header from './layouts/header/Header'
import { HashtagProvider } from './contexts/HashtagContext'

export default function App() {
    return (
        <HashtagProvider>
            <GlobalStyle />
            <BrowserRouter>
                <Header />
                <Router />
            </BrowserRouter>
        </HashtagProvider>
    )
}