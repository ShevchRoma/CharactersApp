import React from 'react'
import './Characters.scss';
import Moment from 'react-moment';
import Episode from '../Episode/Episode'

const Character = ({ character }) => {
    const { name, species, gender, location, episode, status, created } = character

  return (
    <div className="character">
       <div className="character__top">
       <div className="character__name">
           <p>{name}</p>
       </div>
       <div className="character__species">
           <p>{species}</p>
       </div>
       <div className="character__gender">
           <p>{gender}</p>
       </div>
       </div>
       <div className="character__bottom">
       <div className="character__location">
           <p>{location.name}</p>
       </div>
       <div className="character__status">
           <p>{status}</p>
       </div>
       <div className="character__created">
           <p><Moment>{created}</Moment></p>
       </div>
       <div className="character__episode">
          <b>Episodes:</b>
          {episode.map((ep,id) =>(
               <Episode key={id} ep={ep} />
          ))}
       </div>
       
       </div>
    </div>
  )
}

export default Character