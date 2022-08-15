import { getHashtags } from "./../services/hashtagService"
import { createPost, getPosts, getLikes } from "./../services/postService"

async function loadPosts(setLoading, setPosts, hashtag, username) {
    setLoading(true)

    const { data: posts } = await getPosts(hashtag, username)
    
    setPosts(posts)
    
    setTimeout(() => setLoading(false), 1000)
}

async function loadLikes(setUserLikes, setLikes) {
    const { data } = await getLikes();
    setUserLikes(data.likes);
    setLikes(data.allLikes);
}

async function publishPost(e, setPublishing, post, setPost, setPosts, setHashtags) {
    e.preventDefault()

    setPublishing(true)

    if (post.description !== '') {
        await createPost(post)
    } else {
        await createPost({ url: post.url })
    }

    const { data: posts } = await getPosts()
    const { data: hashtags } = await getHashtags()

    setPost({ url: '', description: '' })
    setPosts(posts)
    setHashtags(hashtags)

    setTimeout(() => { setPublishing(false) }, 1000)
}

export { loadPosts, publishPost, loadLikes }