import React from 'react'
import { useSelector } from 'react-redux'
import {TweetCard,TweetInput , Loader} from '../components/index'

function HomePage() {
const tweets = useSelector((state)=> state.tweet)
console.log('tweets in home page' , tweets)

if(tweets.isLoading) return (
  <Loader/>
)

if(tweets.isError)(
   <div className='h-full flex justify-center items-center '>
    <h1 className='font-bold text-2xl' > Error in fetching Tweets </h1>
  </div>
)

if(tweets === null && tweets.isLoading ===false) return (
   <div className='h-full flex justify-center items-center '>
   <h1 className='font-bold text-2xl' > No Tweets to Show </h1>
 </div>
)



  return (
    <div className='p-10 mb-5 '>
    <div>
      <TweetInput/>
    </div>
    <div>
    {
       tweets.tweets && tweets.tweets.length > 0 ? (
        ( tweets.tweets.map((tweet)=>{
            return (
                <TweetCard likeCount={tweet.likeCount}
                commentCount={tweet.commentCount}
                viewCount={tweet.commentCount}
                content={tweet.content}
                tweetId = {tweet._id}
                username={tweet.postedBy[0].username}
                fullName={tweet.postedBy[0].fullName}
                        key={tweet._id}
                     />
            )
        })) 
       )  :(   <div className='h-full flex justify-center items-center '>
         <h1 className='font-bold text-2xl' > No Profile to Show </h1>
       </div>)    }
    </div>
    </div>
  )
}

export default HomePage
