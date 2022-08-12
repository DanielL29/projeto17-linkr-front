import axios from "axios";
import { treatErrors } from "../utils/global";
import { BASE_URL, GET_USER_ENDPOINT } from "./../constants";

async function signup(newUser) {
    const promise = await axios.post(`${BASE_URL}/signup`, newUser);
    return promise;
}

async function signin(user) {
    const promise = await axios.post(`${BASE_URL}/signin`, user);
    return promise;
}

async function getUser(id) {
    try {
        const response = axios.get(GET_USER_ENDPOINT(id))
        
        return response
    } catch (err) {
        treatErrors(err)
    }

}

export { signup, signin, getUser };