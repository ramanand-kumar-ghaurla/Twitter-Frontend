import React from 'react'
import { useSelector } from 'react-redux'
import LikeBtn from './LikeBtn'
import ViewBtn from './ViewBtn'
import CommentBtn from './CommentBtn'
import FollowBtn from '../../components/tweets/FollowBtn'


function TweetCard({
    
}) {
    // const tweets = useSelector((state)=> state.tweet)
    // const tweet = tweets.tweets[0]


    // if (tweets.tweets=== null) { 
    //     return <h1 className='text-2xl'>No blogs available</h1>; }

  return (
   <>
  
<div className="bg-gray-50 dark:bg-black p-10 flex items-center justify-center">
  <div className="bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-800 p-4 rounded-xl border max-w-xl">
    <div className="flex justify-between">
      <div className="flex items-center">
        <img className="h-11 w-11 cursor-pointer rounded-full" src="https://pbs.twimg.com/profile_images/1287562748562309122/4RLk5A_U_x96.jpg"/>
        <div className="ml-1.5 text-sm leading-tight">
          <span className="text-black dark:text-white font-bold block cursor-pointer ">Visualize Value</span>
          <span className="text-gray-500 dark:text-gray-400 font-normal cursor-pointer block">@visualizevalue</span>
        </div>
      </div>
      
     <FollowBtn/>
    </div>
    <p className="text-black dark:text-white block text-xl leading-snug mt-3">“No one ever made a decision because of a number. They need a story.” — Daniel Kahneman</p>
    <img className="mt-2 rounded-2xl border border-gray-100 dark:border-gray-700" src="https://pbs.twimg.com/media/EpkuplDXEAEjbFc?format=jpg&name=medium"/>
    <p className="text-gray-500 dark:text-gray-400 text-base py-1 my-0.5">10:05 AM · Dec 19, 2020</p>
    <div className="border-gray-200 dark:border-gray-600 border border-b-0 my-1"></div>
    <div className="text-gray-500 gap-3 dark:text-gray-400 flex mt-3 ">
     
      <LikeBtn/>
      <ViewBtn/>
      <CommentBtn/>
    </div>
  </div>
</div>
   </>
  )
}

export default TweetCard
