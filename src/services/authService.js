import axios from "axios";
import { BASE_URL } from "../constants";
import { treatErrors } from "../utils/global";

async function signup(newUser) {
    try {
        const res = await axios.post(`${BASE_URL}/signup`, newUser);
        return res;
    } catch(err) {
        treatErrors(err);
    }
}

export { signup };