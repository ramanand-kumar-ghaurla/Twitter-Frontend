
import axios from 'axios' 
import api from '../helperFunction/axios';

export const getlikeStatus =async(modelId,modelType)=>{
    const response= await api.get('/likes/get-likestatus',{
       
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
 
     
     
     const likeStatus = response?.data?.data
     
          
     return likeStatus
   }