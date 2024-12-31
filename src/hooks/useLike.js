
import axios from 'axios' 
import api from '../helperFunction/axios';

export const getlikeStatus =async(modelId,modelType)=>{
    const response= await api.get('/likes/get-likestatus',{
       headers:{
         Authorization:'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NmI3NTk2NjRmZjM0MDk3ZjUyNzY3ZTIiLCJlbWFpbCI6InNvbmlhOTUwMDVAZ21haWwuY29tIiwidXNlcm5hbWUiOiJzb25pYV9yYW5pIiwiZnVsbE5hbWUiOiJTb25pYSBSYW5pIiwiaWF0IjoxNzM1NTQwMTcwLCJleHAiOjE3MzU2MjY1NzB9.lTpjyjvAj4fV8hR1E6Aw16wkvA17bjPl-wFduY3qoeU'
       },
       params:{
         modelType:modelType,
         modelId:modelId
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