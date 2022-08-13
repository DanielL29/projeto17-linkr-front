import Skeleton from "react-loading-skeleton";
import 'react-loading-skeleton/dist/skeleton.css'
import { useNavigate } from "react-router-dom";
import { ReactTagify } from "react-tagify";
import { BsPencilFill, BsFillTrash2Fill } from "react-icons/bs";

import { PostCardWrapper, UrlMetadataWrapper, HeaderPosts } from "./PostCardStyle";


export default function PostCard({ username, description, url, urlImage, urlDescription, urlTitle, loading, pictureUrl }) {
    const navigate = useNavigate()

    return (
        <PostCardWrapper>
            {loading ? 
                <Skeleton baseColor="#444" style={{ width: '50px', height: '50px', borderRadius: '100%', marginRight: '17px' }} /> : 
                <img src={pictureUrl} alt="user" />
            }
            <div>
                <HeaderPosts><h1>{loading ? <Skeleton baseColor="#444" style={{ width: '100%', height: '20px' }} /> : username}</h1>
                    <div>
                        <BsPencilFill className="icon"/>
                        <BsFillTrash2Fill className="icon"/>
                    </div>
                </HeaderPosts>
                {loading ?
                    <Skeleton baseColor="#444" style={{ width: '100%', height: '20px' }} /> : (
                    <ReactTagify
                        tagStyle={{ cursor: 'pointer', fontWeight: 'bold', color: '#fff' }}
                        tagClicked={(tag) => navigate(`/hashtag/${tag.replace('#', '')}`)}
                    >
                        <p>{description}</p>
                    </ReactTagify>
                )}
                <UrlMetadataWrapper onClick={() => window.open(url, '_blank')}>
                    <div>
                        <h2>{loading ? <Skeleton baseColor="#444" style={{ width: '100%', height: '20px' }} /> : urlTitle}</h2>
                        <h3>{loading ? <Skeleton baseColor="#444" style={{ width: '100%', height: '20px' }} /> : urlDescription}</h3>
                        <h4>{loading ? <Skeleton baseColor="#444" style={{ width: '100%', height: '20px' }} /> : url}</h4>
                    </div>
                    {loading ? <Skeleton baseColor="#444" style={{ width: '140px', height: '100%' }} /> : <img src={urlImage} alt="url" />}
                </UrlMetadataWrapper>
            </div>
        </PostCardWrapper>
    )
}