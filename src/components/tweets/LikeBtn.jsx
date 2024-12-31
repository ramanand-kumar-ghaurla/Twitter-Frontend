import React ,{useEffect, useState,forwardRef}from 'react'

import axios from 'axios'
 import {getlikeStatus} from '../../hooks/useLike' 
 import api from '../../helperFunction/axios'




function LikeBtn({
  modelId,
  likeCount,
  modelType,
  className='',
  ...props
},ref) {
   const [likeStatus, setLikeStatus] = useState()
   

   const toggleLike =  async()=>{
    const response= await api.post('/likes/toggle-like',{ },{
      headers:{
        Authorization:'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NmI3NTk2NjRmZjM0MDk3ZjUyNzY3ZTIiLCJlbWFpbCI6InNvbmlhOTUwMDVAZ21haWwuY29tIiwidXNlcm5hbWUiOiJzb25pYV9yYW5pIiwiZnVsbE5hbWUiOiJTb25pYSBSYW5pIiwiaWF0IjoxNzM1NTQwMTcwLCJleHAiOjE3MzU2MjY1NzB9.lTpjyjvAj4fV8hR1E6Aw16wkvA17bjPl-wFduY3qoeU'
      },
       params:{
         modelType:modelType,
         modelId:modelId
       }
     }
     
     ).catch((error)=>{
      console.log('error in toggle like', error)
      console.log(error.response.data);
      console.log(error.response.status);
  
     })
 
     
     const {isLiked} = response.data.data
     
     setLikeStatus(isLiked)
     
     console.log('calling')
     
   }

// fetch initial status of like

      useEffect(()=>{
    const fetchLikeStatus = async () => {
       const status = await getlikeStatus(modelId,modelType);
        
       setLikeStatus(status); }; 
        
        fetchLikeStatus();
        
   } ,[modelId])
  
    
   
  

  return (
    <div>
      <div className="flex items-center">
      <button onClick={toggleLike}>
      <svg className="mr-2  cursor-pointer" width="24" height="24" viewBox="0 0 24 24">
      <path className={ likeStatus ? (`fill-red-700`) : (`fill-gray-700`)}
                    d="M12 21.638h-.014C9.403 21.59 1.95 14.856 1.95 8.478c0-3.064 2.525-5.754 5.403-5.754 2.29 0 3.83 1.58 4.646 2.73.813-1.148 2.353-2.73 4.644-2.73 2.88 0 5.404 2.69 5.404 5.755 0 6.375-7.454 13.11-10.037 13.156H12zM7.354 4.225c-2.08 0-3.903 1.988-3.903 4.255 0 5.74 7.035 11.596 8.55 11.658 1.52-.062 8.55-5.917 8.55-11.658 0-2.267-1.822-4.255-3.902-4.255-2.528 0-3.94 2.936-3.952 2.965-.23.562-1.156.562-1.387 0-.015-.03-1.426-2.965-3.955-2.965z">
                </path>
            </svg>
            </button>
      <span ref={ref}>{likeCount}</span></div>
    </div>
  )
}

export default forwardRef(LikeBtn)
