import { useEffect } from "react";
import { useState } from "react";
import PageTitle from "../../components/page-title/PageTitle";
import PublishCard from "../../pages/home/PublishCard";
import { getHashtagPosts } from "../../services/hashtagService";
import { getPosts } from "../../services/postService";
import PostCard from "../post-card/PostCard";
import { TimelineWrapper } from "./TimelineStyle";

export default function Timeline({ publish, title, hashtag }) {
    const [posts, setPosts] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        loadPosts()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [hashtag])

    function loadPosts() {
        setLoading(true)

        if (publish) {
            getPosts(setPosts)
        } else {
            getHashtagPosts(hashtag, setPosts)
        }

        setTimeout(() => setLoading(false), 1000)
    }

    return (
        <TimelineWrapper>
            <PageTitle title={title} />
            {publish ? <PublishCard setPosts={setPosts} /> : ''}
            {loading ? <PostCard loading={loading} /> :
                posts.length > 0 ?
                    posts.map(post =>
                        <PostCard key={post.id}
                            username={post.username}
                            url={post.url}
                            description={post.description}
                            urlTitle={post.urlTitle}
                            urlDescription={post.urlDescription}
                            urlImage={post.urlImage}
                            loading={loading}
                        />
                    )
                    : <h1>There are no posts yet</h1>
            }
        </TimelineWrapper>
    )
}