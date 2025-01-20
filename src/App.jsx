import { useEffect } from 'react'
import {  useDispatch } from 'react-redux'
import { logout as storeLogout ,login, logout} from './Features/authSclice'

import PageLayout from './Pages/PageLayout'
import { fetchulkProfile } from './Features/bulkProfile'
import { fetchTweet } from './Features/tweetSlice'
import api from './helperFunction/axios'
import { useNavigate } from 'react-router-dom'


 




function App() {
  const dispatch = useDispatch()
  const navigae = useNavigate()

  const currentUser = async()=>{

    const response = await api.get('/user/get-current-user',{})
    .catch((error)=>{
      console.log('error in getting current user',error)
      dispatch(logout())
      navigae('/login')
      
    })

    const user = response?.data?.user

    if(user){
      dispatch(login(user))
      
    }
  }

  
  

 useEffect(()=>{
   currentUser()
    dispatch(fetchulkProfile({pageNo:1}))
    dispatch(fetchTweet({pageNo :1}))
   
  },[])

  
  
  // if (tweets.isLoading) { return <h1 className='text-2xl'>Loading...</h1>; }
  //  if (tweets.isError) { return <h1 className='text-2xl'>Error loading Tweets</h1>; } 
  //  if (tweets.tweets=== null) { 
  //   return <h1 className='text-2xl'>No blogs available</h1>; }

  
  
 
  return (
    <>
     <PageLayout/>
    
      
    </>
  )
}

export default App
