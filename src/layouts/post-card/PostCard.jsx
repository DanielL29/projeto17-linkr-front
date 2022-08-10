import { PostCardWrapper, UrlMetadataWrapper } from "./PostCardStyle";


export default function PostCard({ username, description, url, urlImage, urlDescription, urlTitle }) {
    return (
        <PostCardWrapper>
            <img src="https://http.cat/422.jpg" alt="user" />
            <div>
                <h1>{username}</h1>
                <p>{description}</p>
                <UrlMetadataWrapper onClick={() => window.open(url, '_blank')}>
                    <div>
                        <h2>{urlTitle}</h2>
                        <h3>{urlDescription}</h3>
                        <h4>{url}</h4>
                    </div>
                    <img src={urlImage} alt="url" />
                </UrlMetadataWrapper>
            </div>
        </PostCardWrapper>
    )
}