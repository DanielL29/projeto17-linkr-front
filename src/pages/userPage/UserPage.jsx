import "react-toastify/dist/ReactToastify.css";
import Timeline from "../../layouts/timeline/Timeline";
import Trending from "../../layouts/trending/Trending";
import { Container } from "../home/HomeStyle";
import { ToastContainer } from "react-toastify";
import { useParams } from "react-router-dom";

export default function UserPage() {
  const { id } = useParams();

  return (
    <Container>
        <Timeline title={"Username's Posts"} username={id} />
        <Trending />
      <ToastContainer />
    </Container>
  );
}
