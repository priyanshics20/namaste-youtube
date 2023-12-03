import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { closeMenu } from '../utils/appSlice';
import { useSearchParams } from 'react-router-dom';
import LiveChat from './LiveChat';
import WpageVideoDetails from './WpageVideoDetails';
import Recommendation from './Recommendation';

// watchpage -> opens when clicked on video shown in home page 
const WatchPage = () => {
  const [searchParams] = useSearchParams();
  const videoId = searchParams.get('v');
  const [showChat , setShowChat] = useState(false);
    // console.log(searchParams.get("v"));

    // close menu(SideBar) when watch page is open
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(closeMenu());
    }, []);
  
  return (
      <div className='p-2 w-full pl-10 grid grid-cols-12'>
        <div className='flex flex-col col-span-12 md:col-span-8 overflow-x-hidden mr-2'>
          {/* video  */}
          <div>
            <iframe
                  className='rounded-xl'
                  width="100%"
                  height="450"
                  src={"https://www.youtube.com/embed/" + videoId }
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen>
            </iframe>
          </div>
          {/* Video Details - channel , likes , views , title , description */}
          <WpageVideoDetails videoId={videoId} />
        </div>
      
        {/* live chat */}
        {
          <div className='col-span-4 p-1 hidden md:block'>
              <div className='w-full'>
                {showChat && <LiveChat />}
                <div className='w-full flex justify-center rounded-3xl '>
                    <button data-testid="show-chat"
                      onClick={() => setShowChat(!showChat)}
                      className='w-full py-2 border rounded-3xl my-2 hover:bg-gray-200 '>
                      {showChat ? "Hide chat" : "Show chat"}
                    </button>
                </div>
              </div>
            <Recommendation/>
          </div>
        }
      </div>
  )
}

export default WatchPage;