import { useContext, useEffect, useState } from "react";
import useInterval from "use-interval";
import PageTitle from "../../components/page-title/PageTitle";
import { POST_ATT_TIME } from "../../constants";
import UserContext from "../../contexts/UserContext";
import PublishCard from "../../pages/home/PublishCard";
import PostCard from "../post-card/PostCard";
import { dislikePost, getNewPostsQuantity, getPosts, likePost } from "../../services/postService";
import { loadLikes, loadPosts } from "../../utils/timeline";
import { followUnfollowUser, loadUserFollow } from "../../utils/userPage";
import PostCard from "../post-card/PostCard";
import NewPostsButton from "./NewPostsButton";
import { FollowButton, TimelineWrapper } from "./TimelineStyle";
import Scroll from "./Scroll";
import { useMatch } from "react-router-dom";

export default function Timeline({ publish, title, hashtag, username, pictureUrl, name }) {
    const [posts, setPosts] = useState([])
    const [loading, setLoading] = useState(false)
    const [userLikes, setUserLikes] = useState([]);
    const [liking, setLiking] = useState(false)
    const [userFollow, setUserFollow] = useState(false)
    const { currentUser } = useContext(UserContext)
    const [newPosts, setNewPosts] = useState(0);
    const isTimeline = useMatch("home");

    useEffect(() => {
        loadPosts(setLoading, setPosts, hashtag, username, currentUser.token)
        loadLikes(setUserLikes, currentUser.token);
        loadUserFollow(setUserFollow, name, username, currentUser.username, currentUser.token)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    useInterval(async () => {
        if(isTimeline) {
            const { count } = await getNewPostsQuantity(currentUser.token, posts[0].id);
            setNewPosts(count);
        }
    }, POST_ATT_TIME);

    async function handleLike(postId) {
        const liked = userLikes.filter(like => like.postId === postId);
        if(liked.length === 1) {
            setLiking(true)

            await dislikePost(postId, currentUser.token);
            await loadLikes(setUserLikes, currentUser.token);

            const { data: posts } = await getPosts(currentUser.token, hashtag, username)

            setPosts(posts)
            setLiking(false)
        } else {
            setLiking(true)

            await likePost(postId, currentUser.token);
            await loadLikes(setUserLikes, currentUser.token);

            const { data: posts } = await getPosts(currentUser.token, hashtag, username)

            setPosts(posts)
            setLiking(false)
        }  
    }

    async function updateTimeline() {
        await loadPosts(setLoading, setPosts, hashtag, username, currentUser.token)
        await loadLikes(setUserLikes, currentUser.token);
        setNewPosts(0)
    }

    return (
        <TimelineWrapper>
            {username ? (
                <div className="follow">
                    <PageTitle title={title} pictureUrl={pictureUrl} /> 
                    {name !== currentUser.username ? 
                        <FollowButton userFollow={userFollow} disabled={liking} 
                            onClick={() => followUnfollowUser(setLiking, setUserFollow, userFollow, username, currentUser.token)}>
                            {userFollow ? 'UnFollow' : 'Follow'}
                        </FollowButton> 
                    : <></> }
                </div>
            ) : <PageTitle title={title} />}
            {publish ? <PublishCard setPosts={setPosts} /> : ''}
            {newPosts > 0 ? <NewPostsButton newPosts={newPosts} updateTimeline={updateTimeline}/> : '' }
            {loading ? <PostCard loading={loading} /> :
                posts.length > 0 && typeof posts === "object" ? <Scroll 
                                                                posts={posts} userLikes={userLikes} setPosts={setPosts} 
                                                                loading={loading} liking={liking} handleLike={handleLike}
                                                                hashtag={hashtag} username={username}/> : 
                posts.length > 0 ? <h1>{posts}</h1> : <h1>There are no posts yet</h1>
            }
        </TimelineWrapper>
    )
}
