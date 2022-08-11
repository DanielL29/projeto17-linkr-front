import { Container } from "./userStyle";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Timeline from "../../layouts/timeline/Timeline";
import Trending from "../../layouts/trending/Trending";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

export default function UserPage() {
  const { id } = useParams();
  const URL = process.env.REACT_APP_API_URL;
  const [userData, setUserData] = useState([{}]);

  useEffect(() => {
    const promise = axios.get(`${URL}/user/${id}`);

    promise.then((response) => {
      setUserData(response.data);
    });
    promise.catch((err) => {
      console.log(err);
    });
  }, [URL, id, setUserData]);

  console.log(userData)
  return (
    <Container>
      {userData.length !== 0 ? (
        <div>
          <Timeline title={`${userData[0].username}'s Posts`} publish />
          <Trending />
        </div>
      ) : (
        <div> 
            <h1>Este usuário não tem nenhum post...</h1>
        </div>
      )}

      <ToastContainer />
    </Container>
  );
}
