import React, { useEffect, useState } from 'react'
import { YOUTUBE_VIDEOS_API } from '../utils/constants'
import VideoCard from './VideoCard';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setChannelId } from '../utils/channelIdSlice';

const VideoContainer = () => {

  const [videos, setVideos] = useState([]);
  const [scrollDown, setScrollDown] = useState(false);
  const dispatcher = useDispatch();

  useEffect(() => { 
    getVideos();
  }, [scrollDown])

  // Enabling Infinite Scroll by calculating the width
  const handleInfiniteScroll = () => {
    // console.log("scrollTop " + document.documentElement.scrollTop);
    // console.log("OffSetHeight " + document.documentElement.offsetHeight)
    // console.log("scrollHeight " + document.documentElement.scrollHeight);
      if (window.innerHeight + document.documentElement.scrollTop + 1500  >= document.documentElement.offsetHeight) {
        setScrollDown(true);
      }
      return;
  };
  
  useEffect(() => {
    window.addEventListener("scroll", handleInfiniteScroll);
    return () => { window.removeEventListener("scroll", handleInfiniteScroll) }
  }, []);

  const getVideos = async() =>{
    const data = await fetch(YOUTUBE_VIDEOS_API);
    const json = await data.json();
    // console.log(json);
    // console.log(json.items);
    var updatedData=videos.concat(json.items);
    setVideos(updatedData);
    // setVideos(json.items);
    setScrollDown(false);
  }

  return (
    <div className='flex flex-wrap justify-center'>
      {videos.map((video, index )=> (
        <Link to={"/watch?v=" + video?.id} key={video?.id + index}
          // setting up the channelId in redux to access in watch page (for recommendations)
          onClick={() =>  dispatcher(setChannelId(video?.snippet?.channelId)) }
        >
          {/* {console.log(video?.snippet?.channelId)} */}
          <VideoCard  info={video} />
        </Link>
      ))}
      
    </div>
  )
}

export default VideoContainer