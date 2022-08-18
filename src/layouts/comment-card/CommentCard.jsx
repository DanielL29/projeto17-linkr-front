import { CommentCardWrapper } from "./CommentCardStyle";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

export default function CommentCard({ pictureUrl, description, username, postAuthor, following, loading, userPage }) {
    return (
        <CommentCardWrapper>
            {loading ? <Skeleton baseColor="#444" width={39} height={39} borderRadius="100%" /> : <img src={pictureUrl} alt="user" />}
            <div>
                <div>
                    <h1 onClick={userPage}>{loading ? <Skeleton baseColor="#444" width="100%" height={10} /> : username}</h1>
                    <span>{postAuthor || following ? '•' : ''}</span>
                    <h2>
                        {loading ? 
                            <Skeleton baseColor="#444" width="100%" height={10} /> : 
                            postAuthor ? "post's author" : following ? 'following' : ''
                        }
                    </h2>
                </div>
                <p>{loading ? <Skeleton baseColor="#444" width="100%" height={10} /> : description}</p>
            </div>
        </CommentCardWrapper>
    )
}