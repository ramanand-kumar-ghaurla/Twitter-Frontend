import React from 'react'

import { FollowBtn,ProfileTabBar } from '../index'



function Profile() {
  return (
    <div>
     {/* upper div */}
     <div>
     {/* cover,avtar,follow  div */}
     <div className='cursor-pointer'>
      <div className='w-full h-36 border border-black -z-10 relative cursor-pointer '>
      <div className='rounded-full border-[3px] border-black z-10  h-36 w-36 absolute top-20 left-4 cursor-pointer'></div>
      <div className=' absolute top-40 right-10 cursor-pointer z-10'> <FollowBtn/></div>
      </div>

    <div className='mt-24 ml-5 cursor-text'>
      <p className='font-bold text-2xl leading-tight'> Ramanand Kumar</p>
      <p className='opacity-60 text-sm'>@Ramanand_kumar_ghaurla</p>
      <div className='flex gap-2 mt-2'>
        <p className='font-bold text-xl '> 100 <span className='font-light text-sm'>Followers</span> </p>
        <p className='font-bold text-xl '> 100 <span className='font-light text-sm opacity-60'>Followers</span> </p>
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
