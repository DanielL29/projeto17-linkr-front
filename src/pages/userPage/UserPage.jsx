import "react-toastify/dist/ReactToastify.css";
import Timeline from "../../layouts/timeline/Timeline";
import Trending from "../../layouts/trending/Trending";
import { Container } from "../home/HomeStyle";
import { ToastContainer } from "react-toastify";
import { useParams } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { loadUser } from "../../utils/userPage";
import UserContext from "../../contexts/UserContext";

export default function UserPage() {
  const { id } = useParams();
  const [user, setUser] = useState({})
  const { currentUser } = useContext(UserContext)

  useEffect(() => {
    loadUser(id, setUser, currentUser.token)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id])

  return (
    <Container>
      <div>
        <Timeline 
          title={`${user.username ?? "this user not exist"}'s posts`} 
          pictureUrl={user.pictureUrl ?? 'https://http.cat/404.jpg'} 
          username={id} 
        />
        <Trending />
      </div>
      <ToastContainer />
    </Container>
  );
}
