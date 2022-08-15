import styled from "styled-components";
import axios from "axios";
import { BASE_URL, AUTH_CONFIG } from "../../constants";
import { useState, useRef, useEffect, useContext } from "react";
import { getPosts } from "../../services/postService";
import { callToast, treatErrors } from "../../utils/global";
import { useParams } from "react-router-dom";
import HashtagContext from "../../contexts/HashtagContext";
import { getHashtags } from "../../services/hashtagService";

export const InputUpdate = ({ description, setUpdate, postId, setPosts }) => {
  const [inputValue, setInputValue] = useState("");
  const [disabled, setDisabled] = useState(false);
  const inputRef = useRef();
  const { username, hashtag } = useParams()
  const { setHashtags } = useContext(HashtagContext)

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
        console.log(
        await axios.patch(
          `${BASE_URL}/posts/${postId}`,
          {
            description: inputValue,
          },
          AUTH_CONFIG
        ));
        setDisabled(false);
        setUpdate(false);

        const { data: posts } = await getPosts(hashtag, username);
        const { data: hashtags } = await getHashtags()

        setPosts(posts)
        setHashtags(hashtags)
      } catch (err) {
        setDisabled(false);
        inputRef.current?.focus();
        callToast("Houve um erro ao editar o seu post", "error");
        treatErrors(err);
      }
    }
  }

  return (
    <Container>
      <textarea
        disabled={disabled}
        type="text"
        ref={inputRef}
        onChange={(e) => setInputValue(e.target.value)}
        onKeyDown={(e) => UpdatingValueInput(e)}
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
