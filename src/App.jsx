import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import FollowBtn from '../src/components/tweets/FollowBtn'
import TweetCard from './components/tweets/TweetCard'
import LikeBtn from './components/tweets/LikeBtn'




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
      <h1>  Tweet Frontend</h1>
      <TweetCard/>
      <FollowBtn/>
      
      
    </>
  )
}

export default App
