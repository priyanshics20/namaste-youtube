import React from 'react'
import { useState, useEffect } from 'react';
import { YOUTUBE_VIDEO_DETAILS_API } from '../utils/constants'
import { abbreviateNumber } from 'js-abbreviation-number';
import { publishedTimeOfVideo } from '../utils/publishedTimeOfVideo';

const RecommendedVideo = ({ data }) => {
    const videoId = data?.contentDetails?.upload?.videoId;
    const [videoDetails, setVideoDetails] = useState(null);

    useEffect(() => {
        fetchVideoDetails();
    }, []);

    const fetchVideoDetails = async () => {
        const data = await fetch(YOUTUBE_VIDEO_DETAILS_API +"&id="+ videoId);
        const json = await data.json();
        // console.log(json?.items[0]);
        setVideoDetails(json?.items[0]);
    }

    // Load Shimmer UI Until it Reloads
    if (videoDetails == null) return <div></div>

    const { channelId, channelTitle, publishedAt, title } = videoDetails?.snippet;
    const { url } = videoDetails?.snippet?.thumbnails?.high;
    const { viewCount } = videoDetails?.statistics;
    
    return (
        <div className='grid grid-cols-12 felx mb-3 ml-1'>
            {/* thumbnail */}
            <div className='mr-2 col-span-5'>
                <img className='h-24 w-80 rounded-lg' alt='thumbnail' src={ url } />
            </div>
            {/* videoDetails */}
            <div className='col-span-7'>
                <p className='line-clamp-2 text-sm font-semibold mt-1'>{title}</p>
                <p className='line-clamp-1 text-sm text-gray-700'>{channelTitle}</p>
                <div className='flex line-clamp-1 text-sm text-gray-500 items-center'>
                    <p className='mr-1'>{abbreviateNumber(viewCount)} views</p>
                    <span className='mx-1 font-bold'>.</span>
                    <p>{publishedTimeOfVideo(publishedAt)}</p>
                </div>
            </div>
        </div>
    )
}

export default RecommendedVideo;