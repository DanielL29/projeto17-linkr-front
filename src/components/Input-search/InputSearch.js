import { useEffect, useState } from "react";
import { DebounceInput } from "react-debounce-input";
import { AUTH_CONFIG, BASE_URL } from "../../constants";
import UserFound from "./UserFound";
import styled from "styled-components";
import axios from "axios";

export default function InputSearch() {

  const [input, setInput] = useState("");
  const [users, setUsers] = useState([{}]);
  const [resultSearch, setResultSearch] = useState(false);

  useEffect(() => {
    if (input.length !== 0) {
      
      const promise = axios.get(
        `${BASE_URL}/search?username=${input}`,
        AUTH_CONFIG
      );

      promise.then((response) => {
        console.log(response.data)
        if (response.data.length === 0) {
          //se a resposta for 0 então nao tem login APRESENTAR MENSAGEM DE USER NAO ENCONTRADO
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
  }, [input]);

  return (
    <Search>
      <DebounceInput
        placeholder="Search for people"
        minLength={3}
        debounceTimeout={300}
        onChange={(event) => setInput(event.target.value)}
      />

      
      {resultSearch ? (
        <SearchResults>
          {users.map((item, index) => (
            <UserFound data={item} key={index} setResultSearch={setResultSearch}/>
          ))}
        </SearchResults>
      ) : (
        ""
      )}
    </Search>
  );
}

const SearchResults = styled.div`
  width: 89%;
  height: auto;
  min-height: 40px;
  position: absolute;
  border-radius: 5px;
  top: 90%;

  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.5);
  background-color: #e7e7e7e7;
`;
const Search = styled.div`
  width: 30%;
  height: 80%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;

  input {
    z-index: 1;
    border-radius: 8px;
    padding: 20px;
    font-family: "Lato";
    font-weight: 400;
    font-size: 18px;
    width: 90%;
    height: 90%;
    background-color: #ffffff;
  }
`;
