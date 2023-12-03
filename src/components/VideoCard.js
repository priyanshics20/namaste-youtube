import { useEffect, useState } from "react";
import { abbreviateNumber } from "js-abbreviation-number";
import { ChannelImage_API } from "../utils/constants";

const VideoCard = ({ info }) => {
    const [channelImage,setChannelImage]=useState("");
    // console.log(info);
    const { snippet , statistics } = info;
    const { channelTitle, channelId ,title, thumbnails } = snippet;
    // console.log(snippet);
    
    useEffect(() => {
        getChannelImage();
    }, []);

    const getChannelImage = async () => {
        const data = await fetch(ChannelImage_API + '&id=' + channelId);
        const json=await data.json();
        const url = json?.items[0]?.snippet?.thumbnails?.high?.url;
        setChannelImage(url);
    }

    return (
        <div>
            <div className="m-2 p-2 w-80">
                <img className="w-96  rounded-lg hover:rounded-none" alt="video" src={ thumbnails?.medium?.url} />
                
                <div className='flex flex-row items-center'>
                    <img className='w-10 h-10 mr-1 rounded-full' src={channelImage}/>
                    <p className='font-semibold line-clamp-2 text-base font-sans'>{title}</p>
                </div>
                
                {/* Channel Name And Views Count */}
                <div className='text-sm pl-11'>
                    <p className=" font-sans my-[0.15rem]">{channelTitle} </p>
                    <p className="">{abbreviateNumber(statistics?.viewCount)}views</p>
                </div>
            
            </div>
        </div>
    )
}

export default VideoCard;