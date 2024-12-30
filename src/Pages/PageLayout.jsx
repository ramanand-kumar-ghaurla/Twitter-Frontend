import React from 'react'
import { Outlet,useNavigate,useLocation } from 'react-router-dom'
import {ProfileCard, TweetCard} from '../components/index'
import {SideBar} from '../components/index'

import FixedBar from '../components/Header/FixedBar';

function PageLayout() {
  

  return (
    <>
      
      <div className=' grid grid-cols-12 h-screen w-screen mx-auto gap-3     '>
        <div className='col-span-2 h-full  '>  
        <SideBar/>
        </div>
        <div className='col-span-6  border-l-2 border-gray-300 p-4 border-r-2'>

        <FixedBar/>
        <div className='  mt-2 overflow-scroll w-full h-screen '>
         
        <Outlet/>
       
        </div>
       
        </div>
        <div className='col-span-4 p-2'>
        <h1>You might like</h1>
        <ProfileCard/>
        <ProfileCard/>
        <ProfileCard/>
        <ProfileCard/>
        <ProfileCard/>
        </div>
      </div>
    </>
  )
}

export default PageLayout
