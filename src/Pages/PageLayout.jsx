import React from 'react'
import { Outlet,useNavigate,useLocation } from 'react-router-dom'
import {ProfileCard, TweetCard} from '../components/index'
import {SideBar,ProfileSideBar} from '../components/index'


import FixedBar from '../components/Header/FixedBar';
import HomePage from './HomePage';
import ProfilePage from './ProfilePage';

function PageLayout() {
  

  return (
    <>
      
      <div className=' grid grid-cols-12 h-screen w-screen mx-auto gap-3  overflow-hidden   '>
        <div className='col-span-2 h-full overflow-hidden '>  
        <SideBar/>
        </div>
        <div className='col-span-6  border-l-2 border-gray-300  border-r-2'>

        <FixedBar/>
        <div className='overflow-scroll w-full h-screen '>
       <ProfilePage/>
        <Outlet/>
       
        </div>
       
        </div>
        <div className='col-span-4 p-2'>
        <h1 className='font-bold text-2xl text-center pt-4'>You might like</h1>
       
        <ProfileSideBar/>
        </div>
      </div>
    </>
  )
}

export default PageLayout
