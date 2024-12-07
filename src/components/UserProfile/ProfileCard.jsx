import React from 'react'

import Avtar from '../tweets/Avtar'
import FollowBtn from '../tweets/FollowBtn'

function ProfileCard({
    fullName,
    username,
    avtarURL,

}) {
  return (
    <>
      <div 
      className='border-solid border-2 border-gray-200 p-2 m-2 rounded-lg'>
        <div className='p-3 flex items-center  justify-between  '>
        <div className='flex items-center gap-2 cursor-pointer'>
        <Avtar {...{size:'xl',avtarURL:avtarURL}}/>
        <div >
            <h1 className='font-bold text-2xl'>{fullName}</h1>
            <h1 className=' text-blue-gray-400'>@{username}</h1>
        </div>
        </div>
        <FollowBtn/>
        </div>
      </div>
    </>
  )
}

export default ProfileCard
