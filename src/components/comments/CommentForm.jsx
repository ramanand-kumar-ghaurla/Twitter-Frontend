import React ,{useState}from 'react'
import axios from 'axios'

function CommentForm() {
    const [comment, setComment] = useState('')

    const postComment =  async(modelIdId,modelType,e)=>{

        e.preventDefault()
        const response= await axios.post('http://localhost:9000/api/v1/comments/create-comment',{ 
            content:comment
        },{
           headers:{
             Authorization:'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NmI3NTk2NjRmZjM0MDk3ZjUyNzY3ZTIiLCJlbWFpbCI6InNvbmlhOTUwMDVAZ21haWwuY29tIiwidXNlcm5hbWUiOiJzb25pYV9yYW5pIiwiZnVsbE5hbWUiOiJTb25pYSBSYW5pIiwiaWF0IjoxNzMyODUzMzYwLCJleHAiOjE3MzI5Mzk3NjB9.fR1AHPeT8mKhD8j-qKOBhJAEZPjdJbWlj4ahklds4WA'
           },
           params:{
             modelType:modelType,
             modelId:modelIdId
           }
         },
         
         ).catch((error)=>{
          console.log('error in toggle like', error)
          console.log(error.response.data);
          console.log(error.response.status);
      
         })
     
         
          
         
        
         
         const {content} = response.data.data
        
         setComment('')
         return content
       }

  return (
    <div>
       <form className="mb-6" onSubmit={(e) => postComment(modelId, modelType, e)}>
        <div className="py-2 px-4 mb-4 bg-white rounded-lg rounded-t-lg border border-gray-200 dark:bg-gray-800 dark:border-gray-700 ">
            <label htmlFor="comment" className="sr-only">Your comment</label>
            <textarea id="comment" rows="6"
                className="px-0 w-full text-sm text-gray-900 border-0 focus:ring-0 focus:outline-none dark:text-white dark:placeholder-gray-400 dark:bg-gray-800  resize-none"
                placeholder="Write a comment..." required
                value={comment}
                onChange={(e)=> setComment(e.target.value)}></textarea>
        </div>
        <button type='submit'
            className="inline-flex items-center py-2.5 px-4 text-xs font-medium text-center bg-blue-500 text-white bg-primary-700 rounded-lg focus:ring-4 focus:ring-primary-200 dark:focus:ring-primary-900 hover:bg-blue-800">
            Post comment
        </button>
        </form>
    </div>
  )
}

export default CommentForm
