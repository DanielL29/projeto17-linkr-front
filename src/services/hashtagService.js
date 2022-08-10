import axios from "axios";
import { BASE_URL } from "../constants";
import { treatErrors } from "../utils/global";

async function getHashtags(setHashtags) {
    try {
        const { data: hashtags } = await axios.get(`${BASE_URL}/hashtags`)

        setHashtags(hashtags)
    } catch (err) {
        treatErrors(err)
    }
}

async function getHashtagPosts(hashtag, setPosts) {
    try {
        const { data: hashtagPosts } = await axios.get(`${BASE_URL}/hashtags/${hashtag}`)

        setPosts(hashtagPosts)
    } catch (err) {
        treatErrors(err)
    }
}

export { getHashtags, getHashtagPosts }