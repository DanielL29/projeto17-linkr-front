const BASE_URL = process.env.REACT_APP_API_URL

const GET_USER_ENDPOINT = (id) => `${BASE_URL}/users/${id}`
const AUTH_CONFIG = (token) => {
    return {
        headers: {
            "Authorization": `Bearer ${token}`
        }
    }
}

const HASHTAGS_ENDPOINT = `${BASE_URL}/hashtags`

const POSTS_ENDPOINT = `${BASE_URL}/posts`

const LIKES_ENDPOINT = `${BASE_URL}/likes`;

const LIKE_ENDPOINT = `${BASE_URL}/like`;

const DISLIKE_ENDPOINT = (id) => `${BASE_URL}/dislike/${id}`;

const POST_ATT_TIME = 15000;

const UPDATE_TIMELINE_ENDPOINT = `${BASE_URL}/new-posts`;

export { BASE_URL, GET_USER_ENDPOINT, HASHTAGS_ENDPOINT, POSTS_ENDPOINT, AUTH_CONFIG, LIKES_ENDPOINT, LIKE_ENDPOINT, DISLIKE_ENDPOINT, POST_ATT_TIME, UPDATE_TIMELINE_ENDPOINT };
