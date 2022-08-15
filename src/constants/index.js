const BASE_URL = process.env.REACT_APP_API_URL

const GET_USER_ENDPOINT = (id) => `${BASE_URL}/users/${id}`
const AUTH_CONFIG = {
    headers: {
        "Authorization": `Bearer ${localStorage.getItem("token");}`
    }
}

const HASHTAGS_ENDPOINT = `${BASE_URL}/hashtags`

const POSTS_ENDPOINT = `${BASE_URL}/posts`

const LIKES_ENDPOINT = `${BASE_URL}/likes`;

const LIKE_ENDPOINT = `${BASE_URL}/like`;

const DISLIKE_ENDPOINT = (id) => `${BASE_URL}/dislike/${id}`;

export { BASE_URL, GET_USER_ENDPOINT, HASHTAGS_ENDPOINT, POSTS_ENDPOINT, AUTH_CONFIG, LIKES_ENDPOINT, LIKE_ENDPOINT, DISLIKE_ENDPOINT };
