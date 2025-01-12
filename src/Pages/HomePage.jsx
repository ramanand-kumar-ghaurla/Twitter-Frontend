import React,{useEffect} from 'react'
import { useSelector,useDispatch } from 'react-redux'
import {TweetCard,TweetInput , Loader} from '../components/index'
import { logout as storeLogout ,login} from '../Features/authSclice'
import { fetchTweet } from '../Features/tweetSlice'
import { Button } from '@material-tailwind/react'


function HomePage() {
  const dispatch = useDispatch()
  

const tweets = useSelector((state)=> state.tweetBulk)
console.log('tweets in home page' , tweets.tweets)


const isLoadMore = ()=>{
  if(tweets.hasMore === true){
    dispatch(fetchTweet({pageNo: tweets.pageNo +1}))
  }
}

if(tweets.isLoading  && tweets.pageNo === 1) return (
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
         <h1 className='font-bold text-2xl' > No Tweets to Show </h1>
       </div>)    }

    <div className='mx-auto w-full mt-10'>
    {
      tweets.hasMore === true && ( <Button
        children='See More'
        variant="filled" 
      color='blue'
      size={ 'lg'}
    autoFocus={true}
      className="rounded-full "
      onClick={isLoadMore}
      disabled={tweets.isLoading}
      />)
     }
    </div>
    </div>
    </div>
  )
}

export default HomePage
