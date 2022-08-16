import { getHashtags } from "./../services/hashtagService"
import { createPost, getPosts, getLikes } from "./../services/postService"

async function loadPosts(setLoading, setPosts, hashtag, username, token) {
    setLoading(true)

    const { data: posts } = await getPosts(token, hashtag, username)
    
    setPosts(posts)
    
    setTimeout(() => setLoading(false), 1000)
}

async function loadLikes(setUserLikes, token) {
    const { data } = await getLikes(token);
    setUserLikes(data.likes);
}

async function publishPost(e, setPublishing, post, setPost, setPosts, setHashtags, token) {
    e.preventDefault()

    setPublishing(true)

    if (post.description !== '') {
        await createPost(post, token)
    } else {
        await createPost({ url: post.url }, token)
    }

    const { data: posts } = await getPosts(token)
    const { data: hashtags } = await getHashtags(token)

    setPost({ url: '', description: '' })
    setPosts(posts)
    setHashtags(hashtags)

    setTimeout(() => { setPublishing(false) }, 1000)
}

export { loadPosts, publishPost, loadLikes }