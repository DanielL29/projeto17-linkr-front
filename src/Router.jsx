import { Route, Routes } from "react-router-dom";
import Hashtag from "./pages/hashtag/Hashtag";
import Home from "./pages/home/Home";
import Signup from "./pages/sign/Signup";

export default function Router() {
    return (
        <Routes>    
            <Route path="/sign-up" element={<Signup />} />
            <Route path="/home" element={<Home />} />
            <Route path="/hashtag/:hashtag" element={<Hashtag />} />
        </Routes>
    )
}