import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { useNavigate } from "react-router-dom";
import { ReactTagify } from "react-tagify";
import { BsPencilFill, BsFillTrash2Fill, BsHeart, BsHeartFill } from "react-icons/bs";
import { AiOutlineComment } from 'react-icons/ai'
import { RiRepeatFill } from 'react-icons/ri'

import {
  PostCardWrapper,
  UrlMetadataWrapper,
  HeaderPosts,
  UserContainer,
  Tooltip,
  CommentsWrapper,
  RepostWrapper,
} from "./PostCardStyle";

import { useContext, useState } from "react";
import { Modal } from "../../components/model-delete/Modal";
import { InputUpdate } from "../../components/input-update/InputUpdate";
import UserContext from "../../contexts/UserContext";
import CommentCard from "../comment-card/CommentCard";
import { loadComments, publishComment } from "../../utils/timeline";
import CommentInput from "../../components/comment-input/CommentInput";

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
  handleLike,
  userPost,
  setPosts,
  likesCount,
  commentsCount,
  repostsCount,
  repost,
  postRepostUser,
  usersWhoLiked,
  liking
}) {
  const navigate = useNavigate();

  const [showModal, setShowModal] = useState(false);
  const [update, setUpdate] = useState(false);
  const [tooltip, setTooltip] = useState(false)
  const [loadingComments, setLoadingComments] = useState(false)
  const [showComments, setShowComments] = useState(false)
  const [isRepost, setIsRepost] = useState(false)
  const [comments, setComments] = useState([])
  const [comment, setComment] = useState('')
  const { currentUser } = useContext(UserContext)

  const openModal = () => {
    setShowModal((state) => !state);
  };

  const setUpdating = () => {
    setUpdate((state) => !state);
  };

  function postLikes(greaterThree, equalThree) {
    if (likesCount > 3) {
      return `e outras ${likesCount - greaterThree} pessoas`
    } else if (likesCount === 3) {
      return `e outras ${likesCount - equalThree} pessoas`
    } else if (likesCount === 2 && liked.length === 0) {
      return `e outra pessoa`
    }
    else return ""
  }

  return (
    <>
      {repost ? (
        <RepostWrapper>
          <RiRepeatFill cursor="pointer" style={{ fontSize: "20px" }} />
          <p>Re-posted by <span>{postRepostUser === currentUser.username ? 'you' : postRepostUser}</span></p>
        </RepostWrapper>
      ) : ''}
      <PostCardWrapper>
        {loading ? (
          <Skeleton baseColor="#444" style={{ width: "50px", height: "50px", borderRadius: "100%", marginRight: "17px" }} />
        ) : (
          <UserContainer onMouseLeave={() => setTooltip(false)}>
            <img className="likes" src={pictureUrl} alt="user" />
            <div onClick={() => handleLike(postId)} disabled={liking}>{liked.length > 0 ? <BsHeartFill color="#AC0000" /> : <BsHeart />}</div>
            <span onMouseEnter={() => setTooltip(true)}>{`${likesCount} likes`}</span>
            <div className="comments" onClick={() => setShowComments(!showComments)}>
              <AiOutlineComment cursor="pointer" style={{ fontSize: "27px" }}
                onClick={() => loadComments(postId, setLoadingComments, setComments, currentUser.token)} />
              <span>{comments.length > commentsCount ? comments.length : commentsCount} comments</span>
            </div>
            <div className="shares">
              <RiRepeatFill cursor="pointer" style={{ fontSize: "20px" }} onClick={() => { setIsRepost(true); openModal(); }} />
              <span>{repostsCount} re-posts</span>
            </div>
          </UserContainer>
        )}
        <div className="content">
          <HeaderPosts>
            <h1 onClick={() => navigate(`/user/${ownerId}`)}>
              {loading ? <Skeleton baseColor="#444" style={{ width: "100%", height: "20px" }} /> : username}
            </h1>
            {userPost && !repost ? (
              <div>
                <BsPencilFill onClick={setUpdating} className="icon" />
                <BsFillTrash2Fill onClick={() => { setIsRepost(false); openModal(); }} className="icon" />
              </div>
            ) : ''}
          </HeaderPosts>
          {loading ? (
            <Skeleton baseColor="#444" style={{ width: "100%", height: "20px" }} />
          ) : update ? (
            <InputUpdate description={description} setUpdate={setUpdate} postId={postId} setPosts={setPosts} />
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
                {loading ? <Skeleton baseColor="#444" style={{ width: "100%", height: "20px" }} /> : urlTitle}
              </h2>
              <h3>
                {loading ? <Skeleton baseColor="#444" style={{ width: "100%", height: "20px" }} /> : urlDescription}
              </h3>
              <h4>
                {loading ? <Skeleton baseColor="#444" style={{ width: "100%", height: "20px" }} /> : url}
              </h4>
            </div>
            {loading ? <Skeleton baseColor="#444" style={{ width: "140px", height: "100%" }} /> : <img src={urlImage} alt="url" />}
          </UrlMetadataWrapper>
        </div>
      </PostCardWrapper>
      {usersWhoLiked ? (
        <Tooltip tooltip={tooltip}>
          <div className="arrow-up"></div>
          <div className="tooltip-body" onMouseLeave={() => setTooltip(false)}>
            {usersWhoLiked.length === 0 ?
              'Sem Likes' : usersWhoLiked.includes(currentUser.username) ?
                `Você${usersWhoLiked.length === 1 ? '' : ','} ${usersWhoLiked[usersWhoLiked.length - 1] === currentUser.username ?
                  usersWhoLiked[usersWhoLiked.length - 2] ?? '' :
                  usersWhoLiked[usersWhoLiked.length - 1]} ${postLikes(2, 1)}` :
                `${usersWhoLiked[usersWhoLiked.length - 1] === currentUser.username ?
                  usersWhoLiked[usersWhoLiked.length - 2] ?? '' :
                  usersWhoLiked[usersWhoLiked.length - 1]} ${postLikes(1, 0)}`
            }
          </div>
        </Tooltip>
      ) : ''} 
      <CommentsWrapper showComments={showComments}>
        {loadingComments && comments.length === 0 ? <CommentCard loading={loadingComments} /> : ''}
        {showComments ? comments.map(comment =>
          <CommentCard key={comment.id}
            username={comment.username}
            description={comment.description}
            pictureUrl={comment.pictureUrl}
            postAuthor={comment.postAuthor}
            following={comment.following}
            loading={loadingComments}
            userPage={() => navigate(`/user/${comment.userId}`)}
          />
        ) : ''}
        {showComments ? (
          <CommentInput pictureUrl={currentUser.pictureUrl} comment={comment} setComment={setComment}
            publishComment={() => publishComment(setComment, comment, setComments, postId, currentUser.token)} />
        ) : ''}
      </CommentsWrapper>
      <Modal showModal={showModal} setShowModal={setShowModal} postId={postId} setPosts={setPosts} repost={isRepost} />
    </>
  );
}