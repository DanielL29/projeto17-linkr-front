import { useNavigate } from "react-router-dom";
import styled from "styled-components";

export default function UserFound({ data, setResultSearch }) {
  const navigate = useNavigate();
  
  function goToUserPage(){
    setResultSearch(false);
    navigate(`/user/${data.id}`);
  }
 
  return (
    <ContainerUsersFound onClick={() => goToUserPage()}>
        <div>
          <img src={data.pictureUrl} alt="Imagem de perfil" />
          <span>{data.lower}</span>
          <p>{data.following ? '• following' : ''}</p>
        </div>
    </ContainerUsersFound>
  );
}

const ContainerUsersFound = styled.div`
  width: 100%;
  height: auto;
  transition: 0.3ms linear;

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
    margin-left: 10px;
  }

  span {
    font-family: "Lato";
    color: #515151;
    font-size: 19px;

    text-transform: capitalize;

    :hover {
      font-weight: 600;
    }
  }

  p {
    font-weight: 400;
    font-size: 19px;
    color: #C5C5C5;
    margin-left: 5px;
  }

  :hover {
    cursor: pointer;
  }
`;
