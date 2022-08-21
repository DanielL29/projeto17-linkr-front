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
    cursor: pointer;
    text-align: center;
  }

  .comments {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .shares {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

export const Tooltip = styled.div`
  display: ${({ tooltip }) => tooltip ? 'flex': 'none'};
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 1;
  transition: all 200ms ease-in-out;
  position: absolute;
  margin-top: 110px;

  .arrow-up {
    margin-top: 2px;
    width: 0; 
    height: 0; 
    border-left: 6px solid transparent;
    border-right: 6px solid transparent;
    border-bottom: 12px solid rgba(255, 255, 255, 0.9);
  }

  .tooltip-body {
    display: flex;
    justify-content: center;
    align-items: center;

    width: 169px;
    min-height: 24px;
    background: rgba(255, 255, 255, 0.9);
    border-radius: 3px;
    font-weight: 700;
    font-size: 11px;
    color: #505050;
    padding: 5px;
    text-align: center;
  }
`

export const CommentsWrapper = styled.div`
  width: 611px;
  height: auto;
  background-color: #1E1E1E;
  border-radius: 16px;
  padding: ${({ showComments }) => showComments ? '25px' : '0'};
  margin-bottom: 69px;
  margin-top: -25px;
  position: relative;
  z-index: -1;

  @media screen and (max-width: 611px) {
    width: 100%;
  }
`

export const RepostWrapper = styled.div`
  display: flex;
  align-items: flex-start;

  width: 611px;
  height: 80px;
  background-color: #1E1E1E;
  border-radius: 16px;
  font-weight: 400;
  font-size: 11px;
  color: #fff;
  padding-top: 10px;
  padding-left: 13px;
  margin-bottom: -40px;

  p {
    margin-left: 6px;
    margin-top: 4px;
  }

  span {
    font-weight: 700;
  }

  @media screen and (max-width: 611px) {
    width: 100%;
  }
`