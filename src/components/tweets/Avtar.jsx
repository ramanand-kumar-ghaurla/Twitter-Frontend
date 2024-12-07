import React from 'react'
import {Avatar} from '@material-tailwind/react'


function Avtar({
    size='xl',
    avtarURL

}) {
  return (
    <div>
      <Avatar
      src='https://res.cloudinary.com/twitter-project/image/upload/v1725515150/Twitter-Project/user/avtar/xkajmpcz0lc1ruo27opr.png'
        withBorder={true}
        className="p-0.5 "
        size={size}
      />
    </div>
  )
}

export default Avtar
