import { PostCardWrapper } from "./TimelineStyle";

export default function PostCard({ username, description, url }) {
    return (
        <PostCardWrapper>
            <img src="https://http.cat/422.jpg" alt="user" />
            <div>
                <h1>User</h1>
                <p>description</p>
                <h2>url</h2>
            </div>
        </PostCardWrapper>
    )
}