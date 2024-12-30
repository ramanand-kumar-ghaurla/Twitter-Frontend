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
      className=' p-1 m-2 rounded-lg'>
        <div className='p-2 flex items-center  justify-between  '>
        <div className='flex items-center gap-2 cursor-pointer'>
        <Avtar {...{size:'lg',avtarURL:avtarURL}}/>
        <div >
            <h1 className='font-bold text-lg'>{`fullName`}</h1>
            <h1 className=' text-blue-gray-400 text-base'>@{`username`}</h1>
        </div>
        </div>
        <FollowBtn/>
        </div>
      </div>
    </>
  )
}

export default ProfileCard
