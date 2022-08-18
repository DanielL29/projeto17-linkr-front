import { useContext, useEffect, useState } from "react";
import useInterval from "use-interval";
import PageTitle from "../../components/page-title/PageTitle";
import { POST_ATT_TIME } from "../../constants";
import UserContext from "../../contexts/UserContext";
import PublishCard from "../../pages/home/PublishCard";
import { dislikePost, getNewPostsQuantity, getPosts, likePost } from "../../services/postService";
import { loadLikes, loadPosts } from "../../utils/timeline";
import PostCard from "../post-card/PostCard";
import { TimelineWrapper } from "./TimelineStyle";

export default function Timeline({ publish, title, hashtag, username, pictureUrl }) {
    const [posts, setPosts] = useState([])
    const [loading, setLoading] = useState(false)
    const [userLikes, setUserLikes] = useState([]);
    const [liking, setLiking] = useState(false)
    const { currentUser } = useContext(UserContext)

    useEffect(() => {
        loadPosts(setLoading, setPosts, hashtag, username, currentUser.token)
        loadLikes(setUserLikes, currentUser.token);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [hashtag, username]);

    useInterval(() => {
        getNewPostsQuantity(currentUser.token, posts[posts.length - 1].id);
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

    return (
        <TimelineWrapper>
            {username ? <PageTitle title={title} pictureUrl={pictureUrl} /> : <PageTitle title={title} />}
            {publish ? <PublishCard setPosts={setPosts} /> : ''}
            {loading ? <PostCard loading={loading} /> :
                posts.length > 0 && typeof posts === "object" ?
                    posts.map((post) => {
                        return <PostCard key={post.id}
                            username={post.username}
                            pictureUrl={post.pictureUrl}
                            url={post.url}
                            description={post.description}
                            urlTitle={post.urlTitle}
                            urlDescription={post.urlDescription}
                            urlImage={post.urlImage}
                            ownerId={post.ownerId}
                            postId={post.postId}
                            liked={userLikes?.filter(like => like.postId === post.postId)}
                            usersWhoLiked={post.usersWhoLiked}
                            likesCount={post.likesCount}
                            commentsCount={post.commentsCount}
                            postRepostUser={post.postRepostUser}
                            repost={post.repost}
                            repostsCount={post.repostsCount}
                            userPost={post.userPost}
                            setPosts={setPosts}
                            loading={loading}
                            liking={liking}
                            handleLike={handleLike}
                        />
                        }
                    )
                    : posts.length > 0 ? <h1>{posts}</h1> : <h1>There are no posts yet</h1>
            }
        </TimelineWrapper>
    )
}
