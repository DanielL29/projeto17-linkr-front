import axios from 'axios'
import { BASE_URL } from '../constants'
import { treatErrors, callToast } from '../utils/global'

async function createPost(post, setPost, setPosts) {
    try {
        await axios.post(`${BASE_URL}/posts`, post)

        setPost({ url: '', description: '' })
        await getPosts(setPosts)
    } catch (err) {
        callToast('Houve um erro ao publicar seu link', 'error')
        treatErrors(err)
    }
}

async function getPosts(setPosts) {
    try {
        const { data: posts } = await axios.get(`${BASE_URL}/posts`)

        setPosts(posts)
    } catch (err) {
        treatErrors(err)
    }
}

export { createPost, getPosts }