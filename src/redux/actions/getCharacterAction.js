
import { GET_CHARACTER_FAIL, GET_CHARACTER, GET_CHARACTER_SUCCESS } from '../reducers/getCharacter';
import axios from 'axios';


export const getCharacterAction = (id) =>{
    return async dispatch =>{
         try{
             dispatch({
                 type: GET_CHARACTER
             })
             const response = await axios.get(`https://rickandmortyapi.com/api/character/${id}`)
                  if(response){
                       dispatch({
                           type: GET_CHARACTER_SUCCESS,
                           payload: response.data
                       })
                     } 
         }catch(err){
               dispatch({
                   type:GET_CHARACTER_FAIL,
                   payload: err.message
               })
     }  
 }
 }