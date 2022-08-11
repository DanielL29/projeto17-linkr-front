import ToggleLogout from "../toggle-logout/ToggleLogout";
import InputSearch from "../../components/Input-search/InputSearch";
import { HeaderWrapper, PageNotFound } from "./HeaderStyle";
import { useNavigate, useMatch } from 'react-router-dom';
import brokenLink from '../../assets/images/broken-link.png'

export default function Header() {
  const navigate = useNavigate()
  const matchHashtag = useMatch('/hashtag/:hashtag')
  const matchUser = useMatch('/user/:id')
  const matchHome = useMatch('/home')
  const matchSignIn = useMatch('/')
  const matchSignUp = useMatch('/sign-up')

  function RenderHeader() {
    if (matchHashtag || matchHome || matchUser) {
      return (
        <HeaderWrapper>
          <h1 onClick={() => navigate('/')}>linkr</h1>
          <InputSearch />
          <ToggleLogout />
        </HeaderWrapper>
      )
    } else if (matchSignIn || matchSignUp) {
      return <></>
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
  );
}