import React,{useState,useRef} from 'react'
import { useSelector } from 'react-redux';
import {ProfileCard,CommentCard, Loader, CommentForm} from '../index'
import api from '../../helperFunction/axios';
import { data } from 'autoprefixer';

function TweetTabBar({
  tweetId
}) {

    const CommentFormRef = useRef()
   

    const [activeTab,setActiveTab] = useState('Likes')
    const [comments,setComments]= useState([])
    const [loading, setLoading] = useState(false);

    const getCommentOfTweet = async()=>{
      setActiveTab('Comments')
      setLoading(true)
      const response = await api.get(`/comments/tweet-comments/${tweetId}`)
      .catch((error)=>{
        console.log('error in getting comments',error)
        setLoading(false)
      })

      console.log('response of comment', response)

      const data = response.data.data.comments

      console.log('array ', data)
      setComments(data)
      setLoading(false)
    }


    const {tweet} = useSelector((state)=> state.tweet)
    const likes = tweet?.likes
    console.log('liked by in tweet tab', likes)

    if(loading=== true){
      return <Loader/>
    }

   const renderContent=()=>{
    if(activeTab ==='Likes'){
        return likes ? (
            likes.length > 0 ? (
                likes.map((like)=>(
                    <ProfileCard
                       alreadyFollow={like?.likedBy?.followStatus} 
                       fullName={like?.likedBy?.fullName}
                       username={like?.likedBy?.username}
                       avtarURL={like?.likedBy?.avtar?.url}
                       key={like?._id}

                    />
                ))
            ):( <h2> This Post does not any like Yet</h2>)
        ) :(<h2> Error in getting Likes</h2>)
    }

    // handle click event for comment form 

    const handleReply = (commentId,username)=>{
     
      CommentFormRef.current.focusForm(commentId,'Comment',`@${username} `)

    }

    if(activeTab === 'Comments'){

      return (
        <>
         <div className='relative h-full'>
        <div className='overflow-y-scroll flex-1'>
        {
            comments ? (
          comments.length > 0 ? (
            comments.map((comment)=>( <CommentCard 
              CommentId={comment._id}
              commentCount={comment.replyCount}
              username={comment?.commentedBy?.username}
              content={comment.content}
              likeCount={comment.likeCount}
              title={`Commented`}
              key={comment._id}
              onReply={()=>{ handleReply(comment._id,comment.commentedBy.username)}}

            />))
          ) : (<h2> This post Dosn't have any Comment</h2>)
        ) : (<h2>Error in Fetching Comments</h2>)
          }

        </div>
        
        <div className='fixed bottom-0 w-[47%] mx-auto bg-white'>
        <CommentForm 
          ref={CommentFormRef}
          initialModelId={tweetId}
          initialModelType='Tweet'
        />
        </div>

         </div>

       

          
        </>
      )
    }
   }

  return (
    <>
      <div className='w-full '>
      <div className='w-full border h-11 mt-2'>
        <ul className='flex justify-evenly '>
          <li 
          onClick={()=>{
           setActiveTab('Likes')
            
          }}
           className={`cursor-pointer pb-4 font-light ${
              activeTab === 'Likes' ? 'font-bold border-b-4 pb-4 border-light-blue-600' : ''
            }`} >
            Likes
          </li>
          <li
          onClick={()=>getCommentOfTweet()}
           className={`cursor-pointer pb-4 font-light ${
              activeTab === 'Comments' ? 'font-bold border-b-4 pb-4 border-light-blue-600' : ''}`}
          > Comments</li>
        </ul>
      </div>
      <div className='p-4 mb-6'>
       { renderContent()}
       
      </div>

      </div> 
    </>
  )
}

export default TweetTabBar
