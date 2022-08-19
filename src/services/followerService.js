import axios from "axios"
import { AUTH_CONFIG, FOLLOW_ENDPOINT, GET_FOLLOWER_ENDPOINT, UNFOLLOW_ENDPOINT } from "../constants"
import { treatErrors } from "../utils/global"

async function getUserFollow(userId, token) {
    try {
        const response = axios.get(GET_FOLLOWER_ENDPOINT(userId), AUTH_CONFIG(token))

        return response
    } catch (err) {
        treatErrors(err)
    }
}

async function follow(userId, token) {
    try {
        const response = await axios.post(FOLLOW_ENDPOINT(userId), {}, AUTH_CONFIG(token))
        console.log(response)

        return response
    } catch (err) {
        treatErrors(err)
    }
}

async function unfollow(userId, token) {
    try {
        const response = await axios.post(UNFOLLOW_ENDPOINT(userId), {}, AUTH_CONFIG(token))
        console.log(response)

        return response
    } catch (err) {
        treatErrors(err)
    }
}

export { getUserFollow, follow, unfollow }