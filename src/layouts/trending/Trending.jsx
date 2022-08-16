import { TrendingWrapper } from './TrendingStyle'
import { useNavigate } from 'react-router-dom';
import { useContext, useEffect, useState } from 'react';
import HashtagContext from '../../contexts/HashtagContext';
import Skeleton from "react-loading-skeleton";
import 'react-loading-skeleton/dist/skeleton.css'
import { loadHashtags } from '../../utils/trending';
import UserContext from '../../contexts/UserContext';

export default function Trending() {
    const [loading, setLoading] = useState(false)
    const navigate = useNavigate()
    const { hashtags, setHashtags } = useContext(HashtagContext)
    const { currentUser } = useContext(UserContext)
    let skeleton = new Array(9).fill(9)

    useEffect(() => {
        loadHashtags(setLoading, setHashtags, currentUser.token)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <TrendingWrapper>
            <div>
                <h1>trending</h1>
                <div className="line"></div>
                <div className="hashtags">
                    {loading ? (
                        <>
                            {skeleton.map((_, i) => 
                                <Skeleton key={i} baseColor="#444" style={{ width: '90%', marginLeft: '16px', height: '20px', marginBottom: '15px' }} />
                            )} 
                        </>
                    ) : (
                        hashtags.length > 0 ?
                            hashtags.map(hashtag =>
                                <p key={hashtag.id} onClick={() => navigate(`/hashtag/${hashtag.name}`)}># {hashtag.name}</p>
                            )
                        : <p>There are no hashtags yet</p>
                    )}
                </div>
            </div>
        </TrendingWrapper>
    )
}