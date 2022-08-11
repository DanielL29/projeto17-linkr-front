import axios from 'axios'
import { BASE_URL } from '../constants'
import { treatErrors, callToast } from '../utils/global'
import { getHashtags } from './hashtagService'

async function createPost(post, setPost, setPosts, setHashtags) {
    try {
        await axios.post(`${BASE_URL}/posts`, post)

        setPost({ url: '', description: '' })
        await getPosts(setPosts)
        await getHashtags(setHashtags)
    } catch (err) {
        callToast('Houve um erro ao publicar seu link', 'error')
        console.log(err)
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