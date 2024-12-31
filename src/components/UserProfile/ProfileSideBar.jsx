import React from 'react'
import {Loader,ProfileCard} from '../index'
import { useSelector } from 'react-redux'
import { TbUserEdit } from 'react-icons/tb'



function ProfileSideBar() {
    const profiles = useSelector((state)=> state.bulkProfiles)
   
    
     

    if(profiles.isLoading) return (
       <Loader/>
    )

    if(profiles.isError)(
        <div className='h-full flex justify-center items-center '>
         <h1 className='font-bold text-2xl' > Error in fetching profiles </h1>
       </div>
    )

    if(profiles === null && profiles.isLoading ===false) return (
        <div className='h-full flex justify-center items-center '>
        <h1 className='font-bold text-2xl' > No Profile to Show </h1>
      </div>
    )

   
  return (
    <>
      {
       profiles.profiles && profiles.profiles.length > 0 ? (
        ( profiles.profiles.map((profile)=>{
            return (
                <ProfileCard fullName={profile.fullName} 
                    username={profile.username}
                     alreadyFollow={profile.followStatus}
                        key={profile.username}
                     />
            )
        })) 
       )  :(   <div className='h-full flex justify-center items-center '>
         <h1 className='font-bold text-2xl' > No Profile to Show </h1>
       </div>)    }
    </>
  )
}

export default ProfileSideBar
