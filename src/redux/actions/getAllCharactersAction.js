import axios from 'axios';
import { GET_CHARACTERS_FAIL,GET_CHARACTERS, GET_CHARACTERS_SUCCESS } from '../reducers/getCharacters';


export const getAllCharactersAction = () =>{
       return async dispatch =>{
            try{
                dispatch({
                    type: GET_CHARACTERS
                })
                const response = await axios.get('https://rickandmortyapi.com/api/character')
                     if(response){
                          dispatch({
                              type: GET_CHARACTERS_SUCCESS,
                              payload: response.data.results
                          })
                        }else{
                            
                        }       
            }catch(err){
                  dispatch({
                      type:GET_CHARACTERS_FAIL,
                      payload: err.message
                  })
        }  
    }
    }