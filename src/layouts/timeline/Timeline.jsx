import { useEffect, useState } from "react";
import PageTitle from "../../components/page-title/PageTitle";
import PublishCard from "../../pages/home/PublishCard";
import { dislikePost, likePost } from "../../services/postService";
import { loadLikes, loadPosts } from "../../utils/timeline";
import PostCard from "../post-card/PostCard";
import { TimelineWrapper } from "./TimelineStyle";

export default function Timeline({ publish, title, hashtag, username, pictureUrl }) {
    const [posts, setPosts] = useState([])
    const [loading, setLoading] = useState(true)
    const [userLikes, setUserLikes] = useState([]);
    const [likes, setLikes] = useState([]);

    useEffect(() => {
        loadPosts(setLoading, setPosts, hashtag, username)
        loadLikes(setUserLikes, setLikes);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [hashtag, username])

    async function handleLike(postId) {
        if(userLikes.length === 1) {
            await dislikePost(postId);
            loadLikes(setUserLikes, setLikes);
        } else {
            await likePost(postId);
            loadLikes(setUserLikes, setLikes);
        }  
    }

    return (
        <TimelineWrapper>
            {username ? <PageTitle title={title} pictureUrl={pictureUrl} /> : <PageTitle title={title} />}
            {publish ? <PublishCard setPosts={setPosts} /> : ''}
            {loading ? <PostCard loading={loading} /> :
                posts.length > 0 ?
                    posts.map(post =>
                        <PostCard key={post.id}
                            username={post.username}
                            pictureUrl={post.pictureUrl}
                            url={post.url}
                            description={post.description}
                            urlTitle={post.urlTitle}
                            urlDescription={post.urlDescription}
                            urlImage={post.urlImage}
                            ownerId={post.ownerId}
                            postId={post.id}
                            liked={userLikes.filter(like => like.postId === post.id)}
                            userPost={post.userPost}
                            setPosts={setPosts}
                            loading={loading}
                            handleLike={handleLike}
                        />
                    )
                    : <h1>There are no posts yet</h1>
            }
        </TimelineWrapper>
    )
}