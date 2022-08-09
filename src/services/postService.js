import axios from 'axios'
import { BASE_URL } from '../constants'
import { treatErrors } from '../utils/global'

async function createPost(post, setPost) {
    console.log(post)
    try {
        await axios.post(`${BASE_URL}/posts`, post)

        setPost({ url: '', description: '' })
    } catch (err) {
        treatErrors(err)
    }
}

export { createPost }