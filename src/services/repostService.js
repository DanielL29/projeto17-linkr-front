import axios from "axios";
import { AUTH_CONFIG, REPOST_ENDPOINT } from "../constants";
import { treatErrors } from "../utils/global";

async function createRepost(token, postId) {
    try {
        await axios.post(REPOST_ENDPOINT(postId), {}, AUTH_CONFIG(token))
    } catch (err) {
        treatErrors(err)
    }
}

export { createRepost }