import { useContext, useState } from "react"
import HashtagContext from "../../contexts/HashtagContext"
import { createPost } from "../../services/postService"
import { PublishCardWrapper } from "./HomeStyle"

export default function PublishCard({ setPosts }) {
    const [post, setPost] = useState({ url: "", description: "" })
    const [publishing, setPublishing] = useState(false)
    const { setHashtags } = useContext(HashtagContext)

    function publishPost(e) {
        e.preventDefault()

        setPublishing(true)

        if (post.description !== '') {
            createPost(post, setPost, setPosts, setHashtags)
        } else {
            createPost({ url: post.url }, setPost, setPosts, setHashtags)
        }

        setTimeout(() => { setPublishing(false) }, 1000)
    }

    return (
        <PublishCardWrapper>
            <img src="https://http.cat/422.jpg" alt="user" />
            <form onSubmit={(e) => publishPost(e)}>
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