import React,{forwardRef , useRef} from 'react'
import { LikeBtn ,ReplyBtn} from '../index'

function CommentCard({
    className='',
    username,
    likeCount,
    commentCount,
    content,
    title,
    CommentId,
    onReply
},ref) {

    const likeRef = useRef()

  return (
    <>
      <div className= { ` w-[90%]  p-2 mt-4 mx-auto border-2 rounded ${className}`} ref={ref}>
        <div className='flex gap-2 '><p className='text-sm opacity-85'> {title} By </p> <span className='text-base font-medium'>{ `@ ${username}`}</span> </div>
        <div className='border outline-none  border-b-2 flex items-center p-2 justify-between'> 
       <div className='max-w-[70%] overflow-x-hidden overflow-y-scroll'>  <p
        className=' text-sm '> {content} </p>
       </div>
       <div> <LikeBtn likeCount={likeCount} 
       ref={likeRef} modelType={'Comment'} modelId={CommentId}
        /> </div>
        </div>
        
        <div className=' flex gap-4 p-2 ml-2'>
        <button onClick={onReply}> Reply </button>
       
         </div>
       
      </div>

      { commentCount > 0 ? <div className='ml-8 mt-4'>
        <ReplyBtn
       commentId={CommentId} commentCount={commentCount}/>
      </div> : null } 

    </>
  )
}

export default forwardRef(CommentCard)
