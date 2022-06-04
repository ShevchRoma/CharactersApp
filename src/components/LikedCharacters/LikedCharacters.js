import React from 'react'
import { useSelector } from 'react-redux';

const LikedCharacters = () => {
    const characterss = useSelector(state => state.likecharacter.characters)
  return (
    <div>
        {characterss && characterss.map((ch) => <div>{ch}</div>)}
    </div>
  )
}

export default LikedCharacters