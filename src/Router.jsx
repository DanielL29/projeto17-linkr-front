import { Route, Routes } from "react-router-dom";
import Timeline from "./pages/timeline/Timeline";

export default function Router() {
    return (
        <Routes>
            <Route path="/" element={<Timeline />} />
        </Routes>
    )
}