import axios from 'axios'
import { POSTS_ENDPOINT, AUTH_CONFIG } from '../constants'
import { callToast, treatErrors } from '../utils/global'

async function createPost(post) {
    try {
        await axios.post(POSTS_ENDPOINT, post, AUTH_CONFIG)
    } catch (err) {
        callToast('Houve um erro ao publicar seu link', 'error')
        treatErrors(err)
    }
}

async function getPosts(hashtag, username) {
    try {
        const response = axios.get(POSTS_ENDPOINT, {
            params: { hashtag, username }, 
            headers: AUTH_CONFIG.headers 
        })

        return response
    } catch (err) {
        treatErrors(err)
    }
}

export { createPost, getPosts }