import React, { useEffect , useState } from 'react'
import { ChannelImage_API } from '../utils/constants'
import { publishedTimeOfVideo } from '../utils/publishedTimeOfVideo';
import SearchShimmer from './SearchShimmer';

const SearchCards = ({ data }) => {
    const [details, setDetails] = useState(null);

    useEffect(() => {
        getChannelImage();
    }, []);
    
    const getChannelImage = async () => {
        const api_data = await fetch(ChannelImage_API + '&id=' + data?.channelId);
        const json = await api_data.json();
        setDetails(json);
    }

    if(details==null) return <SearchShimmer/>

    const imgUrl=details?.items[0].snippet?.thumbnails?.high?.url || {};

    return (
        <div className='flex max-sm:flex-col flex-row bg-gray-50 py-2 max-sm:px-10 max-sm:pb-10'>
            {/* thumbnail */}
            <img className='flex justify-center rounded-lg h-40 max-sm:w-full' src={data?.thumbnails?.medium?.url} />
            {/* videoDetails */}
            <div className='px-2 w-full flex flex-col'>
                <span className='font-semibold text-lg'>{data?.title}</span>
                <p className='text-sm text-slate-600 mb-2 '>{publishedTimeOfVideo(data?.publishedAt)}</p>
                <div className='flex items-center'>
                    <img className="w-8 my-2 rounded-full" src={imgUrl}></img>
                    <span className='flex items-center px-2 text-slate-700 text-sm'>{data?.channelTitle}</span>
                </div>
                {/* Video Description */}
                <span className='text-sm text-slate-700'>{data?.description}</span>
            </div>
        </div>
    )
}

export default SearchCards