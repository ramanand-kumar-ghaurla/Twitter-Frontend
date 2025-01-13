import React,{useEffect,useState} from 'react'
import useFetchTweet from '../../hooks/useFetchTweet'
import { useSelector } from 'react-redux'
import { useNavigate,useParams } from 'react-router-dom'
import TweetCard from './TweetCard'
import TweetTabBar from './TweetTabBar'



function Tweet() {
    let {tweetId} = useParams()
   
    const [imageurl, setImageUrl] = useState([])
    const fetchTweet = useFetchTweet()
    const navigate  = useNavigate()

    useEffect(()=>{
        fetchTweet(tweetId,false).catch((error)=>{
            console.log('error in fetching tweet',error)
            navigate('/error')
        })
    },[tweetId])

    const {tweet} = useSelector((state)=> state.tweet)

    const media = tweet?.media
    useEffect(() => {
      if (media && media.length > 0) {
        const mediaUrl = media.map((image) => image?.mediaUrl);
        setImageUrl(mediaUrl);
      } else {
        setImageUrl([]); // Reset to an empty array if no media exists
      }
    }, [media]);
    
  return (
    <>
      <div className='w-full'>
    {
      tweet &&   <TweetCard 
            content={tweet.content}
            commentCount={tweet.commentCount}
            likeCount={tweet.likeCount}
            fullName={tweet.postedBy.fullName}
            username={tweet.postedBy.fullName}
            viewCount={tweet.viewCount}
            tweetId={tweet._id}
            key={tweet._id}
            avtarUrl={tweet.postedBy?.avtar?.url}
            imageurl={imageurl}
          />
    }

      </div>

      <div>
        <TweetTabBar tweetId={tweetId}/>
      </div>
     
    </>
  )
}

export default Tweet
