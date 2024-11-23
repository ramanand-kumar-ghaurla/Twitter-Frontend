
import axios from 'axios' 

export const getlikeStatus =async(tweetId,modelType)=>{
    const response= await axios.get('http://localhost:9000/api/v1/likes/get-likestatus',{
       headers:{
         Authorization:'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NmQ5OTg0YWI5OTNjZDFlZGU3NTZkYWIiLCJlbWFpbCI6InN1bml0YWFyb3JhQGdtYWlsLmNvbSIsInVzZXJuYW1lIjoic3VuaXRhX2Fyb3JhIiwiZnVsbE5hbWUiOiJTdW5pdGEgQXJvcmEiLCJpYXQiOjE3MzIzNDQ2OTgsImV4cCI6MTczMjQzMTA5OH0.uOoAiZIJQrM6sAYuRXYEqrin4HcUw7SbkDL5XQmecxI'
       },
       params:{
         modelType:modelType,
         modelId:tweetId
       }
     }
     ).catch((error)=>{
      console.log('error in getting like status', error)
      console.log(error.response.data);
      console.log(error.response.status);
  
     })
 
     
     const {likeStatus} = response.data.data
     
          
     return likeStatus
   }