import React, { useEffect, useState } from 'react'
import {YOUTUBE_VIDEO_DETAILS_API} from '../utils/constants'
import ChannelDetails from './ChannelDetails';
import { BiDislike, BiLike } from 'react-icons/bi';
import { PiShareFatThin } from "react-icons/pi";
import { FiMoreHorizontal } from "react-icons/fi";
import { abbreviateNumber } from 'js-abbreviation-number';
import { PublishedTimeOfVideo } from '../utils/PublishedTimeOfVideo';
import VideoCommentContainer from './VideoCommentContainer';


/* Title,Description,Channel Details,Comments of Video  in Watch Page of Main Video*/
const WpageVideoDetails = ({ videoId }) => {
    const [videoDetails, setVideoDetails] = useState(null);

    /* Nullish coalescing operator (||): The || operator is used to provide a default value in case the left-hand side (videoDetails?.snippet) is null or undefined. In this case, if videoDetails or videoDetails.snippet is null or undefined, the 
    destructuring assignment will default to an empty object {}. This prevents errors that might occur from trying to destructure properties from an undefined object.*/
    const { channelId, channelTitle, description, title, tags, publishedAt } = videoDetails?.snippet || {}; 
    const {commentCount , likeCount, viewCount } = videoDetails?.statistics || {}; 

    useEffect(() => {
        fetchVideoDetailsData();
    }, [videoId]);

    const fetchVideoDetailsData = async () => {
        const data = await fetch(YOUTUBE_VIDEO_DETAILS_API+ '&id=' + videoId);
        const json = await data.json();
        // console.log(json);
        setVideoDetails(json?.items[0]);
    }

    return videoDetails==null ? <div></div> :(
        <div>
            {/* title */}
            <div className='my-3 font-Roboto text-lg font-[600]'>{title}</div>
            
            {/* channel details and subscribe button and likes and Share button, more button  */}
            <div className='flex items-center my-2 justify-between'>
                {/* channel id, channel Image , channel title , subscibe button  */}
                <div className='flex items-center'>
                    <ChannelDetails channelId={channelId} channelTitle={channelTitle} />
                    <div><button className='mx-6 p-2 px-4 bg-black text-white rounded-full'>Subscribe</button></div>
                </div>  
                {/* Liked and dislikes */}
                <div className='flex items-center max-sm:hidden'>
                    <div className='m-2 flex items-center bg-[#e9e6e6] rounded-full p-2 px-6'>
                        <BiLike className='text-xl mr-1' />
                        <p className='mx-1 text-sm'>{abbreviateNumber(likeCount)}</p>
                        <p className='mx-1 font-light text-gray-500'>|</p>
                        <BiDislike className='text-xl ml-1 '/>
                    </div>
                    {/* share button */}
                    <div className='m-2 flex items-center text-center bg-[#e9e6e6] rounded-full p-2 px-6 justify-between'>
                        <PiShareFatThin className='text-xl mr-1 ' />
                        <p className='font-semibold ml-1'> Share</p>
                    </div>
                    {/* more button */}
                    <div className='ml-2 p-3 bg-[#e9e6e6] rounded-full'>
                        <FiMoreHorizontal/>
                    </div>
                </div>
            </div>

            {/* ViewCount , PublishedDate , tags , description */}
            <div className='bg-[#e9e6e6] p-2 rounded-xl px-4'>
                {/* viewCount, PublishedDate , tags*/}
                <div className='lg:flex '>
                    <p className='flex'><span className='font-semibold mr-2 text-sm'>{abbreviateNumber(viewCount)} views</span></p>

                    <p className='font-semibold lg:ml-2 text-sm'>{PublishedTimeOfVideo(publishedAt)}</p>
                    {/* tags */}
                    {tags!=null && tags.length>0 && 
                    <p className='lg:ml-2 text-blue-800'>{ `#${tags[0]} `}</p>
                    }
                    {tags!=null && tags.length>0 && 
                    <p className='lg:ml-2 text-blue-800'>{ `#${tags[1]} `}</p>
                    }
                    {tags!=null && tags.length>0 && 
                    <p className='lg:ml-2 text-blue-800'>{ `#${tags[2]} `}</p>
                    }
                </div>
                {/* Description */}
                <p className='text-clip'>{description.split('\n')[0]}</p>

                {/* Tags */}
                <div className='lg:flex'>
                    {tags!=null && tags.length>0 && 
                    <p className='lg:ml-2 text-gray-500'>{ `#${tags[0]} `}</p>
                    }
                    {tags!=null && tags.length>0 && 
                    <p className='lg:ml-2 text-gray-500'>{ `#${tags[1]} `}</p>
                    }
                    {tags!=null && tags.length>0 && 
                    <p className='lg:ml-2 text-gray-500'>{ `#${tags[2]} `}</p>
                    }
                </div>
            </div>
            {/* Comment Section */}
            <div>
                <VideoCommentContainer videoId={videoId} commentCount={commentCount} />
            </div>

        </div>
    )
}

export default WpageVideoDetails;