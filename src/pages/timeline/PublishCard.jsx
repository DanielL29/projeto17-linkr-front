import { useState } from "react"
import { createPost } from "../../services/postService"
import { PublishCardWrapper } from "./TimelineStyle"

export default function PublishCard() {
    const [post, setPost] = useState({ url: "", description: "" })
    const [publishing, setPublishing] = useState(false)
    console.log(publishing)

    async function publishPost(e) {
        e.preventDefault()

        setPublishing(true)

        if(post.description !== '') {
            await createPost(post, setPost)
        } else {
            await createPost({ url: post.url }, setPost)
        }

        setPublishing(false)
    }

    return (
        <PublishCardWrapper>
            <img src="https://http.cat/422.jpg" alt="user" />
            <form onSubmit={publishPost}>
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