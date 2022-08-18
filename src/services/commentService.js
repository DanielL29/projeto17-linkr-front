import axios from "axios"
import { GET_COMMENTS_ENDPOINT, AUTH_CONFIG, POST_COMMENTS_ENDPOINT } from "../constants"
import { treatErrors } from "../utils/global"

async function getComments(token, postId) {
    try {
        const response = axios.get(GET_COMMENTS_ENDPOINT(postId), AUTH_CONFIG(token))

        return response
    } catch (err) {
        treatErrors(err)
    }
}

async function postComment(token, comment, postId) {
    try {
        await axios.post(POST_COMMENTS_ENDPOINT(postId), { description: comment }, AUTH_CONFIG(token))
    } catch (err) {
        treatErrors(err)
    }
}

export { getComments, postComment }