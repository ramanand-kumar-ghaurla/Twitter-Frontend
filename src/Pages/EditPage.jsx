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
  }
]
  

  return (
   <div className=" flex flex-col gap-10">
   <div className="w-[90%] h-12 mx-auto border border-black rounded-full p-3">
   <ul className=" pb-4 flex items-center justify-evenly  ">
    {
      navItems.map((item)=>( <NavLink to={item.URL} className={({isActive})=> isActive ? 'border-b-4 border-blue-500 font-bold' : '' }>
        <li className="tet-xl pb-2"> {item.name}</li>
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
