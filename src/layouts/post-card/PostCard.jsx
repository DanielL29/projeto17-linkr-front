import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { useNavigate } from "react-router-dom";
import { ReactTagify } from "react-tagify";
import { BsPencilFill, BsFillTrash2Fill, BsHeart, BsHeartFill } from "react-icons/bs";

import {
  PostCardWrapper,
  UrlMetadataWrapper,
  HeaderPosts,
  UserContainer,
} from "./PostCardStyle";

import { useState, useRef } from "react";
import { Modal } from "../../components/model-delete/Modal";
import { InputUpdate } from "../../components/input-update/InputUpdate";

export default function PostCard({
  username,
  description,
  url,
  urlImage,
  urlDescription,
  urlTitle,
  loading,
  pictureUrl,
  ownerId,
  postId,
  liked,
  handleLike
}) {
  const navigate = useNavigate();
  const inputRef = useRef();

  const [showModal, setShowModal] = useState(false);
  const [update, setUpdate] = useState(false);

  const openModal = () => {
    setShowModal((state) => !state);
  };

  const setUpdating = () => {
    setUpdate((state) => !state);
  };



  return (
    <PostCardWrapper>
      {loading ? (
        <Skeleton
          baseColor="#444"
          style={{
            width: "50px",
            height: "50px",
            borderRadius: "100%",
            marginRight: "17px",
          }}
        />
      ) : (
      <UserContainer>
        <img src={pictureUrl} alt="user" />
        <div onClick={() => handleLike(postId)}>{liked.length === 1 ? <BsHeartFill color="#AC0000" /> : <BsHeart /> }</div>
      </UserContainer>
      )}
      <div>
        <HeaderPosts>
          <h1 onClick={() => navigate(`/user/${ownerId}`)}>
            {loading ? (
              <Skeleton
                baseColor="#444"
                style={{ width: "100%", height: "20px" }}
              />
            ) : (
              username
            )}
          </h1>
          <div>
            <BsPencilFill onClick={setUpdating} className="icon" />
            <BsFillTrash2Fill onClick={openModal} className="icon" />
          </div>
        </HeaderPosts>
        <Modal
          showModal={showModal}
          setShowModal={setShowModal}
          postId={postId}
        />
        {loading ? (
          <Skeleton
            baseColor="#444"
            style={{ width: "100%", height: "20px" }}
          />
        ) : update ? ( 
          <InputUpdate description={description} setUpdate={setUpdate}  postId={postId}/>  // <------------ Atualizando a description do post
        ) : (
          <ReactTagify
            tagStyle={{ cursor: "pointer", fontWeight: "bold", color: "#fff" }}
            tagClicked={(tag) => navigate(`/hashtag/${tag.replace("#", "")}`)}
          >
            <p>{description}</p>
          </ReactTagify>
        )}
        <UrlMetadataWrapper onClick={() => window.open(url, "_blank")}>
          <div>
            <h2>
              {loading ? (
                <Skeleton
                  baseColor="#444"
                  style={{ width: "100%", height: "20px" }}
                />
              ) : (
                urlTitle
              )}
            </h2>
            <h3>
              {loading ? (
                <Skeleton
                  baseColor="#444"
                  style={{ width: "100%", height: "20px" }}
                />
              ) : (
                urlDescription
              )}
            </h3>
            <h4>
              {loading ? (
                <Skeleton
                  baseColor="#444"
                  style={{ width: "100%", height: "20px" }}
                />
              ) : (
                url
              )}
            </h4>
          </div>
          {loading ? (
            <Skeleton
              baseColor="#444"
              style={{ width: "140px", height: "100%" }}
            />
          ) : (
            <img src={urlImage} alt="url" />
          )}
        </UrlMetadataWrapper>
      </div>
    </PostCardWrapper>
  );
}
