import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { fetchTweet } from './Features/tweetSlice'



function App() {
  const dispatch = useDispatch()

 useEffect(()=>{

    dispatch(fetchTweet())
  },[])

  const tweets = useSelector((state)=> state.tweet)
  console.log('state', tweets)

  
  if (tweets.isLoading) { return <h1 className='text-2xl'>Loading...</h1>; }
   if (tweets.isError) { return <h1 className='text-2xl'>Error loading Tweets</h1>; } 
   if (tweets.tweets=== null) { 
    return <h1 className='text-2xl'>No blogs available</h1>; }

  const tweet = tweets.tweets[0]
  console.log('final tweet', tweet)
 
  return (
    <>
      <h1>  Tweets : { tweet.content}</h1>
    </>
  )
}

export default App
