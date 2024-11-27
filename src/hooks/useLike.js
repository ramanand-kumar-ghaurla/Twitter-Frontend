
import axios from 'axios' 

export const getlikeStatus =async(tweetId,modelType)=>{
    const response= await axios.get('http://localhost:9000/api/v1/likes/get-likestatus',{
       headers:{
         Authorization:'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NmI3NTk2NjRmZjM0MDk3ZjUyNzY3ZTIiLCJlbWFpbCI6InNvbmlhOTUwMDVAZ21haWwuY29tIiwidXNlcm5hbWUiOiJzb25pYV9yYW5pIiwiZnVsbE5hbWUiOiJTb25pYSBSYW5pIiwiaWF0IjoxNzMyNjgzMDAxLCJleHAiOjE3MzI3Njk0MDF9.4oUqd7oBFo4vxka4WsB3wU_RiZtx-8oWQi0PWUX66yA'
       },
       params:{
         modelType:modelType,
         modelId:tweetId
       }
     }
     ).catch((error)=>{
      console.log('error in getting like status', error)
      console.log(error?.response?.data);
      console.log(error.response.status);
  
     })
 
     
     const {likeStatus} = response?.data?.data
     
          
     return likeStatus
   }