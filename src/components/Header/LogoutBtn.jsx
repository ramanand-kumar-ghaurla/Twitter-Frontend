import React from 'react'
import {Button} from '@material-tailwind/react'
import api from '../../helperFunction/axios'
import axios from 'axios'
import { useDispatch } from 'react-redux'
import { logout as storeLogout} from '../../Features/authSclice'
import {  useNavigate } from 'react-router-dom'


function LogoutBtn() {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const logoutUser = async()=>{
      const response = await api.post('/user/logout')
      .catch((error)=>{
        console.log('error in follow', error)
        console.log(error?.response?.data);
        console.log(error.response.status);
    
       })
       dispatch(storeLogout())
       navigate('/login')

       const data= response.data
      
       return data
  }
  return (
    <div>
      <Button 
      onClick={logoutUser}
      variant="filled" 
      color='blue'
      autoFocus={true}
      className="rounded-full font-bold "
      > Logout</Button>
      
    </div>
  )
}

export default LogoutBtn
