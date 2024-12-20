import React from 'react'
import { MdHome } from "react-icons/md";
import { FaUser } from "react-icons/fa";
import { GoPlus } from "react-icons/go";
import { BsTwitterX } from "react-icons/bs";
import { Link } from 'react-router-dom';
import Avtar from '../tweets/Avtar';

function SideBar() {
    const sideItems = [
        {
            name:'',
            URL: '/feed',
            icon:<BsTwitterX/>
        },
        {
            name:'Home',
            URL: '/feed',
            icon:<MdHome/>
        },
       
        {
            name:'Profile',
            URL: '/profile',
            icon:<FaUser/>
        },
        {
            name:'Post',
            URL: '/post-tweet',
            icon:<GoPlus/>
        }
    ]
  return (
    <>
      <div className=' flex flex-col justify-between gap-1 '>
      <ul className='flex flex-col gap-y-10 text-4xl p-6'> 
      {sideItems.map((item) => ( <li className="relative group cursor-pointer duration-200 p-3 rounded-full mx-auto" key={item.name} >
       {item.icon} <span className="absolute top-full  transform -translate-y-1/2 mt-2 -ml-1 bg-gray-500 text-white text-sm px-3 py-1 rounded-md opacity-0 group-hover:opacity-100">
        {item.name} </span> </li> 
        ))} </ul>
        <div className='pb-3 mx-auto cursor-pointer'>
        <Avtar/>
        </div>
      </div>
    </>
  )
}

export default SideBar

