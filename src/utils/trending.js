import { getHashtags } from "../services/hashtagService"

async function loadHashtags(setLoading, setHashtags) {
    setLoading(true)

    const { data: hashtags } = await getHashtags()

    setHashtags(hashtags)

    setTimeout(() => setLoading(false), 1000)
}

export { loadHashtags }