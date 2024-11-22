import React from 'react'
import { useSelector } from 'react-redux'


function TweetCard() {
    const tweets = useSelector((state)=> state.tweet)
    const tweet = tweets.tweets[0]

    if (tweets.tweets=== null) { 
        return <h1 className='text-2xl'>No blogs available</h1>; }

  return (
    <div>
      
    </div>
  )
}

export default TweetCard
