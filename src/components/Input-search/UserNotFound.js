import { TbFaceIdError } from "react-icons/tb";
import styled from "styled-components";

export default function UserNotFound() {

  return (
    <ContainerUserNotFound>
        <div>
          <TbFaceIdError className="logoNotFound"/>
          <span>Usuário não encontrado...</span>
        </div>
    </ContainerUserNotFound>
  );
}

const ContainerUserNotFound = styled.div`
  width: 100%;
  height: auto;
  transition: 0.3ms linear;

  .logoNotFound {
    width: 60px;
    color: #515151;
  }


  div {
    padding: 10px;
    margin-top: 10px;
    display: flex;
    align-items: center;
  }

  img {
    object-fit: cover;
    width: 60px;
    height: 60px;
    border-radius: 50%;
    margin-right: 10px;
  }

  span {
    font-family: "Lato";
    color: #515151;
    font-size: 20px;
    font-weight: 500;
    text-transform: capitalize;

    
  }

  :hover {
    cursor: pointer;
  }
`;
