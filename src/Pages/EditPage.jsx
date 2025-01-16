import React from "react";
import { NavLink, Outlet } from "react-router-dom";


const EditPage = () => {

const navItems = [
  {
    name:'Change Password',
    URL:'change-Pasword'
  },
  {
    name:'Change Your Details',
    URL:'change-user-details'
  },
  {
    name:'Change Profile Picture',
    URL:'change-profile-picture'
  },
  {
    name:'Change Cover Image',
    URL:'change-cover-image'
  }
]
  

  return (
   <div className=" flex flex-col gap-10">
   <div className="w-[60%] h-56 mx-auto border-2 border-gray-300 rounded-md p-3">
   <ul className=" pb-4 flex flex-col justify-center w-[90%] mx-auto gap-5 ">
    {
      navItems.map((item,index)=>( <NavLink to={item.URL} className={({isActive})=> isActive ? 'border-2 rounded-full border-blue-500 font-bold' : '' }>
        <li key={index} className="tet-xl p-1 pr-2 mx-auto text-center w-[80%]  "> {item.name}</li>
      </NavLink>))
    }
   </ul>
   </div>
   <div>
    <Outlet/>
   </div>

  
   </div>
  );
};

export default EditPage;
