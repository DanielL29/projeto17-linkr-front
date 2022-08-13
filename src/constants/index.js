const BASE_URL = process.env.REACT_APP_API_URL

// auth/user
const GET_USER_ENDPOINT = (id) => `${BASE_URL}/users/${id}`
const AUTH_CONFIG = {
    headers: {
        "Authorization": JSON.parse(localStorage.getItem('token'))
    }
}

// hashtags
const HASHTAGS_ENDPOINT = `${BASE_URL}/hashtags`

// posts
const POSTS_ENDPOINT = `${BASE_URL}/posts`

export { BASE_URL, GET_USER_ENDPOINT, HASHTAGS_ENDPOINT, POSTS_ENDPOINT, AUTH_CONFIG }