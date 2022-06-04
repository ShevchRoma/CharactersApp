import React from 'react'
import { useDispatch} from 'react-redux';
import { addLikeCharacter } from '../../redux/actions/addLikeCharacter';
import './Characters.scss';


const Characters = ({character}) => {
   const dispatch = useDispatch()
   
  return (
    <div className="character">
        <div className="character__item">
        <span>{character.id}</span>
        <p>{character.name}</p>
        </div>
        <div className="character__like">
        <span className="like" onClick={() =>dispatch(addLikeCharacter(character.name))}>Like</span>
        <span className="like">Dislike</span>
        </div>
    </div>
  )
}

export default Characters