import React from 'react'
import api from '../../helperFunction/axios'
import { useDispatch } from 'react-redux'
import { logout } from '../../Features/authSclice'
import {Button} from '@material-tailwind/react'

function DeleteAccountBtn() {
    const dispatch = useDispatch()

    const deleteAccount = async()=>{
        const response = await api.post('/user/delete-account')
        .catch((error)=>{
            console.log('error in deleting user account', error)
     console.log(error?.response?.data);
     console.log(error.response.status);
        })
        console.log('respose', response)
         
        dispatch(logout())
    }
  return (
    <div>
    <Button variant="filled" 
      color='red'
    autoFocus={true}
      className="rounded-full "
      onClick={deleteAccount}
     >
        Delete Account
      </Button>
      
    </div>
  )
}

export default DeleteAccountBtn
