import ToggleLogout from "../toggle-logout/ToggleLogout";
import { HeaderWrapper } from "./HeaderStyle";

export default function Header() {
    return (
        <HeaderWrapper>
            <h1>linkr</h1>
            <ToggleLogout />
        </HeaderWrapper>
    )
}