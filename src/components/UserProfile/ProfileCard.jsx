import React, { useRef, useState } from 'react'
import api from '../../helperFunction/axios'
import Avtar from '../tweets/Avtar'
import FollowBtn from '../tweets/FollowBtn'
import useFetchUserProfile from '../../hooks/useFetchProfile'


function ProfileCard({
    fullName,
    username,
    avtarURL,
    alreadyFollow,
    

}) {
  const followRef = useRef()
 const fetchUserProfile = useFetchUserProfile()

 return (
    <>
      <div 
      className=' p-1 m-2 rounded-lg'>
        <div className='p-2 flex items-center  justify-between  '>
        <div className='flex items-center gap-2 cursor-pointer' onClick={()=> fetchUserProfile(username)}>
        <Avtar size='lg' avtarURL={avtarURL} fullName={fullName}/>
        <div >
            <h1 className='font-bold text-lg'>{fullName}</h1>
            <h1 className=' text-blue-gray-400 text-base'>@{username}</h1>
        </div>
        </div>
        <FollowBtn username={username} alreadyFollow={alreadyFollow} size='sm' ref={followRef} />
        </div>
      </div>
    </>
  )
}

export default ProfileCard
