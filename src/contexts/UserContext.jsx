import { createContext, useState } from "react";

const UserContext = createContext()

export function UserProvider({ children }) {
    const [currentUser, setCurrentUser] = useState({})
    const userLocal = JSON.parse(localStorage.getItem('userLocal'))

    if (currentUser.token !== undefined) {
        localStorage.setItem("userLocal", JSON.stringify(currentUser))
    } else if (localStorage.getItem('userLocal') !== null) {
        setCurrentUser(userLocal)
    }

    return (
        <UserContext.Provider value={{ currentUser, setCurrentUser }}>
            {children}
        </UserContext.Provider>
    )
}

export default UserContext