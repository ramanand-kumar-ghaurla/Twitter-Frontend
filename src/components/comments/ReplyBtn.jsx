import React, { useState,useMemo,useRef} from 'react'
import api from '../../helperFunction/axios'
import {CommentCard, Loader} from '../index'

function ReplyBtn({
    commentId,
    commentCount
}) {
  const commentCardRef = useRef()
  
    const [loading, setLoading] = useState(false)
    const [replies,setReplies]= useState([])
   

    const getRepliesOfComment = async()=>{
        setLoading(true)
        const response = await api.get(`/comments/comments-replies/${commentId}`)
        .catch((error)=>{
            console.log('error in getting replies',error)
            setLoading(false)
        })

        console.log('response of reply', response)
        const replies = response.data.data.comments

       if(replies){
        setReplies(replies)
       }
       setLoading(false)
        
    }

    if(loading === true){
        return <Loader/>
    }

    

  return (
    <>
      <button 
      onClick={getRepliesOfComment}
      > Show {commentCount} Replies</button>

     {
      replies ? (
       
          replies.map((reply)=>{
            return (
              <CommentCard
              CommentId={reply._id}
              username={reply.commentedBy.username}
              content={reply.content}
              title={'Replied'}
              likeCount={reply.likeCount}
              key={reply._id}
              ref={commentCardRef}
              commentCount={reply.commentCount}
              className={`w-[70%]`}
            
              />
            )
          })
       
      ) : (<h2>Error in getting Replies</h2>)
     }
    </>
  )
}

export default ReplyBtn
