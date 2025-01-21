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

console.log(`already folow,${alreadyFollow} from ${ref}` )


const togglefollow =async()=>{
  const response= await api.post(`/follow-service/togglefollow/${username}`,{},{
    
    
  })
 .catch((error)=>{
     console.log('error in follow', error)
     console.log(error?.response?.data);
     console.log(error.response.status);
 
    })

    const {followStatus} = response.data.data
   const message = response.data.message
   
   
   setisFollowed(followStatus)
   
 }
  return (
    <div>
      <Button variant="filled" 
      color='blue'
      size={ 'base'}
    autoFocus={true}
      className="rounded-full "
      onClick={togglefollow}
      ref={ref}
      {...props}>
        { (isFollowed === true ? `Following` :`Follow`)}
      </Button>
    </div>
  )
}

export default forwardRef(FollowBtn)
