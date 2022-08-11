import axios from "axios";
import { treatErrors } from "../utils/global";
import { BASE_URL } from "./../constants";

async function signup(newUser) {
    try {
        await axios.post(`${BASE_URL}/signup`, newUser);
    } catch(err) {
        treatErrors(err);
    }
}

export { signup };