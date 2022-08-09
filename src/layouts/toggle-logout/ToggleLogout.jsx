import { ToggleLogoutWrapper } from "./ToggleLogoutStyle";
import { RiArrowDownSLine, RiArrowUpSLine } from 'react-icons/ri'
import { useState } from "react";

export default function ToggleLogout() {
    const [toggleArrow, setToggleArrow] = useState(false)

    return (
        <ToggleLogoutWrapper toggle={toggleArrow}>
            <div>
                {toggleArrow ? 
                    <RiArrowUpSLine cursor="pointer" fontSize="45px" onClick={() => setToggleArrow(false)} /> : 
                    <RiArrowDownSLine cursor="pointer" fontSize="45px" onClick={() => setToggleArrow(true)} />
                }
                <img src="https://http.cat/422.jpg" alt="user" />
            </div>
            <div className="logout">Logout</div>
        </ToggleLogoutWrapper>
    )
}