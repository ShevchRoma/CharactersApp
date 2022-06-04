import { ADD_CHARACTER } from "../reducers/addLikeCharacter"

export const addLikeCharacter = (name) =>{
        return async dispatch =>{
             dispatch({
                 type: ADD_CHARACTER,
                 payload: name
             })
            }
 }