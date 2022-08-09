import { GlobalStyle } from './styles/GlobalStyle'
import { BrowserRouter } from 'react-router-dom'
import Router from './Router'
import Header from './layouts/header/Header'

export default function App() {
    return (
        <>
            <GlobalStyle />
            <Header />
            <BrowserRouter>
                <Router />
            </BrowserRouter>
        </>
    )
}