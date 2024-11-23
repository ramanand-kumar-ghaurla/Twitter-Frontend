import React from 'react'
import { useSelector } from 'react-redux'


function TweetCard({
    style
}) {
    const tweets = useSelector((state)=> state.tweet)
    const tweet = tweets.tweets[0]


    if (tweets.tweets=== null) { 
        return <h1 className='text-2xl'>No blogs available</h1>; }

  return (
   <>
    <div className="font-sans rounded-md border px-6 py-4 max-w-md">
    <div className="flex items-center"><img src="" className="h-12 w-12 rounded-full"/>
        <div className="flex flex-col ml-4"><a className="font-bold text-black" href="#">Emily Jane
                Morgan</a><span class="text-grey">@MorganEmilyJane</span></div><svg viewBox="328 355 335 276"
            className="ml-auto" height="24" width="24" xmlns="http://www.w3.org/2000/svg">
            <path
                d="M 630, 425 A 195, 195 0 0 1 331, 600 A 142, 142 0 0 0 428, 570 A 70, 70 0 0 1 370, 523 A 70, 70 0 0 0 401, 521 A 70, 70 0 0 1 344, 455 A 70, 70 0 0 0 372, 460 A 70, 70 0 0 1 354, 370 A 195, 195 0 0 0 495, 442 A 67, 67 0 0 1 611, 380 A 117, 117 0 0 0 654, 363 A 65, 65 0 0 1 623, 401 A 117, 117 0 0 0 662, 390 A 65, 65 0 0 1 630, 425 Z"
                style={{fill:'#3BA9EE'}}></path>
        </svg>
    </div>
    <div className=" mt-3 mb-1 leading-normal text-lg">{tweet.content}</div>
    <div className="text-grey mb-3 text-sm">11:56 AM - Aug 3, 2009</div>
   
</div>
   </>
  )
}

export default TweetCard
