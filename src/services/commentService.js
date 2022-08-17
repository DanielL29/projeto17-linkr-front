import axios from "axios"
import { GET_COMMENTS_ENDPOINT, AUTH_CONFIG } from "../constants"
import { treatErrors } from "../utils/global"

async function getComments(token, postId) {
    try {
        const response = axios.get(GET_COMMENTS_ENDPOINT(postId), AUTH_CONFIG(token))

        return response
    } catch (err) {
        treatErrors(err)
    }
}

export { getComments }