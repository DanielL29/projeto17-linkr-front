import { ToggleLogoutWrapper } from "./ToggleLogoutStyle";
import { RiArrowDownSLine, RiArrowUpSLine } from 'react-icons/ri'
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import UserContext from "../../contexts/UserContext";

export default function ToggleLogout() {
    const [toggleArrow, setToggleArrow] = useState(false)
    const navigate = useNavigate();
    const { currentUser, setCurrentUser } = useContext(UserContext)

    function logout() {
        localStorage.clear();
        setCurrentUser({})
        navigate("/", { replace: true });
    }

    return (
        <ToggleLogoutWrapper toggle={toggleArrow}>
            <div>
                {toggleArrow ? 
                    <RiArrowUpSLine cursor="pointer" fontSize="45px" onClick={() => setToggleArrow(false)} /> : 
                    <RiArrowDownSLine cursor="pointer" fontSize="45px" onClick={() => setToggleArrow(true)} />
                }
                <img src={currentUser.pictureUrl} alt="user" />

            </div>
            <div onClick={logout} className="logout">Logout</div>
        </ToggleLogoutWrapper>
    )
}