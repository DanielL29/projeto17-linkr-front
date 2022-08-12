import { Route, Routes } from "react-router-dom";
import Hashtag from "./pages/hashtag/Hashtag";
import Home from "./pages/home/Home";
import UserPage from "./pages/userPage/UserPage";
import Signup from "./pages/sign/Signup";
import Signin from "./pages/sign/Signin";

export default function Router() {
    return (
        <Routes>
            <Route path="/" element={<Signin />} />
            <Route path="/home" element={<Home />} />
            <Route path="/sign-up" element={<Signup />} />
            <Route path="/hashtag/:hashtag" element={<Hashtag />} />
            <Route path="/user/:id" element={<UserPage />} />
        </Routes>
    )
}