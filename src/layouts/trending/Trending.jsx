import { useEffect } from 'react'
import { useState } from 'react'
import { getHashtags } from '../../services/hashtagService'
import { TrendingWrapper } from './TrendingStyle'
import { useNavigate } from 'react-router-dom';

export default function Trending() {
    const [hashtags, setHashtags] = useState([])
    const [loading, setLoading] = useState(false)
    const navigate = useNavigate()

    useEffect(() => {
        loadHashtags()
    }, [])

    function loadHashtags() {
        setLoading(true)

        getHashtags(setHashtags)

        setLoading(false)
    }

    return (
        <TrendingWrapper>
            <div>
                <h1>trending</h1>
                <div className="line"></div>
                <div className="hashtags">
                    {loading ?
                        <p>Loading...</p> :
                        hashtags.length > 0 ?
                            hashtags.map(hashtag =>
                                <p key={hashtag.id} onClick={() => navigate(`/hashtag/${hashtag.name}`, { state: { id: hashtag.id } })}># {hashtag.name}</p>
                            )
                            : <p>There are no hashtags yet</p>
                    }
                </div>
            </div>
        </TrendingWrapper>
    )
}