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

export { getHashtags }