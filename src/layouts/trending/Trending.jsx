import { getHashtags } from '../../services/hashtagService'
import { TrendingWrapper } from './TrendingStyle'
import { useNavigate } from 'react-router-dom';
import { useContext, useEffect, useState } from 'react';
import HashtagContext from '../../contexts/HashtagContext';
import Skeleton from "react-loading-skeleton";
import 'react-loading-skeleton/dist/skeleton.css'

export default function Trending() {
    const [loading, setLoading] = useState(false)
    const navigate = useNavigate()
    const { hashtags, setHashtags } = useContext(HashtagContext)

    useEffect(() => {
        loadHashtags()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    function loadHashtags() {
        setLoading(true)

        getHashtags(setHashtags)

        setTimeout(() => setLoading(false), 1000)
    }

    function renderSkeletonLoading() {
        let skeleton = new Array(9).fill(9)

        return skeleton.map((_, i) => 
            <Skeleton key={i} baseColor="#444" style={{ width: '90%', marginLeft: '16px', height: '20px', marginBottom: '15px' }} />
        )
    }

    return (
        <TrendingWrapper>
            <div>
                <h1>trending</h1>
                <div className="line"></div>
                <div className="hashtags">
                    {loading ? (
                        <>
                            {renderSkeletonLoading()}
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