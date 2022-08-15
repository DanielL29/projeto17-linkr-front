import { useContext, useState } from "react"
import { USER_PICTURE } from "../../constants"
import HashtagContext from "../../contexts/HashtagContext"
import { publishPost } from "../../utils/timeline"
import { PublishCardWrapper } from "./HomeStyle"

export default function PublishCard({ setPosts }) {
    const [post, setPost] = useState({ url: "", description: "" })
    const [publishing, setPublishing] = useState(false)
    const { setHashtags } = useContext(HashtagContext)

    return (
        <PublishCardWrapper>
            <img src={USER_PICTURE} alt="user" />
            <form onSubmit={(e) => publishPost(e, setPublishing, post, setPost, setPosts, setHashtags)}>
                <h1>What are you going to share today?</h1>
                <input type="text" name="url" value={post.url}
                    placeholder="http://..."
                    onChange={e => setPost({ ...post, [e.target.name]: e.target.value })}
                    required
                    disabled={publishing} />
                <textarea name="description" value={post.description}
                    placeholder="Awesome article about #javascript"
                    onChange={e => setPost({ ...post, [e.target.name]: e.target.value })}
                    disabled={publishing} />
                <button type="submit" disabled={publishing}>{publishing ? 'Publishing...' : 'Publish'}</button>
            </form>
        </PublishCardWrapper>
    )
}