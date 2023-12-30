import React ,{useEffect, useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toggleMenu } from '../utils/appSlice';
import { YOUTUBE_SEARCH_API } from '../utils/constants';
import {GoSearch} from "react-icons/go"
// import { store } from '../utils/store';
import { cacheResults } from '../utils/searchSlice';
import { FaUserCircle } from "react-icons/fa";

const Head = () => {
  // input
  const [searchQuery, setSearchQuery] = useState('');

  const [smSearch , setSmSearch] = useState(false);
  // suggestions
  const [suggestions, setSuggestions] = useState([]);
  // show suggestions
  const [showSuggestions , setShowSuggestions] = useState(false);

  const searchCache = useSelector((store) =>  store.search);
  useEffect(() => {
    // after every keypress make api call
    // but if the differnce btw 2 api call <200ms
    // decline the api call
    // this is also known as debouncing

    const timer = setTimeout(() => {
      if (searchCache[searchQuery]) {
        setSuggestions(searchCache[searchQuery]);
      } else {
        getSearchSuggestions();
      }
    }, 200);
    
    // clear timeout
    return () => {
      clearTimeout(timer);
    }
  }, [searchQuery])

  const getSearchSuggestions = async () => {

    // console.log("api call" + searchQuery);

    const data = await fetch(YOUTUBE_SEARCH_API + searchQuery);
    const json = await data.json();
    setSuggestions(json[1]);
    // console.log(json[1]);

    // update cache
    dispatch(
      cacheResults({
        [searchQuery]: json[1],
      })
    );
    
  };

  const dispatch = useDispatch();

  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };
    
  return (
    <div className='sticky top-0 bg-white grid grid-flow-col w-full py-3 px-1 md:px-3'>
        {/* Logo and hamburgerMenu */}
          <div className={`flex col-span-2 mx-4 items-center md:col-span-1 ${smSearch? 'max-sm:hidden': ''} `}>
              <img className='h-8 mx-4 cursor-pointer' alt='menu'
                onClick={()=>{toggleMenuHandler()}}
                src='https://icons.veryicon.com/png/o/miscellaneous/linear-icon-45/hamburger-menu-5.png'
              />
              
              <img className='h-10 mx-1 md:mx-4' alt='logo' src='https://www.freeiconspng.com/thumbs/youtube-logo-png/youtube-logo-png-transparent-image-5.png' />
              
          </div>  
      
      {/* Search */}
        <div className={`${smSearch?'col-span-10':'col-span-10 max-sm:flex max-sm:justify-end'} ml-1 md:ml-24`}>
          <div className='group flex flex-row '>
            <input type='text' placeholder='Search' className='w-96 rounded-l-full pl-4 py-1 shadow-inner border border-gray-300 hover:border-gray-400 focus:outline-none '
              value={searchQuery}
              onChange={(e) => { setSearchQuery(e.target.value) }}
              onFocus={() => { setShowSuggestions(true) }}
              onBlur={()=>{setShowSuggestions(false)}}
            />
            <button className='rounded-r-full p-5 py-1 shadow-inner border border-gray-300 hover:border-gray-400 bg-gray-100 focus:outline-none'>
              <GoSearch className='text-xl max-sm:mt-1'/>
            </button>

            <div className='fixed bg-transparent pt-10 '>  
              {
                showSuggestions && ( suggestions.map((s) => (
                  <div
                    key={s}
                    className='hover:bg-stone-100 bg-white w-96 py-2 px-2 shadow-md'>
                    <div className='flex lg:w-[23rem] lg:mr-[8.3rem] px-5 items-center'>
                      <GoSearch className='text-lg m-2 mr-4' />
                      <span className='mb-1'>{s}</span>
                    </div>
                  </div>
                      
                ))
                )
              }
            </div>  
          </div>
        </div>
        
          {/* user  */}
          <div className={`flex items-center col-span-2 ${smSearch ?'max-sm:hidden': 'ml-2'}`}>
            <FaUserCircle  className='text-4xl md:text-3xl font-normal'/>
          </div>

    </div>
  )
}

export default Head;