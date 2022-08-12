import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import Timeline from "../../layouts/timeline/Timeline";
import Trending from "../../layouts/trending/Trending";
import { Container } from "../home/HomeStyle";
import { ToastContainer } from "react-toastify";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { BASE_URL } from "../../constants";

export default function UserPage() {
  const { id } = useParams();
  const [userData, setUserData] = useState([{}]);

  useEffect(() => {
    const promise = axios.get(`${BASE_URL}/user/${id}`);

    promise.then((response) => {
      setUserData(response.data);
    });
    promise.catch((err) => {
      console.log(err);
    });
  }, [id]);
  
  return (
    <Container>
      {userData.length !== 0 ? (
        <div>
          <Timeline title={`${userData[0].username}'s Posts`} username={id} />
          <Trending />
        </div>
      ) : (
        <div> 
            <span>Este usuário não tem nenhum post...</span>
        </div>
      )}

      <ToastContainer />
    </Container>
  );
}
