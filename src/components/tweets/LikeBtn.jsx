import React ,{useEffect, useState}from 'react'


import axios from 'axios'
  




function LikeBtn({
  tweetId,
  likeCount,
  modelType,
  className='',
  ...props
}) {
   const [likeStatus, setLikeStatus] = useState()
  
   const toggleLike =  async()=>{
    const response= await axios.post('http://localhost:9000/api/v1/likes/toggle-like',{ },{
       headers:{
         Authorization:'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NmQ5OTg0YWI5OTNjZDFlZGU3NTZkYWIiLCJlbWFpbCI6InN1bml0YWFyb3JhQGdtYWlsLmNvbSIsInVzZXJuYW1lIjoic3VuaXRhX2Fyb3JhIiwiZnVsbE5hbWUiOiJTdW5pdGEgQXJvcmEiLCJpYXQiOjE3MzIzNDQ2OTgsImV4cCI6MTczMjQzMTA5OH0.uOoAiZIJQrM6sAYuRXYEqrin4HcUw7SbkDL5XQmecxI'
       },
       params:{
         modelType:'Tweet',
         modelId:'66c38c5db49593c537377284'
       }
     }
     ).catch((error)=>{
      console.log('error in toggle like', error)
      console.log(error.response.data);
      console.log(error.response.status);
  
     })
 
     
     const {isLiked} = response.data.data
     
     setLikeStatus(isLiked)
   }
    
   console.log('likestatus', likeStatus)
  //  setLikeStatus(isLiked)

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
      <span>616</span></div>
    </div>
  )
}

export default LikeBtn
