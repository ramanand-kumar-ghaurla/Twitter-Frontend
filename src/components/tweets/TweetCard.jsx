import React,{useRef} from 'react'
import { useSelector } from 'react-redux'
import LikeBtn from './LikeBtn'
import ViewBtn from './ViewBtn'
import CommentBtn from '../comments/CommentBtn'
import useFetchUserProfile from '../../hooks/useFetchProfile'
import  useFetchTweet from '../../hooks/useFetchTweet'


function TweetCard({
  username ='',
  fullName='',
  viewCount,
  commentCount,
  likeCount ,
  content ='',
  avtarUrl ='',
  tweetId ,
  imageurl = []
}) {
   
 const fetchTweet = useFetchTweet()
 const fetchUserProfile = useFetchUserProfile()
  return (
   <>
  
<div className="bg-gray-50 dark:bg-black p-[0.5px] flex items-center justify-center  min-w-[80%]" >
  <div className="bg-white dark:bg-gray-800 border-gray-200 w-full dark:border-gray-800 p-4 rounded-xl border max-w-xl">
    <div className="flex justify-between">
      <div className="flex items-center" onClick={()=> fetchUserProfile(username)}>
        <img className="h-11 w-11 cursor-pointer rounded-full" src={avtarUrl}/>
        <div className="ml-1.5 text-sm leading-tight">
          <span className="text-black dark:text-white font-bold block cursor-pointer ">{fullName}</span>
          <span className="text-gray-500 dark:text-gray-400 font-normal cursor-pointer block"> {username} </span>
        </div>
      </div>
      
     
    </div >
    <div onClick={()=>fetchTweet(tweetId,true)}>
    <p className="text-black dark:text-white block text-xl leading-snug mt-3">{content} </p>
    {
      imageurl.length > 0 && (
        <div className='flex w-1/2'>
   {
    imageurl.map((url)=>(
      <img className="mt-2 rounded-2xl border border-gray-100 dark:border-gray-700" src={url}/>
    ))
   }
    
   
    </div>
      )
    }
    </div>
    <div className="border-gray-200 dark:border-gray-600 border border-b-0 my-1"></div>
    <div className="text-gray-500 gap-3 dark:text-gray-400 flex mt-3 ">
     
      <LikeBtn modelId = {tweetId}
        modelType = 'Tweet'
        likeCount = {likeCount}

      />
      <ViewBtn viewCount={viewCount}/>
      <CommentBtn commentCount={commentCount }/>
    </div>
  </div>
</div>
   </>
  )
}

export default TweetCard
