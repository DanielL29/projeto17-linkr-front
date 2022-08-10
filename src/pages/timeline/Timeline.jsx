import { TimelineWrapper } from "./TimelineStyle";
import TimelineTitle from '../../components/page-title/PageTitle';
import PublishCard from "./PublishCard";
import PostCard from "../../layouts/post-card/PostCard";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { useEffect, useState } from "react";
import { getPosts } from "../../services/postService";

export default function Timeline() {
    const [posts, setPosts] = useState([])
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        loadPosts()
    }, [])

    function loadPosts() {
        setLoading(true)

        getPosts(setPosts)

        setLoading(false)
    }

    return (
        <TimelineWrapper>
            <TimelineTitle title="timeline" />
            <PublishCard setPosts={setPosts} />
            {loading ? 
                <h1>Loading...</h1> : 
                posts.length > 0 ? 
                    posts.map(post => 
                        <PostCard key={post.id} 
                            username={post.username} 
                            url={post.url} 
                            description={post.description}
                            urlTitle={post.urlTitle}
                            urlDescription={post.urlDescription}
                            urlImage={post.urlImage}
                        />
                    )
                : <h1>There are no posts yet</h1>
            }
            <ToastContainer />
        </TimelineWrapper>
    )
}