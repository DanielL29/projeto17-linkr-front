import axios from "axios";
import { treatErrors } from "../utils/global";
import { BASE_URL, GET_USER_ENDPOINT } from "./../constants";

async function signup(newUser) {
    try {
        await axios.post(`${BASE_URL}/signup`, newUser);
    } catch(err) {
        treatErrors(err);
    }
}

async function getUser(id) {
    try {
        const response = axios.get(GET_USER_ENDPOINT(id))
        
        return response
    } catch (err) {
        treatErrors(err)
    }

}

export { signup, getUser };