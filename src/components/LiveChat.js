import React, { useEffect, useState } from 'react'
import ChatMessage from './ChatMessage';
import { useDispatch, useSelector } from 'react-redux';
import { addMessage } from '../utils/chatSlice';
import { generateRandomName, makeRandomMessage } from '../utils/helper';

const LiveChat = () => {
  const [liveMessage, setLiveMessage] = useState('');
    const dispatch = useDispatch();

    const ChatMessages = useSelector((store) => store.chat.messages);

    useEffect(() => {
        // API Polling
        const i = setInterval(() => {
            // console.log("API POLLING");

            dispatch(
                addMessage({
                    name: generateRandomName(),
                    messages: makeRandomMessage(20) ,
                }),
            );

        }, 2000);

        return ()=> clearInterval(i);
    }, [])
    
  return (
      <div className='border border-black w-full p-2 m-1 rounded-lg shadow-lg'>
        <div className=' h-[380px] flex flex-col-reverse overflow-y-scroll '>
          {
            ChatMessages.map((chat,index)=> <ChatMessage key={index} name={chat.name} message={chat.messages} />)
          }
        </div>
      
        <form className='items-center my-2'
        onSubmit={(e) => {
          e.preventDefault();
        }}
        >
          <input type='text' className='border border-black rounded-sm shadow-lg ml-4 px-2' value={liveMessage} onChange={(e)=>{
            setLiveMessage(e.target.value);
          }} />

          <button className='px-2 bg-green-100 font-bold py-1 mx-2' onClick={()=>{
            dispatch(addMessage({
              name: 'priyanshi',
              messages: liveMessage,
            }))
            setLiveMessage('')
            }} > Send </button>
        </form>
      </div>
  )
}

export default LiveChat;