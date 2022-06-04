export const ADD_CHARACTER = 'ADD_CHARACTER';
export const DELETE_CHARACTER = 'DELETE_CHARACTER';

const initialState = {
    characters: []
}

const addLikeCharacter = (state = initialState, action) =>{
    switch(action.type){
        case ADD_CHARACTER:
            return{
                ...state,
               characters: [...state.characters,action.payload]
            }
        case DELETE_CHARACTER:
            return {
                cities:[
               ...state.characters.slice(0,action.payload),
               ...state.characters.slice(action.payload + 1)
                ]
              }
            
        default:
            return state;
    }
}
export default addLikeCharacter