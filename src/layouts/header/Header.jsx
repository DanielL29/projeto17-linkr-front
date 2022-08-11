import ToggleLogout from "../toggle-logout/ToggleLogout";
import InputSearch from "../../components/Input-search/InputSearch";
import { HeaderWrapper } from "./HeaderStyle";

export default function Header() {
  return (
    <HeaderWrapper>
      <h1>linkr</h1>
      <InputSearch />
      <ToggleLogout />
    </HeaderWrapper>
  );
}