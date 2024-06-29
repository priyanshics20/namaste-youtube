import React, { useEffect , useState } from 'react'
import ShimmerRecommendatioUI from './ShimmerRecommendatioUI'
import { useSelector } from 'react-redux'
import { Recommendations_API } from '../utils/constants'
import RecommendedVideo from './RecommendedVideo'
import { Link } from 'react-router-dom'

// Recommendations that appear in watch page
const Recommendation = () => {
    const channelId = useSelector((store) => store.channelId.channelId);
    // console.log(channelId)
    // recommendation video list 
    const [recVideoList, setRecVideoList] = useState(null);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        const data = await fetch(Recommendations_API + channelId);
        const json = await data.json();
        setRecVideoList(json?.items);
        // console.log(json?.items);
    }

    return recVideoList == null ? <div>
            <ShimmerRecommendatioUI />
            <ShimmerRecommendatioUI />
            <ShimmerRecommendatioUI />
            <ShimmerRecommendatioUI />
            <ShimmerRecommendatioUI />
            <ShimmerRecommendatioUI />
            <ShimmerRecommendatioUI />
            <ShimmerRecommendatioUI />
            <ShimmerRecommendatioUI />
            <ShimmerRecommendatioUI />
        </div> : (
            <div className='hover:bg-gray-950'>
                {/* recommended video list */ }
                {
                    recVideoList.map((recvideo, index) => <Link to={"/watch?v="+recvideo?.contentDetails?.upload?.videoId} key={index}> <RecommendedVideo data={recvideo}/> </Link>)
                }
        </div>
    )
}

export default Recommendation