import { Route, Routes, Navigate } from "react-router-dom";
import Hashtag from "./pages/hashtag/Hashtag";
import Home from "./pages/home/Home";
import UserPage from "./pages/userPage/UserPage";
import Signup from "./pages/sign/Signup";
import Signin from "./pages/sign/Signin";
import { useContext } from "react";
import UserContext from "./contexts/UserContext";

export default function Router() {
    const { currentUser } = useContext(UserContext)
    const isLogged = currentUser.token !== undefined

    return (
        <Routes>
            <Route path="/" element={isLogged ? <Navigate to="/home" replace /> : <Signin />} />
            <Route path="/sign-up" element={isLogged ? <Navigate to="/home" replace /> : <Signup />} />
            <Route path={isLogged ? "/home" : "*"} element={isLogged ? <Home /> : <Navigate to="/" replace />} />
            <Route path={isLogged ? "/hashtag/:hashtag" : "*"} element={isLogged ? <Hashtag /> : <Navigate to="/" replace />} />
            <Route path={isLogged ? "/user/:id" : "*"} element={isLogged ? <UserPage /> : <Navigate to="/" replace />} />
        </Routes>
    )
}