import React from 'react'
import useFetchTweet from '../../hooks/useFetchTweet'
import { useSelector } from 'react-redux'


function Tweet() {

    const tweet = useSelector((state)=> state.tweet)
  return (
    <div>
      
    </div>
  )
}

export default Tweet
