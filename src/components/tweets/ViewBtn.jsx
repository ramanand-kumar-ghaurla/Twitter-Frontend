import React,{forwardRef} from 'react'
import { CgInsights } from "react-icons/cg";

function ViewBtn({
  viewCount,
  
},ref) {
  return (
    <div ref={ref} className='flex items-center justify-center'>
        <CgInsights size='30px' className='font-light'/> 
        <span> {viewCount} </span>
       
    </div>
  )
}

export default forwardRef(ViewBtn)
