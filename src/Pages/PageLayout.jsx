import React from 'react'
import { Outlet,useNavigate,useLocation } from 'react-router-dom'

import {SideBar,ProfileSideBar} from '../components/index'


import FixedBar from '../components/Header/FixedBar';

function PageLayout() {
  

  return (
    <>
      
      <div className=' grid grid-cols-12  h-screen w-screen mx-auto gap-3  overflow-hidden    '>
        <div className='lg:col-span-2 md:col-span-3 col-span-4 h-full overflow-hidden '>  
        <SideBar/>
        </div>
        <div className='lg:col-span-6 col-span-9 md:col-span-8 border-l-2 border-gray-300  border-r-2'>

        <FixedBar/>
        <div className='overflow-scroll w-full h-screen '>
       
        <Outlet/>
       
        </div>
       
        </div>
        <div className='col-span-4 hidden h-screen overflow-hidden lg:block p-2'>
        <h1 className='font-bold text-2xl text-center pt-4'>You might like</h1>
       
        <ProfileSideBar/>
        </div>
      </div>
    </>
  )
}

export default PageLayout
