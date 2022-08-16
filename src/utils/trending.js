import { getHashtags } from "../services/hashtagService"

async function loadHashtags(setLoading, setHashtags, token) {
    setLoading(true)

    const { data: hashtags } = await getHashtags(token)

    setHashtags(hashtags)

    setTimeout(() => setLoading(false), 1000)
}

export { loadHashtags }