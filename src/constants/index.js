const BASE_URL = process.env.REACT_APP_API_URL

// auth/user
const userLocal = JSON.parse(localStorage.getItem('userLocal'))
const GET_USER_ENDPOINT = (id) => `${BASE_URL}/users/${id}`
const USER_PICTURE = userLocal.pictureUrl
const AUTH_CONFIG = {
    headers: {
        "Authorization": `Bearer ${userLocal.token}`
    }
}

// hashtags
const HASHTAGS_ENDPOINT = `${BASE_URL}/hashtags`

// posts
const POSTS_ENDPOINT = `${BASE_URL}/posts`

export { BASE_URL, GET_USER_ENDPOINT, HASHTAGS_ENDPOINT, POSTS_ENDPOINT, AUTH_CONFIG, USER_PICTURE }