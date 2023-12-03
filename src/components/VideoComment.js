import React from 'react'
import { AiOutlineLike, AiOutlineDislike } from 'react-icons/ai';
import { FiMoreVertical } from 'react-icons/fi';
import {abbreviateNumber} from 'js-abbreviation-number';

const VideoComment = ({ data }) => {
    
    data = data?.snippet?.topLevelComment?.snippet;

    const { authorDisplayName, authorProfileImageUrl, likeCount, textDisplay, publishedAt } = data;
   
    return (
        <div className='flex mb-2'>
            {/* userImage */}
            <img className='w-10 h-12 mr-4 py-1 rounded-full' alt='user' src={authorProfileImageUrl} />
            {/* Comment , userName , like */}
            <div className=' w-full'>
                <div className='flex'>
                    <p className='mr-2 text-base font-semibold'>@{authorDisplayName.split(" ").join("")}</p>
                    <p className=''>{publishedAt.split("T")[0]}</p>
                </div>
                {/* Comment Text */}
                
                <p className=''>{textDisplay}</p>

                {/* Like Bar */}
                <div className='flex my-1 items-center'>
                    <AiOutlineLike className='text-xl'/>
                    <p className='text-center mx-2'>{abbreviateNumber(likeCount)}</p>
                    <AiOutlineDislike className='text-xl'/>
                </div>
            </div>

            {/* More */}
            <div className='mr-3 mt-3 text-xl flex justify-end w-full'>
            <FiMoreVertical/>
            </div>
                        
        </div>
    )
}

export default VideoComment;