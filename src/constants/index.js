const BASE_URL = process.env.REACT_APP_API_URL

const AUTH_CONFIG = (token) => {
    return {
        headers: {
            "Authorization": `Bearer ${token}`
        }
    }
}

const GET_USER_ENDPOINT = (id) => `${BASE_URL}/users/${id}`

const HASHTAGS_ENDPOINT = `${BASE_URL}/hashtags`

const POSTS_ENDPOINT = `${BASE_URL}/posts`

const LIKES_ENDPOINT = `${BASE_URL}/likes`;

const LIKE_ENDPOINT = `${BASE_URL}/like`;

const GET_COMMENTS_ENDPOINT = (postId) => `${BASE_URL}/comments/${postId}`

const POST_COMMENTS_ENDPOINT = (postId) => `${BASE_URL}/comments/${postId}/publish`

const REPOST_ENDPOINT = (postId) => `${BASE_URL}/reposts/${postId}/share`

const DISLIKE_ENDPOINT = (id) => `${BASE_URL}/dislike/${id}`;

const POST_ATT_TIME = 15000;

const UPDATE_TIMELINE_ENDPOINT = (postId) => `${BASE_URL}/new-posts/${postId}`;

const GET_FOLLOWER_ENDPOINT = (userId) => `${BASE_URL}/followers/${userId}`

const FOLLOW_ENDPOINT = (userId) => `${BASE_URL}/followers/${userId}/follow`

const UNFOLLOW_ENDPOINT = (userId) => `${BASE_URL}/followers/${userId}/unfollow`

export { 
    BASE_URL, 
    GET_USER_ENDPOINT, 
    HASHTAGS_ENDPOINT, 
    POSTS_ENDPOINT, 
    AUTH_CONFIG, 
    LIKES_ENDPOINT, 
    LIKE_ENDPOINT, 
    DISLIKE_ENDPOINT, 
    GET_COMMENTS_ENDPOINT, 
    POST_COMMENTS_ENDPOINT,
    REPOST_ENDPOINT,
    GET_FOLLOWER_ENDPOINT,
    FOLLOW_ENDPOINT,
    UNFOLLOW_ENDPOINT,
    POST_ATT_TIME,
    UPDATE_TIMELINE_ENDPOINT
};