import { useContext, useState } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import UserContext from '../../contexts/UserContext';
import { getPosts } from '../../services/postService';
import PostCard from "./../post-card/PostCard";
import { TailSpin } from 'react-loader-spinner';
import { LoadingWrapper } from './TimelineStyle';
import HasMoreContext from '../../contexts/HasMoreContext';

export default function Scroll({ posts, userLikes, setPosts, loading, liking, handleLike, hashtag, username }) {
    const { currentUser } = useContext(UserContext);
    const [fetching, setFetching] = useState(false);
    const [pageStart, setPageStart] = useState(1);
    const { hasMore, setHasMore } = useContext(HasMoreContext)

    const handleLoad = async () => {
            if(fetching) {
                return;
            }

            setFetching(true);
            const { data: newPosts } = await getPosts(currentUser.token, hashtag, username, pageStart);
            if(newPosts.length < 10) {
                setHasMore(false);
                setPosts([...posts, ...newPosts]);
            } else if(newPosts.length === 0 || typeof newPosts === "string") {
                setHasMore(false);
            } else {
                setPageStart(pageStart + 1);
                setPosts([...posts, ...newPosts]);
            }
            setFetching(false);

        }

    return(
        <InfiniteScroll dataLength={posts.length} next={handleLoad} pageStart={pageStart} hasMore={hasMore} loader={
            <LoadingWrapper>
                <TailSpin color='#6D6D6D' />
                <h1>Loading more...</h1>
            </LoadingWrapper>    
        }>
            {posts.map((post) => {
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
                    handleLike={handleLike} /> })}
        </InfiniteScroll> 
    );
}