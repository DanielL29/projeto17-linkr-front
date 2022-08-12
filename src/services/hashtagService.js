import axios from "axios";
import { HASHTAGS_ENDPOINT } from "../constants";
import { treatErrors } from "../utils/global";

async function getHashtags() {
    try {
        const response = axios.get(HASHTAGS_ENDPOINT)
        
        return response
    } catch (err) {
        treatErrors(err)
    }
}

export { getHashtags }