import React,{forwardRef} from 'react'

function ViewBtn({
  viewCount,
  
},ref) {
  return (
    <div ref={ref}>
        <h1>View</h1>
    </div>
  )
}

export default forwardRef(ViewBtn)
