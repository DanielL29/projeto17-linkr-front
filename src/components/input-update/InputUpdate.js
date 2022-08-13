import styled from "styled-components";
import { BASE_URL, AUTH_CONFIG } from "../../constants";
import axios from "axios";
import { useState, useRef, useEffect } from "react";
import { getPosts } from "../../services/postService";
import { callToast, treatErrors } from "../../utils/global";

export const InputUpdate = ({ description, setUpdate, postId }) => {
  const [inputValue, setInputValue] = useState("");
  const [disabled, setDisabled] = useState(false);
  const inputRef = useRef();

  useEffect(() => {
    inputRef.current.value = description;
    inputRef.current?.focus();
  }, [description]);

  async function UpdatingValueInput(event) {
    if (event.keyCode === 27) {
      // Capturando ESQ do teclado
      setUpdate((state) => !state);
    }

    if (event.keyCode === 13) {
      //Capturando ENTER do teclado
      setDisabled(true);

      try {
        await axios.patch(
          `${BASE_URL}/posts/${postId}`,
          {
            description: inputValue,
          },
          AUTH_CONFIG
        );
        setDisabled(false);
        setUpdate(false);
        await getPosts();
      } catch (error) {
        setDisabled(false);
        inputRef.current?.focus();
      }
    }
  }
  // try {
  //   await axios.delete(`${BASE_URL}/posts/${postId}`, AUTH_CONFIG);
  //   const teste = await getPosts();
  //   setLoadingDelete(false);
  //   setShowModal(false);
  //   console.log(teste)

  // } catch (err) {
  //   setLoadingDelete(false);
  //   callToast('Houve um erro ao deleter o seu post', 'error');
  //   treatErrors(err);
  // }

  return (
    <Container>
      <textarea
        disabled={disabled}
        type="text"
        ref={inputRef}
        onKeyDown={(e) => UpdatingValueInput(e)}
        onChange={(e) => setInputValue(e.target.value)}
      />
    </Container>
  );
};

const Container = styled.div`
  textarea {
    width: 100%;
    height: auto;
    background-color: #fafafa;
    border-radius: 10px;
    font-size: 14px;
    font-family: "Lato";
    padding: 10px;

    margin-bottom: 5px;
    margin-top: 5px;
  }
`;
