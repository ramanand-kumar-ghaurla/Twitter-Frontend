import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import PageLayout from './Pages/PageLayout'
import { fetchulkProfile } from './Features/bulkProfile'
import { fetchTweet } from './Features/tweetSlice'
import api from './helperFunction/axios'


 




function App() {
  const dispatch = useDispatch()

  
  const getAccessToken = async()=>{
    const response = await api.post('/user/referesh-access-token',{})
  }
 

 useEffect(()=>{

    dispatch(fetchulkProfile())
    dispatch(fetchTweet())
   getAccessToken()
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
