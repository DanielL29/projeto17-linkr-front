import { useContext, useState } from "react"
import HashtagContext from "../../contexts/HashtagContext"
import HasMoreContext from "../../contexts/HasMoreContext"
import UserContext from "../../contexts/UserContext"
import { publishPost } from "../../utils/timeline"
import { PublishCardWrapper } from "./HomeStyle"

export default function PublishCard({ setPosts }) {
    const [post, setPost] = useState({ url: "", description: "" })
    const [publishing, setPublishing] = useState(false)
    const { setHashtags } = useContext(HashtagContext)
    const { currentUser } = useContext(UserContext)
    const { setHasMore } = useContext(HasMoreContext)

    return (
        <PublishCardWrapper>
            <img src={currentUser.pictureUrl} alt="user" />
            <form onSubmit={(e) => publishPost(e, setPublishing, post, setPost, setPosts, setHashtags, setHasMore, currentUser.token)}>
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