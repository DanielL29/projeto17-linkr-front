import Timeline from "../../layouts/timeline/Timeline";
import Trending from "../../layouts/trending/Trending";
import { Container } from "../home/HomeStyle";
import { ToastContainer } from 'react-toastify';
import { useParams, useLocation } from 'react-router-dom'

export default function Hashtag() {
    const { hashtag } = useParams()
    const location = useLocation()
    const { id } = location.state

    return (
        <Container>
            <Timeline title={`# ${hashtag}`} id={id} />
            <Trending />
            <ToastContainer />
        </Container>
    )
}