import { useEffect, useState, useRef, useContext } from "react";
import { DebounceInput } from "react-debounce-input";
import { AUTH_CONFIG, BASE_URL } from "../../constants";
import styled from "styled-components";
import axios from "axios";
import UserFound from "./UserFound";
import UserNotFound from "./UserNotFound";
import { BsSearch } from "react-icons/bs";
import UserContext from '../../contexts/UserContext'

export default function InputSearch() {
  const inputRef = useRef();
  const [input, setInput] = useState("");
  const [users, setUsers] = useState([]);
  const [searching, setSearching] = useState(false);
  const [resultSearch, setResultSearch] = useState(false);
  const { currentUser } = useContext(UserContext)

  useEffect(() => {
    
    if (input.length !== 0) {
      const promise = axios.get(
        `${BASE_URL}/search?username=${input}`,
        AUTH_CONFIG(currentUser.token)
      );

      promise.then((response) => {
        if (response.data.length === 0) {
          //se a resposta for 0 então nao tem login APRESENTAR MENSAGEM DE USER NAO ENCONTRADO
          setSearching(true);
          setResultSearch(false);
        } else {
          setResultSearch(true);
          setUsers(response.data);
        }
      });
      promise.catch((err) => {
        console.log(err);
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [input]);

  function InputController(event) {
    if (event.keyCode === 27) {
      setResultSearch(false);
      setSearching(false);
    }
  }

  return (
    <Search>
      <DebounceInput
        ref={inputRef}
        placeholder="Search for people"
        minLength={3}
        debounceTimeout={300}
        onChange={(event) => setInput(event.target.value)}
        onKeyDown={(e) => InputController(e)}
      />
      <BsSearch className="search-icon" />
      {/* <ContainerPesquisa visible={false}> */}

      {resultSearch ? (
        <SearchResults>
          {users.map((item, index) => (
            <UserFound
              data={item}
              key={index}
              setResultSearch={setResultSearch}
            />
          ))}
        </SearchResults>
      ) : searching ? (
        <SearchResults>
          <UserNotFound />
        </SearchResults>
      ) : null}

      {/* </ContainerPesquisa> */}
    </Search>
  );
}

const SearchResults = styled.div`
  width: 100%;
  height: auto;
  min-height: 40px;
  min-width: 390px;
  position: absolute;
  border-radius: 5px;
  top: 90%;

  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.5);
  background-color: #e7e7e7;

  @media screen and (max-width: 670px) {
    min-width: 390px;
  }
`;
const Search = styled.div`
  width: 30%;
  height: 80%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;

  .search-icon {
    color: darkgray;
    width: 25px;
    right: 10px;
    z-index: 1;
    position: absolute;
  }

  input {
    position: relative;
    z-index: 1;
    border-radius: 8px;
    padding: 20px;
    font-family: "Lato";
    font-weight: 400;
    font-size: 18px;
    width: 100%;
    min-width: 420px;
    height: 90%;
    background-color: #ffffff;
  }

  @media screen and (max-width: 670px) {
    position: relative;
    input {
      position: absolute;
      bottom: 0px;
      height: 20px;
      width: 100%;
      min-width: 400px;
    }
    .search-icon {
      right: -110px;
      bottom: 0px;
    }
  }
`;
