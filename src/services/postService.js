import axios from 'axios'
import { POSTS_ENDPOINT, AUTH_CONFIG, LIKES_ENDPOINT, LIKE_ENDPOINT, DISLIKE_ENDPOINT } from '../constants'
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

async function getLikes() {
    try {
        const response = axios.get(LIKES_ENDPOINT, AUTH_CONFIG);
        return response;
    } catch(err) {
        treatErrors(err);
    }
}

async function likePost(postId) {
    const body = { postId }
    try {
        await axios.post(LIKE_ENDPOINT, body, AUTH_CONFIG);
    } catch(err) {
        treatErrors(err);
    }
}

async function dislikePost(id) {
    try {
        await axios.delete(DISLIKE_ENDPOINT(id), AUTH_CONFIG);
    } catch(err) {
        treatErrors(err);
    }
}

export { createPost, getPosts, getLikes, likePost, dislikePost }