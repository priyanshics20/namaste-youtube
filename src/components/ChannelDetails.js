import React, { useEffect, useState } from 'react'
import { ChannelImage_API } from '../utils/constants'
import { abbreviateNumber } from 'js-abbreviation-number';

const ChannelDetails = ({ channelId, channelTitle }) => {
    const [details, setDetails] = useState(null);

    useEffect(() => {
        getChannelImage();
    },[])

    const getChannelImage = async() => {
        const data = await fetch(ChannelImage_API + '&id=' + channelId);
        const json = await data.json();
        // console.log(json);
        setDetails(json);
    }
    
    if (details == null) return <></>
    const imageUrl = details?.items[0]?.snippet?.thumbnails?.default?.url || {};
    const SubscriberCount = details?.items[0]?.statistics?.subscriberCount ; 

    return (
        <div className='flex items-center'>
            <img className='w-12 mr-1 rounded-full' src={imageUrl} />
            <div className='ml-1'>
                <p className='font-[600]'>{channelTitle}</p>
                <p className='text-xs'>{abbreviateNumber(SubscriberCount)} subscribers</p>
            </div>  
        </div>
    )
}

export default ChannelDetails