import { Container } from "./HomeStyle";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import Timeline from '../../layouts/timeline/Timeline'
import Trending from "../../layouts/trending/Trending";

export default function Home() {
    return (
        <Container>
            <Timeline title="timeline" publish />
            <Trending />
            <ToastContainer />
        </Container>
    )
}