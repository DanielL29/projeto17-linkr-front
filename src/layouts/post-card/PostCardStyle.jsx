import styled from "styled-components";

export const HeaderPosts = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  div {
    width: 60px;
    display: flex;
    justify-content: space-between;
    align-items: center;

}
.icon {
    font-size: 20px;
    color: #fafafa;
    
    :hover{
        cursor: pointer;
        font-size: 22px;
    }
  }
`;

export const PostCardWrapper = styled.div`
  display: flex;

  min-height: 276px;
  background-color: #171717;
  border-radius: 16px;
  padding: 18px;
  margin-bottom: 16px;


  .likes {
    min-width: 50px;
    max-width: 50px;
    height: 50px;
    border-radius: 26px;
    object-fit: cover;
  }

  .content {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 100%;
  }

  h1 {
    font-weight: 400;
    font-size: 19px;
    color: #fff;
    margin-bottom: 10px;
    text-transform: capitalize;

    :hover {
      cursor: pointer;
      font-weight: 600;
    }
  }

  p {
    font-weight: 400;
    font-size: 17px;
    color: #b7b7b7;
    margin-bottom: 10px;
  }

  @media screen and (max-width: 611px) {
    border-radius: 0;
    min-height: 232px;
  }
`;

export const UrlMetadataWrapper = styled.div`
  display: flex;
  justify-content: space-between;

  height: 155px;
  border: 1px solid #4d4d4d;
  border-radius: 11px;
  cursor: pointer;

  div {
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    padding: 20px;
    height: 100%;
    width: 70%;
  }

  h2 {
    font-weight: 400;
    font-size: 16px;
    color: #cecece;
    margin-bottom: 15px;
  }

  h3 {
    font-weight: 400;
    font-size: 11px;
    color: #9b9595;
    margin-bottom: 13px;
  }

  h4 {
    font-weight: 400;
    font-size: 11px;
    color: #cecece;
    margin-bottom: 23px;
    word-break: break-word;
  }

  h4:hover {
    text-decoration: underline;
  }

  img {
    width: 153px;
    height: 100%;
    border-radius: 0px 12px 12px 0px;
    margin-right: 0;
    object-fit: cover;
  }

  @media screen and (max-width: 611px) {
    height: auto;

    img {
      width: 40%;
    }
  }
`;

export const UserContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 50px;
  margin-right: 18px;
  svg {
    font-size: 20px;
    color: #FFFFFF;
    margin-bottom: 4px;
    margin-top: 20px;
  }
  svg:hover {
    cursor: pointer;
  }
  span {
    font-size: 11px;
    color: #FFFFFF;
  }
`;
