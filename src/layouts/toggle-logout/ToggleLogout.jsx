import { ToggleLogoutWrapper } from "./ToggleLogoutStyle";
import { RiArrowDownSLine, RiArrowUpSLine } from 'react-icons/ri'
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function ToggleLogout() {
    const [toggleArrow, setToggleArrow] = useState(false)
    const navigate = useNavigate();
    const pictureUrl = localStorage.getItem("pictureUrl");

    function logout() {
        localStorage.clear();
        navigate("/", { replace: true });
    }

    return (
        <ToggleLogoutWrapper toggle={toggleArrow}>
            <div>
                {toggleArrow ? 
                    <RiArrowUpSLine cursor="pointer" fontSize="45px" onClick={() => setToggleArrow(false)} /> : 
                    <RiArrowDownSLine cursor="pointer" fontSize="45px" onClick={() => setToggleArrow(true)} />
                }
                <img src={pictureUrl} alt="user" />
            </div>
            <div onClick={logout} className="logout">Logout</div>
        </ToggleLogoutWrapper>
    )
}