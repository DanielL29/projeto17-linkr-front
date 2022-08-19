import { useContext, useState } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import UserContext from '../../contexts/UserContext';
import { getPosts } from '../../services/postService';
import PostCard from "./../post-card/PostCard";
import { TailSpin } from 'react-loader-spinner';

export default function Scroll({ posts, userLikes, setPosts, loading, liking, handleLike, hashtag, username }) {
    const { currentUser } = useContext(UserContext);
    const [fetching, setFetching] = useState(false);
    const [pageStart, setPageStart] = useState(1);
    const [hasMore, setHasMore] = useState(true);

    const handleLoad = async () => {
            if(fetching) {
                return;
            }

            setFetching(true);
            const { data: newPosts } = await getPosts(currentUser.token, hashtag, username, pageStart);
            const postFiltered = newPosts.filter((post) => post.id <= posts[posts.length - 1].id);
            console.log(postFiltered)
            if(newPosts.length < 10) {
                setHasMore(false);
                setPosts([...posts, ...postFiltered]);
            } else if(newPosts.length === 0) {
                setHasMore(false);
            } else {
                setPageStart(pageStart + 1);
                setPosts([...posts, ...postFiltered]);
            }
            setFetching(false);

        }

    return(
        <InfiniteScroll dataLength={posts.length} next={handleLoad} pageStart={pageStart} hasMore={hasMore}>
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