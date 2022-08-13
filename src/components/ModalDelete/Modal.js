import styled from "styled-components";
import { RotatingLines } from "react-loader-spinner";
import { BASE_URL, AUTH_CONFIG } from "../../constants";
import axios from "axios";
import { useState } from "react";
import { getPosts } from "../../services/postService";
import { callToast, treatErrors } from "../../utils/global";

export const Modal = ({ showModal, setShowModal, postId }) => {
  const [loadingDelete, setLoadingDelete] = useState(false);

  const closeModal = () => {
    setShowModal((state) => !state);
  };

  async function sendDeleteToApi() {
    setLoadingDelete(true);

    try {
      await axios.delete(`${BASE_URL}/posts/${postId}`, AUTH_CONFIG);
      const teste = await getPosts();
      setLoadingDelete(false);
      setShowModal(false);
      console.log(teste)
      
    } catch (err) {
      setLoadingDelete(false);
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
              {loadingDelete ? (
                <>
                  <RotatingLines
                    strokeColor="#1877f2"
                    strokeWidth="5"
                    animationDuration="1.75"
                    width="96"
                    visible={true}
                  />
                  <span>Aguarde estou deletando seu Post...</span>
                </>
              ) : (
                <>
                  <h3>Are you sure you want to delete this post?</h3>
                  <div>
                    <button onClick={closeModal}>No, go back</button>
                    <button onClick={() => sendDeleteToApi()}>
                      Yes, delete it
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
  z-index: 2 !important;

  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalWrapper = styled.div`
  width: 20%;
  height: auto;
  padding: 80px;
  border-radius: 40px;
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.4);
  background-color: #333333;
`;

const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-items: center;
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
  }
  div {
    margin-top: 40px;
    width: 100%;
    display: flex;
    align-items: center;
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
