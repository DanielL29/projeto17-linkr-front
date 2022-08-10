import { Container, TimelineWrapper, TrendingWrapper } from "./TimelineStyle";
import TimelineTitle from '../../components/page-title/PageTitle';
import PublishCard from "./PublishCard";
import PostCard from "../../layouts/post-card/PostCard";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { useEffect, useState } from "react";
import { getPosts } from "../../services/postService";
import { getHashtags } from "../../services/hashtagService";
import { useNavigate } from "react-router-dom";

export default function Timeline() {
    const [posts, setPosts] = useState([])
    const [hashtags, setHashtags] = useState([])
    const [loading, setLoading] = useState(false)
    const navigate = useNavigate()

    useEffect(() => {
        loadTimeline()
    }, [])

    function loadTimeline() {
        setLoading(true)

        getPosts(setPosts)
        getHashtags(setHashtags)

        setLoading(false)
    }

    return (
        <Container>
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
            <TrendingWrapper>
                <div>
                    <h1>trending</h1>
                    <div className="line"></div>
                    <div className="hashtags">
                        {loading ? 
                            <p>Loading...</p> : 
                            hashtags.length > 0 ? 
                                hashtags.map(hashtag => 
                                    <p key={hashtag.id} onClick={() => navigate(`/hashtag/${hashtag.name}`)}># {hashtag.name}</p>    
                                )
                            : <p>There are no hashtags yet</p>
                        }
                    </div>
                </div>
            </TrendingWrapper>
        </Container>
    )
}