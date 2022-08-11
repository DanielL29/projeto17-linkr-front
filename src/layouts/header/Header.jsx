import ToggleLogout from "../toggle-logout/ToggleLogout";
import { HeaderWrapper, PageNotFound } from "./HeaderStyle";
import { useNavigate, useMatch } from 'react-router-dom';
import brokenLink from '../../assets/images/broken-link.png'

export default function Header() {
    const navigate = useNavigate()
    const matchHashtag = useMatch('/hashtag/:hashtag')
    const matchHome = useMatch('/home')

    function RenderHeader() {
        if (matchHashtag || matchHome) {
            return (
                <HeaderWrapper>
                    <h1 onClick={() => navigate('/')}>linkr</h1>
                    <ToggleLogout />
                </HeaderWrapper>
            )
        }

        return (
            <PageNotFound>
                <img src={brokenLink} alt="page not found" />
                <h1>Oops! this page doesn't exists</h1>
            </PageNotFound>
        )
    }

    return (
        <RenderHeader />
    )
}