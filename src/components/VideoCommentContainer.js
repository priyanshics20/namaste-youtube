import React from 'react'
import { useEffect, useState } from 'react'
import { Comments_Thread_API } from '../utils/constants';
import VideoComment from './VideoComment';

const VideoCommentContainer = ({ videoId, commentCount }) => {
    const [commentList, setCommentList] = useState(null);
    
    // Called when Video Id is Chang(Helps while landing to Same page with Different Video Id-> Clicking on Recomendations)
    useEffect(() => {
        fetchComments();
    },[videoId]);

    const fetchComments = async () => { 
        const data = await fetch(Comments_Thread_API+videoId);
        const json = await data.json();
        // console.log(json.items);
        setCommentList(json.items)
    }

    return commentList==null ? <div>Loading...</div> :(
        <div>
            <p className='my-4 font-bold text-xl'>{commentCount} Comments</p>
            {
                commentList.map((comment, index) => <VideoComment key={index} data={comment} />)
            }
        </div>
    )
}

export default VideoCommentContainer;