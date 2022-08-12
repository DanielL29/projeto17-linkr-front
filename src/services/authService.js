import axios from "axios";
import { BASE_URL } from "./../constants";

async function signup(newUser) {
    const promise = await axios.post(`${BASE_URL}/signup`, newUser);
    return promise;
}

async function signin(user) {
    const promise = await axios.post(`${BASE_URL}/signin`, user);
    return promise;
}

export { signup, signin };