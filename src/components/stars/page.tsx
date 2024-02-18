import React from 'react'
import { AiFillStar, AiOutlineStar } from 'react-icons/ai'

const Stars = (props: { score: number }) => {

  return (
    <>
        {
            [...new Array(5)].map((star, i) =>{
                return i < props.score ?   <AiFillStar key={i}/> : <AiOutlineStar key={i}/>
            })
        }
    </>
  )
}

export default Stars