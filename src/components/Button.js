import React from 'react'

const Button = ({name}) => {
    return (
        <div>
            <button className=' flex bg-[#dbdbdb] px-3 py-1 my-2 mx-1 items-center rounded-lg hover:bg-black hover:text-white md:overflow-hidden'>{name}</button>
        </div>
  )
}

export default Button