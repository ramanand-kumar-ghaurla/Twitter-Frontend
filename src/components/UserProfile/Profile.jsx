import React from 'react'
import Avtar from '../tweets/Avtar'

function Profile() {
  return (
   
      <div className='bg-black'>
      <div className="bg-neutral-700 h-44 relative">
        <img  src='https://res.cloudinary.com/twitter-project/image/upload/v1725515150/Twitter-Project/user/avtar/xkajmpcz0lc1ruo27opr.png'/>
        <div className="absolute -bottom-16 left-4">
          <Avtar  />
        </div>
      </div>
    </div>
    
  )
}

export default Profile
