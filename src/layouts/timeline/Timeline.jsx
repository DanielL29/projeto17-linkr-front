import { useEffect, useState } from "react";
import PageTitle from "../../components/page-title/PageTitle";
import PublishCard from "../../pages/home/PublishCard";
import { loadPosts } from "../../utils/timeline";
import PostCard from "../post-card/PostCard";
import { TimelineWrapper } from "./TimelineStyle";

export default function Timeline({ publish, title, hashtag, username, pictureUrl }) {
    const [posts, setPosts] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        loadPosts(setLoading, setPosts, hashtag, username)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [hashtag, username])

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
                            userPost={post.userPost}
                            setPosts={setPosts}
                            loading={loading}
                        />
                    )
                    : <h1>There are no posts yet</h1>
            }
        </TimelineWrapper>
    )
}