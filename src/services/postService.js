import axios from 'axios'
import { POSTS_ENDPOINT, AUTH_CONFIG, LIKES_ENDPOINT, LIKE_ENDPOINT, DISLIKE_ENDPOINT, UPDATE_TIMELINE_ENDPOINT } from '../constants'
import { callToast, treatErrors } from '../utils/global'

async function createPost(post, token) {
    try {
        await axios.post(POSTS_ENDPOINT, post, AUTH_CONFIG(token))
    } catch (err) {
        callToast('Houve um erro ao publicar seu link', 'error')
        treatErrors(err)
    }
}

async function getPosts(token, hashtag, username) {
    try {
        const response = axios.get(POSTS_ENDPOINT, {
            params: { hashtag, username }, 
            headers: AUTH_CONFIG(token).headers 
        })

        return response
    } catch (err) {
        treatErrors(err)
    }
}

async function getLikes(token) {
    try {
        const response = axios.get(LIKES_ENDPOINT, AUTH_CONFIG(token));
        return response;
    } catch(err) {
        treatErrors(err);
    }
}

async function likePost(postId, token) {
    const body = { postId }
    try {
        await axios.post(LIKE_ENDPOINT, body, AUTH_CONFIG(token));
    } catch(err) {
        treatErrors(err);
    }
}

async function dislikePost(id, token) {
    try {
        await axios.delete(DISLIKE_ENDPOINT(id), AUTH_CONFIG(token));
    } catch(err) {
        treatErrors(err);
    }
}

async function getNewPostsQuantity(token) {
    try {
        const response = axios.get(UPDATE_TIMELINE_ENDPOINT, AUTH_CONFIG(token));
        return response;
    } catch(err) {
        treatErrors(err);
    }
}

export { createPost, getPosts, getLikes, likePost, dislikePost, getNewPostsQuantity }