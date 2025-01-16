import React from 'react'
import { MdHome } from "react-icons/md";
import { FaUser } from "react-icons/fa";
import { GoPlus } from "react-icons/go";
import { BsTwitterX } from "react-icons/bs";
import { Link, NavLink,  } from 'react-router-dom';
import Avtar from '../tweets/Avtar';
import { nanoid } from '@reduxjs/toolkit';
import { DeleteAccountBtn, LogoutBtn } from '../index'
import { useSelector } from 'react-redux';



function SideBar() {

  const loggedInUser = useSelector((state)=>state?.auth?.userData)

  
  const id= nanoid()
    const sideItems = [
        {
            name:'',
            id:'logoBtn',
            URL: '/home',
            icon:<BsTwitterX/>
        },
        {
            name:'Home',
            id:'homeBtn',
            URL: '/home',
            icon:<MdHome/>
        },
       
        {
            name:'Profile',
            id:'profileBtn',
            URL: `/profile/${loggedInUser?.username}`,
            icon:<FaUser/>
        },
        {
            name:'Edit',
            id:'postBtn',
            URL: '/edit-account-details',
            icon:<GoPlus/>
        }
    ]
  return (
    <>
      <div className=' flex flex-col justify-between   h-screen py-5'>
      <nav>
      <ul className='flex flex-col gap-y-4 items-center text-4xl p-6'> 
      {sideItems.map((item) => ( <NavLink to={`${item.URL}`} className={({isActive})=> isActive ? 'text-black-500' : 'text-black'} key={item.id} >
        <li  className={`relative group cursor-pointer duration-200 p-3 rounded-full mx-auto `} key={item.id} >
       {item.icon} <span className="absolute top-full  transform -translate-y-1/2 mt-2 -ml-1 bg-gray-500 text-white text-sm px-3 py-1 rounded-md opacity-0 group-hover:opacity-100">
        {item.name} </span> </li>
      </NavLink> 
      
        ))} 
        <li key={id}>
          <NavLink to={'/home'} >
          <Avtar size='base' fullName={loggedInUser?.fullName} avtarURL={loggedInUser?.avtar?.url}/>
          </NavLink>
        </li>
       <li>
       <div className='mx-auto'>
     <LogoutBtn />
     </div>
       </li>
        </ul>
       </nav>
      
    <div className='mx-auto'>
     <DeleteAccountBtn/>
     </div>
     
      </div>
    </>
  )
}

export default SideBar

