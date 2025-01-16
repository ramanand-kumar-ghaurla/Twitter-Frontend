import React from 'react'
import { useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import { FaArrowLeft } from "react-icons/fa";  
  

function FixedBar() {

    const location = useLocation()
  const profileData = useSelector((state)=> state.profile.profileData)
  console.log('profile in fix bar', profileData)
  const navigate = useNavigate()
    const getPageTitle =()=>{
        switch(location.pathname){
          case '/' : return '';
          case '/post' : return 'Post';
          case '/profile/:username': return (
            <div className='pt-2 pb-2'>
            <p className='font-bold text-lg cursor-pointer'>{`${profileData.fullName}`}</p>
            <p className='text-sm opacity-60  '>  Posts</p>
          </div>
          )
        }
      }
  return (
    <>
     {
      location.pathname === '/home' || location.pathname === '/' ? (<></>):( <div className=' h-11 flex items-center gap-2'>
          <button className='hover:bg-gray-200 transition-all duration-300 p-3 cursor-pointer  rounded-full' 
          onClick={()=> navigate(-1)}> <FaArrowLeft/> </button>
         {getPageTitle()}
        </div>)
     }
      
    </>
  )
}

export default FixedBar
