import React ,{useState,forwardRef}from 'react'
import axios from 'axios'
import {Button} from '@material-tailwind/react'
import api from '../../helperFunction/axios'

function FollowBtn({
  username,
  alreadyFollow,
  ...props
},ref) {

const [isFollowed, setisFollowed] = useState(alreadyFollow)


const togglefollow =async()=>{
  const response= await api.post(`/follow-service/togglefollow/${username}`,{},{
    headers:{
       Authorization:'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NmI3NTk2NjRmZjM0MDk3ZjUyNzY3ZTIiLCJlbWFpbCI6InNvbmlhOTUwMDVAZ21haWwuY29tIiwidXNlcm5hbWUiOiJzb25pYV9yYW5pIiwiZnVsbE5hbWUiOiJTb25pYSBSYW5pIiwiaWF0IjoxNzM1NTQwMTcwLCJleHAiOjE3MzU2MjY1NzB9.lTpjyjvAj4fV8hR1E6Aw16wkvA17bjPl-wFduY3qoeU'
    },
    
  })
  const {followStatus} = response.data.data
   const message = response.data.message
   
        
   setisFollowed(followStatus)
  .catch((error)=>{
     console.log('error in follow', error)
     console.log(error?.response?.data);
     console.log(error.response.status);
 
    })

   
   
 }
  return (
    <div>
      <Button variant="filled" 
      color='blue'
      size={ 'lg'}
    autoFocus={true}
      className="rounded-full "
      onClick={togglefollow}
      ref={ref}
      {...props}>
        {isFollowed ? `Following` :`Follow`}
      </Button>
    </div>
  )
}

export default forwardRef(FollowBtn)
