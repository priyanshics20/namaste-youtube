import React from 'react'
import Button from './Button'

const ButtonList = () => {
  return (
    <div className='flex flex-row ml-4 md:overflow-hidden'>
      <Button name="All" />
      <Button name="Podcasts"/>
      <Button name="Music"/>
      <Button name="Live"/>
      <Button name="Gaming"/>
      <Button name="News"/>
      <Button name="JavaScript" />
      <Button name="Cooking" />
      <Button name="JavaScript" />
      <Button name="ReactJs" />
      
    </div>
  )
}

export default ButtonList