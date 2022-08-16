import axios from "axios";
import { HASHTAGS_ENDPOINT, AUTH_CONFIG } from "../constants";
import { treatErrors } from "../utils/global";

async function getHashtags(token) {
    try {
        const response = axios.get(HASHTAGS_ENDPOINT, AUTH_CONFIG(token))
        
        return response
    } catch (err) {
        treatErrors(err)
    }
}

export { getHashtags }