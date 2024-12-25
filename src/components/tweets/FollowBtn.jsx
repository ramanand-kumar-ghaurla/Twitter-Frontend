import React ,{useState,forwardRef}from 'react'
import axios from 'axios'
import {Button} from '@material-tailwind/react'
import api from '../../helperFunction/axios'

function FollowBtn({
  username,
  ...props
},ref) {

const [isFollowed, setisFollowed] = useState()

const togglefollow =async(username)=>{
  const response= await api.post(`/follow-service/togglefollow/${username}`,{},{
    headers:{
       Authorization:'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NmI3NTk2NjRmZjM0MDk3ZjUyNzY3ZTIiLCJlbWFpbCI6InNvbmlhOTUwMDVAZ21haWwuY29tIiwidXNlcm5hbWUiOiJzb25pYV9yYW5pIiwiZnVsbE5hbWUiOiJTb25pYSBSYW5pIiwiaWF0IjoxNzMyNjgzMDAxLCJleHAiOjE3MzI3Njk0MDF9.4oUqd7oBFo4vxka4WsB3wU_RiZtx-8oWQi0PWUX66yA'
    },
    
  }).catch((error)=>{
     console.log('error in follow', error)
     console.log(error?.response?.data);
     console.log(error.response.status);
 
    })

   console.log(response)
   const {followStatus} = response.data.data
   const message = response.data.message
   console.log('follow', message)
        
   setisFollowed(followStatus)
 }
  return (
    <div>
      <Button variant="filled" 
      color='blue'
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
