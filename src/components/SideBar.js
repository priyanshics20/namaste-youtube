import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { sideBarIconList } from '../utils/sideBarIconList';

const SideBar = () => {
  const isMenuOpen = useSelector((store) => store.app.ismenuOpen);
   
  if (!isMenuOpen) return null;
  
  return (
      <div className='p-5 pt-1 pr-3 shadow-lg  bg-white'>
        <ul>
          {
            sideBarIconList.map((icondata, index) =>
              <Link key={icondata.name + index} to="/" >
                <li className='flex font-normal items-center py-2 rounded-lg hover:bg-[#dbdbdb] px-4 '>{icondata.key} <span className='px-4'>{ icondata.name } </span> </li>
              </Link>
            ) 
          }
        </ul>
      </div>
  )
}

export default SideBar;