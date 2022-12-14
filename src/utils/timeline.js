import { getComments, postComment } from "../services/commentService"
import { createRepost } from "../services/repostService"
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

async function loadComments(postId, setLoading, setComments, token) {
    setLoading(true)

    const { data: comments } = await getComments(token, postId)

    setComments(comments)

    setTimeout(() => setLoading(false), 1000)
}

async function publishPost(e, setPublishing, post, setPost, setPosts, setHashtags, setHasMore, token) {
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
    setHasMore(true)

    setTimeout(() => { setPublishing(false) }, 1000)
}

async function publishComment(setComment, comment, setComments, postId, token) {
    if(comment === "") return

    await postComment(token, comment, postId)

    const { data: comments } = await getComments(token, postId)

    setComment('')
    setComments(comments)
}

async function repostPost(setLoading, setShowModal, setPosts, postId, hashtag, username, token) {
    setLoading(true)

    await createRepost(token, postId)

    setLoading(false)
    setShowModal(false)

    const { data: posts } = await getPosts(token, hashtag, username)

    setPosts(posts)
}

export { loadPosts, publishPost, loadLikes, loadComments, publishComment, repostPost }