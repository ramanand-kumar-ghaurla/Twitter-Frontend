import React from 'react'
import {Avatar} from '@material-tailwind/react'


function Avtar({
    size='xl',
    fullName,
    avtarURL='',
    className='',
    DivClass=''

}) {

  const defaultUrl =`https://ui-avatars.com/api/?name=${fullName}&font=bold&rounded=full`
  return (
    <div className={` flex justify-center  items-center ${DivClass}`}>
      <Avatar
      loading='lazy'
        src={ avtarURL === '' ? defaultUrl : avtarURL}
        withBorder={true}
        className={`p-0.5 ${className}`}
        size={size}
      />
    </div>
  )
}

export default Avtar
