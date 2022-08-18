import styled from "styled-components";
import { RotatingLines } from "react-loader-spinner";
import { BASE_URL, AUTH_CONFIG } from "../../constants";
import axios from "axios";
import { useContext, useState } from "react";
import { getPosts } from "../../services/postService";
import { callToast, treatErrors } from "../../utils/global";
import { useParams } from "react-router-dom";
import { getHashtags } from "../../services/hashtagService";
import HashtagContext from "../../contexts/HashtagContext";
import UserContext from "../../contexts/UserContext";
import { repostPost } from "../../utils/timeline";

export const Modal = ({ showModal, setShowModal, postId, setPosts, repost }) => {
  const [loading, setLoading] = useState(false);
  const { username, hashtag } = useParams()
  const { setHashtags } = useContext(HashtagContext)
  const { currentUser } = useContext(UserContext)

  const closeModal = () => {
    setShowModal((state) => !state);
  };

  async function sendDeleteToApi() {
    setLoading(true);

    try {
      await axios.delete(`${BASE_URL}/posts/${postId}`, AUTH_CONFIG(currentUser.token));
      setLoading(false);
      setShowModal(false);
    
      const { data: posts } = await getPosts(currentUser.token, hashtag, username);
      const { data: hashtags } = await getHashtags(currentUser.token)

      setPosts(posts)
      setHashtags(hashtags)
    } catch (err) {
      setLoading(false);
      callToast('Houve um erro ao deleter o seu post', 'error');
      treatErrors(err);
    }     
 
  }
  return (
    <>
      {showModal ? (
        <Container>
          <ModalWrapper>
            <ModalContent>
              {loading ? (
                <>
                  <RotatingLines
                    strokeColor="#1877f2"
                    strokeWidth="5"
                    animationDuration="1.75"
                    width="96"
                    visible={true}
                  />
                  <span>{repost ? 'Compartilhando Post...' : 'Aguarde estou deletando seu Post...'}</span>
                </>
              ) : (
                <>
                  <h3>{repost ? 'Do you want to re-post this link?' : 'Are you sure you want to delete this post?'}</h3>
                  <div>
                    <button onClick={closeModal}>{repost ? 'No, cancel' : 'No, go back'}</button>
                    <button onClick={() => repost ? 
                      repostPost(setLoading, setShowModal, setPosts, postId, hashtag, username, currentUser.token) : 
                      sendDeleteToApi()}
                    >
                      {repost ? 'Yes, share!' : 'Yes, delete it'}
                    </button>
                  </div>
                </>
              )}
            </ModalContent>
          </ModalWrapper>
        </Container>
      ) : null}
    </>
  );
};

const Container = styled.div`
  width: 100%;
  height: 100vh;
  background-color: rgba(255, 255, 255, 0.7);
  position: fixed;
  left: 0;
  top: 0;
  z-index: 3; 

  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  width: 597px;
  height: 262px;
  border-radius: 40px;
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.4);
  background-color: #333333;

  @media screen and (max-width: 600px) {
    width: 100%;
  }
`;

const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  span {
    margin-top: 20px;
    font-size: 14px;
    font-family: "Lato";
    color: #ffffff;
  }
  h3 {
    color: white;
    font-size: 22px;
    text-align: center;
    width: 230px;
  }
  div {
    margin-top: 40px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: row;

    button:last-child {
      font-weight: 500;
      font-family: "Lato";
      color: #ffffff;
      margin-left: 10px;
      background-color: #1877f2;
    }
  }
  button {
    border-radius: 5px;
    width: 135px;
    height: 35px;
    padding: 5px;
    border: thin solid #333333;
    color: #1877f2;
    font-family: "Lato";
    font-weight: 500;

    cursor: pointer;
  }

  
`;
