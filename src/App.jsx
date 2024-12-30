import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import LoginPage from './Pages/LoginPage'
import RegistrationPage from './Pages/RegistrationPage'
import TweetPage from './Pages/TweetPage'
import { Spinner } from "@material-tailwind/react";
import Loader from './components/Layouts/Loader'
import PageLayout from './Pages/PageLayout'
 




function App() {
  const dispatch = useDispatch()

//  useEffect(()=>{

//     dispatch(fetchTweet())
//   },[])

  const tweets = useSelector((state)=> state.tweet)
  console.log('state', tweets)

  
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
