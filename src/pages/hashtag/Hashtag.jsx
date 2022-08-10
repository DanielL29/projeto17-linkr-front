import Timeline from "../../layouts/timeline/Timeline";
import Trending from "../../layouts/trending/Trending";
import { Container } from "../home/HomeStyle";
import { ToastContainer } from 'react-toastify';
import { useParams } from 'react-router-dom'

export default function Hashtag() {
    const { hashtag } = useParams()

    return (
        <Container>
            <div>
                <Timeline title={`# ${hashtag}`} hashtag={hashtag} />
                <Trending />
            </div>
            <ToastContainer />
        </Container>
    )
}