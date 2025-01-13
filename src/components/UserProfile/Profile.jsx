import React,{useEffect, useRef} from 'react'

import { Avtar, FollowBtn,ProfileTabBar } from '../index'
import { useSelector } from 'react-redux'
import useFetchUserProfile from '../../hooks/useFetchProfile'
import { useParams } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'



function Profile() {
  let {username} = useParams()
  console.log('param username', username)
const fetchUserProfile = useFetchUserProfile()
const navigate = useNavigate()


useEffect(()=>{
  fetchUserProfile(username,false).catch((error)=>{
    console.log('error in fetching profile',error)
    navigate('/error')
  })
},[username])
  const followRef = useRef()
  
  const {profileData} = useSelector((state)=> state.profile)
  if(!profileData){
    navigate('/error')
  }
  // console.log('profile in profile page',profileData)
 
  // console.log('already follow',profileData?.followStatus)
 
  return (
    <div>
     {/* upper div */}
     <div>
     {/* cover,avtar,follow  div */}
     <div className='cursor-pointer'>
      <div className='w-full h-36 border border-black -z-10 relative cursor-pointer '>
      <div className='rounded-full border-[3px] border-black z-10  h-36 w-36 absolute top-20 left-4 cursor-pointer'>
       <Avtar avtarURL={profileData?.avtar?.url} size='2xl' className='h-full w-full ' DivClass='h-full w-full' fullName={profileData?.fullName}/>
      </div>
      <div className=' absolute top-40 right-10 cursor-pointer z-10'> <FollowBtn username={profileData?.username} alreadyFollow={profileData?.followStatus}  ref={followRef} /></div>
      </div>

    <div className='mt-24 ml-5 cursor-text'>
      <p className='font-bold text-2xl leading-tight'>{profileData?.fullName}</p>
      <p className='opacity-60 text-sm'>@ {profileData?.username} </p>
      <div className='flex gap-2 mt-2'>
        <p className='font-bold text-xl '> {profileData?.followerCount
} <span className='font-light text-sm'>Followers</span> </p>
        <p className='font-bold text-xl '> {profileData?.followingToCount
} <span className='font-light text-sm opacity-60'>Following</span> </p>
      </div>

     
    </div>

  </div>

   {/* lowest dynamic div */}

   <div>
        {/* tab bar */}
       <ProfileTabBar/>
      </div> 

     </div>
    </div>
  )
}

export default Profile
